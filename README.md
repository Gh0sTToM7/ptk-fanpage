# PTK Fanpage

## Úvod

PTK Fanpage je moderní webová prezentace vytvořená jako ročníková práce do předmětu Webové technologie.

Web je věnován českému rapperovi PTK a obsahuje základní informace o jeho kariéře, galerii fotografií a kompletní diskografii s tracklisty jednotlivých projektů.

### Autor

Tomáš Oehme

### Živý web

GitHub Pages:

https://gh0sttom7.github.io/ptk-fanpage/

---

# Použité technologie

* HTML5
* CSS3
* JavaScript (ES6+)
* Google Fonts
* Font Awesome
* Visual Studio Code

---

# Adresářová struktura

```text
projekt/
│
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── README.md
│
├── covers/
│   ├── karakoram.jpg
│   ├── silent_kill.jpg
│   ├── golden_hill.jpg
│   ├── trappin_lonely.jpg
│   ├── painkillers.jpg
│   ├── 27.jpg
│   ├── bad_vibe.jpg
│   ├── utopeny_v_case.jpg
│   └── trap_menu.jpg
│
└── photos/
    ├── ptk.jpg
    ├── ptk_auticka.jpg
    ├── ptk_cernobilej.jpg
    ├── ptk_drip.jpg
    ├── ptk_na_koncerte_svetla.jpg
    ├── ptk_na_tour.jpg
    ├── ptk_porsche.jpg
    ├── ptk_v_aute.jpg
    ├── ptk_vojak.jpg
    └── ptk_zelena.jpg
```

---

# Technický rozbor

## 1. Výkon (Performance)

Web využívá lazy loading obrázků a optimalizované načítání obsahu.

### Ukázka

```html
<img src="./photos/ptk.jpg" alt="Portrét PTK" loading="lazy">
```

### Vysvětlení

Obrázky se načítají až ve chvíli, kdy se blíží do viditelné části stránky. Díky tomu dochází ke snížení objemu přenesených dat a rychlejšímu načítání webu.

---

## 2. SEO

Byly implementovány meta tagy, soubory robots.txt a sitemap.xml.

### Ukázka

```html
<meta name="description" content="Moderní fanouškovská stránka českého rappera PTK.">
<meta name="keywords" content="PTK, český rap, rap, hudba, fanpage, diskografie">
<meta name="robots" content="index, follow">
```

### Vysvětlení

Meta tagy poskytují vyhledávačům informace o obsahu stránky a pomáhají správné indexaci.

---

## 3. Přístupnost (Accessibility)

Web využívá alternativní texty obrázků, ARIA atributy a responzivní design.

### Ukázka

```html
<nav class="nav-links" aria-label="Hlavní navigace">
```

### Vysvětlení

Navigace je lépe interpretovatelná pro čtečky obrazovky a další asistivní technologie.

---

## 4. Sociální sítě

Byly implementovány Open Graph meta tagy a Twitter Cards.

### Ukázka

```html
<meta property="og:title" content="PTK Fanpage">
<meta property="og:description" content="Moderní fanouškovská stránka českého rappera PTK.">
<meta name="twitter:card" content="summary_large_image">
```

### Vysvětlení

Při sdílení odkazu na sociálních sítích se zobrazují správné informace o stránce.

---

## 5. UI/UX

Web byl navržen jako responzivní jednostránková aplikace.

### Použité principy

* Mobile First přístup
* Hamburger menu pro mobilní zařízení
* Smooth scrolling
* Responzivní design
* Přehledná navigace
* Konzistentní barevné schéma

### Ukázka

```css
html {
    scroll-behavior: smooth;
}
```

### Vysvětlení

Uživatel se může intuitivně pohybovat mezi jednotlivými sekcemi webu bez rušivých přechodů.

---

## 6. AI Integrace

Při vývoji projektu byly využity AI nástroje.

### Využití AI

* návrh struktury webu
* návrh responzivního hamburger menu
* SEO optimalizace
* návrhy JavaScript funkcí
* pomoc při tvorbě dokumentace
* konzultace UX a přístupnosti

---

# AI Deník

## Prompt 1

„Navrhni moderní dark-mode fanpage pro českého rappera PTK pomocí HTML, CSS a JavaScriptu.“

Výsledek:

Návrh rozložení sekcí a základní struktury projektu.

---

## Prompt 2

„Vytvoř responzivní hamburger menu bez použití frameworků.“

Výsledek:

Mobilní navigace pomocí Vanilla JavaScriptu.

---

## Prompt 3

„Navrhni SEO optimalizaci pro jednostránkový web.“

Výsledek:

Meta tagy, robots.txt a sitemap.xml.

---

# Instalace a spuštění

1. Stáhnout projekt.
2. Otevřít složku ve Visual Studio Code.
3. Spustit pomocí rozšíření Live Server.
4. Otevřít v internetovém prohlížeči.

---

# Závěr

Cílem projektu bylo vytvořit moderní webovou prezentaci využívající HTML5, CSS3 a JavaScript bez použití frameworků. Součástí projektu bylo řešení výkonu, SEO optimalizace, přístupnosti, sociálních sítí, responzivního designu a využití umělé inteligence při vývoji.
