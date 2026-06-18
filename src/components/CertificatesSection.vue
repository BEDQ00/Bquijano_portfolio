<script setup>
import { ref } from 'vue'
import SectionHeader from './SectionHeader.vue'

const certificates = [
  {
    title: 'LibraSense Capstone',
    subtitle: 'Certificate of Completion',
    issuer: 'CICTMO, City of Tagum · DNSC',
    year: '2026',
    tag: 'Capstone',
    tagColor: '#34d399',
    image: '/certs/librasense-completion.png',
  },
  {
    title: 'BINHI 2026',
    subtitle: 'Certificate of Presentation',
    issuer: 'DNSC & DOrSU Research Colloquium',
    year: '2026',
    tag: 'Research',
    tagColor: '#22d3ee',
    image: '/certs/binhi-2026.png',
  },
  {
    title: 'On-The-Job Training',
    subtitle: '472 Hours Completed',
    issuer: 'Provincial Government of Davao del Norte',
    year: '2026',
    tag: 'OJT',
    tagColor: '#f472b6',
    image: '/certs/ojt-completion.png',
  },
  {
    title: 'Graphic Design Seminar',
    subtitle: 'The Power of Color in Design',
    issuer: 'DNSC · BSIT 4th Year Series',
    year: '2025',
    tag: 'Design',
    tagColor: '#a78bfa',
    image: '/certs/seminar-graphic-design.png',
  },
  {
    title: 'IT Specialist Seminar',
    subtitle: 'Science Practitioner to IT Specialist',
    issuer: 'DNSC · Virtual Session',
    year: '2025',
    tag: 'Seminar',
    tagColor: '#60a5fa',
    image: '/certs/seminar-it-specialist.png',
  },
  {
    title: 'Introduction to Packet Tracer',
    subtitle: 'Cisco Networking Academy',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    tag: 'Cisco',
    tagColor: '#38bdf8',
    image: '/certs/cisco-packet-tracer.png',
  },
  {
    title: 'Computer System Servicing',
    subtitle: 'TVL Senior High',
    issuer: 'Carmen National High School',
    year: '2022',
    tag: 'TVL',
    tagColor: '#fbbf24',
    image: null,
  },
]

const activeImage = ref(null)

function openImage(src) {
  if (src) activeImage.value = src
}

function closeImage() {
  activeImage.value = null
}
</script>

<template>
  <section id="certificates" class="section-block certs-section">
    <div class="container">
      <SectionHeader
        num="04"
        title="Certificates & Training"
        subtitle="Academic achievements, seminars, OJT, and professional certifications."
      />

      <div class="cert-grid">
        <article
          v-for="cert in certificates"
          :key="cert.title"
          class="cert-card glass-card"
          :class="{ 'has-image': cert.image }"
          @click="openImage(cert.image)"
        >
          <div class="cert-preview">
            <img
              v-if="cert.image"
              :src="cert.image"
              :alt="cert.title"
              class="cert-thumb"
              loading="lazy"
            />
            <div v-else class="cert-placeholder">
              <span class="placeholder-icon">✦</span>
              <span class="placeholder-text">TVL Certificate</span>
            </div>
            <span
              class="cert-tag"
              :style="{ background: cert.tagColor + '22', color: cert.tagColor, borderColor: cert.tagColor + '44' }"
            >
              {{ cert.tag }}
            </span>
            <div v-if="cert.image" class="cert-overlay">
              <span>View</span>
            </div>
          </div>
          <div class="cert-footer">
            <div class="cert-footer-top">
              <h3 class="cert-title">{{ cert.title }}</h3>
              <span class="cert-year">{{ cert.year }}</span>
            </div>
            <p class="cert-subtitle">{{ cert.subtitle }}</p>
            <p class="cert-issuer">{{ cert.issuer }}</p>
          </div>
        </article>
      </div>
    </div>

    <div v-if="activeImage" class="lightbox" @click="closeImage">
      <div class="lightbox-inner" @click.stop>
        <button class="lightbox-close" type="button" aria-label="Close" @click="closeImage">✕</button>
        <img :src="activeImage" alt="Certificate" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.certs-section {
  position: relative;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.cert-card {
  overflow: hidden;
  padding: 0;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.cert-card.has-image {
  cursor: pointer;
}

.cert-card.has-image:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.cert-preview {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
}

.cert-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.35s ease;
}

.cert-card:hover .cert-thumb {
  transform: scale(1.04);
}

.cert-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.08), rgba(167, 139, 250, 0.08));
}

.placeholder-icon {
  font-size: 2rem;
  color: #fbbf24;
  opacity: 0.8;
}

.placeholder-text {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
}

.cert-tag {
  position: absolute;
  top: 0.65rem;
  right: 0.65rem;
  padding: 0.25rem 0.65rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 999px;
  border: 1px solid;
  backdrop-filter: blur(8px);
}

.cert-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(15, 20, 25, 0.55);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.cert-overlay span {
  padding: 0.5rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  background: var(--accent-soft);
  border: 1px solid rgba(52, 211, 153, 0.3);
  border-radius: 999px;
}

.cert-card:hover .cert-overlay {
  opacity: 1;
}

.cert-footer {
  padding: 1rem 1.15rem 1.15rem;
}

.cert-footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.cert-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.3;
}

.cert-year {
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text-muted);
  padding: 0.2rem 0.55rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 999px;
}

.cert-subtitle {
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 0.2rem;
}

.cert-issuer {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.4;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(8px);
  padding: 2rem;
}

.lightbox-inner {
  position: relative;
  max-width: min(920px, 95vw);
  max-height: 90vh;
}

.lightbox-inner img {
  width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: var(--radius-sm);
}

.lightbox-close {
  position: absolute;
  top: -2.5rem;
  right: 0;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.25rem;
  cursor: pointer;
  opacity: 0.7;
}

.lightbox-close:hover {
  opacity: 1;
}

@media (max-width: 900px) {
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .cert-grid {
    grid-template-columns: 1fr;
  }
}
</style>
