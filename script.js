
document.addEventListener('DOMContentLoaded', function() {

    initMobileNav();
    initAppointmentForm();
    initContactForm();
    initTestimonialsSlider();
    initSmoothScrolling();
    setMinimumDate();
});

function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

const departmentDoctors = {
    'general': ['Dr. Vikram Singh - General Physician'],
    'pediatrics': ['Dr. Priya Mehta - Pediatrician'],
    'cardiology': ['Dr. Rakesh Sharma - Cardiologist'],
    'dentistry': ['Dr. Aarav Kapoor - Dentist'],
    'orthopedics': ['Dr. Arjun Thakur - Orthopedic Surgeon'],
    'dermatology': ['Dr. Anjali Patel - Dermatologist'],
    'neurology': ['Dr. Meera Joshi - Neurologist'],
    'gynecology': ['Dr. Neha Gupta - Gynecologist']
};

function initAppointmentForm() {
    const form = document.getElementById('appointment-form');
    const departmentSelect = document.getElementById('department');
    const doctorSelect = document.getElementById('doctor');

    departmentSelect.addEventListener('change', function() {
        const selectedDepartment = this.value;
        const doctorOptions = departmentDoctors[selectedDepartment] || [];
        
        doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
        
        doctorOptions.forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.toLowerCase().replace(/\s+/g, '-');
            option.textContent = doctor;
            doctorSelect.appendChild(option);
        });
        
        doctorSelect.value = '';
        clearError('doctor');
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateAppointmentForm()) {
            showConfirmationModal();form
            form.reset();
            doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
            clearAllErrors();
        }
    });
    
    const heroBtn = document.querySelector('.hero-btn');
    heroBtn.addEventListener('click', function() {
        document.getElementById('appointment').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

function validateAppointmentForm() {
    let isValid = true;
    
    clearAllErrors();
    
    const name = document.getElementById('name').value.trim();
    if (!name) {
        showError('name', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
    if (!phone) {
        showError('phone', 'Phone number is required');
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        showError('phone', 'Please enter a valid phone number');
        isValid = false;
    }
    
    const department = document.getElementById('department').value;
    if (!department) {
        showError('department', 'Please select a department');
        isValid = false;
    }
    
    const doctor = document.getElementById('doctor').value;
    if (!doctor) {
        showError('doctor', 'Please select a doctor');
        isValid = false;
    }
    
    const date = document.getElementById('date').value;
    if (!date) {
        showError('date', 'Please select a date');
        isValid = false;
    } else {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            showError('date', 'Please select a future date');
            isValid = false;
        }
        
        if (selectedDate.getDay() === 0) {
            showError('date', 'Appointments not available on Sundays');
            isValid = false;
        }
    }
    
    const time = document.getElementById('time').value;
    if (!time) {
        showError('time', 'Please select a time');
        isValid = false;
    }
    
    return isValid;
}

function showError(fieldName, message) {
    const errorElement = document.getElementById(fieldName + '-error');
    const inputElement = document.getElementById(fieldName);
    
    if (errorElement) {
        errorElement.textContent = message;
    }
    
    if (inputElement) {
        inputElement.style.borderColor = '#ef4444';
    }
}

function clearError(fieldName) {
    const errorElement = document.getElementById(fieldName + '-error');
    const inputElement = document.getElementById(fieldName);
    
    if (errorElement) {
        errorElement.textContent = '';
    }
    
    if (inputElement) {
        inputElement.style.borderColor = '#e5e7eb';
    }
}

function clearAllErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    const inputElements = document.querySelectorAll('input, select');
    
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    inputElements.forEach(element => {
        element.style.borderColor = '#e5e7eb';
    });
}

function showConfirmationModal() {
    const modal = document.getElementById('confirmation-modal');
    const closeBtn = modal.querySelector('.close');
    
    modal.classList.add('show');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    setTimeout(() => {
        modal.classList.remove('show');
    }, 5000);
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name && email && message) {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

function initTestimonialsSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const track = document.getElementById('testimonial-track');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        track.style.transform = `translateX(-${index * 100}%)`;
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }
    
    function prevSlide() {
        const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(prevIndex);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    )
    setInterval(nextSlide, 5000);
}

function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setMinimumDate() {
    const dateInput = document.getElementById('date');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const formattedDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', formattedDate);
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

window.addEventListener('load', initScrollAnimations);

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
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

window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  setTimeout(() => {
    splash.style.opacity = "0";
    setTimeout(() => splash.style.display = "none", 500);
  }, 1500);
});
