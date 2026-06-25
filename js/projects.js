(function () {
    const API_URL = 'https://api.github.com/users/abhishekabhi779/repos?sort=updated&per_page=100';

    const formatName = (name) =>
        name
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());

    const buildProjectCard = (repo) => {
        const topics = (repo.topics || []).slice(0, 3).map(
            (t) => `<span class="tech-pill">${t}</span>`
        ).join('');

        return `
            <article class="bento-card col-4">
                <span class="card-tag">${repo.language || 'Technical Project'}</span>
                <h3>${formatName(repo.name)}</h3>
                <p>${repo.description || 'Architecting scalable solutions and pushing the boundaries of deterministic AI.'}</p>
                <div class="card-footer">
                    <div class="tech-stack">
                        ${topics}
                    </div>
                    <a href="${repo.html_url}" target="_blank" rel="noopener" class="mono">Code →</a>
                </div>
            </article>
        `;
    };

    const loadProjects = () => {
        const projectsContainer = document.getElementById('projects-container');
        if (!projectsContainer) return;

        fetch(API_URL)
            .then((res) => {
                if (res.status === 403) throw new Error('GitHub API rate limit reached.');
                if (!res.ok) throw new Error('Failed to load repositories.');
                return res.json();
            })
            .then((repos) => {
                // Filter out the portfolio repo itself, forks, and the two featured projects
                const filteredRepos = repos.filter(repo => 
                    !repo.fork && 
                    repo.name !== 'abhishekabhi779.github.io' &&
                    repo.name !== 'SBA-Lead-Sourcing-Machine' &&
                    repo.name !== 'LM-Studio-MCP-Server'
                );
                projectsContainer.innerHTML = filteredRepos.map(buildProjectCard).join('');
            })
            .catch((err) => {
                projectsContainer.innerHTML = `<p class="col-12" style="color: var(--primary); text-align: center;">${err.message}</p>`;
            });
    };

    loadProjects();
})();
