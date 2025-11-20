// Studio Dashboard - Dynamic Card Generation
(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStudio);
  } else {
    initStudio();
  }

  function initStudio() {
    loadProjects();
  }

  async function loadProjects() {
    const gridContainer = document.getElementById('projects-grid');

    if (!gridContainer) {
      console.error('Projects grid container not found');
      return;
    }

    // Add loading state
    gridContainer.classList.add('loading');

    try {
      const response = await fetch('/data/projects.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const projects = await response.json();

      // Clear loading state
      gridContainer.classList.remove('loading');

      // Generate cards
      projects.forEach(project => {
        const card = createProjectCard(project);
        gridContainer.appendChild(card);
      });

      // Add click handlers
      attachCardHandlers();

    } catch (error) {
      console.error('Failed to load projects:', error);
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #e74c3c;">
          <p>Failed to load projects. Please try again later.</p>
        </div>
      `;
    }
  }

  function createProjectCard(project) {
    const container = document.createElement('div');
    container.className = 'project-card-container';
    container.setAttribute('data-project-id', project.id);

    const card = document.createElement('div');
    card.className = 'project-card';

    // Front face
    const front = createCardFront(project);

    // Back face
    const back = createCardBack(project);

    card.appendChild(front);
    card.appendChild(back);
    container.appendChild(card);

    return container;
  }

  function createCardFront(project) {
    const front = document.createElement('div');
    front.className = `card-face card-front category-${getCategorySlug(project.category)}`;

    // Icon
    const icon = document.createElement('img');
    icon.className = 'card-icon';
    icon.src = `/assets/icons/${project.icon}`;
    icon.alt = `${project.title} icon`;
    icon.onerror = function() {
      // Fallback to a generic icon if SVG fails to load
      this.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.className = 'card-icon-fallback';
      fallback.textContent = project.title.charAt(0);
      fallback.style.cssText = `
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: ${project.color};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: bold;
        color: white;
      `;
      this.parentNode.insertBefore(fallback, this);
    };

    // Title
    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = project.title;

    front.appendChild(icon);
    front.appendChild(title);

    return front;
  }

  function createCardBack(project) {
    const back = document.createElement('div');
    back.className = 'card-face card-back';
    back.style.borderTop = `4px solid ${project.color}`;

    // Description
    const description = document.createElement('p');
    description.className = 'card-description';
    description.textContent = project.description;

    // Status
    const status = document.createElement('div');
    status.className = `card-status status-${getStatusSlug(project.status)}`;
    status.textContent = project.status;

    back.appendChild(description);
    back.appendChild(status);

    return back;
  }

  function attachCardHandlers() {
    const containers = document.querySelectorAll('.project-card-container');

    containers.forEach(container => {
      const card = container.querySelector('.project-card');

      // Click handler - navigate to project URL
      container.addEventListener('click', function(e) {
        // Only navigate if not already flipped
        const projectId = this.getAttribute('data-project-id');
        const projectData = getProjectData(projectId);

        if (projectData && projectData.url && projectData.url !== '#') {
          // Small delay to let flip animation show
          setTimeout(() => {
            window.location.href = projectData.url;
          }, 300);
        }
      });

      // Keyboard accessibility
      container.setAttribute('tabindex', '0');
      container.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.classList.toggle('flipped');
        }
      });
    });
  }

  function getCategorySlug(category) {
    return category.toLowerCase().replace(/\s+/g, '-');
  }

  function getStatusSlug(status) {
    return status.toLowerCase().replace(/\s+/g, '-');
  }

  // Store project data for click handling
  let projectsData = [];

  async function loadProjectsData() {
    try {
      const response = await fetch('/data/projects.json');
      projectsData = await response.json();
    } catch (error) {
      console.error('Failed to load projects data:', error);
    }
  }

  function getProjectData(projectId) {
    return projectsData.find(p => p.id === projectId);
  }

  // Load projects data on init
  loadProjectsData();

  // Export for debugging
  window.studioDebug = {
    reload: loadProjects,
    projects: () => projectsData
  };
})();
