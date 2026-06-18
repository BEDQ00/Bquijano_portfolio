<script setup>
import SectionHeader from './SectionHeader.vue'

const experiences = [
  {
    role: 'Tech Support',
    company: 'Provincial Government of Davao del Norte',
    location: 'Provincial Capitol, Government Center, Mankilam, Tagum City',
    period: 'Feb 2026 – May 2026',
    description: 'Provided technical support at the Information Technology Division, Provincial Administrator\'s Office. Assisted with hardware and software troubleshooting, user support, and day-to-day IT operations for government staff.',
    duties: [
      'Hardware & software troubleshooting',
      'End-user technical support',
      'IT equipment setup and maintenance',
      'Assisting with government IT operations',
    ],
  },
]
</script>

<template>
  <section id="experience" class="section-block">
    <div class="container">
      <SectionHeader
        num="05"
        title="Experience"
        subtitle="Professional work and on-the-job training."
      />

      <div class="exp-grid">
        <article
          v-for="(exp, i) in experiences"
          :key="i"
          class="exp-card glass-card"
        >
          <span class="exp-period">{{ exp.period }}</span>
          <h3 class="exp-role">{{ exp.role }}</h3>
          <p class="exp-company">{{ exp.company }}</p>
          <p class="exp-location">{{ exp.location }}</p>
          <p class="exp-desc">{{ exp.description }}</p>
          <ul class="exp-duties">
            <li v-for="duty in exp.duties" :key="duty">{{ duty }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp-grid {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 680px;
}

.exp-card {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
}

.exp-period {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.75rem;
}

.exp-role {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  line-height: 1.35;
}

.exp-company {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.2rem;
}

.exp-location {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.85rem;
}

.exp-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 1rem;
}

.exp-duties {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.exp-duties li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-primary);
}

.exp-duties li::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}
</style>
