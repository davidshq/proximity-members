# Proximity Membership Slurp and Display (PMSD)

0.0.1 3/22/2024

## Introduction
The goal of the PMSD is to grab the membership data for a Proximity Network, repackage it, and make a slicker UI for browsing members.

## Membership Slurping
Open `members.html` in a browser. This will pull all the members from the Proximity Networks API and make them available via a link to download to one's local machine.

## Counting Tags
Run `node .\count_tags.js` to save a list of all tags and usage counts and output to `tags.json`.

## TODO
- Make members.html/js into server side script.
- Automate pulling in members and getting tag counts.
- Create web side listing of tags with clickable counts that filter members.
- Create json file that accepts as specification for multiple tags that can be combined under a given umbrella - e.g., js, php, python, sql, etc. might be grouped under Coding.
- Create a hierarchical display of tags - e.g.,  Coding at the top with js, php, python, sql, etc. underneath.
- When an individual clicks on a tag it should display the members information for individuals matching that tag.

## Credits
- Dillon Rawlins wrote an initial script to slurp the members from the API.
- GitHub Copilot wrote more of the current code than I did.
