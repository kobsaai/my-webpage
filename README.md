# 🌐 benjamin-koller.click – Mein persönliches Portfolio

Dies ist mein persönliches Portfolio, in dem ich meine Projekte, Erfahrungen und Skills vorstelle. Die Seite wurde mit modernen Webtechnologien aufgebaut und ist vollständig responsive.

## 🚀 Live-Demo

🔗 [benjamin-koller.click](https://benjamin-koller.click)

## 🛠️ Tech-Stack

- **React** – UI-Framework
- **TypeScript** – Typsicherheit für besser wartbaren Code
- **Tailwind CSS** – Utility-first CSS Framework
- **Vite** – Superschnelles Build-Tool für moderne Frontends
- **AWS S3 + CloudFront** – Hosting und HTTPS-Bereitstellung
- **GitHub Actions** – Automatisiertes Deployment bei jedem Push

## 🔄 CI/CD

Die Webseite wird automatisch auf AWS S3 deployed, sobald Änderungen im `main`-Branch gepusht werden. Dafür nutze ich GitHub Actions, die den Build-Prozess auslösen und die neuen Dateien direkt in den S3-Bucket hochladen. CloudFront sorgt dabei für die HTTPS-Auslieferung.

## 📁 Projektstruktur (Auszug)

📦 portfolio
┣ 📂 public
┣ 📂 src
┃ ┣ 📂 components
┃ ┣ 📂 pages
┃ ┗ 📜 main.tsx
┣ 📜 tailwind.config.ts
┣ 📜 index.css
┣ 📜 vite.config.ts
┗ 📜 README.md

bash
Kopieren
Bearbeiten

## 🧑‍💻 Ziel

Das Portfolio dient als zentrale Anlaufstelle, um meine bisherigen Projekte zu präsentieren, mehr über mich zu erfahren und mich bei Bedarf kontaktieren zu können. Ich nutze die Seite auch, um neue Technologien auszuprobieren und Webtechniken zu vertiefen.

## 🔧 Setup und lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/dein-github-benutzername/portfolio.git

# Abhängigkeiten installieren
cd portfolio
npm install

# Lokale Entwicklung starten
npm run dev
🌍 Deployment
Das Deployment läuft automatisch über GitHub Actions auf einen AWS S3-Bucket mit aktiviertem CloudFront-CDN und HTTPS. Änderungen am Code im main-Branch führen automatisch zu einem Update der Live-Seite.

📬 Kontakt
Wenn du Feedback hast oder mit mir zusammenarbeiten möchtest, erreichst du mich über die Kontaktmöglichkeiten auf der Website.

Vielen Dank fürs Vorbeischauen! 🙌
```
