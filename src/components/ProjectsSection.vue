<script setup>
import SectionHeader from './SectionHeader.vue'

const librasenseFeatures = [
  'Book inventory management',
  'Borrowing monitoring',
  'QR-based visitor tracking',
  'Feedback analysis',
  'Forecasting & anomaly detection',
  'Book request detection',
]

const mlStack = [
  { name: 'XGBoost', use: 'Borrowing & visitor trend prediction' },
  { name: 'RemBERT', use: 'Multilingual sentiment & book request detection' },
  { name: 'Logistic Regression', use: 'Irregular feedback pattern detection' },
  { name: 'spaCy', use: 'Requested book title extraction' },
]

const otherProjects = [
  {
    title: 'Residential Electrical Installation',
    description: 'Freelance electrical installation and troubleshooting for residential houses across Ising and Carmen, Davao del Norte.',
    tech: ['Wiring', 'Installation', 'Troubleshooting'],
    color: '#22d3ee',
  },
  {
    title: 'Computer System Servicing',
    description: 'Hardware and software troubleshooting. Trained through TVL Computer System Servicing and reinforced through BSIT coursework and OJT.',
    tech: ['Hardware', 'Software', 'Networking'],
    color: '#a78bfa',
  },
]
</script>

<template>
  <section id="projects" class="section-block">
    <div class="container">
      <SectionHeader
        num="03"
        title="Projects"
        subtitle="Capstone work, technical projects, and hands-on experience."
      />

      <article class="featured-project glass-card">
        <div class="project-screenshot">
          <img
            src="/projects/librasense-dashboard.png"
            alt="LibraSense dashboard — Book Management"
            loading="lazy"
          />
          <span class="project-badge">Capstone Project</span>
        </div>

        <div class="project-content">
          <div class="project-header">
            <div>
              <h3 class="project-title">LibraSense</h3>
              <p class="project-tagline">Smart Library Engagement & Management System</p>
            </div>
            <div class="project-highlights">
              <span class="highlight">BINHI 2026</span>
              <span class="highlight">CICTMO Tagum</span>
            </div>
          </div>

          <p class="project-desc">
            LibraSense is a smart library engagement and management system that uses
            Machine Learning and Natural Language Processing to improve library operations
            and support data-driven decision-making. It helps librarians monitor library
            activities, understand user feedback, and improve service delivery through
            intelligent analytics.
          </p>

          <div class="features-grid">
            <div
              v-for="feature in librasenseFeatures"
              :key="feature"
              class="feature-item"
            >
              <span class="feature-dot" />
              {{ feature }}
            </div>
          </div>

          <div class="ml-section">
            <h4 class="ml-heading">ML & NLP Stack</h4>
            <div class="ml-grid">
              <div v-for="item in mlStack" :key="item.name" class="ml-card">
                <span class="ml-name">{{ item.name }}</span>
                <span class="ml-use">{{ item.use }}</span>
              </div>
            </div>
          </div>

          <div class="project-tech">
            <span>Vue.js</span>
            <span>Python</span>
            <span>Machine Learning</span>
            <span>NLP</span>
            <span>XGBoost</span>
            <span>RemBERT</span>
            <span>spaCy</span>
          </div>
        </div>
      </article>

      <div class="other-projects">
        <article
          v-for="item in otherProjects"
          :key="item.title"
          class="other-card glass-card"
          :style="{ '--accent-color': item.color }"
        >
          <div class="other-accent" />
          <h3 class="other-title">{{ item.title }}</h3>
          <p class="other-desc">{{ item.description }}</p>
          <div class="other-tech">
            <span v-for="t in item.tech" :key="t">{{ t }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-project {
  overflow: hidden;
  margin-bottom: 1.25rem;
}

.project-screenshot {
  position: relative;
  border-bottom: 1px solid var(--border);
  background: #f8fafc;
}

.project-screenshot img {
  width: 100%;
  display: block;
  object-fit: cover;
  max-height: 380px;
  object-position: top;
}

.project-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.35rem 0.85rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #042f1a;
  background: var(--accent);
  border-radius: 999px;
}

.project-content {
  padding: 1.75rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.project-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.2rem;
}

.project-tagline {
  font-size: 0.9rem;
  color: var(--accent);
  font-weight: 500;
}

.project-highlights {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.highlight {
  padding: 0.3rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  border-radius: 999px;
}

.project-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--text-primary);
  padding: 0.5rem 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
}

.feature-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}

.ml-section {
  margin-bottom: 1.5rem;
}

.ml-heading {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.ml-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
}

.ml-card {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.75rem 1rem;
  background: var(--accent-soft);
  border: 1px solid rgba(52, 211, 153, 0.15);
  border-radius: var(--radius-sm);
}

.ml-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent);
}

.ml-use {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.4;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.project-tech span {
  padding: 0.3rem 0.7rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--accent);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  border-radius: 999px;
}

.other-projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.other-card {
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
}

.other-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent-color);
}

.other-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.other-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.other-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.other-tech span {
  padding: 0.25rem 0.6rem;
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--accent-color);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  border-radius: 999px;
}

@media (max-width: 900px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .ml-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .features-grid,
  .other-projects {
    grid-template-columns: 1fr;
  }

  .project-content {
    padding: 1.25rem;
  }
}
</style>
