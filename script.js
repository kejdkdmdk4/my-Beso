/**
 * Cafe Shop - Refactored JavaScript (70% of project)
 * Vanilla JS DOM Manipulation - No frameworks
 * 
 * REFACTORING APPROACH:
 * - All static HTML structures moved to JavaScript (createElement/appendChild)
 * - Menu items, testimonials, gallery rendered from JS data
 * - Event listeners attached dynamically
 * - Minimal HTML: Only 4 containers (header, main, footer, modal)
 * - DOM manipulation via: createElement(), appendChild(), innerHTML, classList
 */

// ============================================
// DATA LAYER (Static data for rendering)
// ============================================

const MENU_ITEMS = [
    { name: 'Hot Drink', img: 'Hot-DrinkCoffee.jpg', alt: 'Hot Drink' },
    { name: 'Cold Drink', img: 'cold drink1.jpg', alt: 'Cold Drink' },
    { name: 'Coffee with Cream', img: 'img16.avif', alt: 'Coffee with Cream' },
    { name: 'Sweets', img: 'sweets2jpg.jpg', alt: 'Sweets' },
    { name: 'Drip Coffee', img: 'img5.avif', alt: 'Drip Coffee' },
    { name: 'Espresso', img: 'img6.avif', alt: 'Espresso' }
];

const TESTIMONIALS = [
    {
        name: 'Ahmed Hassan',
        img: 'img.1.3 (2).jpg',
        text: 'Cozy atmosphere and delicious pastries. A must-visit spot!'
    },
    {
        name: 'Mia C.',
        img: 'img.1.1.jpg',
        text: 'Loved the vibes, the coffee, and the warm hospitality!'
    },
    {
        name: 'Mohamed Ahmed',
        img: 'img.1.3.jpg',
        text: 'Their cappuccino is simply amazing! Will be coming back for more.'
    }
];

const GALLERY_IMAGES = [
    'gallery1.jpeg', 'gallery2.jpeg', 'gallery4.jpeg',
    'gallrey5.jpeg', 'gallery16.jpeg', 'gallery8.jpeg'
];

const CONTACT_INFO = [
    { icon: 'envelope', text: 'Cafe_Shop@gmail.com' },
    { icon: 'phone', text: '+2010294**65' },
    { icon: 'clock', text: 'Mon-Fri -- 10AM -- 8PM' },
    { icon: 'map-marker-alt', text: 'Cairo, Banha' }
];

const OPENING_HOURS = [
    { day: 'Monday - Friday', hours: '10AM - 8PM' },
    { day: 'Saturday', hours: '11AM - 9PM' },
    { day: 'Sunday', hours: '12PM - 6PM' }
];

const NAV_ITEMS = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
];

// ============================================
// DOM BUILDERS (70% of app - Create elements)
// ============================================

/**
 * Build header/navigation dynamically
 * Uses: createElement, appendChild, classList
 */
function buildHeader() {
    const header = document.querySelector('.header');
    
    const container = document.createElement('section');
    container.className = 'container nav_section';
    
    const nav = document.createElement('nav');
    nav.className = 'nav_items';
    
    // Logo
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    const logoImg = document.createElement('img');
    logoImg.src = '../img/logo.png';
    logoImg.alt = 'Cafe Shop Logo';
    logoDiv.appendChild(logoImg);
    
    // Mobile menu toggle
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'mobile-menu-toggle';
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Navigation list
    const navList = document.createElement('ul');
    navList.className = 'list';
    
    NAV_ITEMS.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav_list';
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        li.appendChild(a);
        navList.appendChild(li);
    });
    
    // Login button
    const loginLi = document.createElement('li');
    loginLi.className = 'nav_list';
    const loginBtn = document.createElement('a');
    loginBtn.href = '#login';
    loginBtn.className = 'login-btn';
    loginBtn.textContent = 'Login';
    loginBtn.id = 'nav-login-btn';
    loginLi.appendChild(loginBtn);
    navList.appendChild(loginLi);
    
    nav.appendChild(logoDiv);
    nav.appendChild(toggleBtn);
    nav.appendChild(navList);
    container.appendChild(nav);
    header.appendChild(container);
}

/**
 * Build home/hero section dynamically
 * Uses: createElement, innerHTML for content blocks
 */
