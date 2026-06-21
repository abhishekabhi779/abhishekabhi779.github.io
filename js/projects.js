(function () {
    const API_URL = 'https://api.github.com/users/abhishekabhi779/repos?sort=updated&per_page=100';

    const formatName = (name) =>
        name
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());

    const buildProjectCard = (repo) => {
        const topics = (repo.topics || []).map(
            (t) => `<span class="project-topic">${t}</span>`
        ).join('');

        return `
            <article class="project-card">
                <h3>${formatName(repo.name)}</h3>
                <p class="project-description">${repo.description || 'No description provided.'}</p>
                ${topics ? `<div class="project-topics">${topics}</div>` : ''}
                <p class="project-tech"><strong>Language:</strong> ${repo.language || 'N/A'}</p>
                <div class="project-links">
                    <a href="${repo.html_url}" target="_blank" rel="noopener" class="btn btn-project">View Code</a>
                    ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener" class="btn btn-project">Live Demo</a>` : ''}
                </div>
            </article>
        `;
    };

    const loadProjects = () => {
        const projectsContainer = document.getElementById('projects-container');
        if (!projectsContainer) return;

        fetch(API_URL)
            .then((res) => {
                if (res.status === 403) throw new Error('GitHub API rate limit reached. Try again in a minute.');
                if (!res.ok) throw new Error('Failed to load repositories.');
                return res.json();
            })
            .then((repos) => {
                const filteredRepos = repos.filter(repo => !repo.fork && repo.name !== 'abhishekabhi779.github.io');
                projectsContainer.innerHTML = filteredRepos.map(buildProjectCard).join('');
            })
            .catch((err) => {
                projectsContainer.innerHTML = `<p style="color: red;">Error loading projects: ${err.message}</p>`;
                console.error('Error loading projects:', err);
            });
    };

    loadProjects();
})();
