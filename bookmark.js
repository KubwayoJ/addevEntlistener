// Get elements
const bookmarkForm = document.getElementById('bookmarkForm');
const bookmarksList = document.getElementById('bookmarksList');

// Event listener for form submission
bookmarkForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const siteName = document.getElementById('webName').value;
  const siteURL = document.getElementById('webUrl').value;

  if (!validateInput(siteName, siteURL)) return;

  const bookmark = { name: siteName, url: siteURL };
  saveBookmark(bookmark);

  bookmarkForm.reset();
  fetchBookmarks();
});

// Validate URL
function validateInput(name, url) {
  const urlPattern = /^(http|https):\/\/[^ "]+$/;
  if (!name || !url.match(urlPattern)) {
    alert('Please enter a valid name and URL');
    return false;
  }
  return true;
}

// Save bookmark to local storage
function saveBookmark(bookmark) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  bookmarks.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// Fetch bookmarks from local storage and display them
function fetchBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  bookmarksList.innerHTML = '';

  bookmarks.forEach((bookmark, index) => {
    bookmarksList.innerHTML += `
      <div class="bookmark">
        <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
        <button class="delete-btn" onclick="deleteBookmark(${index})">Delete</button>
      </div>
    `;
  });
}

// Delete bookmark
function deleteBookmark(index) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  bookmarks.splice(index, 1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  fetchBookmarks();
}

// Load bookmarks when page loads
document.addEventListener('DOMContentLoaded', fetchBookmarks);
