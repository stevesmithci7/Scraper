document.addEventListener('DOMContentLoaded', () => {
  Array.from(document.querySelectorAll('.delete-button')).forEach(element =>
    element.addEventListener('click', deleteArticle));
  Array.from(document.querySelectorAll('.note-button')).forEach(element =>
    element.addEventListener('click', addNote));
  Array.from(document.querySelectorAll('.article')).forEach(element =>
    element.addEventListener('click', viewArticle));
});

function deleteArticle() {
  fetch(`${location}api/articles/${this.dataset.id}`, { method: 'DELETE' }).then(res =>
    location.reload());
}

function addNote() {
  const note = prompt('Enter a note:');
  fetch(`${location}api/notes/${this.dataset.id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: note,
      articleId: `${this.dataset.id}`,
    }),
  }).then(res => location.reload());
}

function viewArticle() {
  location.href = `${location}show/${this.dataset.id}`;
}
