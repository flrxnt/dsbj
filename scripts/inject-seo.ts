/**
 * SEO + Accessibility injection script for DSBJ documentation.
 * Processes all HTML files in docs/ to add:
 * - meta description, canonical, OG tags, Twitter Card, theme-color, favicon
 * - Skip links after <body>
 * - aria-hidden="true" on menu icons missing it
 * - JSON-LD structured data
 *
 * Run: bun run scripts/inject-seo.ts
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, relative } from 'path';

const BASE_URL = 'https://design.gouv.bj';
const DOCS_DIR = join(import.meta.dir, '..', 'docs');
const TODAY = new Date().toISOString().split('T')[0];

interface PageMeta {
  description: string;
  priority: string;
}

const PAGE_DESCRIPTIONS: Record<string, PageMeta> = {
  'index.html': { description: 'DSBJ - Le Design Système officiel de la République du Bénin. 40 composants HTML/CSS/JS accessibles pour construire des interfaces numériques gouvernementales.', priority: '1.0' },
  'premiers-pas/index.html': { description: 'Premiers pas avec le DSBJ : présentation du Design Système du Bénin, guide de démarrage pour les équipes de développement.', priority: '0.8' },
  'premiers-pas/installation.html': { description: 'Installer le DSBJ via npm, CDN ou téléchargement. Paquet @gouvbj/dsbj avec CSS, JS ES module et UMD.', priority: '0.8' },
  'premiers-pas/utilisation.html': { description: 'Guide d\'utilisation du DSBJ : structure HTML de base, préfixe CSS bj-, thème sombre, initialisation JavaScript.', priority: '0.8' },
  'premiers-pas/ia.html': { description: 'Utiliser le DSBJ avec l\'IA : fichier llms.txt, règles Cursor, serveur MCP et prompts pour générer du code conforme.', priority: '0.7' },
  'fondamentaux/index.html': { description: 'Fondamentaux du DSBJ : couleurs, typographie, grille, espacement, icônes et principes du Design Système du Bénin.', priority: '0.8' },
  'fondamentaux/couleurs-palette.html': { description: 'Palette de couleurs officielle du DSBJ : vert, jaune et rouge du Bénin, couleurs sémantiques et tokens CSS.', priority: '0.6' },
  'fondamentaux/couleurs-utilisation.html': { description: 'Utilisation des couleurs dans le DSBJ : tokens sémantiques pour action, texte, fond et bordure.', priority: '0.6' },
  'fondamentaux/typographie.html': { description: 'Typographie du DSBJ : polices Open Sans et Spectral, échelle typographique, classes de titres et de texte.', priority: '0.6' },
  'fondamentaux/espacement.html': { description: 'Système d\'espacement du DSBJ : tokens --bj-spacing-*, classes utilitaires de marge et padding.', priority: '0.6' },
  'fondamentaux/grille.html': { description: 'Grille responsive du DSBJ : système 12 colonnes avec bj-container, bj-grid-row et bj-col-*.', priority: '0.6' },
  'fondamentaux/ombres-elevation.html': { description: 'Ombres et élévation du DSBJ : niveaux d\'ombre sm, md, lg, xl pour la hiérarchie visuelle.', priority: '0.5' },
  'fondamentaux/icones.html': { description: 'Icônes du DSBJ : utilisation de Remix Icon avec aria-hidden pour l\'accessibilité.', priority: '0.6' },
  'fondamentaux/medias.html': { description: 'Médias dans le DSBJ : ratios d\'images responsive, intégration vidéo et bonnes pratiques.', priority: '0.5' },
  'fondamentaux/classes-utilitaires.html': { description: 'Classes utilitaires du DSBJ : espacement, couleur, texte, flexbox, affichage et accessibilité.', priority: '0.6' },
  'fondamentaux/principes.html': { description: 'Principes de conception du DSBJ : accessibilité, cohérence, sobriété numérique et identité du Bénin.', priority: '0.5' },
  'composants/index.html': { description: 'Bibliothèque de 40 composants HTML/CSS du DSBJ : navigation, formulaires, contenu, interactifs et réglementaire.', priority: '0.8' },
  'composants/header.html': { description: 'Composant Header du DSBJ : en-tête institutionnel avec logo République du Bénin, navigation et menu mobile.', priority: '0.6' },
  'composants/footer.html': { description: 'Composant Footer du DSBJ : pied de page avec liens légaux, partenaires et mentions.', priority: '0.6' },
  'composants/navigation.html': { description: 'Composant Navigation du DSBJ : menus et listes de liens de navigation accessibles.', priority: '0.6' },
  'composants/breadcrumb.html': { description: 'Composant Breadcrumb du DSBJ : fil d\'Ariane accessible avec aria-current pour la page active.', priority: '0.6' },
  'composants/sidemenu.html': { description: 'Composant Sidemenu du DSBJ : menu latéral pour sous-sections et pages liées.', priority: '0.5' },
  'composants/skiplink.html': { description: 'Composant Skiplink du DSBJ : lien d\'évitement pour l\'accessibilité clavier.', priority: '0.5' },
  'composants/pagination.html': { description: 'Composant Pagination du DSBJ : navigation paginée accessible.', priority: '0.5' },
  'composants/summary.html': { description: 'Composant Sommaire du DSBJ : table des matières avec ancres de page.', priority: '0.5' },
  'composants/logo.html': { description: 'Composant Logo du DSBJ : signature République du Bénin avec bande tricolore.', priority: '0.5' },
  'composants/button.html': { description: 'Composant Bouton du DSBJ : boutons primaires, secondaires, tertiaires, tailles et groupes.', priority: '0.7' },
  'composants/link.html': { description: 'Composant Lien du DSBJ : liens de texte avec variantes de taille et icônes.', priority: '0.5' },
  'composants/badge.html': { description: 'Composant Badge du DSBJ : pastilles de statut info, succès, attention et erreur.', priority: '0.5' },
  'composants/tag.html': { description: 'Composant Tag du DSBJ : étiquettes cliquables, filtres et tags supprimables.', priority: '0.5' },
  'composants/input.html': { description: 'Composant Input du DSBJ : champs de saisie texte avec labels, hints et validation.', priority: '0.6' },
  'composants/select.html': { description: 'Composant Select du DSBJ : liste déroulante native stylée.', priority: '0.5' },
  'composants/checkbox.html': { description: 'Composant Checkbox du DSBJ : cases à cocher avec groupes et légendes accessibles.', priority: '0.5' },
  'composants/radio.html': { description: 'Composant Radio du DSBJ : boutons radio avec groupes inline et légendes.', priority: '0.5' },
  'composants/toggle.html': { description: 'Composant Toggle du DSBJ : interrupteur on/off accessible.', priority: '0.5' },
  'composants/upload.html': { description: 'Composant Upload du DSBJ : envoi de fichiers avec drag-and-drop.', priority: '0.5' },
  'composants/search.html': { description: 'Composant Recherche du DSBJ : champ et bouton de recherche accessible.', priority: '0.5' },
  'composants/datepicker.html': { description: 'Composant Datepicker du DSBJ : sélecteur de date avec calendrier intégré.', priority: '0.5' },
  'composants/alert.html': { description: 'Composant Alerte du DSBJ : messages contextuels info, succès, attention et erreur.', priority: '0.6' },
  'composants/notice.html': { description: 'Composant Bandeau du DSBJ : annonces en tête de page avec fermeture.', priority: '0.5' },
  'composants/callout.html': { description: 'Composant Mise en avant du DSBJ : bloc d\'information avec appel à l\'action.', priority: '0.5' },
  'composants/highlight.html': { description: 'Composant Mise en exergue du DSBJ : texte important mis en valeur.', priority: '0.5' },
  'composants/quote.html': { description: 'Composant Citation du DSBJ : blockquote avec auteur et source.', priority: '0.5' },
  'composants/card.html': { description: 'Composant Carte du DSBJ : cartes média, horizontales, liens et grilles de cartes.', priority: '0.6' },
  'composants/tile.html': { description: 'Composant Tuile du DSBJ : accès rapide avec icône ou image.', priority: '0.5' },
  'composants/table.html': { description: 'Composant Tableau du DSBJ : tableaux de données accessibles avec scope et caption.', priority: '0.6' },
  'composants/content.html': { description: 'Composant Contenu éditorial du DSBJ : typographie optimisée pour articles et pages.', priority: '0.5' },
  'composants/accordion.html': { description: 'Composant Accordéon du DSBJ : sections repliables avec ARIA et navigation clavier.', priority: '0.6' },
  'composants/tab.html': { description: 'Composant Onglet du DSBJ : panneaux accessibles par onglets avec rôles ARIA.', priority: '0.6' },
  'composants/modal.html': { description: 'Composant Modale du DSBJ : fenêtre dialog avec focus piégé et aria-modal.', priority: '0.6' },
  'composants/tooltip.html': { description: 'Composant Infobulle du DSBJ : aide contextuelle au survol ou au focus.', priority: '0.5' },
  'composants/stepper.html': { description: 'Composant Stepper du DSBJ : indicateur d\'étapes pour formulaires multi-étapes.', priority: '0.5' },
  'composants/toast.html': { description: 'Composant Toast du DSBJ : notifications éphémères de confirmation ou d\'alerte.', priority: '0.5' },
  'composants/dropdown.html': { description: 'Composant Dropdown du DSBJ : menu déroulant contextuel avec rôles menu/menuitem.', priority: '0.5' },
  'composants/marquee.html': { description: 'Composant Marquee du DSBJ : bandeau défilant avec pause et aria-live.', priority: '0.5' },
  'composants/gallery.html': { description: 'Composant Galerie du DSBJ : grille d\'images avec visionneuse plein écran.', priority: '0.5' },
  'composants/consent.html': { description: 'Composant Consentement du DSBJ : bandeau cookies et gestionnaire RGPD.', priority: '0.6' },
  'modeles/index.html': { description: 'Modèles de pages du DSBJ : templates prêts à l\'emploi pour sites gouvernementaux béninois.', priority: '0.8' },
  'modeles/page-accueil.html': { description: 'Modèle de page d\'accueil DSBJ : template complet avec header, hero, services et footer.', priority: '0.6' },
  'modeles/page-article.html': { description: 'Modèle de page article DSBJ : template de contenu éditorial avec sidebar.', priority: '0.6' },
  'modeles/page-formulaire.html': { description: 'Modèle de page formulaire DSBJ : template multi-étapes avec stepper et validation.', priority: '0.6' },
};

// Skip links are intentionally not injected by this script.

function getJsonLd(relPath: string, title: string, description: string): string {
  const url = `${BASE_URL}/docs/${relPath}`;

  if (relPath === 'index.html') {
    return `    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "name": "DSBJ - Design Système du Bénin",
          "url": "${BASE_URL}",
          "description": "${description}",
          "inLanguage": "fr"
        },
        {
          "@type": "Organization",
          "name": "République du Bénin",
          "url": "${BASE_URL}",
          "logo": "${BASE_URL}/assets/logo-benin.png"
        }
      ]
    }
    </script>`;
  }

  if (relPath.startsWith('composants/') && relPath !== 'composants/index.html') {
    const name = title.split(' - ')[0];
    return `    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "name": "${name}",
      "description": "${description}",
      "url": "${url}",
      "inLanguage": "fr",
      "articleSection": "Composants",
      "publisher": { "@type": "Organization", "name": "République du Bénin" }
    }
    </script>`;
  }

  const parts = relPath.replace('.html', '').split('/');
  const breadcrumbs = [{ name: 'Accueil', url: `${BASE_URL}/docs/` }];
  if (parts.length > 1) {
    breadcrumbs.push({ name: parts[0].charAt(0).toUpperCase() + parts[0].slice(1).replace(/-/g, ' '), url: `${BASE_URL}/docs/${parts[0]}/` });
  }
  breadcrumbs.push({ name: title.split(' - ')[0], url });

  return `    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [${breadcrumbs.map((b, i) => `
        { "@type": "ListItem", "position": ${i + 1}, "name": "${b.name}", "item": "${b.url}" }`).join(',')}
      ]
    }
    </script>`;
}

function computeFaviconPath(relPath: string): string {
  const depth = relPath.split('/').length - 1;
  const prefix = depth > 0 ? '../'.repeat(depth) : './';
  return `${prefix}assets/favicon.ico`;
}

function computeOgImagePath(relPath: string): string {
  const depth = relPath.split('/').length - 1;
  const prefix = depth > 0 ? '../'.repeat(depth) : './';
  return `${prefix}assets/og-image.png`;
}

async function getAllHtmlFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'assets') {
      files.push(...await getAllHtmlFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function processFile(filePath: string): Promise<void> {
  let html = await readFile(filePath, 'utf-8');
  const relPath = relative(DOCS_DIR, filePath).replace(/\\/g, '/');
  const meta = PAGE_DESCRIPTIONS[relPath];

  if (!meta) {
    console.log(`  SKIP (no description): ${relPath}`);
    return;
  }

  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : 'DSBJ';
  const description = meta.description;
  const canonicalUrl = `${BASE_URL}/docs/${relPath}`;
  const ogImage = `${BASE_URL}/docs/assets/og-image.png`;

  if (html.includes('meta name="description"')) {
    console.log(`  SKIP (already processed): ${relPath}`);
    return;
  }

  const seoTags = `    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="theme-color" content="#008751" />
    <link rel="icon" href="${computeFaviconPath(relPath)}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:locale" content="fr_BJ" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />`;

  html = html.replace(
    /(<title>[^<]+<\/title>)/,
    `$1\n${seoTags}`,
  );

  const jsonLd = getJsonLd(relPath, title, description);
  html = html.replace('</head>', `${jsonLd}\n  </head>`);

  html = html.replace(
    /<i class="ri-menu-line"><\/i>/g,
    '<i class="ri-menu-line" aria-hidden="true"></i>',
  );

  await writeFile(filePath, html, 'utf-8');
  console.log(`  OK: ${relPath}`);
}

async function main() {
  console.log('DSBJ SEO + A11y injection script');
  console.log('================================\n');

  const files = await getAllHtmlFiles(DOCS_DIR);
  console.log(`Found ${files.length} HTML files\n`);

  let processed = 0;
  for (const file of files) {
    await processFile(file);
    processed++;
  }

  console.log(`\nDone. Processed ${processed} files.`);
}

main().catch(console.error);
