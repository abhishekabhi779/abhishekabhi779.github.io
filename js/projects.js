(function () {
  const API_URL = 'https://api.github.com/users/abhishekabhi779/repos?sort=updated&per_page=100';

  const LANG_COLORS = {
    Python: '#3572A5', JavaScript: '#f1e05a', TypeScript: '#2b7489',
    HTML: '#e34c26', CSS: '#563d7c', Shell: '#89e051',
    'Jupyter Notebook': '#DA5B0B', Go: '#00ADD8', Rust: '#dea584',
    Java: '#b07219', 'C++': '#f34b7d', C: '#555555', Ruby: '#701516',
    Swift: '#ffac45', Kotlin: '#A97BFF', Dart: '#00B4AB',
    Vue: '#41b883', Svelte: '#ff3e00', SCSS: '#c6538c',
  };

  const isFeatured = (repo) => {
    const name = repo.name.toLowerCase();
    const desc = (repo.description || '').toLowerCase();
    const keywords = ['agent', 'ai', 'automation'];
    return (
      repo.name === 'abhishekabhi779.github.io' ||
      keywords.some((k) => name.includes(k) || desc.includes(k))
    );
  };

  const formatName = (name) =>
    name
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

  const timeAgo = (dateStr) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / 86400000);
    if (days < 1) return 'today';
    if (days === 1) return 'yesterday';
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo ago`;
    const years = Math.floor(months / 12);
    return `${years}y ago`;
  };

  const langDot = (lang, size = 10) => {
    if (!lang) return '';
    const color = LANG_COLORS[lang] || '#8b949e';
    return `<span class="lang-dot" style="width:${size}px;height:${size}px;background:${color};border-radius:50%;display:inline-block;flex-shrink:0;"></span>`;
  };

  const starIcon = `<svg viewBox="0 0 16 16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/></svg>`;
  const forkIcon = `<svg viewBox="0 0 16 16"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0zM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0z"/></svg>`;
  const linkIcon = `<svg viewBox="0 0 16 16"><path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0z"/></svg>`;
  const repoIcon = `<svg viewBox="0 0 16 16"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8z"/></svg>`;

  const buildCard = (repo, featured = false) => {
    const topics = (repo.topics || []).slice(0, 5).map(
      (t) => `<span class="topic-tag">${t}</span>`
    ).join('');

    const links = [
      `<a href="${repo.html_url}" target="_blank" rel="noopener" class="repo-link">${repoIcon} View repo</a>`,
      repo.homepage
        ? `<a href="${repo.homepage}" target="_blank" rel="noopener" class="repo-link">${linkIcon} Live demo</a>`
        : '',
    ].filter(Boolean).join('');

    return `
      <article class="repo-card${featured ? ' featured' : ''}" data-lang="${repo.language || ''}" data-name="${formatName(repo.name).toLowerCase()}" data-desc="${(repo.description || '').toLowerCase()}">
        <div class="repo-card-top">
          <div class="repo-name">${formatName(repo.name)}</div>
          ${featured ? '<span class="featured-badge">Featured</span>' : ''}
        </div>
        <p class="repo-desc">${repo.description || 'No description yet.'}</p>
        ${topics ? `<div class="repo-topics">${topics}</div>` : ''}
        <div class="repo-meta">
          ${repo.language ? `<span class="repo-lang">${langDot(repo.language)} ${repo.language}</span>` : ''}
          ${repo.stargazers_count > 0 ? `<span class="repo-stat">${starIcon} ${repo.stargazers_count}</span>` : ''}
          ${repo.forks_count > 0 ? `<span class="repo-stat">${forkIcon} ${repo.forks_count}</span>` : ''}
          <span class="repo-updated">${timeAgo(repo.pushed_at)}</span>
        </div>
        <div class="repo-links">${links}</div>
      </article>`;
  };

  let allRepos = [];
  let featuredRepos = [];
  let regularRepos = [];
  let activeLang = 'all';
  let activeSort = 'updated';
  let searchQuery = '';

  const $ = (id) => document.getElementById(id);

  const showError = (msg) => {
    $('loading-state').style.display = 'none';
    const el = $('error-state');
    el.style.display = 'block';
    $('error-msg').textContent = msg;
  };

  const buildFilterBar = (repos) => {
    const langs = [...new Set(repos.map((r) => r.language).filter(Boolean))].sort();
    const bar = $('filter-bar');
    langs.forEach((lang) => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.dataset.lang = lang;
      btn.innerHTML = `${langDot(lang, 8)} ${lang}`;
      bar.appendChild(btn);
    });

    bar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      bar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeLang = btn.dataset.lang;
      render();
    });
  };

  const sortRepos = (repos) => {
    const copy = [...repos];
    if (activeSort === 'stars') return copy.sort((a, b) => b.stargazers_count - a.stargazers_count);
    if (activeSort === 'alpha') return copy.sort((a, b) => a.name.localeCompare(b.name));
    return copy.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
  };

  const filterRepos = (repos) => {
    return repos.filter((r) => {
      const langMatch = activeLang === 'all' || r.language === activeLang;
      const searchMatch = !searchQuery ||
        r.name.toLowerCase().includes(searchQuery) ||
        (r.description || '').toLowerCase().includes(searchQuery);
      return langMatch && searchMatch;
    });
  };

  const render = () => {
    const filteredFeatured = filterRepos(sortRepos(featuredRepos));
    const filteredRegular = filterRepos(sortRepos(regularRepos));

    const featuredGrid = $('featured-grid');
    const reposGrid = $('repos-grid');
    const featuredSection = $('featured-section');
    const reposSection = $('repos-section');

    featuredGrid.innerHTML = filteredFeatured.map((r) => buildCard(r, true)).join('');
    featuredSection.style.display = filteredFeatured.length ? 'block' : 'none';

    const allFiltered = [...filteredFeatured, ...filteredRegular];
    if (filteredRegular.length === 0 && filteredFeatured.length === 0) {
      reposGrid.innerHTML = '<div class="empty-state">No repos match your search.</div>';
      reposSection.style.display = 'block';
    } else {
      reposGrid.innerHTML = filteredRegular.map((r) => buildCard(r, false)).join('');
      reposSection.style.display = filteredRegular.length ? 'block' : 'none';
    }

    $('repos-label').textContent = `All Repos (${filteredRegular.length})`;
  };

  const load = () => {
    $('loading-state').style.display = 'block';
    $('error-state').style.display = 'none';
    $('featured-section').style.display = 'none';
    $('repos-section').style.display = 'none';

    fetch(API_URL)
      .then((res) => {
        if (res.status === 403) throw new Error('GitHub API rate limit reached. Try again in a minute.');
        if (!res.ok) throw new Error('Failed to load repositories.');
        return res.json();
      })
      .then((repos) => {
        allRepos = repos.filter((r) => !r.fork);
        featuredRepos = allRepos.filter(isFeatured);
        regularRepos = allRepos.filter((r) => !isFeatured(r));

        $('loading-state').style.display = 'none';
        buildFilterBar(allRepos);
        render();
      })
      .catch((err) => showError(err.message));
  };

  $('retry-btn').addEventListener('click', load);

  $('sort').addEventListener('change', (e) => {
    activeSort = e.target.value;
    render();
  });

  $('search').addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    render();
  });

  load();
})();
