// Menu burger pour mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Animation du burger
burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Animation de chargement
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;

        try {
            // Simuler un envoi (remplacer par votre logique d'envoi réelle)
            await new Promise(resolve => setTimeout(resolve, 1500));

            formMessage.textContent = 'Message envoyé avec succès !';
            formMessage.className = 'form-message success';
            contactForm.reset();
        } catch (error) {
            formMessage.textContent = 'Erreur lors de l\'envoi du message.';
            formMessage.className = 'form-message error';
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Cacher le message après 5 secondes
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    });
}

// Animation au scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .service-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s';
    observer.observe(el);
});