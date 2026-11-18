# Invented names and values for mockups

This repository is public, so a mockup never shows a real person, a real paper on a page that judges it, or real account data. This file lists names and values that are safe to use, so a new mockup does not need to invent and check its own. The rules are in [README.md, *Data in a mockup*](README.md#data-in-a-mockup).

## How the names were checked

Every name below returned **no papers** in arXiv's public author search (checked 18 November 2026). A name written with initials was checked as surname plus first initial. The public search does not cover registered users who never published; staff can check those in the admin tools.

Mockups take people's names only from this list. A name can appear in more than one mockup. To add names, put them in the list and run:

    python3 mockups/checks/check-names.py

It checks every name in the list and flags any that has papers; replace those. Common names (Wei Zhang, Mei Lin, Yuki Tanaka, P. Silva) always match someone, so prefer an uncommon surname.

## Names

Maren Aaltonen · Olumide Adebayo · Mateus Albuquerque · Kofi Asamoah-Brandt · Kwame Asante · Lior Ben-Ami · Leandro Bettencourt · Xiulan Brandvold · Jonas Brekke · Sofia Brännvall · Bastien Carrigou · Mei-Ling Chou · Priyanka Deshmukh · Omar El-Sayed · Chiamaka Ezeobi · Lucía Ferreyra · Lena Fischer · Siobhán Gallagher · Aleksi Haapalainen · Tariq Haddad · Yukiko Haraguchi · Lena Hartmann · Arvid Hellqvist · Taro Hiyoshi · Anika Holmberg · Tomás Ibarra · Paloma Iriarte · Haruto Kimura · Omari Kipruto · Rahul Kizhakkethil · Matthias Lindgaard · Marta Lindqvist · Beatriz Maciel-Nunes · Sofia Marchetti · Esther McGill-Henry · Ada Moreno · Kenji Morikawa · Ravi Natarajan · Adaeze Nwosu · Samuel Okonkwo · Amara Osei · Natalia Ostrowicz · Zainab Oyelowo · Jun-seo Pyeon · Rafael Quintero · Fernanda Quiroga-Lenz · Priya Raghunathan · Nadia Rahimi · Henrik Saltvedt · Mei Sandvik · Yuna Seo · Ingrid Solheim · Ewa Szymczyk · Rui Takamatsu · Elif Tanrıverdi · Ines Valdecasas · Ilse Vanderhoeven · Teodor Vasilache · Elena M. Vasquez · Arjun Venkataraman · Anouk Verbraeken · Saskia Vermeulen-Ruiz · Nikos Vlachos · Dmitri Volkonsky · Clara Weissmann · Marcus Whitfield · Tomasz Wierzchowski · Tomasz Wrzosek · Tobias Åkerlund

With initials, for long author lists:

P. Albergaria · F. Aubert · H. Böttgering · T. Brzezinska · L. Castelvetri · M. Feldhausen · L. Okafor · V. Thirunavukkarasu · K. Van Damme

Usernames follow the person's name, such as `amoreno` for Ada Moreno.

## Organizations and places

- **Collaboration:** KESTREL Collaboration.
- **Institutions:** University of Lindmark, Lindmark Laboratory, Northfield Institute of Technology, Calder Bay University, Institute for Applied Hydroinformatics (Brenton).
- **Journal:** Journal of Example Physics, with DOIs under the `10.5555/` prefix, which Crossref keeps for examples.

A real institution is fine as an invented person's affiliation on a page that judges nothing. Never name a real collaboration, institution or person in a moderation, ownership or overlap view.

## IDs and other values

| Value | Use | Why it is safe |
|---|---|---|
| Paper IDs | `2604.92725`, `2607.93842`: a monthly number of 90000 or more | arXiv does not publish that many papers in a month |
| Old-style IDs | `cond-mat/9704918`: a number of 900 or more in the month | the archive never reached it |
| Submission IDs | `submit/9104582`: 9,000,000 or more | arXiv has not reached that number |
| User IDs | `9000461`: 9,000,000 or more | the same |
| Email addresses | `@example.org`, `@example.edu`, `@example.com`, or a `.example` domain | reserved for documentation |
| IP addresses | `192.0.2.x`, `203.0.113.x` | reserved for documentation |
| ORCID | `0000-0001-2345-6789` | the standard placeholder ORCID |

On a page that only displays a paper, a real paper may appear; see *Data in a mockup* in the README.
