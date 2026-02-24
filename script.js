// Smooth scrolling for in-page anchor links (e.g., contact)
function initSmoothScroll() {
    document.querySelectorAll('a.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            link.addEventListener('click', event => {
                event.preventDefault();
                const targetId = href.substring(1);
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            });
        }
    });
}


// Dynamic skills
function loadSkills() {
    const skills = [
        { name: 'Ansible', img: 'https://placehold.co/80x80?text=Ansible' },
        { name: 'Jenkins', img: 'https://placehold.co/80x80?text=Jenkins' },
        { name: 'Docker', img: 'https://placehold.co/80x80?text=Docker' },
        { name: 'DataDog', img: 'https://placehold.co/80x80?text=DataDog' },
        { name: 'Kubernetes', img: 'https://placehold.co/80x80?text=K8s' },
        { name: 'AWS', img: 'https://placehold.co/80x80?text=AWS' },
        { name: 'Terraform', img: 'https://placehold.co/80x80?text=TF' }
    ];
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    skills.forEach(skill => {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4 animate-on-scroll';
        col.innerHTML = `
            <div class="skills-card text-center">
                <img src="${skill.img}" alt="${skill.name}" class="img-fluid mb-2" style="height:60px;">
                <h5 class="mt-2">${skill.name}</h5>
            </div>
        `;
        skillsContainer.appendChild(col);
    });
}

// Portfolio projects data and rendering with modal and filtering
function loadProjects() {
    const projects = [
        { title: 'DevOps Dashboard', desc: 'Monitoring and alerting dashboard using Grafana and Prometheus', img: 'assets/project1.jpg', github: 'https://github.com/username/devops-dashboard', categories: ['DevOps', 'Monitoring'] },
        { title: 'CI/CD Pipeline', desc: 'Automated build & deploy with Jenkins and GitHub Actions', img: 'assets/project2.jpg', github: 'https://github.com/username/ci-cd-pipeline', categories: ['DevOps'] },
        { title: 'Kubernetes Cluster', desc: 'Scalable microservices deployed on EKS', img: 'assets/project3.jpg', github: 'https://github.com/username/k8s-cluster', categories: ['DevOps'] },
    ];
    const container = document.getElementById('projects-container');
    if (!container) return;
    projects.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col-md-4 animate-on-scroll';
        col.setAttribute('data-categories', p.categories.join(' '));
        col.innerHTML = `
            <div class="card">
                <img src="${p.img}" class="card-img-top" alt="${p.title}">
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <p class="card-text">${p.desc}</p>
                    ${p.github ? `<a href="${p.github}" target="_blank" class="btn btn-primary btn-sm">GitHub</a>` : ''}
                </div>
            </div>
        `;
        container.appendChild(col);
    });
    // filtering behaviour
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('#projects-container > div').forEach(cardCol => {
                const cats = cardCol.dataset.categories.split(' ');
                if (filter === 'all' || cats.includes(filter)) {
                    cardCol.style.display = '';
                } else {
                    cardCol.style.display = 'none';
                }
            });
        });
    });
}


// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Contact form validation (basic)
function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const contact = document.getElementById('contact').value.trim();
        if (!name || !email || !contact) {
            alert('Please fill in all fields.');
            return;
        }
        // mailto fallback
        const subject = encodeURIComponent('Portfolio inquiry from ' + name);
        const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0AContact: ${contact}%0A%0A`);
        window.location.href = `mailto:siddharthkhajuria@gmail.com?subject=${subject}&body=${body}`;
        form.reset();
    });
}

// Intersection observer for scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible', 'animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// mark active navigation item based on current page
function highlightCurrentNav() {
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach(l => {
        const href = l.getAttribute('href');
        if (href && (href === window.location.pathname.split('/').pop() ||
            window.location.href.endsWith(href))) {
            l.classList.add('active');
        }
    });
}

// Hide preloader and initialize everything
window.addEventListener('load', () => {
    const pre = document.getElementById('preloader');
    if (pre) {
        pre.classList.add('hidden');
        setTimeout(() => pre.remove(), 600);
    }
    highlightCurrentNav();
    initSmoothScroll();
    loadSkills();
    loadProjects();
    initFormValidation();
    initScrollAnimations();
    // refresh scrollspy in case content changed
    new bootstrap.ScrollSpy(document.body, { target: '.navbar', offset: 80 });
});
