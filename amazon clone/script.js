// script.js

// Add hover effect to job listings
const jobArticles = document.querySelectorAll('.job-listings article');

jobArticles.forEach(article => {
    article.addEventListener('mouseover', () => {
        article.style.backgroundColor = '#e0e0e0';
    });

    article.addEventListener('mouseout', () => {
        article.style.backgroundColor = '#f9f9f9';
    });
});
