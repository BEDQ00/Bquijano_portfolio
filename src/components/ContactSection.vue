<script setup>
import { ref } from 'vue'
import SectionHeader from './SectionHeader.vue'

const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  form.value = { name: '', email: '', message: '' }
  setTimeout(() => { submitted.value = false }, 4000)
}
</script>

<template>
  <section id="contact" class="section-block contact-section">
    <div class="container">
      <div class="contact-wrapper glass-card">
        <div class="contact-left">
          <SectionHeader
            num="07"
            title="Let's Connect"
            subtitle="Reach out for job opportunities, projects, or collaborations."
          />

          <div class="contact-details">
            <a href="mailto:quijanobien16@gmail.com" class="detail-link">
              <span class="detail-icon">✉</span>
              <div>
                <span class="detail-label">Email</span>
                <span class="detail-value">quijanobien16@gmail.com</span>
              </div>
            </a>
            <a href="tel:+639853217323" class="detail-link">
              <span class="detail-icon">☎</span>
              <div>
                <span class="detail-label">Phone</span>
                <span class="detail-value">0985 321 7323</span>
              </div>
            </a>
            <div class="detail-link">
              <span class="detail-icon">◎</span>
              <div>
                <span class="detail-label">Address</span>
                <span class="detail-value">Purok 13, Ising Carmen, Davao del Norte</span>
              </div>
            </div>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" v-model="form.name" type="text" required placeholder="Your name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" v-model="form.email" type="email" required placeholder="your@email.com" />
            </div>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" required rows="4" placeholder="Your message..." />
          </div>
          <button type="submit" class="btn btn-primary">
            Send Message
            <span aria-hidden="true">→</span>
          </button>
          <p v-if="submitted" class="success-msg">Thanks! I'll get back to you soon.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding-bottom: 3rem;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 2.5rem;
  padding: 2.5rem;
}

.contact-wrapper :deep(.section-header) {
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: color 0.2s;
}

a.detail-link:hover .detail-value {
  color: var(--accent);
}

.detail-icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: var(--accent-soft);
  border-radius: 10px;
  font-size: 1rem;
  color: var(--accent);
  flex-shrink: 0;
}

.detail-label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 0.1rem;
}

.detail-value {
  font-size: 0.95rem;
  transition: color 0.2s;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: var(--text-muted);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-family: var(--font);
  font-size: 0.9rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.success-msg {
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
