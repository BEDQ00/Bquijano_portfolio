<script setup>
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero-grid">
      <div class="hero-text">
        <div class="hero-badge">
          <span class="badge-dot" />
          BSIT Student · Open to opportunities
        </div>
        <h1 class="hero-title">
          Hi, I'm <span class="gradient-text">Bien Ernest D. Quijano</span>
        </h1>
        <p class="hero-role">Information Technology Student</p>
        <p class="hero-desc">
          BSIT student at Davao del Norte State College. Capstone developer of
          LibraSense — an ML & NLP-powered library system for inventory, visitor
          tracking, feedback analysis, and intelligent analytics.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary" @click="scrollTo('projects')">
            View LibraSense
            <span aria-hidden="true">→</span>
          </button>
          <button class="btn btn-ghost" @click="scrollTo('contact')">Contact me</button>
        </div>
        <div class="hero-meta">
          <div class="meta-item">
            <strong>7</strong>
            <span>Certificates</span>
          </div>
          <div class="meta-divider" />
          <div class="meta-item">
            <strong>472</strong>
            <span>OJT hours</span>
          </div>
          <div class="meta-divider" />
          <div class="meta-item">
            <strong>BSIT</strong>
            <span>In progress</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="profile-frame glass-card">
          <img
            src="/profile.png"
            alt="Bien Ernest D. Quijano"
            class="profile-photo"
          />
        </div>
        <div class="floating-tag tag-1">ML & NLP</div>
        <div class="floating-tag tag-2">Vue.js</div>
        <div class="floating-tag tag-3">Networking</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid rgba(52, 211, 153, 0.2);
  border-radius: 999px;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, var(--accent), var(--accent-alt));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-role {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.hero-desc {
  color: var(--text-muted);
  max-width: 480px;
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.meta-item {
  display: flex;
  flex-direction: column;
}

.meta-item strong {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
}

.meta-item span {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.meta-divider {
  width: 1px;
  height: 32px;
  background: var(--border-strong);
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.profile-frame {
  padding: 0.5rem;
  overflow: hidden;
  max-width: 300px;
  width: 100%;
}

.profile-photo {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center 20%;
  border-radius: calc(var(--radius) - 4px);
  display: block;
}

.floating-tag {
  position: absolute;
  padding: 0.35rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  background: var(--bg-glass);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  color: var(--text-primary);
  animation: float 4s ease-in-out infinite;
}

.tag-1 { top: 10px; right: 0; animation-delay: 0s; }
.tag-2 { bottom: 40px; left: -10px; animation-delay: 1s; }
.tag-3 { bottom: 10px; right: 20px; animation-delay: 2s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@media (max-width: 900px) {
  .hero {
    min-height: auto;
    padding: 3rem 0 2rem;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-visual {
    order: -1;
  }

  .profile-frame {
    max-width: 240px;
    margin-inline: auto;
  }

  .hero-meta {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>
