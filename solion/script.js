document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    // Create new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `
        <p><strong>${name}</strong> - ${new Date().toLocaleDateString()}</p>
        <p>${comment}</p>
    `;

    // Add new comment to comments section
    document.getElementById('comments').appendChild(newComment);

    // Clear form
    document.getElementById('commentForm').reset();
});
