<script setup>
import { ref, onMounted, computed } from 'vue'

const skillCategories = {
  'Frontend': [
    { name: 'HTML', image: 'logos/html.png', color: '#E44D26', level: 95 },
    { name: 'CSS', image: 'logos/css.png', color: '#1172B8', level: 90 },
    { name: 'JavaScript', image: 'logos/javascript.png', color: '#FFCA28', level: 90 },
    { name: 'TypeScript', image: 'logos/typescript.png', color: '#007ACC', level: 85 },
    { name: 'ReactJs', image: 'logos/react.png', color: '#53C1DE', level: 85 },
    { name: 'VueJs', image: 'logos/vue.png', color: '#41B883', level: 90 },
    { name: 'Angular', image: 'logos/angular.png', color: '#C3002F', level: 80 },
    { name: 'TailwindCSS', image: 'logos/tailwind.png', color: '#2298BD', level: 90 },
    { name: 'jQuery', image: 'logos/jquery.png', color: '#0769AD', level: 85 }
  ],
  'Backend': [
    { name: 'C#', image: 'logos/csharp.png', color: '#662579', level: 85 },
    { name: 'Python', image: 'logos/python.png', color: '#1565A7', level: 80 },
    { name: 'Java', image: 'logos/java.png', color: '#E76F00', level: 80 },
    { name: '.NET', image: 'logos/dotnet.png', color: '#5027d5', level: 85 },
    { name: 'Laravel', image: 'logos/laravel.png', color: '#FF2D20', level: 85 },
    { name: 'Springboot', image: 'logos/springboot.png', color: '#6db53d', level: 75 },
    { name: 'CodeIgniter', image: 'logos/codeigniter.png', color: '#EE4323', level: 80 }
  ],
  'Database & Tools': [
    { name: 'MySQL', image: 'logos/mysql.png', color: '#00546B', level: 85 },
    { name: 'MongoDB', image: 'logos/mongodb.png', color: '#499D4A', level: 80 },
    { name: 'Firebase', image: 'logos/firebase.png', color: '#FFA712', level: 85 },
    { name: 'XAMPP', image: 'logos/xampp.png', color: '#FB7A24', level: 90 },
    { name: 'Mapbox', image: 'logos/mapbox.png', color: '#485160', level: 75 }
  ]
}

const selectedSkill = ref(null)
const activeCategory = ref('Frontend')

const allSkills = computed(() => {
  return Object.values(skillCategories).flat()
})

function selectSkill(skill) {
  selectedSkill.value = skill
}

function clearSelection() {
  selectedSkill.value = null
}

onMounted(() => {
  const elements = document.querySelectorAll('.skill-card')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('skill-visible')
          }, index * 50)
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
  <section class="skills-section">
    <div class="skills-container wrapper">
      <!-- Section Header -->
      <div class="section-header">
        <div class="header-content">
          <span class="section-badge">Technical Expertise</span>
          <h2 class="section-title">Skills & Technologies</h2>
          <p class="section-description">
            A comprehensive toolkit of modern technologies and frameworks I use to build robust, scalable applications
          </p>
        </div>
      </div>

      <!-- Category Tabs -->
      <div class="category-tabs">
        <button
          v-for="(skills, category) in skillCategories"
          :key="category"
          class="category-tab"
          :class="{ 'category-tab-active': activeCategory === category }"
          @click="activeCategory = category"
        >
          {{ category }}
          <span class="category-count">{{ skills.length }}</span>
        </button>
      </div>

      <!-- Skills Grid -->
      <div class="skills-grid">
        <div
          v-for="skill in skillCategories[activeCategory]"
          :key="`${activeCategory}-${skill.name}`"
          class="skill-card"
          @mouseenter="selectSkill(skill)"
          @mouseleave="clearSelection"
        >
          <div class="skill-card-inner">
            <div class="skill-image-wrapper">
              <img
                class="skill-image"
                :src="skill.image"
                :alt="`${skill.name} logo`"
                loading="lazy"
              />
              <div class="skill-glow" :style="{ background: `${skill.color}20` }"></div>
            </div>

            <div class="skill-info">
              <h3 class="skill-name">{{ skill.name }}</h3>
              <div class="skill-level-bar">
                <div
                  class="skill-level-fill"
                  :style="{
                    width: `${skill.level}%`,
                    background: skill.color
                  }"
                ></div>
              </div>
              <span class="skill-percentage">{{ skill.level }}%</span>
            </div>
          </div>

          <!-- Hover Overlay -->
          <div
            v-if="selectedSkill?.name === skill.name"
            class="skill-overlay"
            :style="{ background: `linear-gradient(135deg, ${skill.color}ee, ${skill.color}dd)` }"
          >
            <div class="overlay-content">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="overlay-text">Proficient</span>
            </div>
          </div>
        </div>
      </div>

      <!-- All Skills Summary -->
      <div class="skills-summary">
        <div class="summary-header">
          <h3 class="summary-title">Complete Technology Stack</h3>
          <p class="summary-subtitle">{{ allSkills.length }} technologies and growing</p>
        </div>
        <div class="skills-tags">
          <span
            v-for="skill in allSkills"
            :key="skill.name"
            class="skill-tag"
            :style="{
              borderColor: skill.color,
              color: skill.color
            }"
          >
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Skills Section */
.skills-section {
  padding: 6rem 1.5rem;
  background: white;
  position: relative;
}

.skills-container {
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

/* Category Tabs */
.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.category-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  color: #374151;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-tab:hover {
  border-color: #667eea;
  color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.category-tab-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.category-tab-active:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.category-count {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 0.5rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 700;
}

.category-tab-active .category-count {
  background: rgba(255, 255, 255, 0.25);
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.skill-card {
  position: relative;
  background: white;
  border: 2px solid #f3f4f6;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  cursor: pointer;
  overflow: hidden;
}

.skill-card.skill-visible {
  opacity: 1;
  transform: translateY(0);
}

.skill-card:hover {
  border-color: #e5e7eb;
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.skill-card-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-image-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
}

.skill-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
}

.skill-card:hover .skill-image {
  transform: scale(1.1);
}

.skill-glow {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover .skill-glow {
  opacity: 1;
}

.skill-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
}

.skill-level-bar {
  width: 100%;
  height: 6px;
  background: #f3f4f6;
  border-radius: 100px;
  overflow: hidden;
}

.skill-level-fill {
  height: 100%;
  border-radius: 100px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-percentage {
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
}

/* Hover Overlay */
.skill-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  z-index: 10;
  animation: overlayFade 0.3s ease forwards;
}

@keyframes overlayFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: white;
}

.overlay-content svg {
  animation: checkBounce 0.5s ease;
}

@keyframes checkBounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.overlay-text {
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Skills Summary */
.skills-summary {
  padding: 3rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 24px;
  border: 2px solid #e5e7eb;
}

.summary-header {
  text-align: center;
  margin-bottom: 2rem;
}

.summary-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.summary-subtitle {
  font-size: 1rem;
  color: #6b7280;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.skill-tag {
  padding: 0.5rem 1rem;
  background: white;
  border: 2px solid;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: default;
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (min-width: 768px) {
  .section-title {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .skills-section {
    padding: 8rem 2rem;
  }

  .section-title {
    font-size: 3.5rem;
  }
}

@media (max-width: 767px) {
  .skills-section {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .category-tabs {
    gap: 0.5rem;
  }

  .category-tab {
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
  }

  .skills-summary {
    padding: 2rem 1.5rem;
  }

  .summary-title {
    font-size: 1.5rem;
  }
}
</style>
