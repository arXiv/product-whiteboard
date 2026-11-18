#!/usr/bin/env python3
"""Check the names in mockups/NAMES.md against arXiv's public author search.

Mockups take people's names only from mockups/NAMES.md. To add names, put them in its
"Names" section and run this script:

    python3 mockups/checks/check-names.py

It prints the number of arXiv papers for each name and exits with an error if any
name has papers: replace that name in the list. A name written with initials ("P. Surname")
is checked as surname plus first initial. arXiv limits the request rate, so the script waits
a few seconds between names. The public search does not cover registered users who never
published; staff can check those in the admin tools.
"""
import re
import sys
import time
import unicodedata
import urllib.parse
import urllib.request
from pathlib import Path

NAMES = Path(__file__).resolve().parents[1] / "NAMES.md"
API = "https://export.arxiv.org/api/query?max_results=1&search_query="


def list_names():
    text = NAMES.read_text()
    section = re.search(r"^## Names\n(.*?)(?=^## )", text, re.S | re.M).group(1)
    line = [l for l in section.splitlines() if "·" in l]
    return [n.strip() for l in line for n in l.split("·") if n.strip()]


def ascii_name(s):
    return unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()


def papers(query):
    for _ in range(5):
        try:
            data = urllib.request.urlopen(API + urllib.parse.quote(query), timeout=60).read().decode()
            return int(re.search(r"<opensearch:totalResults[^>]*>(\d+)", data).group(1))
        except Exception:
            time.sleep(30)
    return None


def main():
    names = list_names()
    clear = True
    for i, name in enumerate(names):
        if i:
            time.sleep(6)
        m = re.match(r"^([A-Z])\.(?:\s*[A-Z]\.)*\s+(.+)$", name)
        query = f'au:"{ascii_name(m.group(2))}_{m.group(1)}"' if m else f'au:"{ascii_name(name)}"'
        n = papers(query)
        print(f"{name:32} {'?' if n is None else n}")
        clear = clear and n == 0
    print(f"{len(names)} names checked" + ("" if clear else "; replace any name with papers"))
    sys.exit(0 if clear else 1)


if __name__ == "__main__":
    main()
