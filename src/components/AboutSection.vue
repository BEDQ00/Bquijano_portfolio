<script setup>
import SectionHeader from './SectionHeader.vue'
</script>

<template>
  <section id="about" class="section-block">
    <div class="container">
      <SectionHeader
        num="01"
        title="About Me"
        subtitle="IT student with hands-on technical and field experience."
      />

      <div class="about-layout">
        <div class="about-main glass-card">
          <p class="lead">
            I'm Bien Ernest D. Quijano, a BSIT student at Davao del Norte State
            College. I co-developed LibraSense — a smart library system using
            XGBoost, RemBERT, spaCy, and Logistic Regression to support
            data-driven library operations.
          </p>
          <p>
            I've completed 472 hours of OJT at the Provincial Government of
            Davao del Norte, presented at the BINHI 2026 Research Colloquium,
            and also have experience as a freelance electrical installer in
            Carmen, Davao del Norte.
          </p>
        </div>

        <div class="about-aside">
          <div class="info-card glass-card">
            <span class="info-label">Location</span>
            <span class="info-value">Purok 13, Ising Carmen, Davao del Norte</span>
          </div>
          <div class="info-card glass-card">
            <span class="info-label">Education</span>
            <span class="info-value">BSIT — Davao del Norte State College</span>
          </div>
          <div class="info-card glass-card">
            <span class="info-label">Capstone</span>
            <span class="info-value">LibraSense — ML & NLP Library System</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1.25rem;
}

.about-main {
  padding: 2rem;
}

.lead {
  font-size: 1.15rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.7;
}

.about-main p:last-child {
  color: var(--text-muted);
}

.about-aside {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-card {
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  font-weight: 600;
}

.info-value {
  font-size: 0.95rem;
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .about-layout {
    grid-template-columns: 1fr;
  }
}
</style>
