<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="footer-copy">&copy; {{ new Date().getFullYear() }} Bien Ernest D. Quijano</p>
      <p class="footer-note">Built with Vue.js</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem 0 2.5rem;
  border-top: 1px solid var(--border);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-copy {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-note {
  font-size: 0.75rem;
  color: var(--text-muted);
  opacity: 0.6;
}

@media (max-width: 600px) {
  .footer-inner {
    flex-direction: column;
    gap: 0.35rem;
    text-align: center;
  }
}
</style>
