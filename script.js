// Functionality for the 'Yes' button
document.querySelector('.yes').addEventListener('click', function() {
    document.querySelector('.response-message').style.display = 'block';
    document.querySelector('.response-text').textContent = "YAYATAYAYA!!! Let's go watch a movie <3";
    document.querySelector('.heart-image').style.animation = 'none'; // Stop the pulse effect
    document.querySelector('.heart-image').style.transform = 'scale(1.1)'; // Make the heart bigger
});

// Functionality for the 'No' button
document.querySelector('.no').addEventListener('click', function() {
    let noButton = document.querySelector('.no');
    let randomX = Math.floor(Math.random() * 80) + 10; // Random X position
    let randomY = Math.floor(Math.random() * 80) + 10; // Random Y position
    noButton.style.position = 'relative';
    noButton.style.left = `${randomX}%`;  // Move to a random horizontal position
    noButton.style.top = `${randomY}%`;  // Move to a random vertical position
});
