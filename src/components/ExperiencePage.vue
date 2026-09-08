<script setup>
import { computed, onMounted, reactive, ref } from 'vue'

const today = new Date()

// Jobs that are still ongoing shouldn't show a duration that slowly goes
// stale, so we work it out from the start date every time the page loads.
function durationSince(isoStartDate) {
  const start = new Date(isoStartDate)
  const totalMonths = Math.max(
    (today.getFullYear() - start.getFullYear()) * 12 + (today.getMonth() - start.getMonth()),
    0
  )
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const parts = []

  if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`)
  if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`)

  return parts.length ? parts.join(' ') : 'Less than a month'
}

const experiences = computed(() => [
  {
    company_name: 'Transparent Energy',
    company_initials: 'TE',
    company_logo: 'photos/experience_4.png',
    company_logo_alt: 'Transparent Energy logo',
    position: 'Senior Software Engineer',
    location: 'New Jersey, United States (Remote)',
    start_date: 'July 2025',
    end_date: 'Present',
    duration: durationSince('2025-07-07'),
    description:
      'I help build the web app that this company uses to sell energy plans to businesses. I work on both halves of it: the screens people click on (Vue.js) and the hidden part that saves and moves all the information (Laravel and PHP). Every week I pick up 3 to 8 tasks and carry each one all the way from the first plan to the moment it goes live for real users.',
    highlights: [
      'Finish 3 to 8 tasks a week, from planning to testing to going live',
      'Built reports that show the sales team how much money each deal is worth',
      'Rebuilt the quote-to-contract steps so details fill in on their own instead of being typed by hand',
      'Made the app save edits 12 times faster, from 60 seconds down to 5',
      'Put every client file (quotes, contracts, and invoices) in one place with simple tabs',
      'Help other teams with quick website fixes, usually done within about 5 hours'
    ],
    technologies: ['PHP', 'Laravel', 'Vue.js', 'JavaScript', 'MySQL', 'GitHub', 'Jira']
  },
  {
    company_name: 'Cloudstaff Philippines Inc.',
    company_initials: 'CS',
    company_logo: 'photos/experience_3.png',
    company_logo_alt: 'Cloudstaff Philippines Inc. logo',
    position: 'Senior Software Engineer',
    location: 'Cebu, Philippines',
    start_date: 'March 2025',
    end_date: 'July 2025',
    duration: '5 months',
    description:
      'I worked on a platform that insurance brokers use to sell policies and keep track of their sales. Most of my job was the hidden part of the app: the code that sends and saves information, and the plan for how that information is stored. I also built screens with Vue.js and drew the layouts in Figma first, so the team and the client could agree on the idea before anyone wrote code.',
    highlights: [
      'Built 20+ ways for the app to send and receive data (REST API endpoints)',
      'Added "Sign in with Google" so users do not need to remember another password',
      'Designed a database of 20+ connected tables to hold all the app data',
      'Built the screens in Vue.js and hooked them up to the data behind them',
      'Drew the app layouts in Figma so everyone agreed on the plan before coding',
      'Checked teammates’ code before it was merged to keep quality high'
    ],
    technologies: ['Python', 'Django', 'Node.js', 'Vue.js', 'MySQL', 'OAuth 2.0', 'Figma']
  },
  {
    company_name: 'Proweaver Inc.',
    company_initials: 'PW',
    company_logo: 'photos/experience_1.png',
    company_logo_alt: 'Proweaver Inc. logo',
    position: 'Full Stack Software Engineer (Web and Mobile)',
    location: 'Cebu, Philippines',
    start_date: 'January 2024',
    end_date: 'December 2024',
    duration: '1 year',
    description:
      'I built websites for clients that look and work well on phones, tablets, and computers. I turned the designers’ drawings into real, working pages, then wrote the code behind them that stores and loads the data. I also built a phone app for both Android and iPhone that shows a driver moving on a live map.',
    highlights: [
      'Built websites with Vue.js and Tailwind CSS that fit any screen size',
      'Wrote the behind-the-scenes code and data storage using MySQL and Firebase',
      'Added live map tracking with Mapbox so customers can see where a driver is',
      'Shipped one phone app to both the Google Play Store and the Apple App Store',
      'Updated and improved older client websites first built by other developers'
    ],
    technologies: ['Vue.js', 'CodeIgniter', 'Tailwind CSS', 'MySQL', 'Firebase', 'Mapbox', 'Ionic']
  },
  {
    company_name: 'KYOCERA Document Solutions Inc.',
    company_initials: 'KY',
    company_logo: 'photos/experience_2.png',
    company_logo_alt: 'KYOCERA Document Solutions Inc. logo',
    position: 'Software Engineer',
    location: 'Cebu, Philippines',
    start_date: 'February 2023',
    end_date: 'December 2023',
    duration: '11 months',
    description:
      'I made an internal tool that does the boring, repeated steps the testing team used to do by hand, which saved them a lot of time. I also added new features to the software that runs on big office printers, and I stepped in as the main developer for that software whenever the lead was away.',
    highlights: [
      'Built a tool in C# and React that cut manual typing by about 40%',
      'Cut the time needed to test a new version by about 30%',
      'Added 5+ new features, including in-app search, to the printer software',
      'Took over as main developer for the printer software when the lead was away',
      'Tested every release against a checklist before it reached customers'
    ],
    technologies: ['C#', '.NET', 'React', 'Java', 'Agile', 'Scrum']
  }
])

