document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("loveButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
        message.classList.toggle("hidden");
    });
});
