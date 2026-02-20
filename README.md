# 🫀 Clickman — Portfolio Organique

Portfolio Next.js avec le concept du **Corps Organique** — un corps humain interactif et animé qui sert de navigation principale.

## ✦ Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — animations fluides
- **Three.js + @react-three/fiber** — 3D organique (prêt à l'extension)
- **Google Fonts** — Cormorant Garamond + Space Mono + DM Sans

## 🚀 Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de dev
npm run dev

# 3. Ouvrir dans le navigateur
http://localhost:3000
```

## 📁 Structure

```
clickman-portfolio/
├── app/
│   ├── layout.tsx       # Layout principal + metadata
│   ├── page.tsx         # Page d'accueil (assemblage des sections)
│   └── globals.css      # Styles globaux + animations custom
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx      # Corps organique + canvas veines
│   │   ├── AboutSection.tsx     # À propos + blob morphing
│   │   ├── ExperienceSection.tsx # Timeline d'expérience
│   │   ├── ProjectsSection.tsx  # Grille de projets
│   │   ├── SkillsSection.tsx    # Stack avec barres organiques
│   │   └── ContactSection.tsx   # Formulaire + infos
│   └── ui/
│       ├── Navbar.tsx           # Navigation fixe
│       └── CustomCursor.tsx     # Curseur personnalisé
├── lib/
│   └── utils.ts                 # Helpers (cn)
└── public/
    └── cv-clickman.pdf          # ← Ajoute ton CV ici!
```

## 🎨 Palette de couleurs

| Couleur | Valeur | Usage |
|---------|--------|-------|
| Void | `#0a0a0a` | Background principal |
| Teal | `#00ffcc` | Frontend, accents principaux |
| Violet | `#9b5de5` | Backend, organes secondaires |
| Gold | `#ffd93d` | Data, highlights |
| Text | `#e8e8f0` | Texte principal |
| Muted | `#5a5a7a` | Texte secondaire |

## ✏️ Personnalisation rapide

### 1. Changer les projets
Dans `components/sections/ProjectsSection.tsx`, modifie le tableau `projects`.

### 2. Changer les expériences
Dans `components/sections/ExperienceSection.tsx`, modifie le tableau `experiences`.

### 3. Changer les compétences
Dans `components/sections/SkillsSection.tsx`, modifie `skillCategories`.

### 4. Changer les organes du hero
Dans `components/sections/HeroSection.tsx`, modifie le tableau `ORGANS`.

### 5. Ajouter ton CV
Place ton fichier PDF dans `/public/cv-clickman.pdf`.

## 🌐 Déploiement

```bash
# Build de production
npm run build

# Deploy sur Vercel (recommandé)
npx vercel --prod
```

## 📬 Contact

Email : hello@clickman.dev
Portfolio : À déployer

---

*Ce portfolio est vivant — personnalise-le, fais-le respirer.*
