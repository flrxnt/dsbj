<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Avatar',
      desc: 'Représentation visuelle d\'un utilisateur : photo, initiales ou icône par défaut. Supporte un indicateur de statut et le regroupement.',
      'section-exemple': 'Exemple de base',
      'section-tailles': 'Tailles',
      'section-variantes': 'Variantes (initiales, icône, carré)',
      'section-statut': 'Indicateur de statut',
      'section-groupe': 'Groupe d\'avatars',
      'section-carre-tailles': 'Carré × tailles',
      'section-contenu-tailles': 'Contenu × tailles',
      'section-statut-tailles': 'Statut × tailles',
      'section-carre-statut': 'Carré avec statut',
      'section-groupe-tailles': 'Groupe avec tailles',
      'caption-groupe-sm': 'Groupe sm',
      'caption-groupe-lg': 'Groupe lg',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': 'Utilisez <code>alt</code> sur <code>&lt;img&gt;</code> pour décrire la personne. Pour un avatar décoratif, <code>alt=""</code> et <code>aria-hidden="true"</code>. L\'indicateur de statut devrait être doublé d\'un texte masqué (<code>bj-sr-only</code>) pour les lecteurs d\'écran.',
      'prop-bj-avatar': 'Conteneur de base, cercle par défaut (2.5 rem).',
      'prop-bj-avatar-sm': 'Petit (1.75 rem).',
      'prop-bj-avatar-lg': 'Grand (3.5 rem).',
      'prop-bj-avatar-xl': 'Très grand (5 rem).',
      'prop-bj-avatar-square': 'Variante carrée avec bords arrondis.',
      'prop-bj-avatar-img': 'Image à l\'intérieur (object-fit: cover).',
      'prop-bj-avatar-initials': 'Texte d\'initiales (fallback sans image).',
      'prop-bj-avatar-icon': 'Icône Remix Icon (fallback générique).',
      'prop-bj-avatar-status': 'Pastille de statut positionnée en bas à droite.',
      'prop-bj-avatar-status-online': 'Statut en ligne (vert).',
      'prop-bj-avatar-status-away': 'Statut absent (jaune).',
      'prop-bj-avatar-status-busy': 'Statut occupé (rouge).',
      'prop-bj-avatar-status-offline': 'Statut hors ligne (gris).',
      'prop-bj-avatar-group': 'Groupe d\'avatars superposés.',
    },
    en: {
      title: 'Avatar',
      desc: 'Visual representation of a user: photo, initials or default icon. Supports a status indicator and grouping.',
      'section-exemple': 'Basic example',
      'section-tailles': 'Sizes',
      'section-variantes': 'Variants (initials, icon, square)',
      'section-statut': 'Status indicator',
      'section-groupe': 'Avatar group',
      'section-carre-tailles': 'Square × sizes',
      'section-contenu-tailles': 'Content × sizes',
      'section-statut-tailles': 'Status × sizes',
      'section-carre-statut': 'Square with status',
      'section-groupe-tailles': 'Group with sizes',
      'caption-groupe-sm': 'Small group',
      'caption-groupe-lg': 'Large group',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'a11y-note': 'Use <code>alt</code> on <code>&lt;img&gt;</code> to describe the person. For a decorative avatar, use <code>alt=""</code> and <code>aria-hidden="true"</code>. The status indicator should be paired with hidden text (<code>bj-sr-only</code>) for screen readers.',
      'prop-bj-avatar': 'Base container, circle by default (2.5 rem).',
      'prop-bj-avatar-sm': 'Small (1.75 rem).',
      'prop-bj-avatar-lg': 'Large (3.5 rem).',
      'prop-bj-avatar-xl': 'Extra large (5 rem).',
      'prop-bj-avatar-square': 'Square variant with rounded corners.',
      'prop-bj-avatar-img': 'Image inside (object-fit: cover).',
      'prop-bj-avatar-initials': 'Initials text (fallback without image).',
      'prop-bj-avatar-icon': 'Remix Icon (generic fallback).',
      'prop-bj-avatar-status': 'Status dot positioned bottom-right.',
      'prop-bj-avatar-status-online': 'Online status (green).',
      'prop-bj-avatar-status-away': 'Away status (yellow).',
      'prop-bj-avatar-status-busy': 'Busy status (red).',
      'prop-bj-avatar-status-offline': 'Offline status (gray).',
      'prop-bj-avatar-group': 'Overlapping avatar group.',
    },
  },
})

const codeExemple = `<div class="bj-avatar">
  <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=3" alt="Aminata Koudjo" />
</div>`

