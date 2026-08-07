# Clinic Capstone

**Projet FE-01** — Development Environment and AI Toolchain

Setting up the development environment and AI tools for the Clinic Capstone journey.

## Context

This repository corresponds to the first stage of the project: configuring the IDE, Git conventions, and the base workspace before developing features.

## Prérequisites

- [Git](https://git-scm.com/)
- [Cursor](https://cursor.com/) (IDE avec assistance IA)
- Node.js *(si applicable aux prochaines étapes)*

## Installation

```bash
git clone https://github.com/ABRrO-ops/clinic-capstone.git
cd clinic-capstone
```

## Project Structure


```
Mon-Stage/
├── README.md          # Project documentation
├── WORKFLOW.md        # Workflow comparison (FE-03)
├── CLAUDE.md          # AI IDE conventions
├── LICENSE            # Project license
├── babel.config.cjs   # Babel configuration
├── jest.config.cjs    # Jest configuration
├── jest.setup.js      # Jest setup file
├── vite.config.ts     # Vite configuration
├── package.json
├── tsconfig.json
└── src/
├── features/
│   ├── SettingsForm.jsx
│   ├── SettingsForm.test.jsx
│   ├── SettingsForm.css
│   └── settingsSchema.js
├── main.tsx
├── App.tsx
└── index.css
```

## Conventions

- **Commits** : [Conventional Commits 1.0.0](https://www.conventionalcommits.org/fr/)
  - Example : `feat: add initial README`
- **IDE** : Cursor (see `CLAUDE.md`)


## Screenshots (FE-03)

### Cursor Output
![Cursor Form](./captures/cursor.png)

### Claude Output
![Claude Form](./captures/claude.png)

### v0 Output
![v0 Form](./captures/v0.png)



## Workflow Comparison

See [WORKFLOW.md](./WORKFLOW.md) for the detailed comparison between vague and precise prompts, including bonus analysis of Cursor, Claude, and v0.

## Progress Status

- [x] Git repository initialization  
- [x] README and basic conventions  
- [x] FE-03: Workflow comparison (vague vs precise)  
- [x] Bonus: Comparison with Claude and v0  

## Auteur

*Abdoul-Madjid BAWA-2026

