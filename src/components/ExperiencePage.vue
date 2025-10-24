<script setup>
import { onMounted, ref } from 'vue'

const experiences = [
  {
    company_name: 'Proweaver Inc.',
    company_logo: 'photos/experience_1.png',
    company_logo_alt: 'Proweaver Inc. Logo',
    position: 'Fullstack Web Developer',
    start_date: 'January 2024',
    end_date: 'December 2024',
    duration: '1 year',
    description:
      'I developed responsive web applications using Vue.js, CodeIgniter, and Tailwind CSS, collaborating with designers to implement user-friendly interfaces. I built scalable backend solutions with MySQL and Firebase, integrated secure APIs, and enhanced WordPress functionality. Additionally, I created dynamic GPS mapping features with Mapbox and developed cross-platform mobile apps using Ionic for Android and iOS.',
    highlights: [
      'Built responsive web applications with Vue.js and Tailwind CSS',
      'Developed scalable backend solutions with MySQL and Firebase',
      'Created GPS mapping features using Mapbox',
      'Built cross-platform mobile apps with Ionic'
    ],
    technologies: ['Vue.js', 'CodeIgniter', 'Tailwind CSS', 'MySQL', 'Firebase', 'Mapbox', 'Ionic']
  },
  {
    company_name: 'KYOCERA Document Solutions Inc.',
    company_logo: 'photos/experience_2.png',
    company_logo_alt: 'KYOCERA Document Solutions Inc. Logo',
    position: 'Software Engineer Intern',
    start_date: 'February 2023',
    end_date: 'December 2023',
    duration: '11 months',
    description:
      'I developed automation release applications using C#, .NET, and React, streamlining processes and reducing manual input by 40%. By applying Agile and Scrum methodologies, I collaborated with cross-functional teams to ensure high-quality software through thorough requirement gathering and rigorous testing. Additionally, I conducted hands-on manual testing, cutting testing time by 30%, and delivering reliable, user-friendly applications for multi-functional printers.',
    highlights: [
      'Reduced manual input by 40% through automation',
      'Applied Agile and Scrum methodologies',
      'Cut testing time by 30% through hands-on testing',
      'Delivered reliable applications for multi-functional printers'
    ],
    technologies: ['C#', '.NET', 'React', 'Agile', 'Scrum']
  }
]

const certificates = [
  {
    name: 'Foundational C# with Microsoft',
    issuer: 'Microsoft & freeCodeCamp',
    description:
      'This certification program provided a solid foundation in C# programming, covering key concepts such as object-oriented programming, data structures, and basic software development principles. Through practical exercises and hands-on coding projects, I gained proficiency in writing, debugging, and optimizing C# applications.',
    date: 'November 2024',
    number: 'calesajohnrey-fcswm',
    link: 'https://www.freecodecamp.org/certification/calesajohnrey/foundational-c-sharp-with-microsoft',
    icon: 'verified'
  },
  {
    name: 'Certificate in Computer Technology',
    issuer: 'Educational Institution',
    description:
      'This certificate program provided a comprehensive foundation in computer systems, software development, and IT infrastructure. It covered key topics such as programming languages, database management, network security, hardware, and troubleshooting. Through hands-on projects and coursework, I gained practical skills in technology implementation and problem-solving.',
    date: 'December 2023',
    number: '—',
    link: 'https://www.linkedin.com/in/calesajohnrey/details/certifications/',
    icon: 'school'
  }
]

const expandedExperience = ref(null)

function toggleExperience(index) {
  expandedExperience.value = expandedExperience.value === index ? null : index
}

onMounted(() => {
  const experienceElements = document.querySelectorAll('.experience-card')
  const certificateElements = document.querySelectorAll('.certificate-card')

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

  experienceElements.forEach((el) => observer.observe(el))
  certificateElements.forEach((el) => observer.observe(el))
})
</script>