const codeTailles = `<div class="bj-avatar bj-avatar--sm">
  <span class="bj-avatar__initials">AK</span>
</div>
<div class="bj-avatar">
  <span class="bj-avatar__initials">AK</span>
</div>
<div class="bj-avatar bj-avatar--lg">
  <span class="bj-avatar__initials">AK</span>
</div>
<div class="bj-avatar bj-avatar--xl">
  <span class="bj-avatar__initials">AK</span>
</div>`

const codeVariantes = `<!-- Initiales -->
<div class="bj-avatar">
  <span class="bj-avatar__initials">FK</span>
</div>
<!-- Icône -->
<div class="bj-avatar">
  <i class="ri-user-line bj-avatar__icon" aria-hidden="true"></i>
</div>
<!-- Carré -->
<div class="bj-avatar bj-avatar--square">
  <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=5" alt="Photo" />
</div>`

const codeStatut = `<div class="bj-avatar">
  <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=8" alt="Photo" />
  <span class="bj-avatar__status bj-avatar__status--online"></span>
</div>
<div class="bj-avatar">
  <span class="bj-avatar__initials">FK</span>
  <span class="bj-avatar__status bj-avatar__status--away"></span>
</div>
<div class="bj-avatar">
  <span class="bj-avatar__initials">MD</span>
  <span class="bj-avatar__status bj-avatar__status--busy"></span>
</div>
<div class="bj-avatar">
  <i class="ri-user-line bj-avatar__icon" aria-hidden="true"></i>
  <span class="bj-avatar__status bj-avatar__status--offline"></span>
</div>`

const codeGroupe = `<div class="bj-avatar-group">
  <div class="bj-avatar">
    <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=1" alt="Utilisateur 1" />
  </div>
  <div class="bj-avatar">
    <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=2" alt="Utilisateur 2" />
  </div>
  <div class="bj-avatar">
    <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=3" alt="Utilisateur 3" />
  </div>
  <div class="bj-avatar">
    <span class="bj-avatar__initials">+3</span>
  </div>
</div>`

const codeCarreTailles = `<div class="bj-avatar bj-avatar--square bj-avatar--sm">…</div>
<div class="bj-avatar bj-avatar--square">…</div>
<div class="bj-avatar bj-avatar--square bj-avatar--lg">…</div>
<div class="bj-avatar bj-avatar--square bj-avatar--xl">…</div>`

const codeContenuTailles = `<!-- Même contenu (image, initiales, icône) en sm, md, lg, xl -->
<div class="bj-avatar bj-avatar--sm"><img class="bj-avatar__img" src="…" alt="…" /></div>
<div class="bj-avatar"><span class="bj-avatar__initials">AK</span></div>`

const codeStatutTailles = `<!-- Pastille en ligne pour chaque taille -->
<div class="bj-avatar bj-avatar--sm">
  <span class="bj-avatar__initials">AK</span>
  <span class="bj-avatar__status bj-avatar__status--online"></span>
</div>`

const codeCarreStatut = `<div class="bj-avatar bj-avatar--square">
  <img class="bj-avatar__img" src="…" alt="…" />
  <span class="bj-avatar__status bj-avatar__status--online"></span>
</div>`

const codeGroupeTailles = `<div class="bj-avatar-group">
  <div class="bj-avatar bj-avatar--sm">…</div>
  <div class="bj-avatar bj-avatar--sm">…</div>
</div>`

