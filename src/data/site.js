// JVN Kompas — centrale content. Vervang [prijs], namen en lorem-ipsum door echte data.

export const site = {
  naam: 'JVN Kompas',
  slogan: 'Digitaal op koers',
  tagline: 'Digitaal op koers',
  email: 'info@jvnkompas.be',
  telefoon: '+32 479 50 40 86',
  telefoonHref: '+32479504086',
  btw: 'BE 1039.640.852',
  regio: 'Vlaanderen',
  // Aanvragen worden voorlopig hierheen gestuurd (mailto).
  aanvraagEmail: 'jvnkompas@proton.me',
};

export const nav = [
  { label: 'Diensten', href: '/diensten' },
  { label: 'Projecten', href: '/werk' },
  { label: 'Over', href: '/over' },
];

export const diensten = [
  {
    slug: 'webdesign',
    disc: 'WEB',
    titel: 'Webdesign',
    heroTitel: 'Een website die klanten binnenhaalt',
    kaartTekst: 'Snelle, vindbare websites die je zelf beheert.',
    tagline: 'Snel, vindbaar en helder in gebruik.',
    subline:
      'Snel geladen, gevonden in Google en helder in gebruik. Ik bouw je site op maat en leer je hoe je hem daarna zelf onderhoudt.',
    cta: 'Vraag je webdesign-offerte aan',
    benefits: [
      { t: 'Gevonden worden in Google', d: 'SEO en snelheid zitten vanaf dag één ingebouwd. Zo verschijn je bij lokale zoekopdrachten in plaats van te verdwijnen op pagina drie.' },
      { t: 'Werkt op élk scherm', d: 'Van smartphone tot desktop — je site oogt overal verzorgd. De helft van je bezoekers komt via mobiel; die verlies je niet.' },
      { t: 'Zelf in handen na oplevering', d: 'Je krijgt een systeem waarmee je zelf teksten en foto’s aanpast. Geen dure belronde per komma — je bent onafhankelijk.' },
    ],
    deliverables: ['Ontwerp op maat', 'Responsive bouw', 'Basis-SEO & snelheid', 'CMS + uitleg', 'Hosting-advies'],
    proces: ['Kennismaking', 'Ontwerp', 'Bouw', 'Online + uitleg'],
    faqs: [
      { q: 'Kan ik mijn website daarna zelf aanpassen?', a: 'Ja. Je krijgt een systeem én uitleg om zelf teksten en foto’s te wijzigen. Wil je toch dat ik het doe? Dat kan, maar je bént niet afhankelijk.' },
      { q: 'Zorg je ook dat mijn site in Google verschijnt?', a: 'Ja. SEO en snelheid zitten standaard ingebouwd, met focus op lokale vindbaarheid zodat klanten uit de buurt je vinden.' },
    ],
  },
  {
    slug: 'logo-branding',
    disc: 'LOGO',
    titel: 'Logo & branding',
    heroTitel: 'Een merk dat blijft hangen',
    kaartTekst: 'Een merkidentiteit die klopt en blijft hangen.',
    tagline: 'Herkenbaar, tijdloos en volledig van jou.',
    subline:
      'Een logo is meer dan een plaatje: het is de eerste indruk van je zaak. Ik ontwerp een identiteit die je herkenbaar en geloofwaardig maakt.',
    cta: 'Vraag je logo-offerte aan',
    benefits: [
      { t: 'Onderscheidend, niet inwisselbaar', d: 'Geen sjabloon uit een generator. Een ontwerp dat past bij jouw verhaal en dat je buurconcurrent niet zomaar kopieert.' },
      { t: 'Klaar voor elk formaat', d: 'Van visitekaartje tot gevelbord tot Instagram: je krijgt alle bestandsformaten, scherp op groot én klein, zonder kwaliteitsverlies.' },
      { t: 'Een complete stijlrichtlijn', d: 'Kleuren, lettertypes en gebruik netjes vastgelegd. Zo blijft je merk consistent, wie het ook toepast.' },
    ],
    deliverables: ['Logo (meerdere varianten)', 'Kleur- & fontpalet', 'Stijlrichtlijn (PDF)', 'Alle bestandsformaten', 'Toepassingsvoorbeelden'],
    proces: ['Merkgesprek', 'Concepten', 'Verfijning', 'Oplevering'],
    faqs: [
      { q: 'Krijg ik alle bestandsformaten?', a: 'Ja — vector en pixel, in kleur en mono, geschikt voor druk én scherm.' },
      { q: 'Hoeveel concepten krijg ik te zien?', a: 'Je krijgt meerdere richtingen en kiest samen met mij de sterkste, die we daarna verfijnen.' },
    ],
  },
  {
    slug: 'it-support',
    disc: 'IT',
    titel: 'IT-support',
    heroTitel: 'IT-support aan huis en op afstand',
    kaartTekst: 'Hulp bij pc, netwerk en software — aan huis of op afstand.',
    tagline: 'Aan huis of op afstand, snel geholpen.',
    subline:
      'Loopt je computer vast, hapert je netwerk of wil je hulp bij software? Ik bied alle soorten IT-support — bij jou thuis of op afstand — in klare taal, zonder technisch jargon.',
    cta: 'Vraag IT-support aan',
    benefits: [
      { t: 'Aan huis of op afstand', d: 'Kleine kwestie? Vaak los ik het op afstand op. Vraagt het meer? Dan kom ik gewoon langs — jij kiest wat het beste past.' },
      { t: 'Alle soorten support', d: 'Van een trage pc of virus tot je wifi, back-ups, e-mail of het installeren van nieuwe software: één aanspreekpunt voor al je IT-vragen.' },
      { t: 'Uitleg die je begrijpt', d: 'Ik los het niet alleen op, ik leg ook uit wat er speelde. Zo sta je er de volgende keer sterker voor.' },
    ],
    deliverables: ['Diagnose van het probleem', 'Herstel aan huis of op afstand', 'Advies & installatie', 'Back-up & beveiliging', 'Duidelijke uitleg achteraf'],
    proces: ['Vraag & inschatting', 'Afspraak', 'Oplossing', 'Uitleg'],
    faqs: [
      { q: 'Kom je ook aan huis?', a: 'Ja. Voor alles wat niet op afstand kan, kom ik gewoon bij je langs in de regio.' },
      { q: 'Help je ook particulieren?', a: 'Zeker. Zowel particulieren als zelfstandigen en verenigingen kunnen bij me terecht voor IT-support.' },
    ],
  },
  {
    slug: '3d-printen',
    disc: '3D',
    titel: '3D-printen',
    heroTitel: 'Van idee naar tastbaar',
    kaartTekst: 'Van digitaal ontwerp naar tastbaar product.',
    tagline: 'Prototype, onderdeel of uniek stuk — lokaal geprint.',
    beschikbaarVanaf: 'januari 2027',
    subline:
      'Prototype, onderdeel of uniek stuk — ik ontwerp en print het lokaal. Deze dienst is beschikbaar vanaf januari 2027; je kunt nu al vrijblijvend je project bespreken.',
    cta: 'Bespreek je 3D-project',
    benefits: [
      { t: 'Ontwerp én print in één hand', d: 'Je hoeft geen kant-en-klaar 3D-bestand te hebben. Ik teken het model en print het meteen — één aanspreekpunt van A tot Z.' },
      { t: 'Ook één exemplaar', d: 'Een vervangonderdeel, een prototype of een persoonlijk cadeau: kleine oplages zijn hier geen probleem.' },
      { t: 'Lokaal en snel', d: 'Geen lange verzending uit het buitenland. Overleg, aanpassing en afhaling gewoon in de buurt.' },
    ],
    deliverables: ['3D-modellering', 'Materiaal-advies', 'Prototype-print', 'Kleine oplages', 'Nabewerking'],
    proces: ['Idee & schets', 'Modelleren', 'Printen', 'Afwerking'],
    faqs: [
      { q: 'Vanaf wanneer kan ik hier terecht?', a: 'De 3D-printdienst gaat van start in januari 2027. Je kunt je project nu al vrijblijvend aanmelden zodat we meteen kunnen starten.' },
      { q: 'Moet ik zelf een 3D-bestand aanleveren?', a: 'Nee. Heb je enkel een idee of een schets? Ik teken het model voor je en print het meteen.' },
    ],
  },
];

