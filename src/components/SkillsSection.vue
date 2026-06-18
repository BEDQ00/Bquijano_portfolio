<script setup>
import SectionHeader from './SectionHeader.vue'

const skills = [
  { name: 'Machine Learning & NLP', level: 80, category: 'IT' },
  { name: 'Software Troubleshooting', level: 88, category: 'IT' },
  { name: 'Hardware Troubleshooting', level: 85, category: 'IT' },
  { name: 'Computer System Servicing', level: 90, category: 'IT' },
  { name: 'Networking (Packet Tracer)', level: 75, category: 'IT' },
  { name: 'Graphic Design', level: 72, category: 'IT' },
  { name: 'Electrical Installation', level: 88, category: 'Technical' },
  { name: 'Electrical Troubleshooting', level: 85, category: 'Technical' },
  { name: 'Adaptability & Flexibility', level: 92, category: 'Professional' },
  { name: 'Organization Skills', level: 90, category: 'Professional' },
]

const categories = ['IT', 'Technical', 'Professional']
</script>

<template>
  <section id="skills" class="section-block skills-section">
    <div class="container">
      <SectionHeader
        num="02"
        title="Skills"
        subtitle="Technical and professional skills from training, OJT, and capstone work."
      />

      <div class="bento-grid">
        <div
          v-for="cat in categories"
          :key="cat"
          class="bento-card glass-card"
        >
          <h3 class="bento-title">{{ cat }}</h3>
          <div class="skill-list">
            <div
              v-for="skill in skills.filter(s => s.category === cat)"
              :key="skill.name"
              class="skill-row"
            >
              <div class="skill-top">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-pct">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" :style="{ width: skill.level + '%' }" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  position: relative;
}

.skills-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent, rgba(52, 211, 153, 0.03), transparent);
  pointer-events: none;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.bento-card {
  padding: 1.5rem;
}

.bento-title {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-top {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.35rem;
}

.skill-name {
  font-size: 0.9rem;
  font-weight: 500;
}

.skill-pct {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-family: monospace;
  flex-shrink: 0;
}

.skill-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 2px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-alt));
  border-radius: 2px;
  transition: width 1s ease;
}

@media (max-width: 900px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
}
</style>
