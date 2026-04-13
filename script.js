// Resource data from resources.md
const resources = [
    { name: 'Kube Academy', description: 'Comprehensive Kubernetes learning platform with courses and tutorials', url: 'https://kube.academy/', category: 'courses' },
    { name: 'Kubernetes 101', description: 'Introduction course to Kubernetes fundamentals', url: 'https://kube.academy/courses/kubernetes-101/', category: 'courses' },
    { name: 'Docs Home', description: 'Official Kubernetes documentation', url: 'https://kubernetes.io/docs/home/', category: 'docs' },
    { name: 'CKS CKA CKAD Simulator', description: 'Practice simulator for Kubernetes certifications', url: 'https://killer.sh/', category: 'practice' },
    { name: 'Udemy CKA Courses', description: 'Certified Kubernetes Administrator courses on Udemy', url: 'https://www.udemy.com/topic/certified-kubernetes-administrator-cka/', category: 'courses' },
    { name: 'CKAD Practice Questions', description: 'Practice questions for CKAD certification', url: 'https://dev.to/liptanbiswas/ckad-practice-questions-4mpn', category: 'practice' },
    { name: 'CKAD Exercises', description: 'Hands-on exercises for CKAD exam preparation', url: 'https://github.com/dgkanatsios/CKAD-exercises', category: 'practice' },
    { name: 'CKAD Prep', description: 'CKAD certification preparation guide', url: 'https://github.com/bmuschko/ckad-prep/', category: 'practice' },
    { name: 'CKA Exam Preparation', description: 'How to prepare for the CKA exam', url: 'https://kube.academy/courses/how-to-prepare-for-the-cka-exam', category: 'practice' },
    { name: 'edX Kubernetes Course', description: 'Introduction to Kubernetes on edX', url: 'https://www.edx.org/course/introduction-to-kubernetes', category: 'courses' },
    { name: 'Kubectl Cheat Sheet', description: 'Quick reference for kubectl commands', url: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/', category: 'docs' },
    { name: 'Learn K8s Academy', description: 'Kubernetes training and workshops', url: 'https://learnk8s.io/academy', category: 'courses' },
    { name: 'Collabnix Kubelabs', description: 'Hands-on Kubernetes labs and tutorials', url: 'https://collabnix.github.io/kubelabs/', category: 'practice' },
    { name: 'KodeKloud', description: 'Interactive learning platform for DevOps and Kubernetes', url: 'https://kodekloud.com/', category: 'courses' },
    { name: 'TGIK', description: 'TGI Kubernetes - Weekly Kubernetes learning show', url: 'https://tgik.io', category: 'courses' },
    { name: 'Intro Slides', description: 'Kubernetes introduction presentation slides', url: 'https://docs.google.com/presentation/d/1WjSJHiMgaBABk3T1MRZp2N5znpIxGMYVven2sHN800w/edit?usp=sharing', category: 'docs' },
    { name: 'Code Walkthroughs', description: 'Video walkthroughs of Kubernetes code', url: 'https://www.youtube.com/playlist?list=PL69nYSiGNLP0gugLYzpNR1ueyUj9GjzpK', category: 'courses' },
    { name: 'Exam Prep Resources', description: 'Collection of Kubernetes exam preparation materials', url: 'https://bit.ly/2IdKwIc', category: 'practice' },
    { name: 'Core Concepts of Kubernetes', description: 'Deep dive into Kubernetes core concepts', url: 'https://dominik-tornow.medium.com/', category: 'docs' },
    { name: 'CNCF YouTube', description: 'Cloud Native Computing Foundation YouTube channel', url: 'https://youtube.com/c/cloudnativefdn', category: 'courses' },
    { name: 'Kubernetes Design Principles', description: 'Understanding Kubernetes design and architecture', url: 'https://youtu.be/ZuIQurh_kDk', category: 'courses' },
    { name: 'Security Resources', description: 'Awesome Kubernetes security resources and tools', url: 'https://github.com/magnologan/awesome-k8s-security', category: 'docs' },
    
    // Additional high-quality resources
    { name: 'Kubernetes the Hard Way', description: 'Learn Kubernetes by building a cluster from scratch', url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way', category: 'practice' },
    { name: 'Kubernetes Patterns', description: 'Reusable design patterns for cloud-native applications', url: 'https://k8spatterns.io/', category: 'docs' },
    { name: 'Kubernetes Best Practices', description: 'Book and resources on Kubernetes best practices', url: 'https://www.oreilly.com/library/view/kubernetes-best-practices/9781492056461/', category: 'docs' },
    { name: 'Play with Kubernetes', description: 'Free browser-based Kubernetes playground', url: 'https://labs.play-with-k8s.com/', category: 'practice' },
    { name: 'Kubernetes Podcast', description: 'Weekly podcast about Kubernetes and cloud native', url: 'https://kubernetespodcast.com/', category: 'courses' },
    { name: 'Kubernetes Blog', description: 'Official Kubernetes blog with updates and tutorials', url: 'https://kubernetes.io/blog/', category: 'docs' },
    { name: 'Awesome Kubernetes', description: 'Curated list of Kubernetes tools and resources', url: 'https://github.com/ramitsurana/awesome-kubernetes', category: 'docs' },
    { name: 'Kubernetes Tutorials', description: 'Step-by-step tutorials from the official docs', url: 'https://kubernetes.io/docs/tutorials/', category: 'courses' },
    { name: 'K8s Security Best Practices', description: 'NSA/CISA Kubernetes hardening guide', url: 'https://media.defense.gov/2022/Aug/29/2003066362/-1/-1/0/CTR_KUBERNETES_HARDENING_GUIDANCE_1.2_20220829.PDF', category: 'docs' },
    { name: 'Kubernetes Failure Stories', description: 'Learn from real-world Kubernetes failures', url: 'https://k8s.af/', category: 'docs' },
    { name: 'KubeWeekly', description: 'Weekly newsletter with Kubernetes news and articles', url: 'https://www.cncf.io/kubeweekly/', category: 'docs' },
    { name: 'Kubernetes Slack Workspace', description: 'Join the official Kubernetes community on Slack', url: 'https://slack.k8s.io/', category: 'docs' },
    { name: 'Kubernetes Reddit', description: 'Active community discussing Kubernetes topics', url: 'https://www.reddit.com/r/kubernetes/', category: 'docs' },
    { name: 'Kubernetes Operators', description: 'Learn about Kubernetes Operators pattern', url: 'https://operatorhub.io/', category: 'docs' },
    { name: 'Helm Documentation', description: 'Package manager for Kubernetes applications', url: 'https://helm.sh/docs/', category: 'docs' },
    { name: 'Kustomize Tutorial', description: 'Kubernetes native configuration management', url: 'https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/', category: 'docs' },
    { name: 'K9s', description: 'Terminal UI for managing Kubernetes clusters', url: 'https://k9scli.io/', category: 'docs' },
    { name: 'Lens IDE', description: 'Kubernetes IDE for managing clusters visually', url: 'https://k8slens.dev/', category: 'docs' }
];



// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderResources();
    setupEventListeners();
    animateStats();
    addCardAnimations();
});

