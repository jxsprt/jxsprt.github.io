// Renders BLOG_POSTS into any element with id="blog-list".
// data-base: path prefix to the blog folder ("blog/" on the home page, "" inside blog/)
// data-limit: max posts to show (optional)
// data-hide-empty: hide the closest <section> (and the <hr> before it) when there are no posts
document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('blog-list');
    if (!list) return;

    const posts = (window.BLOG_POSTS || []).slice().sort((a, b) => b.date.localeCompare(a.date));
    const base = list.dataset.base || '';
    const limit = parseInt(list.dataset.limit, 10) || posts.length;

    if (posts.length === 0) {
        if (list.hasAttribute('data-hide-empty')) {
            const section = list.closest('section');
            const prev = section.previousElementSibling;
            if (prev && prev.tagName === 'HR') prev.hidden = true;
            section.hidden = true;
        } else {
            const p = document.createElement('p');
            p.textContent = 'First write-up coming soon.';
            list.appendChild(p);
        }
        return;
    }

    const fmt = (iso) => new Date(iso + 'T00:00:00').toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' });

    posts.slice(0, limit).forEach(post => {
        const card = document.createElement('div');
        card.className = 'project';

        const h3 = document.createElement('h3');
        const a = document.createElement('a');
        a.href = base + post.slug + '.html';
        a.className = 'post-link';
        a.textContent = post.title;
        h3.appendChild(a);

        const meta = document.createElement('p');
        meta.className = 'post-meta';
        meta.textContent = fmt(post.date);

        const summary = document.createElement('p');
        summary.textContent = post.summary || '';

        card.append(h3, meta, summary);

        if (post.tags && post.tags.length) {
            const tags = document.createElement('div');
            tags.className = 'project-tags';
            post.tags.forEach(t => {
                const span = document.createElement('span');
                span.className = 'tag';
                span.textContent = t;
                tags.appendChild(span);
            });
            card.appendChild(tags);
        }
        list.appendChild(card);
    });
});