const certificates = [
  {
    name: 'Foundational C# with Microsoft',
    issuer: 'Microsoft and freeCodeCamp',
    description:
      'A course that taught me the C# programming language from the ground up: how to organize code into reusable pieces, how to store lists of information, and how to find and fix mistakes. I finished it by writing and correcting real code, not just reading about it.',
    date: 'November 2024',
    number: 'calesajohnrey-fcswm',
    link: 'https://www.freecodecamp.org/certification/calesajohnrey/foundational-c-sharp-with-microsoft',
    icon: 'verified'
  },
  {
    name: 'Certificate in Computer Technology',
    issuer: 'University of San Carlos',
    description:
      'A two-year program covering the main parts of working with computers: writing code, building websites, storing information in databases, keeping systems safe, and fixing hardware problems. Most of the learning came from real projects rather than lectures.',
    date: 'January 2024',
    number: '—',
    link: 'https://www.linkedin.com/in/calesajohnrey/details/certifications/',
    icon: 'school'
  }
]

const expandedExperience = ref(null)

// Track visibility reactively so Vue owns the `.visible` class. Using
// classList.add() directly gets wiped whenever Vue re-patches the element's
// class (e.g. on expand/collapse), causing the card to disappear.
const visibleExperiences = reactive(new Set())
const visibleCertificates = reactive(new Set())

// A logo file may not exist yet for a newly added company, so fall back to
// the initials tile instead of showing a broken image.
const failedLogos = reactive(new Set())

function toggleExperience(index) {
  expandedExperience.value = expandedExperience.value === index ? null : index
}

onMounted(() => {
  const cards = document.querySelectorAll('.experience-card, .certificate-card')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (!entry.isIntersecting) return

        const index = Number(entry.target.dataset.index)
        const isExperience = entry.target.classList.contains('experience-card')

        setTimeout(() => {
          if (isExperience) {
            visibleExperiences.add(index)
          } else {
            visibleCertificates.add(index)
          }
        }, idx * 150)

        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.2 }
  )

  cards.forEach((el) => observer.observe(el))
})
</script>

