// Check if the user has a dark mode preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Apply the "dark-mode" class to the body element
    document.body.classList.add('dark-mode');
}