<script setup>
import SectionHeader from './SectionHeader.vue'

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Davao del Norte State College',
    period: '2022 – Present',
    details: 'Currently pursuing a degree in Information Technology.',
  },
  {
    degree: 'TVL — Computer System Servicing',
    school: 'Carmen National High School (Senior High)',
    period: '2020 – 2022',
    details: 'Technical-Vocational-Livelihood track focused on computer system servicing.',
  },
  {
    degree: 'Junior High School',
    school: 'Carmen National High School',
    period: '2016 – 2020',
    details: 'Completed junior high school education.',
  },
]
</script>

<template>
  <section id="education" class="section-block edu-section">
    <div class="container">
      <SectionHeader
        num="06"
        title="Education"
        subtitle="Academic background and training."
      />

      <div class="edu-grid">
        <div v-for="(edu, i) in education" :key="i" class="edu-card glass-card">
          <div class="edu-top">
            <span class="edu-period">{{ edu.period }}</span>
          </div>
          <h3 class="edu-degree">{{ edu.degree }}</h3>
          <p class="edu-school">{{ edu.school }}</p>
          <p class="edu-details">{{ edu.details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu-section {
  position: relative;
}

.edu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.edu-card {
  padding: 1.75rem;
}

.edu-period {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-alt);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.edu-degree {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  margin: 0.75rem 0 0.35rem;
  line-height: 1.35;
}

.edu-school {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.edu-details {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .edu-grid {
    grid-template-columns: 1fr;
  }
}
</style>
