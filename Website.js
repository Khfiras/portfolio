document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar a, .btn-box a'); // Added btn-box a to selector
    const sections = document.querySelectorAll('section');

    function showSection(targetId) {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    showSection('home');
});
document.querySelectorAll('.btn-box a').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});