<template>
  <section class="experience-section">
    <div class="experience-container wrapper">
      <!-- Experience Header -->
      <div class="section-header">
        <div class="header-content">
          <span class="section-badge">My Work Journey</span>
          <h2 class="section-title">Where I Have Worked</h2>
          <p class="section-description">
            The companies I have worked with, what I built while I was there, and the tools I used to
            build it.
          </p>
        </div>
      </div>

      <!-- Timeline -->
      <div class="timeline-wrapper">
        <div class="timeline-line"></div>

        <div v-for="(experience, index) in experiences" :key="index" :data-index="index" class="experience-card"
          :class="{ 'experience-expanded': expandedExperience === index, visible: visibleExperiences.has(index) }">
          <!-- Timeline Node -->
          <div class="timeline-node">
            <div class="timeline-dot"></div>
          </div>

          <!-- Experience Content -->
          <div class="experience-content">
            <div class="experience-main">
              <!-- Company Image -->
              <div class="company-image-wrapper">
                <img v-if="experience.company_logo && !failedLogos.has(index)" class="company-image"
                  :src="experience.company_logo" :alt="experience.company_logo_alt" loading="lazy"
                  @error="failedLogos.add(index)" />
                <div v-else class="company-fallback" :aria-label="experience.company_logo_alt" role="img">
                  {{ experience.company_initials }}
                </div>
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
                  <button class="expand-button" @click="toggleExperience(index)"
                    aria-label="Show or hide the details of this job">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      :class="{ 'rotate-180': expandedExperience === index }">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>

                <div class="date-range">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{{ experience.start_date }} - {{ experience.end_date }}</span>
                  <span class="date-separator">•</span>
                  <span>{{ experience.location }}</span>
                </div>

                <p class="experience-description">{{ experience.description }}</p>

                <!-- Expanded Content -->
                <Transition name="expand">
                  <div v-if="expandedExperience === index" class="expanded-content">
                    <div class="highlights-section">
                      <h4 class="highlights-title">What I Did There</h4>
                      <ul class="highlights-list">
                        <li v-for="(highlight, idx) in experience.highlights" :key="idx" class="highlight-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{{ highlight }}</span>
                        </li>
                      </ul>
                    </div>

                    <div class="technologies-section">
                      <h4 class="technologies-title">Tools I Used</h4>
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
          <h3 class="certificates-title">Courses and Certificates</h3>
          <p class="certificates-subtitle">Programs I finished, and the proof that I did</p>
        </div>

        <div class="certificates-grid">
          <div v-for="(certificate, index) in certificates" :key="index" :data-index="index" class="certificate-card"
            :class="{ visible: visibleCertificates.has(index) }">
            <div class="certificate-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

              <a :href="certificate.link" target="_blank" rel="noopener noreferrer" class="certificate-link">
                <span>See the certificate</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  /* Shared horizontal axis for the line and the dots. Both elements
     center on this value via translateX(-50%), so the dot's borders and
     box-shadow no longer push it off-axis from the 2px line. */
  --timeline-axis: 1rem;
  --timeline-gap: 2rem;
  position: relative;
  padding-left: calc(var(--timeline-axis) + var(--timeline-gap));
}

.timeline-line {
  position: absolute;
  left: var(--timeline-axis);
  /* Spans the whole timeline and fades out at both ends. Card heights change
     when a card is expanded, so the first and last dots move; the fade keeps
     the ends looking deliberate wherever those dots land. */
  top: 0;
  bottom: 0;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    rgba(102, 126, 234, 0) 0%,
    #667eea 12%,
    #764ba2 88%,
    rgba(118, 75, 162, 0) 100%
  );
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
  /* Card's left edge sits at the wrapper's padding-left. Offsetting back
     by --timeline-gap lands the node on --timeline-axis; the -50% shifts
     center it on both axes, so the dot sits on the line and at the card's
     vertical middle no matter how tall the card is. */
  left: calc(var(--timeline-gap) * -1);
  top: 50%;
  transform: translate(-50%, -50%);
  line-height: 0;
}

.timeline-dot {
  box-sizing: border-box;
  width: 1.25rem;
  height: 1.25rem;
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

.company-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 0.05em;
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

.expand-button svg.rotate-180 {
  transform: rotate(180deg);
}

.date-range {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
    --timeline-axis: 0.75rem;
    --timeline-gap: 1.25rem;
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
