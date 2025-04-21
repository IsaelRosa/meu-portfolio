// Dados dos projetos
const projectsData = [
    {
        id: 1,
        title: "Plataforma E-commerce",
        description: "Sistema completo de e-commerce com carrinho de compras, checkout e painel administrativo.",
        category: "web",
        tags: ["React", "Node.js", "MongoDB"],
        image: "assets/images/ecommerce.jpg"
        
    },
    {
        id: 2,
        title: "App de Delivery",
        description: "Aplicativo móvel para entrega de alimentos com rastreamento em tempo real.",
        category: "mobile",
        tags: ["React Native", "Firebase", "Redux"],
        image: "assets/images/delivery.jpg"
    },
    {
        id: 3,
        title: "Dashboard Analytics",
        description: "Painel de análise de dados com visualizações interativas e relatórios personalizados.",
        category: "web",
        tags: ["Vue.js", "D3.js", "Express"],
        image: "assets/images/dashboard.jpg"
    },
    {
        id: 4,
        title: "UI/UX Design System",
        description: "Sistema de design completo com componentes reutilizáveis e guia de estilo.",
        category: "design",
        tags: ["Figma", "Adobe XD", "UI Design"],
        image: "assets/images/design-system.jpg"
    },
    {
        id: 5,
        title: "App Fitness",
        description: "Aplicativo de treinos personalizados e acompanhamento de saúde.",
        category: "mobile",
        tags: ["Flutter", "Firebase", "HealthKit"],
        image: "assets/images/fitness.jpg"
    },
    {
        id: 6,
        title: "Plataforma de Blog",
        description: "Sistema de gerenciamento de conteúdo para blogs com editor markdown.",
        category: "web",
        tags: ["Next.js", "GraphQL", "Prisma"],
        image: "assets/images/blog.jpg"
    }
];

// Dados das habilidades
const skillsData = [
    { name: "HTML5", icon: "fab fa-html5", level: 95 },
    { name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
    { name: "JavaScript", icon: "fab fa-js", level: 85 },
    { name: "React", icon: "fab fa-react", level: 80 },
    { name: "Node.js", icon: "fab fa-node-js", level: 75 },
    { name: "MongoDB", icon: "fas fa-database", level: 70 },
    { name: "Git", icon: "fab fa-git-alt", level: 85 },
    { name: "React Native", icon: "fas fa-mobile-alt", level: 75 }
];

// Carregar projetos
function loadProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', project.category);
        
        projectCard.innerHTML = `
            <div class="project-img">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="#" class="btn btn-primary">Detalhes</a>
                    <a href="#" class="btn btn-outline">Demo</a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Carregar habilidades
function loadSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    
    skillsData.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        
        skillItem.innerHTML = `
            <i class="${skill.icon} skill-icon"></i>
            <h4 class="skill-name">${skill.name}</h4>
            <div class="skill-level">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
        `;
        
        skillsContainer.appendChild(skillItem);
    });
}

// Carregar sites (filtra apenas projetos web)
function loadSites() {
    const sitesContainer = document.querySelector('#sites .projects');
    const webProjects = projectsData.filter(project => project.category === 'web');
    
    webProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-img">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="#" class="btn btn-primary">Detalhes</a>
                    <a href="#" class="btn btn-outline">Demo</a>
                </div>
            </div>
        `;
        
        sitesContainer.appendChild(projectCard);
    });
}

// Carregar aplicativos (filtra apenas projetos mobile)
function loadApps() {
    const appsContainer = document.querySelector('#aplicativos .projects');
    const mobileProjects = projectsData.filter(project => project.category === 'mobile');
    
    mobileProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-img">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="#" class="btn btn-primary">Detalhes</a>
                    <a href="#" class="btn btn-outline">Demo</a>
                </div>
            </div>
        `;
        
        appsContainer.appendChild(projectCard);
    });
}

// Atualizar ano no footer
function updateYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// Formulário de contato
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        contactForm.reset();
    });
}

// Formulário de newsletter
function setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado por assinar nossa newsletter!');
        newsletterForm.reset();
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
    loadSites();
    loadApps();
    updateYear();
    setupContactForm();
    setupNewsletterForm();
});