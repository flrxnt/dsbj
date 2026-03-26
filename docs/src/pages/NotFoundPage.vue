<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  messages: {
    fr: {
      title: "Page non trouvée",
      heading: "404",
      desc: "La page que vous cherchez n\u2019existe pas ou a été déplacée.",
      hint: "Vérifiez l\u2019adresse URL ou retournez à l\u2019accueil.",
      back: "Retour à l\u2019accueil",
      search: "Rechercher sur le site",
    },
    en: {
      title: "Page not found",
      heading: "404",
      desc: "The page you are looking for does not exist or has been moved.",
      hint: "Check the URL or go back to the home page.",
      back: "Back to home",
      search: "Search the site",
    },
  },
});
</script>

<template>
  <section
    style="
      padding: var(--bj-spacing-16v) 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
    "
  >
    <div class="bj-container" style="text-align: center">
      <p
        class="bj-display-xl"
        style="
          color: var(--bj-color-vert-benin-main-491);
          margin-bottom: var(--bj-spacing-2v);
          font-weight: var(--bj-fw-bold);
        "
      >
        {{ t("heading") }}
      </p>
      <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-4v)">
        {{ t("title") }}
      </h1>
      <p
        class="bj-text-lg"
        style="
          color: var(--bj-text-alt);
          margin-bottom: var(--bj-spacing-2v);
          max-width: 32rem;
          margin-inline: auto;
        "
      >
        {{ t("desc") }}
      </p>
      <p
        class="bj-text-md"
        style="
          color: var(--bj-text-alt);
          margin-bottom: var(--bj-spacing-8v);
          max-width: 32rem;
          margin-inline: auto;
        "
      >
        {{ t("hint") }}
      </p>
      <div
        style="
          display: flex;
          gap: var(--bj-spacing-4v);
          justify-content: center;
          flex-wrap: wrap;
        "
      >
        <RouterLink to="/" class="bj-btn">
          <i class="ri-home-line" aria-hidden="true"></i>
          {{ t("back") }}
        </RouterLink>
        <RouterLink to="/composants" class="bj-btn bj-btn--secondary">
          <i class="ri-layout-grid-line" aria-hidden="true"></i>
          {{ t("search") }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>
