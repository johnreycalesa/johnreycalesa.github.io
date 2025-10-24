<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import HeaderPage from '../components/HeaderPage.vue'
import SkillsPage from '../components/SkillsPage.vue'
import ExperiencePage from '../components/ExperiencePage.vue'
import ProjectsPage from '../components/ProjectsPage.vue'
import FooterPage from '../components/FooterPage.vue'

const isNavOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('')
let observer = null

onMounted(() => {
  // Scroll effect for navbar
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll)

  // Intersection Observer for lazy loading and active section
  const sections = document.querySelectorAll('.lazy')
  observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.3,
    rootMargin: '-100px 0px -100px 0px'
  })

  sections.forEach((section) => {
    observer.observe(section)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    if (observer) {
      observer.disconnect()
    }
  })
})

function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
      activeSection.value = entry.target.id
    } else {
      entry.target.classList.remove('show')
    }
  })
}

function toggleNav() {
  isNavOpen.value = !isNavOpen.value
}

function closeNav() {
  isNavOpen.value = false
}
</script>

<template>
  <nav
    class="navbar-container"
    :class="{ 'navbar-scrolled': isScrolled }"
  >
    <div class="navbar-content wrapper">
      <!-- Logo -->
      <a class="logo-link" href="#header" @click="closeNav">
        <div class="logo-wrapper">
          <img
            src="../assets/penguin.png"
            width="40"
            height="40"
            class="logo-image"
            alt="John Rey Calesa Logo - Penguin"
          />
        </div>
        <span class="logo-text">JRC</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="desktop-nav">
        <ul class="nav-links">
          <li>
            <a
              class="nav-link"
              :class="{ 'nav-link-active': activeSection === 'skills' }"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              class="nav-link"
              :class="{ 'nav-link-active': activeSection === 'experience' }"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              class="nav-link"
              :class="{ 'nav-link-active': activeSection === 'project' }"
              href="#project"
            >
              Projects
            </a>
          </li>
        </ul>
        <a class="cta-button" href="#footer">
          <span>Get in Touch</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="mobile-menu-button"
        aria-label="Toggle navigation"
        @click="toggleNav"
      >
        <div class="hamburger" :class="{ 'hamburger-open': isNavOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>

    <!-- Mobile Sidebar -->
    <Transition name="slide">
      <div v-if="isNavOpen" class="mobile-sidebar">
        <div class="mobile-sidebar-overlay" @click="closeNav"></div>
        <div class="mobile-sidebar-content">
          <div class="mobile-nav-header">
            <span class="mobile-nav-title">Navigation</span>
            <button class="mobile-close-button" @click="closeNav" aria-label="Close navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <ul class="mobile-nav-links">
            <li>
              <a class="mobile-nav-link" href="#skills" @click="closeNav">
                <span class="mobile-nav-icon">⚡</span>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a class="mobile-nav-link" href="#experience" @click="closeNav">
                <span class="mobile-nav-icon">💼</span>
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a class="mobile-nav-link" href="#project" @click="closeNav">
                <span class="mobile-nav-icon">🚀</span>
                <span>Projects</span>
              </a>
            </li>
          </ul>

          <a class="mobile-cta-button" href="#footer" @click="closeNav">
            <span>Get in Touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </Transition>
  </nav>

  <!-- Page Sections -->
  <div id="header" class="lazy section-container">
    <HeaderPage />
  </div>
  <div id="skills" class="lazy section-container">
    <SkillsPage />
  </div>
  <div id="experience" class="lazy section-container">
    <ExperiencePage />
  </div>
  <div id="project" class="lazy section-container">
    <ProjectsPage />
  </div>
  <div id="footer" class="lazy section-container">
    <FooterPage />
  </div>
</template>

<style scoped>
/* Navigation Bar */
.navbar-container {
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-scrolled {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.navbar-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.logo-link:hover {
  transform: translateY(-2px);
}

.logo-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.logo-image {
  display: block;
  border-radius: 8px;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

/* Desktop Navigation */
.desktop-nav {
  display: none;
  align-items: center;
  gap: 2.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  position: relative;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #667eea;
}

.nav-link:hover::after,
.nav-link-active::after {
  width: 100%;
}

.nav-link-active {
  color: #667eea;
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

/* Mobile Menu Button */
.mobile-menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
}

.hamburger {
  position: relative;
  width: 24px;
  height: 18px;
}

.hamburger span {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #374151;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger span:nth-child(1) {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 8px;
}

.hamburger span:nth-child(3) {
  top: 16px;
}

.hamburger-open span:nth-child(1) {
  top: 8px;
  transform: rotate(45deg);
}

.hamburger-open span:nth-child(2) {
  opacity: 0;
}

.hamburger-open span:nth-child(3) {
  top: 8px;
  transform: rotate(-45deg);
}

/* Mobile Sidebar */
.mobile-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}

.mobile-sidebar-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.mobile-sidebar-content {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 85%;
  max-width: 400px;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
}

.mobile-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
}

.mobile-nav-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
}

.mobile-close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: #f3f4f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mobile-close-button:hover {
  background: #e5e7eb;
}

.mobile-nav-links {
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.05rem;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.mobile-nav-link:hover {
  background: #f9fafb;
  color: #667eea;
  transform: translateX(4px);
}

.mobile-nav-icon {
  font-size: 1.25rem;
}

.mobile-cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.mobile-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from .mobile-sidebar-overlay,
.slide-leave-to .mobile-sidebar-overlay {
  opacity: 0;
}

.slide-enter-from .mobile-sidebar-content,
.slide-leave-to .mobile-sidebar-content {
  transform: translateX(100%);
}

/* Sections */
.section-container {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-container.show {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }

  .mobile-menu-button {
    display: none;
  }
}

@media (min-width: 1024px) {
  .navbar-content {
    padding: 0 2rem;
  }
}
</style>
