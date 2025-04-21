// Filtro de projetos
export function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover classe active de todos os botões
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Filtrar projetos
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Busca de projetos
export function initProjectSearch() {
    const projectSearch = document.getElementById('projectSearch');
    const searchBtn = document.getElementById('searchBtn');
    const projectCards = document.querySelectorAll('.project-card');
    
    function searchProjects() {
        const searchTerm = projectSearch.value.toLowerCase();
        
        projectCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            
            if (title.includes(searchTerm) || 
                description.includes(searchTerm) || 
                tags.some(tag => tag.includes(searchTerm))) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    searchBtn.addEventListener('click', searchProjects);
    projectSearch.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchProjects();
        }
    });
}

// Inicializar todos os filtros
export function initFilters() {
    initProjectFilter();
    initProjectSearch();
}