const propsRows = computed(() => [
  { name: 'bj-avatar', description: t('prop-bj-avatar') },
  { name: 'bj-avatar--sm', description: t('prop-bj-avatar-sm') },
  { name: 'bj-avatar--lg', description: t('prop-bj-avatar-lg') },
  { name: 'bj-avatar--xl', description: t('prop-bj-avatar-xl') },
  { name: 'bj-avatar--square', description: t('prop-bj-avatar-square') },
  { name: 'bj-avatar__img', description: t('prop-bj-avatar-img') },
  { name: 'bj-avatar__initials', description: t('prop-bj-avatar-initials') },
  { name: 'bj-avatar__icon', description: t('prop-bj-avatar-icon') },
  { name: 'bj-avatar__status', description: t('prop-bj-avatar-status') },
  { name: 'bj-avatar__status--online', description: t('prop-bj-avatar-status-online') },
  { name: 'bj-avatar__status--away', description: t('prop-bj-avatar-status-away') },
  { name: 'bj-avatar__status--busy', description: t('prop-bj-avatar-status-busy') },
  { name: 'bj-avatar__status--offline', description: t('prop-bj-avatar-status-offline') },
  { name: 'bj-avatar-group', description: t('prop-bj-avatar-group') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="exemple-avatar" :title="t('section-exemple')">
    <DocsPreview>
      <div class="bj-avatar">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=3" alt="Aminata Koudjo" />
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="tailles-avatar" :title="t('section-tailles')">
    <DocsPreview style="display: flex; gap: var(--bj-spacing-3v); align-items: center">
      <div class="bj-avatar bj-avatar--sm">
        <span class="bj-avatar__initials">AK</span>
      </div>
      <div class="bj-avatar">
        <span class="bj-avatar__initials">AK</span>
      </div>
      <div class="bj-avatar bj-avatar--lg">
        <span class="bj-avatar__initials">AK</span>
      </div>
      <div class="bj-avatar bj-avatar--xl">
        <span class="bj-avatar__initials">AK</span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTailles" />
  </DocsSection>

  <DocsSection id="variantes-avatar" :title="t('section-variantes')">
    <DocsPreview style="display: flex; gap: var(--bj-spacing-3v); align-items: center">
      <div class="bj-avatar">
        <span class="bj-avatar__initials">FK</span>
      </div>
      <div class="bj-avatar">
        <i class="ri-user-line bj-avatar__icon" aria-hidden="true"></i>
      </div>
      <div class="bj-avatar bj-avatar--square">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=5" alt="Photo" />
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="carre-tailles-avatar" :title="t('section-carre-tailles')">
    <DocsPreview style="display: flex; gap: var(--bj-spacing-3v); align-items: center">
      <div class="bj-avatar bj-avatar--square bj-avatar--sm">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=11" alt="" />
      </div>
      <div class="bj-avatar bj-avatar--square">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=11" alt="" />
      </div>
      <div class="bj-avatar bj-avatar--square bj-avatar--lg">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=11" alt="" />
      </div>
      <div class="bj-avatar bj-avatar--square bj-avatar--xl">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=11" alt="" />
      </div>
    </DocsPreview>
    <DocsCode :code="codeCarreTailles" />
  </DocsSection>

  <DocsSection id="contenu-tailles-avatar" :title="t('section-contenu-tailles')">
    <DocsPreview
      style="
        display: grid;
        grid-template-columns: auto repeat(4, minmax(0, max-content));
        gap: var(--bj-spacing-3v);
        align-items: center;
      "
    >
      <span aria-hidden="true"></span>
      <span class="bj-text-xs" style="color: var(--bj-text-mention)">sm</span>
      <span class="bj-text-xs" style="color: var(--bj-text-mention)">md</span>
      <span class="bj-text-xs" style="color: var(--bj-text-mention)">lg</span>
      <span class="bj-text-xs" style="color: var(--bj-text-mention)">xl</span>

      <span class="bj-text-xs" style="color: var(--bj-text-mention)">Image</span>
      <div class="bj-avatar bj-avatar--sm">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=20" alt="Portrait" />
      </div>
      <div class="bj-avatar">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=20" alt="Portrait" />
      </div>
      <div class="bj-avatar bj-avatar--lg">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=20" alt="Portrait" />
      </div>
      <div class="bj-avatar bj-avatar--xl">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=20" alt="Portrait" />
      </div>

      <span class="bj-text-xs" style="color: var(--bj-text-mention)">Initiales</span>
      <div class="bj-avatar bj-avatar--sm">
        <span class="bj-avatar__initials">AK</span>
      </div>
      <div class="bj-avatar">
        <span class="bj-avatar__initials">AK</span>
      </div>
      <div class="bj-avatar bj-avatar--lg">
        <span class="bj-avatar__initials">AK</span>
      </div>
      <div class="bj-avatar bj-avatar--xl">
        <span class="bj-avatar__initials">AK</span>
      </div>

      <span class="bj-text-xs" style="color: var(--bj-text-mention)">Icône</span>
      <div class="bj-avatar bj-avatar--sm">
        <i class="ri-user-line bj-avatar__icon" aria-hidden="true"></i>
      </div>
      <div class="bj-avatar">
        <i class="ri-user-line bj-avatar__icon" aria-hidden="true"></i>
      </div>
      <div class="bj-avatar bj-avatar--lg">
        <i class="ri-user-line bj-avatar__icon" aria-hidden="true"></i>
      </div>
      <div class="bj-avatar bj-avatar--xl">
        <i class="ri-user-line bj-avatar__icon" aria-hidden="true"></i>
      </div>
    </DocsPreview>
    <DocsCode :code="codeContenuTailles" />
  </DocsSection>

  <DocsSection id="statut-avatar" :title="t('section-statut')">
    <DocsPreview style="display: flex; gap: var(--bj-spacing-3v); align-items: center">
      <div class="bj-avatar">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=8" alt="Photo" />
        <span class="bj-avatar__status bj-avatar__status--online"></span>
      </div>
      <div class="bj-avatar">
        <span class="bj-avatar__initials">FK</span>
        <span class="bj-avatar__status bj-avatar__status--away"></span>
      </div>
      <div class="bj-avatar">
        <span class="bj-avatar__initials">MD</span>
        <span class="bj-avatar__status bj-avatar__status--busy"></span>
      </div>
      <div class="bj-avatar">
        <i class="ri-user-line bj-avatar__icon" aria-hidden="true"></i>
        <span class="bj-avatar__status bj-avatar__status--offline"></span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeStatut" />
  </DocsSection>

  <DocsSection id="statut-tailles-avatar" :title="t('section-statut-tailles')">
    <DocsPreview style="display: flex; gap: var(--bj-spacing-3v); align-items: center">
      <div class="bj-avatar bj-avatar--sm">
        <span class="bj-avatar__initials">AK</span>
        <span class="bj-avatar__status bj-avatar__status--online"></span>
        <span class="bj-sr-only">En ligne</span>
      </div>
      <div class="bj-avatar">
        <span class="bj-avatar__initials">AK</span>
        <span class="bj-avatar__status bj-avatar__status--online"></span>
        <span class="bj-sr-only">En ligne</span>
      </div>
      <div class="bj-avatar bj-avatar--lg">
        <span class="bj-avatar__initials">AK</span>
        <span class="bj-avatar__status bj-avatar__status--online"></span>
        <span class="bj-sr-only">En ligne</span>
      </div>
      <div class="bj-avatar bj-avatar--xl">
        <span class="bj-avatar__initials">AK</span>
        <span class="bj-avatar__status bj-avatar__status--online"></span>
        <span class="bj-sr-only">En ligne</span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeStatutTailles" />
  </DocsSection>

  <DocsSection id="carre-statut-avatar" :title="t('section-carre-statut')">
    <DocsPreview style="display: flex; gap: var(--bj-spacing-3v); align-items: center; flex-wrap: wrap">
      <div class="bj-avatar bj-avatar--square">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=30" alt="Portrait" />
        <span class="bj-avatar__status bj-avatar__status--online"></span>
        <span class="bj-sr-only">En ligne</span>
      </div>
      <div class="bj-avatar bj-avatar--square">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=31" alt="Portrait" />
        <span class="bj-avatar__status bj-avatar__status--away"></span>
        <span class="bj-sr-only">Absent</span>
      </div>
      <div class="bj-avatar bj-avatar--square">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=32" alt="Portrait" />
        <span class="bj-avatar__status bj-avatar__status--busy"></span>
        <span class="bj-sr-only">Occupé</span>
      </div>
      <div class="bj-avatar bj-avatar--square">
        <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=33" alt="Portrait" />
        <span class="bj-avatar__status bj-avatar__status--offline"></span>
        <span class="bj-sr-only">Hors ligne</span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCarreStatut" />
  </DocsSection>

  <DocsSection id="groupe-avatar" :title="t('section-groupe')">
    <DocsPreview>
      <div class="bj-avatar-group">
        <div class="bj-avatar">
          <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=1" alt="Utilisateur 1" />
        </div>
        <div class="bj-avatar">
          <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=2" alt="Utilisateur 2" />
        </div>
        <div class="bj-avatar">
          <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=3" alt="Utilisateur 3" />
        </div>
        <div class="bj-avatar">
          <span class="bj-avatar__initials">+3</span>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGroupe" />
  </DocsSection>

  <DocsSection id="groupe-tailles-avatar" :title="t('section-groupe-tailles')">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-5v);
        align-items: flex-start;
      "
    >
      <div>
        <p class="bj-text-sm" style="color: var(--bj-text-mention); margin: 0 0 var(--bj-spacing-2v)">
          {{ t('caption-groupe-sm') }}
        </p>
        <div class="bj-avatar-group">
          <div class="bj-avatar bj-avatar--sm">
            <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=40" alt="Membre 1" />
          </div>
          <div class="bj-avatar bj-avatar--sm">
            <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=41" alt="Membre 2" />
          </div>
          <div class="bj-avatar bj-avatar--sm">
            <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=42" alt="Membre 3" />
          </div>
          <div class="bj-avatar bj-avatar--sm">
            <span class="bj-avatar__initials">+2</span>
          </div>
        </div>
      </div>
      <div>
        <p class="bj-text-sm" style="color: var(--bj-text-mention); margin: 0 0 var(--bj-spacing-2v)">
          {{ t('caption-groupe-lg') }}
        </p>
        <div class="bj-avatar-group">
          <div class="bj-avatar bj-avatar--lg">
            <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=50" alt="Membre 1" />
          </div>
          <div class="bj-avatar bj-avatar--lg">
            <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=51" alt="Membre 2" />
          </div>
          <div class="bj-avatar bj-avatar--lg">
            <img class="bj-avatar__img" src="https://i.pravatar.cc/100?img=52" alt="Membre 3" />
          </div>
          <div class="bj-avatar bj-avatar--lg">
            <span class="bj-avatar__initials">+2</span>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGroupeTailles" />
  </DocsSection>

  <DocsSection id="classes-avatar" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-avatar" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
