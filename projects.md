---
layout: default
title: Project Control Panel
---

<style>
.project-dashboard {
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-intro {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-left: 4px solid #007bff;
}

.project-section {
  margin-bottom: 40px;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.5em;
  font-weight: bold;
}

.project-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.project-card.active {
  border-left: 4px solid #28a745;
}

.project-card.warm {
  border-left: 4px solid #ffc107;
}

.project-card.dormant {
  border-left: 4px solid #dc3545;
  opacity: 0.8;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 12px;
}

.project-title {
  font-size: 1.3em;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.status-badge {
  font-size: 0.8em;
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: 600;
}

.status-active {
  background: #d4edda;
  color: #155724;
}

.status-warm {
  background: #fff3cd;
  color: #856404;
}

.status-dormant {
  background: #f8d7da;
  color: #721c24;
}

.status-planning {
  background: #d1ecf1;
  color: #0c5460;
}

.project-meta {
  font-size: 0.85em;
  color: #666;
  margin-bottom: 12px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 10px 0;
}

.tech-badge {
  background: #e9ecef;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.75em;
  color: #495057;
}

.project-section-content {
  margin: 12px 0;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 4px;
  font-size: 0.9em;
}

.project-section-content h4 {
  margin: 0 0 8px 0;
  font-size: 0.9em;
  color: #495057;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-section-content code {
  background: #282c34;
  color: #abb2bf;
  padding: 10px;
  border-radius: 4px;
  display: block;
  margin-top: 5px;
  font-size: 0.85em;
  overflow-x: auto;
}

.exit-note {
  font-style: italic;
  color: #6c757d;
  padding: 8px;
  background: #fff;
  border-left: 3px solid #6c757d;
  margin-top: 8px;
}

.next-step {
  font-weight: 600;
  color: #007bff;
}

.project-link {
  display: inline-block;
  margin-top: 8px;
  color: #007bff;
  text-decoration: none;
  font-size: 0.85em;
}

.project-link:hover {
  text-decoration: underline;
}

.simple-list {
  list-style: none;
  padding: 0;
}

.simple-list li {
  padding: 8px;
  margin: 5px 0;
  background: #f8f9fa;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .project-cards {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="project-dashboard">

<div class="dashboard-intro">
  <h1>🎯 Project Control Panel</h1>
  <p><strong>Purpose:</strong> Reduce startup friction. Know exactly where to start.</p>
  <p><em>When leaving a project, update its Exit Note. When entering, read Start Here first.</em></p>
</div>

<!-- ACTIVE PROJECTS -->
<div class="project-section">
  <div class="section-header">🟢 Active Projects</div>

  <div class="project-cards">

    <!-- Reconnect (Personal CRM) -->
    <div class="project-card active">
      <div class="project-header">
        <h3 class="project-title">Reconnect (Personal CRM)</h3>
        <span class="status-badge status-active">Active</span>
      </div>
      <div class="project-meta">
        <strong>Last Worked:</strong> Feb 13, 2026 | <strong>Priority:</strong> High
      </div>
      <div class="tech-stack">
        <span class="tech-badge">React</span>
        <span class="tech-badge">TypeScript</span>
        <span class="tech-badge">Supabase</span>
        <span class="tech-badge">PWA</span>
      </div>

      <div class="project-section-content">
        <h4>Start Here</h4>
        <code>cd Reconnect/web<br>npm install<br>npm run dev</code>
      </div>

      <div class="project-section-content">
        <h4>Next Steps</h4>
        <p class="next-step">Test voice recording with pause/resume feature, integrate AI processing</p>
      </div>

      <div class="exit-note">
        <strong>Exit Note:</strong> Recent features added: pause/resume timer, auto-process triggers, hashtag extraction, Google OAuth. Ready for AI integration testing.
      </div>
    </div>

    <!-- Tabletalk -->
    <div class="project-card active">
      <div class="project-header">
        <h3 class="project-title">Tabletalk</h3>
        <span class="status-badge status-active">In Progress</span>
      </div>
      <div class="project-meta">
        <strong>Last Worked:</strong> Sep 5, 2025 | <strong>Priority:</strong> Medium
      </div>
      <div class="tech-stack">
        <span class="tech-badge">HTML</span>
        <span class="tech-badge">FastAPI</span>
        <span class="tech-badge">Python</span>
      </div>

      <div class="project-section-content">
        <h4>Start Here</h4>
        <code>cd tabletalk<br>uvicorn main:app --reload</code>
        <a href="https://github.com/Ram-N/tabletalk" class="project-link" target="_blank">🔗 GitHub</a>
      </div>

      <div class="project-section-content">
        <h4>Next Steps</h4>
        <p class="next-step">Deploy to Vercel, add more query features</p>
      </div>

      <div class="exit-note">
        <strong>Exit Note:</strong> Natural language CSV querying working well
      </div>
    </div>

    <!-- GitHub Pages -->
    <div class="project-card active">
      <div class="project-header">
        <h3 class="project-title">GitHub Pages</h3>
        <span class="status-badge status-active">In Progress</span>
      </div>
      <div class="project-meta">
        <strong>Last Worked:</strong> Sep 1, 2025 | <strong>Priority:</strong> Medium
      </div>
      <div class="tech-stack">
        <span class="tech-badge">Jekyll</span>
        <span class="tech-badge">GitHub Pages</span>
      </div>

      <div class="project-section-content">
        <h4>Start Here</h4>
        <code>cd /home/ram/projects/Ram-N.github.io<br>bundle exec jekyll serve</code>
        <a href="https://ram-n.github.io/" class="project-link" target="_blank">🔗 Live Site</a>
      </div>

      <div class="project-section-content">
        <h4>Next Steps</h4>
        <p class="next-step">Redesign projects dashboard with card layout (IN PROGRESS)</p>
      </div>

      <div class="exit-note">
        <strong>Exit Note:</strong> Moving to card-based dashboard layout
      </div>
    </div>

    <!-- YT Videos -->
    <div class="project-card active">
      <div class="project-header">
        <h3 class="project-title">YT Videos</h3>
        <span class="status-badge status-active">Active</span>
      </div>
      <div class="project-meta">
        <strong>Last Worked:</strong> Aug 31, 2025 | <strong>Priority:</strong> Medium
      </div>
      <div class="tech-stack">
        <span class="tech-badge">Python</span>
        <span class="tech-badge">HuggingFace</span>
      </div>

      <div class="project-section-content">
        <h4>Next Steps</h4>
        <p class="next-step">Continue knowledge distillation video</p>
      </div>

      <div class="exit-note">
        <strong>Exit Note:</strong> Align video script + code
      </div>
    </div>

  </div>
</div>

<!-- WARM / ON DECK -->
<div class="project-section">
  <div class="section-header">🟡 Warm / On Deck</div>

  <div class="project-cards">

    <!-- NOVA -->
    <div class="project-card warm">
      <div class="project-header">
        <h3 class="project-title">NOVA</h3>
        <span class="status-badge status-warm">On Hold</span>
      </div>
      <div class="project-meta">
        <strong>Last Worked:</strong> Aug 29, 2025 | <strong>Priority:</strong> Medium
      </div>
      <div class="tech-stack">
        <span class="tech-badge">React</span>
        <span class="tech-badge">FastAPI</span>
        <span class="tech-badge">HuggingFace</span>
      </div>

      <div class="project-section-content">
        <h4>Start Here</h4>
        <code>cd /home/ram/projects/nova/mvp2/nova-backend-simple<br>source nova-venv/bin/activate<br>python main.py</code>
        <a href="https://nova-ivory-three.vercel.app/" class="project-link" target="_blank">🔗 Live Demo</a>
      </div>

      <div class="project-section-content">
        <h4>Next Steps</h4>
        <p class="next-step">Color-code releases, UI polish, add favicon</p>
      </div>

      <div class="exit-note">
        <strong>Exit Note:</strong> Needs consistent trigger logic refinement. Focus shifted to Reconnect.
      </div>
    </div>

    <!-- Lifelines -->
    <div class="project-card warm">
      <div class="project-header">
        <h3 class="project-title">Lifelines</h3>
        <span class="status-badge status-planning">Planning</span>
      </div>
      <div class="project-meta">
        <strong>Last Worked:</strong> Sep 1, 2025 | <strong>Priority:</strong> Medium
      </div>
      <div class="tech-stack">
        <span class="tech-badge">React</span>
        <span class="tech-badge">Vite</span>
        <span class="tech-badge">Vercel</span>
      </div>

      <div class="project-section-content">
        <h4>Next Steps</h4>
        <p class="next-step">Build first playable version</p>
      </div>

      <div class="exit-note">
        <strong>Note:</strong> Requires deep focus
      </div>
    </div>

    <!-- Globetrek -->
    <div class="project-card warm">
      <div class="project-header">
        <h3 class="project-title">Globetrek</h3>
        <span class="status-badge status-warm">On Hold</span>
      </div>
      <div class="project-meta">
        <strong>Last Worked:</strong> Mar 15, 2025 | <strong>Priority:</strong> Low
      </div>
      <div class="tech-stack">
        <span class="tech-badge">React</span>
        <span class="tech-badge">Firebase</span>
      </div>

      <div class="project-section-content">
        <h4>Start Here</h4>
        <code>npm run dev</code>
      </div>

      <div class="project-section-content">
        <h4>Next Steps</h4>
        <p class="next-step">Finalize wireframes, basic MVP</p>
      </div>

      <div class="exit-note">
        <strong>Blocker:</strong> Data prep for neighbors needed
      </div>
    </div>

    <!-- Book AI Agents -->
    <div class="project-card warm">
      <div class="project-header">
        <h3 class="project-title">Book: AI Agents</h3>
        <span class="status-badge status-warm">On Deck</span>
      </div>
      <div class="project-meta">
        <strong>Priority:</strong> Medium
      </div>
    </div>

    <!-- Timeline Game -->
    <div class="project-card warm">
      <div class="project-header">
        <h3 class="project-title">Timeline Game Modernization</h3>
        <span class="status-badge status-warm">On Deck</span>
      </div>
      <div class="project-meta">
        <strong>Priority:</strong> Low
      </div>
    </div>

  </div>
</div>

<!-- DORMANT -->
<div class="project-section">
  <div class="section-header">🔴 Dormant</div>
  <p style="color: #6c757d; font-style: italic; margin-bottom: 15px;">Only revive if strategic</p>

  <ul class="simple-list">
    <li><strong>PhotoScribe</strong> - Photo cataloging with AI captions</li>
    <li><strong>Monte Carlo Dashboard</strong> - Refactor needed</li>
  </ul>
</div>

<!-- SHOWCASE PROJECTS -->
<div class="project-section">
  <div class="section-header">🎨 Showcase Projects</div>

  <div class="project-cards">

    <!-- LitMap -->
    <div class="project-card">
      <div class="project-header">
        <h3 class="project-title">LitMap</h3>
      </div>
      <p>Interactive literary exploration tool</p>
    </div>

    <!-- Games of History -->
    <div class="project-card">
      <div class="project-header">
        <h3 class="project-title">Games of History</h3>
      </div>
      <p>Historical timeline game series</p>
    </div>

    <!-- Pivot Master -->
    <div class="project-card">
      <div class="project-header">
        <h3 class="project-title">Pivot Master</h3>
      </div>
      <p>Canvas-based game showcasing iterative development stages</p>
    </div>

    <!-- AI Demystified -->
    <div class="project-card">
      <div class="project-header">
        <h3 class="project-title">AI Demystified</h3>
      </div>
      <p>Quiz-first learning course for students aged 12-18. Makes AI literacy accessible.</p>
      <div class="tech-stack">
        <span class="tech-badge">Jekyll</span>
        <span class="tech-badge">Education</span>
      </div>
    </div>

    <!-- Clue Chain -->
    <div class="project-card">
      <div class="project-header">
        <h3 class="project-title">Clue Chain</h3>
      </div>
      <p>Word puzzle game with progressive clue reveals and dynamic scoring</p>
    </div>

  </div>
</div>

<!-- EARLIER PROJECTS (from _projects collection) -->
<div class="project-section">
  <div class="section-header">📦 Earlier Projects</div>
  <ul class="simple-list">
  {% for project in site.projects %}
    <li>
      <strong><a href="{{ project.link }}">{{ project.title }}</a></strong><br/>
      {{ project.description }}
    </li>
  {% endfor %}
  </ul>
</div>

</div>

---

## Weekly Ritual (5 minutes, Sunday)

- Move projects between sections
- Update "Next Concrete Step"
- Update Exit Notes
- Delete anything stale

---

## Rule of This Page

Every active project must have:
- A single next step
- A start command
- An exit note

**If it does not have these, it is not active.**
