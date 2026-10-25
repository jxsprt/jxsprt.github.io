# Writing a blog post with AI

## Steps

1. Pick a slug: lowercase words joined by hyphens, e.g. `packet-tracer-vlan-lab`.
2. Put screenshots in `blog/images/<slug>/` (PNG/JPG/WebP, ideally under 500 KB each). Crop or blur IPs, hostnames, usernames, and keys first.
3. Paste the prompt below into your AI tool, followed by the contents of `blog/_template.html` and your raw notes, commands, and image file names.
4. Save the HTML it returns as `blog/<slug>.html`.
5. Paste the `posts.js` entry it returns at the top of the list in `blog/posts.js`.
6. Commit and push to `main`. The post appears on the home page and at `/blog/`.

## Prompt (copy everything below this line)

You are formatting a lab write-up for my cybersecurity portfolio blog. Use the HTML template I paste after this prompt and return TWO things:

1. The complete HTML file, based on the template:
   - Replace every `{{PLACEHOLDER}}`. `{{DATE_READABLE}}` looks like "Nov 2, 2026". `{{READ_TIME}}` is a whole number (about 200 words per minute).
   - Remove the comment at the top of the file and any example blocks that aren't used. Add or remove `<span class="tag">` entries as needed (2–4 tags).
   - Write the body inside `<article class="post">` using ONLY these elements: `<h3>`, `<p>`, `<ul>`/`<ol>`/`<li>`, `<pre><code>`, `<figure>` with `<img>` and `<figcaption>`, `<blockquote>`, `<a class="link">`, `<strong>`, `<code>`. Don't use inline styles, classes other than the ones in the template, or scripts.
   - Keep the sections Goal / Setup / Steps / Findings / Next steps unless my notes call for different ones.
   - For each image I list, add a `<figure>` with `src="images/<slug>/<file name>"`, a descriptive `alt`, and a short `<figcaption>`. Set `{{COVER_IMAGE}}` to the most representative image file name, or delete the `og:image` line if there are no images.
   - Escape `<`, `>` and `&` inside `<pre><code>` blocks.
2. One line for `blog/posts.js` in this format:
   `{ slug: "<slug>", title: "<title>", date: "YYYY-MM-DD", summary: "<one or two sentences>", tags: ["<tag>", "<tag>"] },`

Rules:
- Use only facts, commands, and results from my notes. Do not invent outcomes, metrics, tools, or certifications. If something is unclear, write `[TODO: ...]` instead of guessing.
- Replace any real IP addresses, hostnames, usernames, API keys, tokens, or passwords with placeholders like `192.0.2.10`, `server-1`, `<API_KEY>`.
- Tone: first person, clear, practical, written for hiring managers and other learners. No hype.

Slug: <slug>
Date: <YYYY-MM-DD>
Images: <file names, one per line, with a short description of each>
Notes:
<paste notes here>
