<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useTheme } from "../composables/useTheme";
import { mainNav } from "../data/navigation";

const route = useRoute();
const { t, locale } = useI18n();
const { theme, toggleTheme } = useTheme();
const version = __DSBJ_VERSION__;

const currentSection = computed(() => route.meta.section as string);
const menuOpen = ref(false);

watch(route, () => {
  menuOpen.value = false;
});

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function toggleLang() {
  locale.value = locale.value === "fr" ? "en" : "fr";
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("bj-docs-lang", locale.value);
  }
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("lang", locale.value);
  }
}

function sectionFromPath(to: string): string {
  if (to === "/") return "home";
  return to.replace(/^\//, "").split("/")[0];
}
</script>

<template>
  <header class="bj-header" role="banner">
    <div class="bj-container">
      <div class="bj-header__body">
        <RouterLink to="/" class="bj-header__brand">
          <div class="bj-logo">
            <p>République<br />du Bénin</p>
            <span class="bj-logo__motto">Fraternité, Justice, Travail</span>
          </div>
          <div class="bj-header__service">
            <span class="bj-header__service-title">DSBJ</span>
            <span class="bj-header__service-tagline">
              <span>{{ t("header.tagline") }}</span>
            </span>
          </div>
        </RouterLink>
        <div class="docs-header-tools">
          <button
            type="button"
            class="bj-btn bj-btn--tertiary bj-btn--sm"
            :aria-label="t('lang.label')"
            :title="locale === 'fr' ? 'English' : 'Français'"
            @click="toggleLang"
          >
            {{ locale === "fr" ? "EN" : "FR" }}
          </button>
          <button
            type="button"
            class="bj-btn bj-btn--tertiary bj-btn--sm"
            :aria-label="theme === 'dark' ? t('theme.light') : t('theme.dark')"
            :title="theme === 'dark' ? t('theme.light') : t('theme.dark')"
            @click="toggleTheme"
          >
            <i
              :class="theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'"
              aria-hidden="true"
            ></i>
          </button>
          <span class="docs-version">&lt;/&gt; v{{ version }}</span>
          <button
            type="button"
            class="bj-header__menu-btn"
            aria-controls="header-nav"
            :aria-expanded="menuOpen"
            @click="toggleMenu"
          >
            <i class="ri-menu-line" aria-hidden="true"></i> Menu
          </button>
        </div>
      </div>
      <nav
        class="bj-header__nav"
        id="header-nav"
        role="navigation"
        aria-label="Navigation principale"
        v-bind="menuOpen ? { 'data-bj-expanded': '' } : {}"
      >
        <ul class="bj-header__nav-list">
          <li
            v-for="item in mainNav"
            :key="item.to"
            class="bj-header__nav-item"
          >
            <RouterLink
              :to="item.to"
              class="bj-header__nav-link"
              :class="{
                'bj-header__nav-link--active':
                  sectionFromPath(item.to) === currentSection,
              }"
              :aria-current="
                sectionFromPath(item.to) === currentSection ? 'page' : undefined
              "
            >
              <span>{{ item.i18nKey ? t(item.i18nKey) : item.label }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
