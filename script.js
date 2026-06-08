'use strict';

// Plné tracklisty
const karakoramTracks = [
    "Karakoram","Tinted Windows","3 000 000","G Wagon","Hlad","Snad se tam nebude střílet",
    "V8 x 3","Big Stepper","Víš jak bolí říkat RIP","Než nejsem dead","Day ones",
    "Někdo půjde z kola ven","Love bez práce","Já vs Já","Zrádce","BBL",
    "?? Máš víc ??","Only way out is through the shit","Hledáme v sobě ten klid",
    "Rayman","Kenpachi a Yachiru","Každej má svoje demons","Who dat","Long run"
];

const silentKillTracks = [
    "Silent kill","Double cup","Baller","Vzhůru celou noc (feat. Viktor Sheen)",
    "Kdo sou (feat. Yzomandias)","Cestuju mlhou (feat. Calin)","Komik",
    "Nebe není blue","Demon mode (feat. Separ)","Push it (feat. Nik Tendo)",
    "Znáte ty dny 2","Skoro jsem tam byl","Kolik (feat. Slugerr)","V sobě neseš světlo"
];

const goldenHillTracks = [
    "Golden hill (ostranen z neznamych duvodu)","Amiri drip","Mladej jit",
    "Hustle a stress (feat. Slugerr)","Mezi řádky","Noci jak na moři","Famous",
    "Nemám problém (feat. Nik Tendo)","Dal bych to znova","Sniper","Já a můj pes (Komenz)"
];

const trappinLonelyTracks = [
    "Trappin lonely","Get dat back","V8","Co mám já","Baby a Benzo (feat. Yzomandias)",
    "Stack na stack","Znáte ty dny","Kam cesty zavedou (feat. Slugerr)",
    "Cestuju na beatech (feat. Nik tendo)","Kilo na můj krk (feat. Yzomandias)","Dělám to pro"
];

const painkillersTracks = [
    "Zapaldo fire","Peaky Blinders","KSN","V hlavě (feat. Viktor Sheen)",
    "Painkillers (feat. Luca Brassi10x, Le Winter)","Get low","Oko za oko (feat. Stein27)",
    "Uprostřed oceánu","No sleep gang","Svoboda (feat. Sara Rikas)","Icewear",
    "Gremlin","Rooftop (feat. Luca Brassi10x, Hard Rico, 13Many)",
    "Planeta pula (feat. Nik Tendo)","Westside glum","Black hoodies (feat. Fat Nick)",
    "KSN - Pintlich remix (feat. Robin Zoot, Nik Tendo, Ektor)","Krvavý klouby",
    "Kdo mě zastaví? (feat. Egerland)"
];

const twentySevenTracks = [
    "Klid (feat. Slugerr)","Dlouhý časy","Na okraji města sám","Taktik","Dennodenně",
    "Jak se zdá","Woo Woo","Ona 2","27 !!","Zapomněl jsem tebe","Thugova balada (feat. RNZ)",
    "Hlídej si záda","Táhlý dny a táhlý noci (feat. Schyzo)","Funerál","Klasika",
    "Jak daleko","TOTB (Trappin Out The Bando)","Žádný jistoty"
];

const badVibeTracks = [
    "Tikaj hodiny","Extendo","Kraul","Záliba","S tebou v pasti","Dennodenně 2",
    "Bad vibe","Kazdej day","Příště","Outro - Oneveryraredirtytake"
];

const utopenyTracks = [
    "Crashtest - Hennessyvitamin","Zmrdi-Hoody","PTK OG","Střízlivý","Flip it",
    "Turista","Utopený v čase","Životfullněmec","Nadstandard","Západ",
    "Chebsidesuicide","Aleš Bejr"
];

const trapMenuTracks = [
    "Nikdy broke","Nikdy zpátky dolu","Z bytu na byt 2","Klasická trapová báseň",
    "Foreign","Ty si byl kde","Balón místo hlavy","1+1 Prázdnej byt",
    "Trappin outside","Životní fáze"
];

document.addEventListener('DOMContentLoaded', () => {

// Gallery
const galleryContainer = document.getElementById('gallery-container');

if (galleryContainer) {
    let html = '';

    const covers = [
        "ptk_auticka.jpg",
        "ptk_cernobilej.jpg",
        "ptk_drip.jpg",
        "ptk_na_koncerte_svetla.jpg",
        "ptk_na_tour.jpg",
        "ptk_porsche.jpg",
        "ptk_v_aute.jpg",
        "ptk_vojak.jpg",
        "ptk_zelena.jpg"
    ];

    covers.forEach((cover, i) => {
        html += `
            <div class="gallery-item">
                <img
                    src="./photos/${cover}"
                    alt="PTK Galerie ${i + 1}"
                    loading="lazy">
            </div>
        `;
    });

    galleryContainer.innerHTML = html;
}
    // Tracklist rendering
    const renderTracks = (tracks, id) => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = tracks.map((t, i) => `
                <li><span class="track-num">${String(i + 1).padStart(2, '0')}</span> <span>${t}</span></li>
            `).join('');
        }
    };

    renderTracks(karakoramTracks, 'tracks-karakoram');
    renderTracks(silentKillTracks, 'tracks-silent');
    renderTracks(goldenHillTracks, 'tracks-golden');
    renderTracks(trappinLonelyTracks, 'tracks-trappin');
    renderTracks(painkillersTracks, 'tracks-painkillers');
    renderTracks(twentySevenTracks, 'tracks-27');
    renderTracks(badVibeTracks, 'tracks-badvibe');
    renderTracks(utopenyTracks, 'tracks-utopeny');
    renderTracks(trapMenuTracks, 'tracks-trapmenu');

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

}
// Lightbox galerie

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

document.addEventListener("click", (e) => {

    if (e.target.closest(".gallery-item img")) {

        lightboxImg.src = e.target.src;
        lightbox.classList.add("active");
    }

});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

});