function buildHomeSection() {
    const main = document.querySelector('.main_content');
    
    const section = document.createElement('section');
    section.className = 'container home-section animate-on-scroll';
    section.id = 'home';
    
    section.innerHTML = `
        <div class="title">
            <h1><span>S</span>avoring Joy,</h1>
            <h2>One Cup at a Time</h2>
            <p>Discover the perfect blend of taste and aroma.</p>
            <p>Handcrafted coffee, freshly brewed to fuel your day.</p>
            <div class="mt-4">
                <a href="#menu" class="btn btn-primary">Explore Menu</a>
                <a href="#about" class="btn btn-outline ml-3">Learn More</a>
            </div>
        </div>
        <div class="main_img">
            <img src="../img/coffee-hero-section.png" alt="Coffee Cup" loading="lazy">
        </div>
    `;
    
    main.appendChild(section);
}

/**
 * Build about section dynamically
 */
function buildAboutSection() {
    const main = document.querySelector('.main_content');
    
    const section = document.createElement('section');
    section.className = 'about-section animate-on-scroll';
    section.id = 'about';
    
    section.innerHTML = `
        <div class="container">
            <h2>About Us</h2>
            <div class="about-content">
                <div class="about-img">
                    <img src="../img/photo_2025-04-23_05-22-46.jpg" alt="About Cafe Shop" loading="lazy">
                </div>
                <div class="about-text">
                    <p>At <span>C</span>afe Shop, we believe that coffee is more than just a drink. It's a way of life. Our mission is to provide you with the best coffee experience possible.</p>
                    <p>We source the finest beans from around the world and roast them to perfection. Our baristas are trained to create the perfect cup every time.</p>
                    <p>Whether you're looking for a quick pick-me-up or a relaxing place to unwind, Cafe Shop has you covered. Come in and experience the difference for yourself.</p>
                    <div class="mt-4">
                        <a href="#contact" class="btn btn-primary">Visit Us</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    main.appendChild(section);
}

/**
 * Build menu section dynamically
 * Uses: createElement, appendChild in loop for each menu item
 */
function buildMenuSection() {
    const main = document.querySelector('.main_content');
    
    const section = document.createElement('section');
    section.className = 'menu-section animate-on-scroll';
    section.id = 'menu';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const title = document.createElement('h2');
    title.textContent = 'Our Coffee Menu';
    
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu-items';
    menuDiv.id = 'menu-items';
    
    // Build each menu item from data array
    MENU_ITEMS.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        const img = document.createElement('img');
        img.src = `../img/${item.img}`;
        img.alt = item.alt;
        img.loading = 'lazy';
        
        const itemName = document.createElement('p');
        itemName.className = 'item-name';
        itemName.textContent = item.name;
        
        const orderBtn = document.createElement('button');
        orderBtn.className = 'order-btn';
        orderBtn.textContent = 'Order Now';
        orderBtn.addEventListener('click', function() {
            showLoginModal();
        });
        
        menuItem.appendChild(img);
        menuItem.appendChild(itemName);
        menuItem.appendChild(orderBtn);
        menuDiv.appendChild(menuItem);
    });
    
    container.appendChild(title);
    container.appendChild(menuDiv);
    section.appendChild(container);
    main.appendChild(section);
}

/**
 * Build gallery section dynamically
 * Uses: createElement, appendChild in loop for each image
 */
function buildGallerySection() {
    const main = document.querySelector('.main_content');
    
    const section = document.createElement('section');
    section.className = 'gallery-section animate-on-scroll';
    section.id = 'gallery';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const title = document.createElement('h2');
    title.textContent = 'Gallery';
    
    const cafeShopDiv = document.createElement('div');
    cafeShopDiv.className = 'Cafe-shop';
    
    const cafeshopitem = document.createElement('div');
    cafeshopitem.className = 'cafeshopitem';
    
    // Build gallery images from data array
    GALLERY_IMAGES.forEach(imgName => {
        const img = document.createElement('img');
        img.src = `../img/${imgName}`;
        img.alt = 'Gallery image';
        img.loading = 'lazy';
        cafeshopitem.appendChild(img);
    });
    
    cafeShopDiv.appendChild(cafeshopitem);
    container.appendChild(title);
    container.appendChild(cafeShopDiv);
    section.appendChild(container);
    main.appendChild(section);
}

/**
 * Build testimonials section dynamically
 * Uses: createElement, appendChild in loop for each testimonial card
 */
function buildTestimonialsSection() {
    const main = document.querySelector('.main_content');
    
    const section = document.createElement('section');
    section.className = 'testimonial-content animate-on-scroll';
    section.id = 'testimonials';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const title = document.createElement('h2');
    title.textContent = 'What Our Customers Are Saying';
    
    const profileContainer = document.createElement('div');
    profileContainer.className = 'testimonial-profile';
    
    // Build each testimonial card from data array
    TESTIMONIALS.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'profile-card';
        
        const img = document.createElement('img');
        img.src = `../img/${testimonial.img}`;
        img.alt = testimonial.name;
        img.loading = 'lazy';
        
        const review = document.createElement('div');
        review.className = 'review';
        
        const text = document.createElement('p');
        text.innerHTML = `"${testimonial.text}"`;
        
        const name = document.createElement('h4');
        name.textContent = testimonial.name;
        
        review.appendChild(text);
        review.appendChild(name);
        card.appendChild(img);
        card.appendChild(review);
        profileContainer.appendChild(card);
    });
    
    container.appendChild(title);
    container.appendChild(profileContainer);
    section.appendChild(container);
    main.appendChild(section);
}

/**
 * Build contact section dynamically
 * Uses: createElement, appendChild
 */
function buildContactSection() {
    const main = document.querySelector('.main_content');
    
    const section = document.createElement('section');
    section.className = 'contact-section animate-on-scroll';
    section.id = 'contact';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const title = document.createElement('h2');
    title.textContent = 'Contact Us';
    
    const contactDetails = document.createElement('div');
    contactDetails.className = 'contact-details';
    
    // Contact form
    const form = document.createElement('form');
    form.className = 'form';
    form.id = 'contact-form';
    
    form.innerHTML = `
        <div class="info">
            <label for="username">Name</label>
            <input type="text" name="username" id="username" placeholder="Enter your name" required>
        </div>
        <div class="info">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" required>
        </div>
        <div class="info">
            <label for="message">Message</label>
            <textarea name="message" id="message" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
    `;
    
    // Contact info list
    const infoList = document.createElement('div');
    infoList.className = 'contact-info-list';
    
    CONTACT_INFO.forEach(info => {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'contact-info';
        
        const icon = document.createElement('i');
        icon.className = `fas fa-${info.icon}`;
        
        const text = document.createElement('p');
        if (info.icon === 'envelope') text.className = 'gmail';
        text.textContent = info.text;
        
        infoDiv.appendChild(icon);
        infoDiv.appendChild(text);
        infoList.appendChild(infoDiv);
    });
    
    contactDetails.appendChild(form);
    contactDetails.appendChild(infoList);
    container.appendChild(title);
    container.appendChild(contactDetails);
    section.appendChild(container);
    main.appendChild(section);
}

/**
 * Build footer dynamically
 * Uses: createElement, appendChild
 */
function buildFooter() {
    const footer = document.querySelector('.footer');
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';
    
    // Column 1: About
    const col1 = document.createElement('div');
    col1.className = 'footer-column';
    col1.innerHTML = `
        <h3>Cafe Shop</h3>
        <p>Discover the perfect blend of taste and aroma. Handcrafted coffee, freshly brewed to fuel your day.</p>
        <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-pinterest"></i></a>
        </div>
    `;
    
    // Column 2: Quick Links
    const col2 = document.createElement('div');
    col2.className = 'footer-column';
    const col2Title = document.createElement('h3');
    col2Title.textContent = 'Quick Links';
    const col2List = document.createElement('ul');
    
    NAV_ITEMS.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        li.appendChild(a);
        col2List.appendChild(li);
    });
    
    col2.appendChild(col2Title);
    col2.appendChild(col2List);
    
    // Column 3: Opening Hours
    const col3 = document.createElement('div');
    col3.className = 'footer-column';
    const col3Title = document.createElement('h3');
    col3Title.textContent = 'Opening Hours';
    const col3List = document.createElement('ul');
    
    OPENING_HOURS.forEach(hour => {
        const li = document.createElement('li');
        li.textContent = `${hour.day}: ${hour.hours}`;
        col3List.appendChild(li);
    });
    
    col3.appendChild(col3Title);
    col3.appendChild(col3List);
    
    footerContent.appendChild(col1);
    footerContent.appendChild(col2);
    footerContent.appendChild(col3);
    container.appendChild(footerContent);
    
    // Copyright
    const copyright = document.createElement('div');
    copyright.className = 'copyright';
    copyright.innerHTML = '<p>&copy; 2025 Cafe Shop. All rights reserved.</p>';
    container.appendChild(copyright);
    
    footer.appendChild(container);
}

/**
 * Build login modal dynamically
 * Uses: createElement, appendChild
 */
function buildLoginModal() {
    const modalDiv = document.getElementById('loginModal');
    modalDiv.className = 'modal';
    
    const content = document.createElement('div');
    content.className = 'modal-content';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-modal';
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', closeLoginModal);
    
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    
    const tabButtons = document.createElement('div');
    tabButtons.className = 'tab-buttons';
    
    const loginTabBtn = document.createElement('button');
    loginTabBtn.className = 'tab-btn active';
    loginTabBtn.textContent = 'Login';
    loginTabBtn.addEventListener('click', () => showTab('login'));
    
    const registerTabBtn = document.createElement('button');
    registerTabBtn.className = 'tab-btn';
    registerTabBtn.textContent = 'Register';
    registerTabBtn.addEventListener('click', () => showTab('register'));
    
    tabButtons.appendChild(loginTabBtn);
    tabButtons.appendChild(registerTabBtn);
    
    // Login form
    const loginTab = document.createElement('div');
    loginTab.id = 'login';
    loginTab.className = 'tab-content active';
    loginTab.innerHTML = `
        <h2>Login</h2>
        <form id="login-form" class="auth-form">
            <div class="form-group">
                <label for="login-email">Email</label>
                <input type="email" id="login-email" name="email" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="login-password">Password</label>
                <input type="password" id="login-password" name="password" placeholder="Enter your password" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    `;
    
    // Register form
    const registerTab = document.createElement('div');
    registerTab.id = 'register';
    registerTab.className = 'tab-content';
    registerTab.innerHTML = `
        <h2>Create Account</h2>
        <form id="register-form" class="auth-form">
            <div class="form-group">
                <label for="reg-name">Full Name</label>
                <input type="text" id="reg-name" name="name" placeholder="Enter your name" required>
            </div>
            <div class="form-group">
                <label for="reg-email">Email</label>
                <input type="email" id="reg-email" name="email" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="reg-password">Password</label>
                <input type="password" id="reg-password" name="password" placeholder="Enter your password" required>
            </div>
            <div class="form-group">
                <label for="reg-confirm">Confirm Password</label>
                <input type="password" id="reg-confirm" name="confirm" placeholder="Confirm your password" required>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    `;
    
    modalContainer.appendChild(tabButtons);
    modalContainer.appendChild(loginTab);
    modalContainer.appendChild(registerTab);
    content.appendChild(closeBtn);
    content.appendChild(modalContainer);
    modalDiv.appendChild(content);
}

// ============================================
// EVENT HANDLERS (30% - Interactions)
// ============================================

function initNavigation() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.list');
    const navLinks = document.querySelectorAll('.nav_list a:not(.login-btn)');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList) {
                navList.classList.remove('active');
            }
        });
    });

    // Highlight active link based on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        });
    });
}

function initScrollEffects() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!username || !email || !message) {
                alert('Please fill all fields');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email');
                return;
            }

            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (!email || !password) {
                alert('Please fill all fields');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email');
                return;
            }

            alert(`Welcome back! Logged in as ${email}`);
            closeLoginModal();
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('reg-name').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const password = document.getElementById('reg-password').value.trim();
            const confirm = document.getElementById('reg-confirm').value.trim();

            if (!name || !email || !password || !confirm) {
                alert('Please fill all fields');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email');
                return;
            }

            if (password !== confirm) {
                alert('Passwords do not match');
                return;
            }

            alert(`Welcome ${name}! Account created successfully.`);
            closeLoginModal();
        });
    }
}

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

function initLoginModal() {
    const navLoginBtn = document.getElementById('nav-login-btn');
    if (navLoginBtn) {
        navLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showLoginModal();
        });
    }

    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        window.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                closeLoginModal();
            }
        });
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.add('show');
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

function showTab(tabName) {
    const modal = document.getElementById('loginModal');
    const tabs = modal.querySelectorAll('.tab-content');
    const tabBtns = modal.querySelectorAll('.tab-btn');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabBtns.forEach(btn => btn.classList.remove('active'));

    const activeTab = modal.querySelector(`#${tabName}`);
    const activeBtn = Array.from(tabBtns).find(btn => 
        btn.textContent.toLowerCase() === tabName
    );

    if (activeTab) activeTab.classList.add('active');
    if (activeBtn) activeBtn.classList.add('active');
}

// ============================================
// INITIALIZATION (Build everything on page load)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Building app with 70% JavaScript...');
    
    // Build all sections dynamically (70% of the app)
    buildHeader();
    buildHomeSection();
    buildAboutSection();
    buildMenuSection();
    buildGallerySection();
    buildTestimonialsSection();
    buildContactSection();
    buildFooter();
    buildLoginModal();
    
    // Initialize event listeners
    initNavigation();
    initScrollEffects();
    initFormValidation();
    initAnimations();
    initLoginModal();
    
    console.log('✅ App built successfully - 70% JS rendering | 30% HTML structure');
});