// Placeholder-projecten met lorem-ipsum — vervang door echt werk.
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, nisl eget ultricies aliquam, nunc urna.';
export const cases = [
  { slug: 'project-01', disc: 'WEB', titel: 'Voorbeeldproject 01', klant: 'Klantnaam', jaar: 2026, sector: 'Sector', summary: lorem, kleur: '#40312E' },
  { slug: 'project-02', disc: 'LOGO', titel: 'Voorbeeldproject 02', klant: 'Klantnaam', jaar: 2026, sector: 'Sector', summary: lorem, kleur: '#2C2322' },
  { slug: 'project-03', disc: 'WEB', titel: 'Voorbeeldproject 03', klant: 'Klantnaam', jaar: 2026, sector: 'Sector', summary: lorem, kleur: '#3A2A22' },
  { slug: 'project-04', disc: 'LOGO', titel: 'Voorbeeldproject 04', klant: 'Klantnaam', jaar: 2025, sector: 'Sector', summary: lorem, kleur: '#332620' },
  { slug: 'project-05', disc: 'WEB', titel: 'Voorbeeldproject 05', klant: 'Klantnaam', jaar: 2025, sector: 'Sector', summary: lorem, kleur: '#2A2320' },
  { slug: 'project-06', disc: 'LOGO', titel: 'Voorbeeldproject 06', klant: 'Klantnaam', jaar: 2025, sector: 'Sector', summary: lorem, kleur: '#45332E' },
];

export const testimonials = [
  { quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sinds de samenwerking loopt alles vlotter dan ooit.', naam: '[Voornaam Naam]', rol: 'zaakvoerder' },
  { quote: 'Duis aute irure dolor in reprehenderit. Snel geschakeld, netjes afgewerkt en altijd bereikbaar voor een vraag.', naam: '[Voornaam Naam]', rol: 'voorzitter' },
  { quote: 'Sed do eiusmod tempor incididunt ut labore. Eindelijk één aanspreekpunt voor heel ons digitaal verhaal.', naam: '[Voornaam Naam]', rol: 'zelfstandige' },
  { quote: 'Ut enim ad minim veniam, quis nostrud exercitation. Heldere uitleg, geen vakjargon en een resultaat dat klopt.', naam: '[Voornaam Naam]', rol: 'technieker' },
  { quote: 'Excepteur sint occaecat cupidatat non proident. Persoonlijk, lokaal en resultaatgericht — precies wat we zochten.', naam: '[Voornaam Naam]', rol: 'bestuurslid' },
];
