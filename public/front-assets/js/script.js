// التنقل المتجاوب
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // تبديل القائمة
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');

        // تحريك الروابط
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // تحريك البرجر
        burger.classList.toggle('toggle');
    });
};

// تحديث القسم النشط عند التمرير
const activeSection = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
};

// تأثير الكتابة في قسم الترحيب
const typeEffect = () => {
    const text = "مطور ويب Laravel بخبرة 3 سنوات";
    const typingElement = document.querySelector('.hero-content h2');
    let i = 0;

    if (typingElement) {
        typingElement.textContent = '';

        const typing = () => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typing, 100);
            }
        };

        typing();
    }
};

// تأثير التمرير السلس
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav-links a, .cta-buttons a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();

                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });

                    // إغلاق القائمة المتجاوبة إذا كانت مفتوحة
                    const nav = document.querySelector('.nav-links');
                    const burger = document.querySelector('.burger');
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        burger.classList.remove('toggle');
                    }
                }
            }
        });
    });
};

// تأثير ظهور العناصر عند التمرير
const scrollReveal = () => {
    const revealElements = document.querySelectorAll('.project-card, .skill-item, .contact-item');

    const revealElement = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealElement);
    revealElement(); // تشغيل الدالة مرة واحدة عند تحميل الصفحة
};

// تنفيذ جميع الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    activeSection();
    typeEffect();
    // handleContactForm(); ❌ تم إلغاء هذه الدالة لأنها تمنع إرسال النموذج
    smoothScroll();
    scrollReveal();

    // إضافة تأثير CSS للعناصر التي تظهر عند التمرير
    const style = document.createElement('style');
    style.textContent = `
        .project-card, .skill-item, .contact-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .project-card.active, .skill-item.active, .contact-item.active {
            opacity: 1;
            transform: translateY(0);
        }

        @keyframes navLinkFade {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .burger.toggle .line1 {
            transform: rotate(-45deg) translate(-5px, 6px);
        }

        .burger.toggle .line2 {
            opacity: 0;
        }

        .burger.toggle .line3 {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    `;
    document.head.appendChild(style);
});
