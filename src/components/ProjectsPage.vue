<script setup>
import { onMounted, ref } from 'vue'

const projects = [
  {
    name: 'Speedy Delivery and Repair',
    year: 'February 2024 - December 2024',
    description:
      'Developed a full-stack responsive website for a delivery and repair business based in South Carolina, USA',
    details: 'Built with modern web technologies to provide seamless user experience for booking delivery and repair services online.',
    link: 'https://speedyrepairanddelivery.com/',
    image: 'photos/project_1.jpeg',
    alt: 'Speedy Delivery and Repair website screenshot',
    category: 'Full Stack Web',
    technologies: ['Vue.js', 'Node.js', 'Responsive Design']
  },
  {
    name: 'Victoria\'s Paintings',
    year: 'June 2023 - July 2023',
    description:
      'Developed a full-stack responsive website for a painting business based in New Jersey, USA',
    details: 'Created an elegant portfolio showcase with service booking capabilities and gallery management system.',
    link: 'https://victoriaspainting.com/',
    image: 'photos/project_2.png',
    alt: 'Victoria\'s Paintings website screenshot',
    category: 'Full Stack Web',
    technologies: ['React', 'Firebase', 'CMS']
  },
  {
    name: 'Favio Jasso',
    year: 'February 2023 - September 2023',
    description:
      'Developed an inventory system for an analytics and marketing consultancy in New Jersey, USA',
    details: 'Comprehensive inventory management solution with real-time tracking, analytics dashboard, and reporting features.',
    link: 'https://www.faviojasso.com/',
    image: 'photos/project_3.png',
    alt: 'Favio Jasso inventory system screenshot',
    category: 'Inventory System',
    technologies: ['Angular', 'MySQL', 'Dashboard']
  }
]

const hoveredProject = ref(null)

onMounted(() => {
  const elements = document.querySelectorAll('.project-card')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
          }, idx * 150)
        }
      })
    },
    { threshold: 0.2 }
  )

  elements.forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <section class="projects-section">
    <div class="projects-container wrapper">
      <!-- Section Header -->
      <div class="section-header">
        <div class="header-content">
          <span class="section-badge">Portfolio</span>
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-description">
            A selection of client projects showcasing full-stack development expertise and creative problem-solving
          </p>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <article
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
          @mouseenter="hoveredProject = index"
          @mouseleave="hoveredProject = null"
        >
          <!-- Project Image -->
          <div class="project-image-wrapper">
            <img
              class="project-image"
              :src="project.image"
              :alt="project.alt"
              loading="lazy"
            />
            <div class="image-overlay" :class="{ 'overlay-visible': hoveredProject === index }">
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="view-project-button"
              >
                <span>View Live Site</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            <!-- Category Badge -->
            <div class="category-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              <span>{{ project.category }}</span>
            </div>
          </div>

          <!-- Project Content -->
          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ project.name }}</h3>
              <div class="project-year">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>{{ project.year }}</span>
              </div>
            </div>

            <p class="project-description">{{ project.description }}</p>
            <p class="project-details">{{ project.details }}</p>

            <div class="project-technologies">
              <span v-for="(tech, idx) in project.technologies" :key="idx" class="tech-badge">
                {{ tech }}
              </span>
            </div>

            <div class="project-footer">
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- Call to Action -->
      <div class="cta-section">
        <div class="cta-content">
          <h3 class="cta-title">Interested in working together?</h3>
          <p class="cta-description">
            Let's discuss how I can help bring your project to life with modern web solutions
          </p>
          <a href="#footer" class="cta-button">
            <span>Get in Touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Projects Section */
.projects-section {
  padding: 6rem 1.5rem;
  background: white;
}

.projects-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.header-content {
  max-width: 700px;
  margin: 0 auto;
}

.section-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.project-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid #f3f4f6;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  border-color: #e5e7eb;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

/* Project Image */
.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: #f3f4f6;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-overlay.overlay-visible {
  opacity: 1;
}

.view-project-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.view-project-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.category-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #374151;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Project Content */
.project-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.3;
}

.project-year {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.project-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
  font-weight: 500;
}

.project-details {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #6b7280;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #f3f4f6;
}

.tech-badge {
  padding: 0.375rem 0.875rem;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 600;
}

.project-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
  transition: all 0.2s ease;
}

.project-link:hover {
  gap: 0.75rem;
  color: #764ba2;
}

/* CTA Section */
.cta-section {
  margin-top: 6rem;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  line-height: 1.3;
}

.cta-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* Responsive Design */
@media (min-width: 768px) {
  .section-title {
    font-size: 3rem;
  }

  .cta-title {
    font-size: 2.5rem;
  }

  .project-card {
    grid-template-columns: 1fr 1fr;
  }

  .project-image-wrapper {
    height: 100%;
    min-height: 450px;
  }
}

@media (min-width: 1024px) {
  .projects-section {
    padding: 8rem 2rem;
  }

  .section-title {
    font-size: 3.5rem;
  }

  .projects-grid {
    gap: 4rem;
  }
}

@media (max-width: 767px) {
  .projects-section {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .project-title {
    font-size: 1.5rem;
  }

  .project-image-wrapper {
    height: 300px;
  }

  .cta-section {
    margin-top: 4rem;
    padding: 3rem 1.5rem;
  }

  .cta-title {
    font-size: 1.75rem;
  }

  .cta-description {
    font-size: 1rem;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
