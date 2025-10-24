<script setup>
import { onMounted, ref, computed } from 'vue'

onMounted(() => {
  const sectionElement = document.querySelector('.hero-section')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hero-visible')
        }
      })
    },
    { threshold: 0.2 }
  )

  if (sectionElement) {
    observer.observe(sectionElement)
  }
})

const dateStarted = ref(new Date('2023-02-27'))
const currentDate = ref(new Date())

const formattedYears = computed(() => {
  const diff = currentDate.value - dateStarted.value
  const years = diff / (1000 * 60 * 60 * 24 * 365)
  const roundedOff = years.toFixed(1)
  if (roundedOff % 1 === 0) {
    return Math.floor(roundedOff)
  } else {
    return roundedOff
  }
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-container wrapper">
      <div class="hero-card">
        <!-- Content Side -->
        <div class="hero-content">
          <div class="hero-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Available for opportunities</span>
          </div>

          <h1 class="hero-title">
            Hi, I'm
            <span class="hero-name">John Rey Calesa</span>
          </h1>

          <p class="hero-role">Software Engineer</p>

          <p class="hero-description">
            Crafting elegant solutions to complex problems with modern web technologies.
            Passionate about building scalable applications and exceptional user experiences.
          </p>

          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div class="stat-details">
                <span class="stat-value">{{ formattedYears }}+ Years</span>
                <span class="stat-label">Experience</span>
              </div>
            </div>

            <div class="stat-divider"></div>

            <div class="stat-item">
              <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div class="stat-details">
                <span class="stat-value">Full Stack</span>
                <span class="stat-label">Developer</span>
              </div>
            </div>
          </div>

          <div class="hero-actions">
            <a
              class="btn-primary"
              href="https://docs.google.com/document/d/1GiBZuU37qbIvrUoHWWPZQapfTmA8nPZPsWLmPvNFEv4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            <a class="btn-secondary" href="#footer">
              <span>Get in Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </a>
          </div>
        </div>

        <!-- Image Side -->
        <div class="hero-image-wrapper">
          <div class="image-backdrop"></div>
          <div class="image-frame">
            <img
              class="hero-image"
              src="../assets/id.jpg"
              alt="John Rey Calesa - Software Engineer Professional Photo"
              loading="lazy"
            />
          </div>

          <!-- Floating Elements -->
          <div class="floating-element floating-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <div class="floating-element floating-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <div class="floating-element floating-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Decoration -->
    <div class="hero-background">
      <div class="gradient-orb gradient-orb-1"></div>
      <div class="gradient-orb gradient-orb-2"></div>
    </div>
  </section>
</template>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 1.5rem;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 10;
}

.hero-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-visible .hero-card {
  opacity: 1;
  transform: translateY(0);
}

/* Content Side */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  width: fit-content;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: #111827;
  letter-spacing: -0.02em;
}

.hero-name {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.hero-role {
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-top: -0.5rem;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #6b7280;
  max-width: 600px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
  flex-shrink: 0;
}

.stat-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
}

.stat-divider {
  width: 1px;
  height: 48px;
  background: #e5e7eb;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: white;
  color: #374151;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: #667eea;
  color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
}

/* Image Side */
.hero-image-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
}

.image-backdrop {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 24px;
  transform: rotate(-3deg);
  transition: transform 0.3s ease;
}

.hero-image-wrapper:hover .image-backdrop {
  transform: rotate(-1deg);
}

.image-frame {
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 3/4;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border: 8px solid white;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hero-image-wrapper:hover .hero-image {
  transform: scale(1.05);
}

/* Floating Elements */
.floating-element {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  color: #667eea;
  animation: float 3s ease-in-out infinite;
}

.floating-1 {
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.floating-2 {
  bottom: 20%;
  left: -5%;
  animation-delay: 1s;
}

.floating-3 {
  top: 50%;
  right: -5%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Background Decoration */
.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: pulse 8s ease-in-out infinite;
}

.gradient-orb-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  top: -250px;
  right: -100px;
}

.gradient-orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  bottom: -150px;
  left: -100px;
  animation-delay: 4s;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.4;
  }
}

/* Responsive Design */
@media (min-width: 768px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .hero-role {
    font-size: 1.875rem;
  }

  .hero-card {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4rem;
  }

  .hero-description {
    font-size: 1.25rem;
  }

  .hero-section {
    padding: 8rem 2rem;
  }
}

@media (max-width: 767px) {
  .hero-section {
    padding: 4rem 1.5rem;
    min-height: auto;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-role {
    font-size: 1.25rem;
  }

  .hero-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .stat-divider {
    display: none;
  }

  .floating-element {
    width: 48px;
    height: 48px;
  }

  .floating-element svg {
    width: 18px;
    height: 18px;
  }

  .hero-actions {
    width: 100%;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .image-frame {
    max-width: 100%;
  }
}
</style>
