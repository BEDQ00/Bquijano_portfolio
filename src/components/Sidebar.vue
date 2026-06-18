<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'about', label: 'About', icon: '◎' },
  { id: 'skills', label: 'Skills', icon: '◈' },
  { id: 'projects', label: 'Projects', icon: '▣' },
  { id: 'certificates', label: 'Certs', icon: '✦' },
  { id: 'experience', label: 'Experience', icon: '◷' },
  { id: 'education', label: 'Edu', icon: '◉' },
  { id: 'contact', label: 'Contact', icon: '✉' },
]

const activeSection = ref('home')

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  activeSection.value = id
}

function onScroll() {
  const scrollPos = window.scrollY + 160

  for (let i = navItems.length - 1; i >= 0; i--) {
    const section = document.getElementById(navItems[i].id)
    if (section && section.offsetTop <= scrollPos) {
      activeSection.value = navItems[i].id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-top">
      <button class="brand" @click="scrollToSection('home')">
        <span class="brand-mark">B</span>
        <span class="brand-text">Bien</span>
      </button>
      <p class="brand-tag">Portfolio</p>
    </div>

    <nav class="sidebar-nav">
      <button
        v-for="item in navItems"
        :key="item.id"
        :class="['nav-item', { active: activeSection === item.id }]"
        @click="scrollToSection(item.id)"
      >
        <span class="nav-icon">{{ item.icon }}</span>
        <span class="nav-label">{{ item.label }}</span>
        <span v-if="activeSection === item.id" class="nav-indicator" />
      </button>
    </nav>

    <div class="sidebar-bottom">
      <a href="mailto:quijanobien16@gmail.com" class="status-pill">
        <span class="status-dot" />
        Available for work
      </a>
    </div>
  </aside>

  <nav class="bottom-nav" aria-label="Mobile navigation">
    <button
      v-for="item in navItems.slice(0, 5)"
      :key="item.id"
      :class="['bottom-item', { active: activeSection === item.id }]"
      @click="scrollToSection(item.id)"
    >
      <span>{{ item.icon }}</span>
      <span class="bottom-label">{{ item.label }}</span>
    </button>
    <button
      :class="['bottom-item', { active: ['education', 'contact', 'certificates', 'experience'].includes(activeSection) }]"
      @click="scrollToSection('contact')"
    >
      <span>⋯</span>
      <span class="bottom-label">More</span>
    </button>
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--sidebar-width);
  display: flex;
  flex-direction: column;
  padding: 2rem 1.25rem;
  background: rgba(15, 20, 25, 0.85);
  backdrop-filter: blur(20px);
  border-right: 1px solid var(--border);
  z-index: 100;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: var(--font-display);
}

.brand-mark {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--accent), var(--accent-alt));
  color: #042f1a;
  font-weight: 800;
  font-size: 1.1rem;
  border-radius: 12px;
}

.brand-text {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
}

.brand-tag {
  margin-top: 0.35rem;
  margin-left: 3.25rem;
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.sidebar-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 2.5rem;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 1rem;
  background: none;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-family: var(--font);
  font-size: 0.9rem;
  color: var(--text-muted);
  text-align: left;
  transition: all 0.2s ease;
}

.nav-item:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.04);
}

.nav-item.active {
  color: var(--accent);
  background: var(--accent-soft);
}

.nav-icon {
  font-size: 0.85rem;
  width: 1.25rem;
  text-align: center;
  opacity: 0.7;
}

.nav-item.active .nav-icon {
  opacity: 1;
}

.nav-indicator {
  position: absolute;
  right: 0.75rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent-glow);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.85rem;
  font-size: 0.75rem;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 999px;
  transition: border-color 0.2s, color 0.2s;
}

.status-pill:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.bottom-nav {
  display: none;
}

@media (max-width: 900px) {
  .sidebar {
    display: none;
  }

  .bottom-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(15, 20, 25, 0.92);
    backdrop-filter: blur(16px);
    border-top: 1px solid var(--border);
    padding: 0.5rem 0.25rem calc(0.5rem + env(safe-area-inset-bottom));
    justify-content: space-around;
  }

  .bottom-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.35rem 0.5rem;
    font-size: 1rem;
    color: var(--text-muted);
    transition: color 0.2s;
  }

  .bottom-item.active {
    color: var(--accent);
  }

  .bottom-label {
    font-size: 0.6rem;
    font-family: var(--font);
    font-weight: 500;
  }
}
</style>
