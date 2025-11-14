// Typed.js initialization for role animation
document.addEventListener('DOMContentLoaded', function() {
    // Typing animation
    if (document.querySelector('.role')) {
        var typeData = new Typed(".role", {
            strings: [
                "Full Stack Developer",
                "MERN Stack Developer",
                "React Developer",
                "Competitive Programmer",
                "Problem Solver"
            ],
            loop: true,
            typeSpeed: 80,
            backSpeed: 60,
            backDelay: 800,
        });
    }

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change hamburger icon
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a nav item
        const navItems = navMenu.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Here you can add actual form submission logic
            console.log('Form data:', data);
        });
    }

    // Add scroll-based navbar background
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                navbar.style.padding = '0.5rem 0';
            } else {
                navbar.style.backgroundColor = 'transparent';
                navbar.style.boxShadow = 'none';
                navbar.style.padding = '1rem 0';
            }
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards and achievement cards
    document.querySelectorAll('.project-card, .achievement-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Add active state to navbar links based on scroll position
    const sections = document.querySelectorAll('section[id], div[id]');
    const navLinks = document.querySelectorAll('.nav-items a');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // const sectionHeight = section.clientHeight; // Not needed for this logic
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.parentElement.classList.add('active');
            }
        });
    });

    
    // --- Reusable Modal Logic ---

    let currentActiveModal = null; // Track the currently open modal
    let slideIndex = 1;

    // --- Slideshow Functions ---
    // These functions will operate on the 'currentActiveModal'

    // Next/previous controls
    function plusSlides(n) {
        if (currentActiveModal) {
            showSlides(currentActiveModal, slideIndex += n);
        }
    }

    // Thumbnail image controls
    function currentSlide(n) {
        if (currentActiveModal) {
            showSlides(currentActiveModal, slideIndex = n);
        }
    }

    function showSlides(modal, n) {
        let i;
        // Find slides and dots *within the active modal*
        const slides = modal.getElementsByClassName("mySlides");
        const dots = modal.getElementsByClassName("dot");

        if (slides.length === 0 || dots.length === 0) return; // No slideshow in this modal

        if (n > slides.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = slides.length}
        
        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        
        // Remove "active-dot" from all dots
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active-dot", "");
        }
        
        // Show the current slide and add "active-dot"
        slides[slideIndex-1].style.display = "block"; 
        dots[slideIndex-1].className += " active-dot";
    }

    // --- Modal Setup Function ---
    // This function wires up a button to open a specific modal
    function initializeModal(buttonId, modalId) {
        const modal = document.getElementById(modalId);
        const openBtn = document.getElementById(buttonId);
        
        if (!modal || !openBtn) return; // Exit if elements don't exist

        const closeBtn = modal.querySelector('.modal-close');

        // Function to open this specific modal
        function openModal() {
            modal.classList.add('active');
            currentActiveModal = modal; // Set this as the active modal
            slideIndex = 1; // Reset slide index
            showSlides(modal, slideIndex); // Show the first slide
        }

        // Function to close this specific modal
        function closeModal() {
            modal.classList.remove('active');
            currentActiveModal = null; // Clear the active modal
        }

        // --- Event Listeners for this modal ---
        openBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);

        // Add listeners for Arrow Clicks
        const prevButton = modal.querySelector('.prev');
        const nextButton = modal.querySelector('.next');

        if (prevButton) {
            prevButton.addEventListener('click', () => plusSlides(-1));
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => plusSlides(1));
        }

        // Add listeners for Dot Clicks
        const dotsInThisModal = modal.getElementsByClassName("dot");
        for (let i = 0; i < dotsInThisModal.length; i++) {
            dotsInThisModal[i].addEventListener('click', () => currentSlide(i + 1));
        }
    }

    // --- Initialize All Your Modals Here ---
    initializeModal('btn-project1', 'walletflow-modal');
    initializeModal('btn-project2', 'project2-modal');
    initializeModal('btn-project3', 'project3-modal');
    initializeModal('btn-project4', 'project4-modal');
    // Add more lines here as you add more projects

    // --- Global Listeners (for Keydown and Window Click) ---

    // Close modal if user clicks on the overlay (outside the content)
    window.addEventListener('click', function(event) {
        // Check if the click is on the modal overlay itself
        if (event.target.classList.contains('project-modal') && currentActiveModal) {
            currentActiveModal.classList.remove('active');
            currentActiveModal = null; // Clear the active modal
        }
    });

    // Add Arrow Key Navigation for the active modal
    document.addEventListener('keydown', function(event) {
        if (currentActiveModal) { // Only run if a modal is active
            if (event.key === "ArrowRight") {
                plusSlides(1);
            } else if (event.key === "ArrowLeft") {
                plusSlides(-1);
            }
        }
    });

    // --- Other Project Button Interactions (Placeholder) ---
    // This handles any *other* project buttons that *don't* have an initialized modal
    const allProjectButtons = document.querySelectorAll('.btn-project');
    allProjectButtons.forEach(button => {
        // Check if this button has one of the specific IDs we already initialized
        if (button.id !== 'btn-project1' && button.id !== 'btn-project2' && button.id !== 'btn-project3' && button.id !== 'btn-project4') {
            button.addEventListener('click', function() {
                const projectCard = this.closest('.project-card');
                const projectTitle = projectCard.querySelector('.project-heading').textContent;
                alert(`More details about "${projectTitle}" coming soon!`);
            });
        }
    });


    // Add tooltip functionality for skill logos
    const skillLogos = document.querySelectorAll('.skill-logo');
    let tooltip = null; // Variable to hold the tooltip element

    skillLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function(e) {
            const title = this.getAttribute('title');
            if (title) {
                // Create tooltip element
                tooltip = document.createElement('div');
                tooltip.className = 'skill-tooltip';
                tooltip.textContent = title;
                document.body.appendChild(tooltip);

                // Position the tooltip
                const rect = this.getBoundingClientRect();
                let top = rect.top - tooltip.offsetHeight - 10 + window.scrollY;
                let left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2);

                // Adjust if off-screen
                if (top < window.scrollY) {
                    top = rect.bottom + 10 + window.scrollY;
                }
                if (left < 0) {
                    left = 5;
                }
                if (left + tooltip.offsetWidth > window.innerWidth) {
                    left = window.innerWidth - tooltip.offsetWidth - 5;
                }

                tooltip.style.left = left + 'px';
                tooltip.style.top = top + 'px';
                
                // Fade in
                setTimeout(() => {
                    if (tooltip) tooltip.style.opacity = '1';
                }, 10);
            }
        });
        
        logo.addEventListener('mouseleave', function() {
            if (tooltip) {
                tooltip.remove();
                tooltip = null;
            }
        });
    });

    // Add loading animation (Simple fade-in on load)
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100); // Small delay to ensure transition applies
    });

    console.log('Portfolio website loaded successfully!');
});