<template>
  <section class="experience-section">
    <div class="experience-container wrapper">
      <!-- Experience Header -->
      <div class="section-header">
        <div class="header-content">
          <span class="section-badge">Professional Journey</span>
          <h2 class="section-title">Experience & Achievements</h2>
          <p class="section-description">
            A track record of delivering impactful solutions across diverse projects and technologies
          </p>
        </div>
      </div>

      <!-- Timeline -->
      <div class="timeline-wrapper">
        <div class="timeline-line"></div>

        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="experience-card"
          :class="{ 'experience-expanded': expandedExperience === index }"
        >
          <!-- Timeline Node -->
          <div class="timeline-node">
            <div class="timeline-dot"></div>
          </div>

          <!-- Experience Content -->
          <div class="experience-content">
            <div class="experience-main">
              <!-- Company Image -->
              <div class="company-image-wrapper">
                <img
                  class="company-image"
                  :src="experience.company_logo"
                  :alt="experience.company_logo_alt"
                  loading="lazy"
                />
              </div>

              <!-- Experience Info -->
              <div class="experience-info">
                <div class="experience-header-row">
                  <div class="experience-title-group">
                    <h3 class="position-title">{{ experience.position }}</h3>
                    <div class="company-details">
                      <span class="company-name">{{ experience.company_name }}</span>
                      <span class="date-separator">•</span>
                      <span class="experience-duration">{{ experience.duration }}</span>
                    </div>
                  </div>
                  <button
                    class="expand-button"
                    @click="toggleExperience(index)"
                    aria-label="Toggle details"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      :class="{ 'rotate-180': expandedExperience === index }"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>

                <div class="date-range">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{{ experience.start_date }} - {{ experience.end_date }}</span>
                </div>

                <p class="experience-description">{{ experience.description }}</p>

                <!-- Expanded Content -->
                <Transition name="expand">
                  <div v-if="expandedExperience === index" class="expanded-content">
                    <div class="highlights-section">
                      <h4 class="highlights-title">Key Achievements</h4>
                      <ul class="highlights-list">
                        <li v-for="(highlight, idx) in experience.highlights" :key="idx" class="highlight-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{{ highlight }}</span>
                        </li>
                      </ul>
                    </div>

                    <div class="technologies-section">
                      <h4 class="technologies-title">Technologies Used</h4>
                      <div class="technologies-tags">
                        <span v-for="(tech, idx) in experience.technologies" :key="idx" class="tech-tag">
                          {{ tech }}
                        </span>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certificates Section -->
      <div class="certificates-section">
        <div class="certificates-header">
          <h3 class="certificates-title">Certifications</h3>
          <p class="certificates-subtitle">Professional credentials and achievements</p>
        </div>

        <div class="certificates-grid">
          <div
            v-for="(certificate, index) in certificates"
            :key="index"
            class="certificate-card"
          >
            <div class="certificate-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M12 2v4"></path>
                <path d="M12 18v4"></path>
                <path d="m4.93 4.93 2.83 2.83"></path>
                <path d="m16.24 16.24 2.83 2.83"></path>
                <path d="M2 12h4"></path>
                <path d="M18 12h4"></path>
                <path d="m4.93 19.07 2.83-2.83"></path>
                <path d="m16.24 7.76 2.83-2.83"></path>
              </svg>
            </div>

            <div class="certificate-content">
              <h4 class="certificate-name">{{ certificate.name }}</h4>
              <p class="certificate-issuer">{{ certificate.issuer }}</p>
              <p class="certificate-description">{{ certificate.description }}</p>

              <div class="certificate-meta">
                <div class="certificate-date">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{{ certificate.date }}</span>
                </div>
                <span class="certificate-separator">•</span>
                <span class="certificate-number">{{ certificate.number }}</span>
              </div>

              <a
                :href="certificate.link"
                target="_blank"
                rel="noopener noreferrer"
                class="certificate-link"
              >
                <span>View Certificate</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Experience Section */
