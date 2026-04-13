// Resource data from resources.md
const beginnerResources = [
    { name: 'Kube Academy', url: 'https://kube.academy/' },
    { name: 'Kubernetes 101', url: 'https://kube.academy/courses/kubernetes-101/' },
    { name: 'Docs Home', url: 'https://kubernetes.io/docs/home/' },
    { name: 'CKS CKA CKAD Simulator', url: 'https://killer.sh/' },
    { name: 'Udemy CKA Courses', url: 'https://www.udemy.com/topic/certified-kubernetes-administrator-cka/' },
    { name: 'CKAD Practice Questions', url: 'https://dev.to/liptanbiswas/ckad-practice-questions-4mpn' },
    { name: 'CKAD Exercises', url: 'https://github.com/dgkanatsios/CKAD-exercises' },
    { name: 'CKAD Prep', url: 'https://github.com/bmuschko/ckad-prep/' },
    { name: 'Katacoda Kubernetes', url: 'https://www.katacoda.com/courses/kubernetes' },
    { name: 'CKA Exam Preparation', url: 'https://kube.academy/courses/how-to-prepare-for-the-cka-exam' },
    { name: 'edX Kubernetes Course', url: 'https://www.edx.org/course/introduction-to-kubernetes' },
    { name: 'Kubectl Cheat Sheet', url: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/' },
    { name: 'Learn K8s Academy', url: 'https://learnk8s.io/academy' },
    { name: 'Collabnix Kubelabs', url: 'https://collabnix.github.io/kubelabs/' },
    { name: 'KodeKloud', url: 'https://kodekloud.com/' },
    { name: 'TGIK', url: 'https://tgik.io' },
    { name: 'Intro Slides', url: 'https://docs.google.com/presentation/d/1WjSJHiMgaBABk3T1MRZp2N5znpIxGMYVven2sHN800w/edit?usp=sharing' },
    { name: 'Code Walkthroughs', url: 'https://www.youtube.com/playlist?list=PL69nYSiGNLP0gugLYzpNR1ueyUj9GjzpK' },
    { name: 'Exam Prep Resources', url: 'https://bit.ly/2IdKwIc' },
    { name: 'Core Concepts of Kubernetes', url: 'https://dominik-tornow.medium.com/' },
    { name: 'CNCF YouTube', url: 'https://youtube.com/c/cloudnativefdn' },
    { name: 'Kubernetes Design Principles', url: 'https://youtu.be/ZuIQurh_kDk' },
    { name: 'Kubernetes Fundamentals', url: 'https://k8sfun.courselabs.co/' },
    { name: 'CKAD Resources', url: 'https://gist.github.com/carlisia/76825e553a3d94029dcd8069437f39c5' },
    { name: 'Security Resources', url: 'https://github.com/magnologan/awesome-k8s-security' }
];

const developerResources = [
    { name: 'Dims Twitter Thread', url: 'https://twitter.com/dims/status/1329400522890219520?s=20' },
    { name: 'Kubernetes Contributor Site', url: 'https://k8s.dev/' },
    { name: 'Kubernetes Slack', url: 'https://slack.k8s.io/' },
    { name: 'Developers Guide', url: 'https://github.com/kubernetes/community/tree/master/contributors/devel/' },
    { name: 'Contributors Guide', url: 'https://github.com/kubernetes/community/blob/master/contributors/guide/' },
    { name: 'Release Engineering', url: 'https://github.com/kubernetes/sig-release/tree/master/release-engineering/' },
    { name: 'Community Calendar', url: 'https://k8s.dev/calendar/' },
    { name: 'Test Grid', url: 'https://testgrid.k8s.io/' },
    { name: 'Search K8s Repos', url: 'https://cs.k8s.io/' },
    { name: 'Kubernetes Enhancements', url: 'https://github.com/kubernetes/enhancements/' },
    { name: 'Test Infrastructure', url: 'https://github.com/kubernetes/test-infra#ci-job-management' },
    { name: 'PR Dashboard', url: 'https://gubernator.k8s.io/pr/' },
    { name: 'Prow Jobs', url: 'https://prow.k8s.io/' },
    { name: 'Bot Commands', url: 'https://prow.k8s.io/command-help' },
    { name: 'Aggregated Failures', url: 'https://storage.googleapis.com/k8s-gubernator/triage/index.html' },
    { name: 'Dev Stats', url: 'https://k8s.devstats.cncf.io/' },
    { name: 'Merge Queue', url: 'https://prow.k8s.io/tide#/queue' },
    { name: 'Short URLs', url: 'https://github.com/kubernetes/k8s.io/blob/main/k8s.io/' },
    { name: 'On Call', url: 'https://storage.googleapis.com/test-infra-oncall/oncall.html' },
    { name: 'Kubernetes the Hard Way', url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way' },
    { name: 'What are Kubernetes Pods?', url: 'https://www.ianlewis.org/en/what-are-kubernetes-pods-anyway' },
    { name: 'The Almighty Pause Container', url: 'https://www.ianlewis.org/en/almighty-pause-container' },
    { name: 'Events, the DNA of Kubernetes', url: 'https://www.mgasch.com/2018/08/k8sevents/' },
    { name: 'QoS and Kubernetes Scheduler', url: 'https://www.mgasch.com/2017/10/sched-reconcile/' }
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
    const beginnerGrid = document.getElementById('beginnerGrid');
    const developerGrid = document.getElementById('developerGrid');
    
    beginnerGrid.innerHTML = beginnerResources.map((resource, index) => 
        createResourceCard(resource, 'beginner', index)
    ).join('');
    
    developerGrid.innerHTML = developerResources.map((resource, index) => 
        createResourceCard(resource, 'developer', index)
    ).join('');
}

// Create a resource card HTML
function createResourceCard(resource, category, index) {
    return `
        <div class="resource-card" data-category="${category}" data-name="${resource.name.toLowerCase()}" style="animation-delay: ${index * 0.05}s">
            <h3>${resource.name}</h3>
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
        const url = card.querySelector('a').textContent.toLowerCase();
        const matches = name.includes(searchTerm) || url.includes(searchTerm);
        
        if (matches) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });
    
    updateSectionVisibility();
    toggleNoResults(visibleCount === 0);
}

// Filter by category
function filterByCategory(category) {
    const beginnerSection = document.getElementById('beginnerSection');
    const developerSection = document.getElementById('developerSection');
    const cards = document.querySelectorAll('.resource-card');
    
    if (category === 'all') {
        beginnerSection.style.display = 'block';
        developerSection.style.display = 'block';
        cards.forEach(card => card.classList.remove('hidden'));
    } else if (category === 'beginner') {
        beginnerSection.style.display = 'block';
        developerSection.style.display = 'none';
        cards.forEach(card => {
            if (card.dataset.category === 'beginner') {
                card.classList.remove('hidden');
            }
        });
    } else if (category === 'developer') {
        beginnerSection.style.display = 'none';
        developerSection.style.display = 'block';
        cards.forEach(card => {
            if (card.dataset.category === 'developer') {
                card.classList.remove('hidden');
            }
        });
    }
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput.value) {
        filterResources(searchInput.value.toLowerCase());
    }
    
    updateSectionVisibility();
}

// Update section visibility
function updateSectionVisibility() {
    const beginnerSection = document.getElementById('beginnerSection');
    const developerSection = document.getElementById('developerSection');
    
    const beginnerVisible = Array.from(document.querySelectorAll('#beginnerGrid .resource-card'))
        .some(card => !card.classList.contains('hidden'));
    const developerVisible = Array.from(document.querySelectorAll('#developerGrid .resource-card'))
        .some(card => !card.classList.contains('hidden'));
    
    if (beginnerSection.style.display !== 'none') {
        beginnerSection.style.display = beginnerVisible ? 'block' : 'none';
    }
    if (developerSection.style.display !== 'none') {
        developerSection.style.display = developerVisible ? 'block' : 'none';
    }
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
console.log(`📚 ${beginnerResources.length} beginner resources available`);
console.log(`💻 ${developerResources.length} developer resources available`);
console.log('💡 Press "/" to focus search, "Escape" to clear');

// Made with Bob