// Render resource cards
function renderResources() {
    const resourcesGrid = document.getElementById('resourcesGrid');
    
    resourcesGrid.innerHTML = resources.map((resource, index) =>
        createResourceCard(resource, index)
    ).join('');
}

// Create a resource card HTML
function createResourceCard(resource, index) {
    return `
        <div class="resource-card" data-category="${resource.category}" data-name="${resource.name.toLowerCase()}" data-description="${resource.description.toLowerCase()}" style="animation-delay: ${index * 0.05}s">
            <h3>${resource.name}</h3>
            <p class="resource-description">${resource.description}</p>
            <a href="${resource.url}" target="_blank" rel="noopener noreferrer">${resource.url}</a>
        </div>
    `;
}

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        clearBtn.classList.toggle('visible', searchTerm.length > 0);
        filterResources(searchTerm);
    });
    
    // Clear search
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.classList.remove('visible');
        filterResources('');
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            filterByCategory(filter);
        });
    });
    
    // Add click animation to cards
    document.querySelectorAll('.resource-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'A') {
                const link = card.querySelector('a');
                if (link) {
                    window.open(link.href, '_blank');
                }
            }
        });
    });
}

// Filter resources by search term
function filterResources(searchTerm) {
    const cards = document.querySelectorAll('.resource-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const name = card.dataset.name;
        const description = card.dataset.description;
        const url = card.querySelector('a').textContent.toLowerCase();
        const matches = name.includes(searchTerm) || description.includes(searchTerm) || url.includes(searchTerm);
        
        if (matches) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });
    
    toggleNoResults(visibleCount === 0);
}

// Filter by category
function filterByCategory(category) {
    const cards = document.querySelectorAll('.resource-card');
    
    cards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            if (card.dataset.category === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput.value) {
        filterResources(searchInput.value.toLowerCase());
    }
    
    const visibleCount = Array.from(cards).filter(card => !card.classList.contains('hidden')).length;
    toggleNoResults(visibleCount === 0);
}

// Toggle no results message
function toggleNoResults(show) {
    const noResults = document.getElementById('noResults');
    noResults.style.display = show ? 'block' : 'none';
}

// Animate statistics counter
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// Add staggered animations to cards
function addCardAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.resource-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Focus search on '/' key
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
    
    // Clear search on 'Escape' key
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        if (searchInput.value) {
            searchInput.value = '';
            document.getElementById('clearSearch').classList.remove('visible');
            filterResources('');
        }
    }
});

// Add smooth scroll behavior
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

// Add particle effect on hover (optional enhancement)
document.querySelectorAll('.resource-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

console.log('🚀 Kubernetes Resources Hub loaded successfully!');
console.log(`📚 ${resources.length} learning resources available`);
console.log('💡 Press "/" to focus search, "Escape" to clear');

// Made with Bob
