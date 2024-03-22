const fs = require('fs');
const members = JSON.parse(fs.readFileSync('./members.json'));

const countTags = (members) => {
  let tags = {};

  members.forEach(member => {
    // Check if member.tags.data is an array
    if (Array.isArray(member.tags.data)) {
      member.tags.data.forEach(tagObj => {
        let tag = tagObj.tag;
        if (tags[tag]) {
          tags[tag] += 1;
        } else {
          tags[tag] = 1;
        }
      });
    }
  });

  return tags;
};

console.log(countTags(members));

// Write the tag counts to a file tags.json
let tagsJson = JSON.stringify(countTags(members));
fs.writeFileSync('./tags.json', tagsJson);