.experience-section {
  padding: 6rem 1.5rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.experience-container {
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

/* Timeline */
.timeline-wrapper {
  position: relative;
  padding-left: 2rem;
}

.timeline-line {
  position: absolute;
  left: 0.5rem;
  top: 2rem;
  bottom: 2rem;
  width: 2px;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

/* Experience Card */
.experience-card {
  position: relative;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.experience-card.visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-node {
  position: absolute;
  left: -1.5rem;
  top: 2rem;
}

.timeline-dot {
  width: 1rem;
  height: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 3px solid #f8fafc;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);
}

.experience-content {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid #f3f4f6;
  transition: all 0.3s ease;
}

.experience-card:hover .experience-content {
  border-color: #e5e7eb;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.experience-main {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  align-items: start;
}

/* Company Image */
.company-image-wrapper {
  width: 200px;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #f3f4f6;
  flex-shrink: 0;
}

.company-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.experience-card:hover .company-image {
  transform: scale(1.05);
}

/* Experience Info */
.experience-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.experience-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.experience-title-group {
  flex: 1;
}

.position-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.company-details {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.company-name {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
}

.date-separator {
  color: #d1d5db;
}

.experience-duration {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.expand-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #f3f4f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.expand-button:hover {
  background: #e5e7eb;
  color: #667eea;
}

.expand-button svg {
  transition: transform 0.3s ease;
}

.date-range {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.experience-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
}

/* Expanded Content */
.expanded-content {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 2px solid #f3f4f6;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 1000px;
}

.highlights-section,
.technologies-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlights-title,
.technologies-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
}

.highlights-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #374151;
  line-height: 1.6;
}

.highlight-item svg {
  flex-shrink: 0;
  margin-top: 0.125rem;
  color: #667eea;
}

.technologies-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.5rem 1rem;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
}

/* Certificates Section */
.certificates-section {
  margin-top: 6rem;
}

.certificates-header {
  text-align: center;
  margin-bottom: 3rem;
}

.certificates-title {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.certificates-subtitle {
  font-size: 1rem;
  color: #6b7280;
}

.certificates-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.certificate-card {
  display: flex;
  gap: 2rem;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  border: 2px solid #f3f4f6;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.certificate-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.certificate-card:hover {
  border-color: #e5e7eb;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.certificate-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
  flex-shrink: 0;
}

.certificate-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.certificate-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.3;
}

.certificate-issuer {
  font-size: 0.875rem;
  font-weight: 600;
  color: #667eea;
  margin-top: -0.5rem;
}

.certificate-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #6b7280;
}

.certificate-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  font-size: 0.875rem;
  color: #6b7280;
}

.certificate-date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.certificate-separator {
  color: #d1d5db;
}

.certificate-number {
  font-weight: 500;
  font-family: monospace;
}

.certificate-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 8px;
  width: fit-content;
  transition: all 0.3s ease;
}

.certificate-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* Responsive Design */
@media (min-width: 768px) {
  .section-title {
    font-size: 3rem;
  }

  .certificates-title {
    font-size: 2.5rem;
  }

  .certificates-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .experience-section {
    padding: 8rem 2rem;
  }

  .section-title {
    font-size: 3.5rem;
  }
}

@media (max-width: 767px) {
  .experience-section {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .timeline-wrapper {
    padding-left: 1.5rem;
  }

  .experience-main {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .company-image-wrapper {
    width: 100%;
    height: 240px;
  }

  .position-title {
    font-size: 1.25rem;
  }

  .experience-header-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .expand-button {
    align-self: flex-start;
  }

  .certificate-card {
    flex-direction: column;
    gap: 1.5rem;
  }

  .certificate-icon-wrapper {
    align-self: flex-start;
  }

  .certificate-name {
    font-size: 1.25rem;
  }

  .certificates-section {
    margin-top: 4rem;
  }

  .certificates-title {
    font-size: 1.75rem;
  }
}
</style>
