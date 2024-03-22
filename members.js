// Options we'll pass to our fetch request
const options = {
  "method": "POST",
  "headers": {
    "accept": "application/json",
    "content-type": "application/json;charset=UTF-8"
  },
  "body": JSON.stringify({
    "space_id": 1091,
    "include": "tags"
  })
}

// Get a page of members at a time
const getMembers = async (page) => {
  const res = await fetch(`https://membership.theclubhou.se/api/2.2/users?page=${page}&limit=100`, options)
  const data = await res.json();
  return data;
}

// Create a sequence matching the members for a given page
const seq = (start, end) => Array.from({ length: end - start + 1 }, (v, idx) => idx + start);

// Get all the members
const getAllMembers = async () => {
  // Get first page so we can access total pages
  const firstPage = await getMembers(1);
  const total_pages = firstPage.meta.pagination.total_pages;
  // Send out a bunch of requests for subsequent pages
  const promises = await Promise.all(seq(2, total_pages).map(getMembers));
  return firstPage.data.concat(promises.flatMap(e => e.data));
}

// Offer download link to file with all members
(async function () {
  const members = await getAllMembers();
  console.log(members);
  let data = JSON.stringify(members);
  let blob = new Blob([data], { type: 'application/json' });
  let url = URL.createObjectURL(blob);

  let a = document.createElement('a');
  a.download = 'members.json';
  a.href = url;
  a.textContent = 'Download members.json';

  document.body.appendChild(a);
})();
