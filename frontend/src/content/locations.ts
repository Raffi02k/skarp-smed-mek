export interface LocationServiceItem {
  number: string
  title: string
  description: string
  serviceSlug: string
}

export interface LocationUspItem {
  number: string
  title: string
  description: string
}

export interface LocationProcessStep {
  number: string
  title: string
  description: string
}

export interface LocationFaqItem {
  question: string
  answer: string
}

export interface LocationData {
  slug: string
  name: string
  region: string
  nearbyAreas: string[]
  pillLabel: string
  heroTitle: string
  heroSubtitle: string
  shortAnswer: string
  seoTitle: string
  seoDescription: string
  stats: {
    stat1: { value: string; label: string }
    stat2: { value: string; label: string }
    stat3: { value: string; label: string }
    quote: string
    quoteAuthor: string
  }
  services: LocationServiceItem[]
  usps: LocationUspItem[]
  processSteps: LocationProcessStep[]
  faqs: LocationFaqItem[]
}

export const locations: LocationData[] = [
  {
    slug: 'gotene',
    name: 'Götene',
    region: 'Västra Götalands län',
    nearbyAreas: ['Götene', 'Källby', 'Lundsbrunn', 'Hällekis', 'Forshem', 'Lidköping', 'Skara'],
    pillLabel: 'Smed & Mekanik i Götene',
    heroTitle: 'Smed & mekanisk verkstad i Götene',
    heroSubtitle:
      'Skarp Smed & Mek har sin fasta verkstad i Götene. Vi hjälper lokala företag, lantbruk, verkstäder och privatpersoner med specialtillverkning i metall, certifierat smide, svetsning och maskinreparation.',
    shortAnswer:
      'Skarp Smed & Mek utgår från Götene och levererar certifierat smide, svetsning, specialtillverkade metallprodukter och mekaniska reparationer med snabbast möjliga inställelsetid, personlig service och svar inom 24 timmar.',
    seoTitle: 'Smed & Mekanisk Verkstad i Götene | Skarp Smed & Mek',
    seoDescription:
      'Lokal smed och mekanisk verkstad i Götene. Specialtillverkning i metall, svetsning, maskinreparation och montage för företag och privatpersoner. Begär offert idag!',
    stats: {
      stat1: { value: 'Bas i Götene', label: 'Egen verkstad' },
      stat2: { value: '< 24h', label: 'Svar på förfrågan' },
      stat3: { value: '100%', label: 'Kundanpassat stål' },
      quote: 'Lucas har snabb inställelsetid och löser problem på plats när maskinen eller fästet gett upp. Grymt hantverk!',
      quoteAuthor: 'Lokal verkstadskund, Götene',
    },
    services: [
      {
        number: '01',
        title: 'Specialtillverkning i Götene',
        description: 'Kundanpassade stålkonstruktioner, motorfästen, staket och speciallösningar tillverkade i verkstaden i Götene.',
        serviceSlug: 'specialtillverkning-metall',
      },
      {
        number: '02',
        title: 'Smed & svets i Götene',
        description: 'Professionellt smides- och svetsarbete i stål och metall för reparationer, ombyggnationer och nytillverkning.',
        serviceSlug: 'smed-svets',
      },
      {
        number: '03',
        title: 'Maskinreparation & mek i Götene',
        description: 'Mekanisk felsökning, renovering av slitdelar, axelreparationer och praktiska mekjobb för maskiner och utrustning.',
        serviceSlug: 'maskinreparation-mek',
      },
      {
        number: '04',
        title: 'Inhyrd svetsare i Götene',
        description: 'Flexibel svetsresurs för industrier och verkstäder i Götene med omnejd vid arbetstoppar eller specialprojekt.',
        serviceSlug: 'inhyrd-svetskompetens',
      },
    ],
    usps: [
      {
        number: '01',
        title: 'Lokal förankring i Götene',
        description: 'Verkstaden ligger lokalt i Götene vilket ger korta avstånd, snabb kontakt och möjlighet till spontana besök.',
      },
      {
        number: '02',
        title: 'Direktkontakt med smeden',
        description: 'Du pratar direkt med Lucas som konstruerar, svetsar och monterar. Inga mellanhänder eller missförstånd.',
      },
      {
        number: '03',
        title: 'Både verkstad & mobil svets',
        description: 'Tillverkning sker med full utrustning i Götene, och akuta reparationsarbeten kan utföras på plats med servicebil.',
      },
      {
        number: '04',
        title: 'Fasta priser & tydliga offerter',
        description: 'Du får alltid ett klart kostnadsförslag och realistisk tidsplan innan arbetet startar. Inga dolda tillägg.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Lyssna & analysera',
        description: 'Vi går igenom din ritning, skiss eller trasiga komponent och lyssnar på dina funktions- och materialkrav.',
      },
      {
        number: '02',
        title: 'Tydlig offert & plan',
        description: 'Du får ett fast eller löpande kostnadsförslag med uppskattad leveranstid och rekommenderad konstruktion.',
      },
      {
        number: '03',
        title: 'Tillverkning & svetsning',
        description: 'Arbetet utförs med hög precision, rätt svetsmetod och noggrann måttpassning i verkstaden i Götene.',
      },
      {
        number: '04',
        title: 'Leverans & godkännande',
        description: 'Montering på plats eller avhämtning i verkstaden med noggrann genomgång och provkörning.',
      },
    ],
    faqs: [
      {
        question: 'Kan jag komma förbi med en trasig metalldel till er verkstad i Götene?',
        answer: 'Absolut! Kontakta gärna Lucas i förväg på 070-123 45 67 så säkerställer vi att han är på plats i verkstaden och inte ute på montage.',
      },
      {
        question: 'Gör ni jobb åt både företag och privatpersoner i Götene?',
        answer: 'Ja, vi utför uppdrag åt såväl lantbrukare, industrier och åkerier som privatpersoner som behöver räcken, grindar eller specialbeslag.',
      },
      {
        question: 'Vilka material och svetsmetoder arbetar ni med?',
        answer: 'Vi arbetar framförallt med konstruktionsstål, rostfritt och aluminium, och behärskar MIG/MAG, TIG samt MMA (pinnsvetsning).',
      },
      {
        question: 'Hur snabbt kan ni lämna en offert för ett uppdrag i Götene?',
        answer: 'Enkla förfrågningar besvaras ofta samma dag och mer omfattande konstruktioner inom 24–48 timmar.',
      },
    ],
  },
  {
    slug: 'lidkoping',
    name: 'Lidköping',
    region: 'Västra Götalands län',
    nearbyAreas: ['Lidköping', 'Vinninga', 'Järpås', 'Örslösa', 'Filsbäck', 'Källby', 'Götene'],
    pillLabel: 'Smed & Mekanik i Lidköping',
    heroTitle: 'Smed & mekanisk verkstad i Lidköping',
    heroSubtitle:
      'Skarp Smed & Mek hjälper företag, industrier och beställare i Lidköping och Skaraborg med praktiskt smide, certifierad svetsning, kundanpassad metalltillverkning och maskinreparation.',
    shortAnswer:
      'Skarp Smed & Mek utgår från Götene bara 15–20 minuter från Lidköping. Vi levererar måttbeställt smide, svets, specialtillverkning och maskinreparation med snabb inställelse och personlig dialog.',
    seoTitle: 'Smed & Mekanisk Verkstad i Lidköping | Skarp Smed & Mek',
    seoDescription:
      'Behöver du smed eller mekanisk verkstad i Lidköping? Skarp Smed & Mek erbjuder kundanpassat smide, svetsning, maskinreparation och stålkonstruktioner. Kontakta oss!',
    stats: {
      stat1: { value: '15 min', label: 'Restid till Lidköping' },
      stat2: { value: '< 24h', label: 'Offertsvar' },
      stat3: { value: '100%', label: 'Praktisk problemlösning' },
      quote: 'Lidköping och Götene har ett starkt industrisamarbete. Skarp Smed & Mek levererar alltid i tid och med precision.',
      quoteAuthor: 'Industripartner, Lidköping',
    },
    services: [
      {
        number: '01',
        title: 'Specialtillverkning i Lidköping',
        description: 'Måttbeställda stålstaket, ramar, balkar och unika fästen anpassade efter Lidköpingsföretagens behov.',
        serviceSlug: 'specialtillverkning-metall',
      },
      {
        number: '02',
        title: 'Smed & svets i Lidköping',
        description: 'MIG/MAG-, TIG- och MMA-svetsning för reparationer, bärande stål och maskinkomponenter i Lidköping.',
        serviceSlug: 'smed-svets',
      },
      {
        number: '03',
        title: 'Maskinreparation & mek i Lidköping',
        description: 'Snabba ryck vid haveri på entreprenad- och industrimaskiner i Lidköping med mobil utrustning.',
        serviceSlug: 'maskinreparation-mek',
      },
      {
        number: '04',
        title: 'Inhyrd svetsare i Lidköping',
        description: 'Hyra in licensierad svetsare för verkstäder och fabriker i Lidköping som behöver extraresurser.',
        serviceSlug: 'inhyrd-svetskompetens',
      },
    ],
    usps: [
      {
        number: '01',
        title: 'Nära Lidköping',
        description: 'Bara ca 15 minuters bilväg från Lidköping centrum, vilket möjliggör snabba platsbesök och akuta insatser.',
      },
      {
        number: '02',
        title: 'Kombinerar smide med mekanik',
        description: 'Få smeder har både mekanisk maskinerfarenhet och svetskompetens under samma tak.',
      },
      {
        number: '03',
        title: 'Full flexibilitet',
        description: 'Vi tillverkar större delar i egen verkstad och åker ut till er anläggning i Lidköping för slutmontage.',
      },
      {
        number: '04',
        title: 'Tydliga leveranslöften',
        description: 'Tid och pris hålls alltid. Du får raka besked och inga oskäliga tilläggsfakturor.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Behovsgenomgång i Lidköping',
        description: 'Vi diskuterar projektet via telefon eller gör ett snabbt platsbesök i Lidköping för att mäta och bedöma.',
      },
      {
        number: '02',
        title: 'Fast kostnadsförslag',
        description: 'Vi skickar en specificerad offert så att ni vet exakt vad arbetet kostar.',
      },
      {
        number: '03',
        title: 'Tillverkning & bearbetning',
        description: 'Kapning, bockning, svetsning och ytbehandling genomförs med högsta kvalitet.',
      },
      {
        number: '04',
        title: 'Montering eller leverans',
        description: 'Vi monterar på plats i Lidköping eller levererar färdiga detaljer direkt till er.',
      },
    ],
    faqs: [
      {
        question: 'Hur snabbt kan ni komma ut till en industri eller gård i Lidköping?',
        answer: 'Eftersom verkstaden ligger i grannkommunen Götene kan vi vid akuta driftstopp ofta vara på plats i Lidköping inom kort tid.',
      },
      {
        question: 'Tar ni även mindre svetsjobb i Lidköping?',
        answer: 'Ja, vi tar allt från enklare reparationer av redskap och grindar till kompletta stålkonstruktioner.',
      },
      {
        question: 'Kan ni tillverka delar efter gamla slitna original?',
        answer: 'Ja, vi kan mäta upp trasiga eller utslitna delar och tillverka nya med förstärkningar om så behövs.',
      },
    ],
  },
  {
    slug: 'skovde',
    name: 'Skövde',
    region: 'Västra Götalands län',
    nearbyAreas: ['Skövde', 'Tibro', 'Hjo', 'Tidaholm', 'Värsås', 'Götene', 'Skara'],
    pillLabel: 'Smed & Mekanik i Skövde',
    heroTitle: 'Smed & mekanisk verkstad i Skövde',
    heroSubtitle:
      'Skarp Smed & Mek levererar professionella metall- och mekaniktjänster till företag, byggare och verkstäder i Skövde. Från kundanpassade stålkonstruktioner till avancerad svetsning och maskinunderhåll.',
    shortAnswer:
      'Skarp Smed & Mek servar Skövde med certifierat smidesarbete, licenssvets, specialtillverkning och maskinmekanik. Med basen i Götene når vi Skövde på ca 25 minuter för snabba montage och akut service.',
    seoTitle: 'Smed & Mekanisk Verkstad i Skövde | Skarp Smed & Mek',
    seoDescription:
      'Professionell smed och mekanisk verkstad för uppdrag i Skövde. Specialtillverkning i stål, svetsning, maskinreparation och montage. Begär offert idag!',
    stats: {
      stat1: { value: '25 min', label: 'Avstånd till Skövde' },
      stat2: { value: '< 24h', label: 'Svarstid' },
      stat3: { value: 'Industriklass', label: 'Kvalitet & precision' },
      quote: 'Kombinationen av svets och maskinreparation har räddat oss vid flera driftstopp i Skövde. Rekommenderas varmt!',
      quoteAuthor: 'Bygg- & maskinfirma, Skövde',
    },
    services: [
      {
        number: '01',
        title: 'Specialtillverkning i Skövde',
        description: 'Balkar, avväxlingar, industristaket och maskinstativ tillverkade med millimeterprecision för Skövde.',
        serviceSlug: 'specialtillverkning-metall',
      },
      {
        number: '02',
        title: 'Smed & svets i Skövde',
        description: 'Certifierat svetsarbete för krävande stålkonstruktioner, reparationer och ombyggnationer i Skövde.',
        serviceSlug: 'smed-svets',
      },
      {
        number: '03',
        title: 'Maskinreparation & mek i Skövde',
        description: 'Felsökning och reparation av hydraulikinfästningar, lagerhus, chassin och mekaniska komponenter.',
        serviceSlug: 'maskinreparation-mek',
      },
      {
        number: '04',
        title: 'Inhyrd svetsare i Skövde',
        description: 'Svetskompetens på plats hos industrier och verkstäder i Skövde vid tillfälligt behov eller produktionstoppar.',
        serviceSlug: 'inhyrd-svetskompetens',
      },
    ],
    usps: [
      {
        number: '01',
        title: 'Skövdes självklara metallpartner',
        description: 'Kort restid från Götene gör oss till en snabb och kostnadseffektiv samarbetspartner i Skövdeområdet.',
      },
      {
        number: '02',
        title: 'Specialiserad på metallanpassning',
        description: 'När standardreservdelar inte går att få tag på kan vi tillverka och modifiera i egen verkstad.',
      },
      {
        number: '03',
        title: 'Hög yrkesskicklighet',
        description: 'Stort tekniskt kunnande inom svetsning, stålhållfasthet och maskindynamik borgar för hållbara resultat.',
      },
      {
        number: '04',
        title: 'Tryggt & personligt',
        description: 'En dedikerad kontaktperson från första telefonsamtal till avslutat och besiktigat arbete.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Kontakt & skiss',
        description: 'Skicka ritning eller ring oss för genomgång av projektet i Skövde.',
      },
      {
        number: '02',
        title: 'Offert med fast pris',
        description: 'Vi räknar fram material och arbetstid så att du har full kontroll på budgeten.',
      },
      {
        number: '03',
        title: 'Verkstadstillverkning',
        description: 'Konstruktion och svetsning utförs med högsta precision.',
      },
      {
        number: '04',
        title: 'Leverans & montage i Skövde',
        description: 'Montering och anpassning på plats hos er i Skövde med omnejd.',
      },
    ],
    faqs: [
      {
        question: 'Tar ni uppdrag för byggföretag och entreprenörer i Skövde?',
        answer: 'Ja, vi samarbetar regelbundet med bygg- och anläggningsföretag för stålpelare, avväxlingsbalkar, smidesräcken och förstärkningar.',
      },
      {
        question: 'Utför ni svetsning på plats i Skövde?',
        answer: 'Ja, vår servicebil är utrustad för mobil svetsning och reparationer direkt på byggarbetsplatser eller hos industrier i Skövde.',
      },
      {
        question: 'Vad krävs för att få en offert?',
        answer: 'Det räcker oftast med ett foto, en enkel måttskiss eller en kort beskrivning av problemet så återkommer vi med prisförslag.',
      },
    ],
  },
  {
    slug: 'mariestad',
    name: 'Mariestad',
    region: 'Västra Götalands län',
    nearbyAreas: ['Mariestad', 'Lyrestad', 'Töreboda', 'Lugnås', 'Hasslerör', 'Götene'],
    pillLabel: 'Smed & Mekanik i Mariestad',
    heroTitle: 'Smed & mekanisk verkstad i Mariestad',
    heroSubtitle:
      'För företag, hamnverksamheter, lantbruk och privatpersoner i Mariestad levererar Skarp Smed & Mek förstklassigt smide, svets och maskinreparationer med kort inställelsetid.',
    shortAnswer:
      'Skarp Smed & Mek utgår från Götene och når Mariestad på knappt 20 minuter. Vi levererar måttbeställt smide, slitstarka stålkonstruktioner och mekaniska reparationer med snabb service och fasta priser.',
    seoTitle: 'Smed & Mekanisk Verkstad i Mariestad | Skarp Smed & Mek',
    seoDescription:
      'Söker du smed eller mekanisk verkstad i Mariestad? Skarp Smed & Mek utför specialtillverkning, svetsning, maskinreparation och stålsmide. Kontakta oss!',
    stats: {
      stat1: { value: '20 min', label: 'Till Mariestad' },
      stat2: { value: '< 24h', label: 'Återkoppling' },
      stat3: { value: 'Robust stål', label: 'Lång hållbarhet' },
      quote: 'Fantastisk service och rejäla svetsfogar. Skarp Smed & Mek levererade precis det vi behövde till vår anläggning i Mariestad.',
      quoteAuthor: 'Verksamhetschef, Mariestad',
    },
    services: [
      {
        number: '01',
        title: 'Specialtillverkning i Mariestad',
        description: 'Tillverkning av stålgrindar, balksystem, infästningar och specialramar för fastigheter och verkstäder i Mariestad.',
        serviceSlug: 'specialtillverkning-metall',
      },
      {
        number: '02',
        title: 'Smed & svets i Mariestad',
        description: 'Professionellt reparationssmide, stålsvetsning och montage med mobil utrustning i Mariestadsområdet.',
        serviceSlug: 'smed-svets',
      },
      {
        number: '03',
        title: 'Maskinreparation & mek i Mariestad',
        description: 'Mekanisk service, byte av bussningar, riktning och renovering av tunga maskiner och transportredskap.',
        serviceSlug: 'maskinreparation-mek',
      },
      {
        number: '04',
        title: 'Inhyrd svetsare i Mariestad',
        description: 'Extra svetsresurs för industrier, marinor och mekaniska verkstäder i Mariestad.',
        serviceSlug: 'inhyrd-svetskompetens',
      },
    ],
    usps: [
      {
        number: '01',
        title: 'Nära och tillgänglig',
        description: 'Mariestad ligger bara ett stenkast från Götene, vilket ger låga resekostnader och snabb hjälp på plats.',
      },
      {
        number: '02',
        title: 'Hållbara lösningar',
        description: 'Vi dimensionerar alltid för att tåla hårda påfrestningar och nordiskt klimat.',
      },
      {
        number: '03',
        title: 'En smidig helhet',
        description: 'Vi hjälper till från måttagning och konstruktionsförslag till färdigt montage.',
      },
      {
        number: '04',
        title: 'Inga dolda kostnader',
        description: 'Tydliga offerter med fasta priser eller transparent timtaxa utan överraskningar.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Förfrågan & måttagning',
        description: 'Vi går igenom behovet eller möts upp i Mariestad för att granska uppdraget.',
      },
      {
        number: '02',
        title: 'Offert & materialval',
        description: 'Vi väljer optimal stålkvalitet och ytbehandling för ditt specifika användningsområde.',
      },
      {
        number: '03',
        title: 'Tillverkning',
        description: 'Noggrann tillverkning i verkstaden med modern svetsutrustning.',
      },
      {
        number: '04',
        title: 'Slutleverans i Mariestad',
        description: 'Montering och funktionstest för att säkerställa 100% nöjdhet.',
      },
    ],
    faqs: [
      {
        question: 'Kan ni hjälpa till med smide och fästen för bryggor och marin miljö i Mariestad?',
        answer: 'Ja, vi tillverkar beslag, fästen och konstruktioner i rostfritt stål eller varmförzinkat stål anpassade för sjönära miljöer.',
      },
      {
        question: 'Hur lång är leveranstiden till Mariestad?',
        answer: 'Mindre jobb och akuta reparationer kan ofta lösas inom några dagar, medan större tillverkningsprojekt schemaläggs enligt överenskommelse.',
      },
      {
        question: 'Erbjuder ni mobil svetsning i Mariestad?',
        answer: 'Ja, vi tar med oss mobil svetsutrustning och åker ut direkt till arbetsplatser, gårdar och anläggningar i Mariestad.',
      },
    ],
  },
  {
    slug: 'skara',
    name: 'Skara',
    region: 'Västra Götalands län',
    nearbyAreas: ['Skara', 'Axvall', 'Varnhem', 'Ardala', 'Götene', 'Skövde'],
    pillLabel: 'Smed & Mekanik i Skara',
    heroTitle: 'Smed & mekanisk verkstad i Skara',
    heroSubtitle:
      'Skarp Smed & Mek erbjuder kundanpassat smide, maskinreparation och svetsning för lantbruk, åkerier, företag och privatpersoner i Skara med omnejd.',
    shortAnswer:
      'Bara 15 minuter från Skara finns vår verkstad i Götene. Skarp Smed & Mek levererar specialtillverkade stålprodukter, professionell svetsning och maskinservice med snabb inställelse och personlig kontakt.',
    seoTitle: 'Smed & Mekanisk Verkstad i Skara | Skarp Smed & Mek',
    seoDescription:
      'Söker du smed eller mekanisk verkstad i Skara? Skarp Smed & Mek erbjuder svets, specialtillverkning i stål och maskinreparation. Kontakta oss för offert!',
    stats: {
      stat1: { value: '15 min', label: 'Restid till Skara' },
      stat2: { value: '< 24h', label: 'Offertbesked' },
      stat3: { value: 'Slitstarkt', label: 'Garanterad funktion' },
      quote: 'Snabb insats när en av våra jordbruksmaskiner behövde akut förstärkning och svetsning. Kunnig och trevlig!',
      quoteAuthor: 'Lantbrukare, Skara',
    },
    services: [
      {
        number: '01',
        title: 'Specialtillverkning i Skara',
        description: 'Byggnadssmide, staket, grindar och specialkonstruktioner i stål för Skara och landsbygden.',
        serviceSlug: 'specialtillverkning-metall',
      },
      {
        number: '02',
        title: 'Smed & svets i Skara',
        description: 'Reparation och nyproduktion med modern svetsmetodik för lantbruksredskap, vagnar och metallfästen.',
        serviceSlug: 'smed-svets',
      },
      {
        number: '03',
        title: 'Maskinreparation & mek i Skara',
        description: 'Mekaniskt underhåll, lagerbyten och akuta reparationer på arbetsmaskiner och traktorer i Skara.',
        serviceSlug: 'maskinreparation-mek',
      },
      {
        number: '04',
        title: 'Inhyrd svetsare i Skara',
        description: 'Kvalificerad svetsresurs till industrier och verkstäder i Skara som behöver avlastning.',
        serviceSlug: 'inhyrd-svetskompetens',
      },
    ],
    usps: [
      {
        number: '01',
        title: 'Direkt granne med Skara',
        description: 'Med verkstaden i Götene är vi i praktiken grannar. Det gör att vi kan rycka ut på mycket kort varsel.',
      },
      {
        number: '02',
        title: 'God förståelse för lantbruk & maskiner',
        description: 'Vana att hantera rejäla maskiner och förstå vikten av att stilleståndstiden minimeras.',
      },
      {
        number: '03',
        title: 'Hållbara svetsfogar',
        description: 'Korrekt fogberedning och rätt tillsatsmaterial för maximal hållfasthet.',
      },
      {
        number: '04',
        title: 'Fast pris',
        description: 'Du vet i förväg vad arbetet kostar.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Kontakt & bedömning',
        description: 'Ring eller skicka bilder på det som ska tillverkas eller repareras i Skara.',
      },
      {
        number: '02',
        title: 'Offert & lösning',
        description: 'Vi föreslår bästa mekaniska lösning och lämnar offert.',
      },
      {
        number: '03',
        title: 'Svetsning & anpassning',
        description: 'Arbetet utförs med noggrannhet och kvalitetsstål.',
      },
      {
        number: '04',
        title: 'Klar för drift',
        description: 'Detaljen levereras eller monteras så att du kan fortsätta ditt arbete utan avbrott.',
      },
    ],
    faqs: [
      {
        question: 'Kan ni svetsa och rikta skopor och lantbruksredskap i Skara?',
        answer: 'Ja, vi utför reparationer av skopor, fästen, slitstål och ramar för lantbruk och entreprenad.',
      },
      {
        question: 'Kan privatpersoner beställa måttanpassade grindar eller räcken i Skara?',
        answer: 'Absolut, vi tillverkar måttbeställda räcken och grindar i stål med önskad ytbehandling som pulverlack eller förzinkning.',
      },
    ],
  },
  {
    slug: 'falkoping',
    name: 'Falköping',
    region: 'Västra Götalands län',
    nearbyAreas: ['Falköping', 'Floby', 'Stenstorp', 'Kinnarp', 'Gökhem', 'Skara', 'Skövde'],
    pillLabel: 'Smed & Mekanik i Falköping',
    heroTitle: 'Smed & mekanisk verkstad i Falköping',
    heroSubtitle:
      'Kvalificerad smideskompetens och mekaniska reparationer för företag, logistikverksamheter och privatkunder i Falköping med omnejd.',
    shortAnswer:
      'Skarp Smed & Mek levererar smide, svets och maskinreparation till Falköping. Vi tillverkar slitstarka stålkonstruktioner och utför mekaniska reparationer med personlig service och snabb inställelse.',
    seoTitle: 'Smed & Mekanisk Verkstad i Falköping | Skarp Smed & Mek',
    seoDescription:
      'Behöver du smed eller mekanisk verkstad i Falköping? Vi erbjuder kundanpassat smide, svetsning och maskinreparationer. Begär offert idag!',
    stats: {
      stat1: { value: '35 min', label: 'Avstånd till Falköping' },
      stat2: { value: '< 24h', label: 'Svarstid' },
      stat3: { value: 'Hög precision', label: 'Stål & mekanik' },
      quote: 'Bra dialog och ett gediget utfört arbete på våra industrifästen. Skarp Smed & Mek håller vad de lovar.',
      quoteAuthor: 'Verkstad i Falköping',
    },
    services: [
      {
        number: '01',
        title: 'Specialtillverkning i Falköping',
        description: 'Skräddarsydda stållösningar, påkörningsskydd, ramar och fästen för företag i Falköping.',
        serviceSlug: 'specialtillverkning-metall',
      },
      {
        number: '02',
        title: 'Smed & svets i Falköping',
        description: 'Reparationer och tillverkning med certifierad svetskompetens i Falköping.',
        serviceSlug: 'smed-svets',
      },
      {
        number: '03',
        title: 'Maskinreparation & mek i Falköping',
        description: 'Mekanisk service och underhåll för truckar, transportörer och maskiner i Falköping.',
        serviceSlug: 'maskinreparation-mek',
      },
      {
        number: '04',
        title: 'Inhyrd svetsare i Falköping',
        description: 'Flexibel svetshjälp för Falköpings verkstäder vid ordertoppar eller personalbrist.',
        serviceSlug: 'inhyrd-svetskompetens',
      },
    ],
    usps: [
      {
        number: '01',
        title: 'Verksam i hela Skaraborg',
        description: 'Vi täcker Falköping och omgivande orter regelbundet för både montage och reparationer.',
      },
      {
        number: '02',
        title: 'Teknisk mångsidighet',
        description: 'Behärskar både grovt konstruktionsstål och finmekaniska toleranser.',
      },
      {
        number: '03',
        title: 'Snabbt i gång',
        description: 'Korta ledtider och smidig offertprocess sparar värdefull tid.',
      },
      {
        number: '04',
        title: 'Raka rör & tydlighet',
        description: 'Enkla och ärliga överenskommelser utan dolda kostnader.',
      },
    ],
    processSteps: [
      { number: '01', title: 'Genomgång', description: 'Vi diskuterar vad som ska utföras och tar fram rätt teknisk lösning.' },
      { number: '02', title: 'Offert', description: 'Du erhåller en tydlig offert med fastställd tidsplan.' },
      { number: '03', title: 'Tillverkning', description: 'Produktionen genomförs i vår fullt utrustade verkstad.' },
      { number: '04', title: 'Montage/Leverans', description: 'Montering på plats i Falköping eller leverans direkt till dörren.' },
    ],
    faqs: [
      {
        question: 'Kan ni tillverka påkörningsskydd och räckessmide till logistikanläggningar i Falköping?',
        answer: 'Ja, vi tillverkar rejäla påkörningsskydd, pollare och industriräcken i kraftigt stål.',
      },
      {
        question: 'Tar ni akutuppdrag i Falköping?',
        answer: 'Vid maskinhaveri eller akuta problem prioriterar vi snabb inställelse med servicebil.',
      },
    ],
  },
  {
    slug: 'trollhattan',
    name: 'Trollhättan',
    region: 'Västra Götalands län',
    nearbyAreas: ['Trollhättan', 'Vänersborg', 'Vargön', 'Lilla Edet', 'Grästorp', 'Sjuntorp'],
    pillLabel: 'Smed & Mekanik i Trollhättan',
    heroTitle: 'Smed & mekanisk verkstad i Trollhättan',
    heroSubtitle:
      'Professionellt smideshantverk, licenssvets och mekanisk problemlösning för industri, bygg och entreprenad i Trollhättan och Trestad.',
    shortAnswer:
      'Skarp Smed & Mek utför kvalificerat smide, svets och maskinreparation för beställare i Trollhättan. Vi kombinerar verkstadstillverkning i Götene med mobil montage- och reparationsservice på plats i Trollhättan.',
    seoTitle: 'Smed & Mekanisk Verkstad i Trollhättan | Skarp Smed & Mek',
    seoDescription:
      'Söker du erfaren smed eller mekanisk verkstad i Trollhättan? Skarp Smed & Mek levererar certifierad svets, specialsmide och maskinreparation. Begär offert!',
    stats: {
      stat1: { value: 'Trestad', label: 'Aktiv i regionen' },
      stat2: { value: '< 24h', label: 'Svar på förfrågan' },
      stat3: { value: 'Industrikvalitet', label: 'Certifierat arbete' },
      quote: 'Pålitlig smed som förstår industrins krav på precision och leveranssäkerhet. Mycket nöjda med samarbetet!',
      quoteAuthor: 'Underhållsansvarig, Trollhättan',
    },
    services: [
      {
        number: '01',
        title: 'Specialtillverkning i Trollhättan',
        description: 'Skräddarsydda stålramar, fästen, fixturer och specialprodukter för Trollhättans industrier.',
        serviceSlug: 'specialtillverkning-metall',
      },
      {
        number: '02',
        title: 'Smed & svets i Trollhättan',
        description: 'MIG/MAG-, TIG- och MMA-svetsning för byggsmide, stålförstärkningar och reparationer i Trollhättan.',
        serviceSlug: 'smed-svets',
      },
      {
        number: '03',
        title: 'Maskinreparation & mek i Trollhättan',
        description: 'Mekanisk service, axelrenovering och förebyggande underhåll för tunga maskiner och produktionslinjer.',
        serviceSlug: 'maskinreparation-mek',
      },
      {
        number: '04',
        title: 'Inhyrd svetsare i Trollhättan',
        description: 'Erfaren och självgående svetsare som hyrs in vid projekt och arbetstoppar i Trollhättan.',
        serviceSlug: 'inhyrd-svetskompetens',
      },
    ],
    usps: [
      {
        number: '01',
        title: 'Industrivana',
        description: 'Vana vid tuffa verkstadsmiljöer, ritningsläsning och höga kvalitetskrav i Trestadsregionen.',
      },
      {
        number: '02',
        title: 'Flexibel montageberedskap',
        description: 'Vi åker ut till era anläggningar i Trollhättan för montering, anpassning och svetsning.',
      },
      {
        number: '03',
        title: 'Kombinerat smide & mek',
        description: 'Helhetsgrepp kring både mekaniska rörelser och bärande stålkonstruktioner.',
      },
      {
        number: '04',
        title: 'Prissäkerhet',
        description: 'Fast pris eller tydlig löpande debitering med full insyn.',
      },
    ],
    processSteps: [
      { number: '01', title: 'Teknisk genomgång', description: 'Granskning av ritningsunderlag eller besiktning på plats i Trollhättan.' },
      { number: '02', title: 'Offert & tidplan', description: 'Du får en fast offert med beräknad leveranstid och metodbeskrivning.' },
      { number: '03', title: 'Tillverkning', description: 'Tillverkning och kvalitetskontroll i verkstadsmiljö.' },
      { number: '04', title: 'Slutmontage i Trollhättan', description: 'Installation, svetsning och godkännande på plats hos er.' },
    ],
    faqs: [
      {
        question: 'Tar ni uppdrag som underentreprenör vid större byggen i Trollhättan?',
        answer: 'Ja, vi agerar gärna underentreprenör för smideskonstruktioner, avväxlingar och trappräcken.',
      },
      {
        question: 'Hur fungerar det med resor till Trollhättan?',
        answer: 'Vi samordnar resor effektivt och debiterar rimliga milkostnader som alltid framgår i offerten.',
      },
    ],
  },
  {
    slug: 'vanersborg',
    name: 'Vänersborg',
    region: 'Västra Götalands län',
    nearbyAreas: ['Vänersborg', 'Trollhättan', 'Vargön', 'Frändefors', 'Brålanda', 'Grästorp'],
    pillLabel: 'Smed & Mekanik i Vänersborg',
    heroTitle: 'Smed & mekanisk verkstad i Vänersborg',
    heroSubtitle:
      'Skarp Smed & Mek levererar kundanpassade stållösningar, svets och maskinreparationer till företag, fastighetsägare och entreprenörer i Vänersborg.',
    shortAnswer:
      'Skarp Smed & Mek utgår från Götene och utför smide, licenssvets och mekaniska reparationer i Vänersborg och Trestad. Vi levererar hög finish och hållbara lösningar till fast pris.',
    seoTitle: 'Smed & Mekanisk Verkstad i Vänersborg | Skarp Smed & Mek',
    seoDescription:
      'Professionell smed och mekanisk verkstad i Vänersborg. Specialtillverkning i metall, svetsning, maskinreparation och montage. Begär offert idag!',
    stats: {
      stat1: { value: 'Vänern runt', label: 'Lokal närvaro' },
      stat2: { value: '< 24h', label: 'Svarstid' },
      stat3: { value: '100% nöjd', label: 'Kvalitetsgaranti' },
      quote: 'Snyggt smide och snabb montering på plats i Vänersborg. Mycket nöjda med resultatet!',
      quoteAuthor: 'Fastighetsägare, Vänersborg',
    },
    services: [
      {
        number: '01',
        title: 'Specialtillverkning i Vänersborg',
        description: 'Måttbeställda grindar, staket, balkar och specialanpassade metallfästen för Vänersborg.',
        serviceSlug: 'specialtillverkning-metall',
      },
      {
        number: '02',
        title: 'Smed & svets i Vänersborg',
        description: 'Reparationssvetsning, konstruktionssmide och förstärkningar utförda i stål och aluminium.',
        serviceSlug: 'smed-svets',
      },
      {
        number: '03',
        title: 'Maskinreparation & mek i Vänersborg',
        description: 'Mekanisk service av entreprenadmaskiner, transportörer och mekaniska system.',
        serviceSlug: 'maskinreparation-mek',
      },
      {
        number: '04',
        title: 'Inhyrd svetsare i Vänersborg',
        description: 'Kompetent svetshjälp till tillverkande företag och verkstäder i Vänersborgsområdet.',
        serviceSlug: 'inhyrd-svetskompetens',
      },
    ],
    usps: [
      { number: '01', title: 'Gediget hantverk', description: 'Rejäla dimensioner och svetsfogar som håller i generationer.' },
      { number: '02', title: 'Mobil service', description: 'Fullt utrustad för att svetsa och meka ute på plats i Vänersborg.' },
      { number: '03', title: 'Tydlig offert', description: 'Du vet vad det kostar innan vi drar igång.' },
      { number: '04', title: 'Snabb respons', description: 'Vi svarar alltid inom 24 timmar och agerar snabbt.' },
    ],
    processSteps: [
      { number: '01', title: 'Kontakt', description: 'Beskriv ditt projekt eller haveri för snabb bedömning.' },
      { number: '02', title: 'Kostnadsförslag', description: 'Specificerad offert och bekräftad leveranstid.' },
      { number: '03', title: 'Tillverkning/Reparation', description: 'Kvalificerat arbete med modern utrustning.' },
      { number: '04', title: 'Leverans', description: 'Slutkontroll och överlämning till nöjd kund i Vänersborg.' },
    ],
    faqs: [
      {
        question: 'Kör ni ut till Vargön och Frändefors också?',
        answer: 'Ja, vi täcker hela Vänersborgs kommun inklusive Vargön, Frändefors och Brålanda.',
      },
      {
        question: 'Kan ni tillverka rostfria detaljer för sjönära miljöer i Vänersborg?',
        answer: 'Ja, vi svetsar och tillverkar i rostfritt och syrafast stål för bästa korrosionsskydd.',
      },
    ],
  },
  {
    slug: 'boras',
    name: 'Borås',
    region: 'Västra Götalands län',
    nearbyAreas: ['Borås', 'Ulricehamn', 'Herrljunga', 'Bollebygd', 'Mark', 'Fristad'],
    pillLabel: 'Smed & Mekanik i Borås',
    heroTitle: 'Smed & mekanisk verkstad i Borås',
    heroSubtitle:
      'Kundanpassat smide, licenssvets och mekaniska reparationer för textilindustri, tillverkning, bygg och privatpersoner i Borås och Sjuhärad.',
    shortAnswer:
      'Skarp Smed & Mek levererar högkvalitativt smide, specialtillverkade metallprodukter och mekaniska reparationer till Borås. Vi erbjuder flexibla leveranser, certifierad svetskompetens och fasta priser.',
    seoTitle: 'Smed & Mekanisk Verkstad i Borås | Skarp Smed & Mek',
    seoDescription:
      'Söker du smed eller mekanisk verkstad för projekt i Borås? Skarp Smed & Mek tillverkar stålkonstruktioner, utför svetsning och maskinreparation. Begär offert!',
    stats: {
      stat1: { value: 'Sjuhärad', label: 'Leveranser till Borås' },
      stat2: { value: '< 24h', label: 'Offertrespons' },
      stat3: { value: 'Stål & mek', label: 'Komplett kunnande' },
      quote: 'Bra bemötande, snabb leverans av måttbeställda stålprofiler till vår anläggning i Borås.',
      quoteAuthor: 'Byggmästare, Borås',
    },
    services: [
      {
        number: '01',
        title: 'Specialtillverkning i Borås',
        description: 'Måttbeställda fästen, stativ, balkar och specialsmide för fastigheter och industrier i Borås.',
        serviceSlug: 'specialtillverkning-metall',
      },
      {
        number: '02',
        title: 'Smed & svets i Borås',
        description: 'Kvalitetssvetsning i stål och metall för reparationer, nybyggnation och modifieringar.',
        serviceSlug: 'smed-svets',
      },
      {
        number: '03',
        title: 'Maskinreparation & mek i Borås',
        description: 'Reparation och förebyggande underhåll av mekaniska produktionsmaskiner och aggregat.',
        serviceSlug: 'maskinreparation-mek',
      },
      {
        number: '04',
        title: 'Inhyrd svetsare i Borås',
        description: 'Avlastning för verkstäder i Borås och Sjuhärad vid produktionstoppar eller specialprojekt.',
        serviceSlug: 'inhyrd-svetskompetens',
      },
    ],
    usps: [
      { number: '01', title: 'Skräddarsydd precision', description: 'Tillverkning anpassad efter ritning och verkliga mått på plats.' },
      { number: '02', title: 'Bred materialkunskap', description: 'Konstruktionsstål, rostfritt och slitstål för krävande miljöer.' },
      { number: '03', title: 'Pålitliga leveranstider', description: 'Vi levererar i tid så att er verksamhet inte fördröjs.' },
      { number: '04', title: 'Konkurrenskraftiga priser', description: 'Låga omkostnader från Götene ger förmånliga priser för Borås.' },
    ],
    processSteps: [
      { number: '01', title: 'Förfrågan', description: 'Kontakta oss med din skiss eller ritning för projekt i Borås.' },
      { number: '02', title: 'Fast offert', description: 'Vi specificerar pris och leveranstid utan dolda avgifter.' },
      { number: '03', title: 'Tillverkning', description: 'Produktion i vår moderna verkstad med full kvalitetskontroll.' },
      { number: '04', title: 'Leverans & montage', description: 'Leverans direkt till Borås eller montage på plats.' },
    ],
    faqs: [
      {
        question: 'Tar ni större smidesuppdrag i Borås trots avståndet från Götene?',
        answer: 'Ja, vi tar regelbundet större tillverknings- och montageuppdrag i Borås och hela Västra Götaland.',
      },
      {
        question: 'Kan man få färdiga produkter levererade till Borås?',
        answer: 'Ja, vi ombesörjer direktleverans eller montering på plats efter önskemål.',
      },
    ],
  },
  {
    slug: 'alingsas',
    name: 'Alingsås',
    region: 'Västra Götalands län',
    nearbyAreas: ['Alingsås', 'Vårgårda', 'Herrljunga', 'Lerum', 'Sollebrunn', 'Floda'],
    pillLabel: 'Smed & Mekanik i Alingsås',
    heroTitle: 'Smed & mekanisk verkstad i Alingsås',
    heroSubtitle:
      'Professionellt smide, licensierad svetsning och maskinreparation för företag, lantbruk och fastighetsägare i Alingsås med omnejd.',
    shortAnswer:
      'Skarp Smed & Mek levererar certifierat smide, måttanpassade stålkonstruktioner och mekaniska reparationer till Alingsås. Vi erbjuder snabb inställelse och personlig dialog utan onödiga mellanhänder.',
    seoTitle: 'Smed & Mekanisk Verkstad i Alingsås | Skarp Smed & Mek',
    seoDescription:
      'Behöver du smed eller mekanisk verkstad i Alingsås? Skarp Smed & Mek tillverkar stålprodukter, utför svetsning och maskinunderhåll. Begär offert!',
    stats: {
      stat1: { value: 'Snabb service', label: 'Alingsås & Vårgårda' },
      stat2: { value: '< 24h', label: 'Svarstid' },
      stat3: { value: '100% stål', label: 'Hållbarhet i fokus' },
      quote: 'Bra hantverk och trevligt bemötande när vi behövde specialbyggda fästen till vår fastighet i Alingsås.',
      quoteAuthor: 'Fastighetsförvaltare, Alingsås',
    },
    services: [
      {
        number: '01',
        title: 'Specialtillverkning i Alingsås',
        description: 'Stålräcken, ramverk, balkkonstruktioner och unika metalldelar måttanpassade för Alingsås.',
        serviceSlug: 'specialtillverkning-metall',
      },
      {
        number: '02',
        title: 'Smed & svets i Alingsås',
        description: 'Certifierad svetsning och smidesreparationer på plats eller i verkstad.',
        serviceSlug: 'smed-svets',
      },
      {
        number: '03',
        title: 'Maskinreparation & mek i Alingsås',
        description: 'Felsökning, axelbyte, reparation av fästen och service av mekaniska maskiner i Alingsås.',
        serviceSlug: 'maskinreparation-mek',
      },
      {
        number: '04',
        title: 'Inhyrd svetsare i Alingsås',
        description: 'Flexibel svetshjälp för Alingsås tillverkande verkstäder vid ordertoppar.',
        serviceSlug: 'inhyrd-svetskompetens',
      },
    ],
    usps: [
      { number: '01', title: 'Smidig kommunikation', description: 'Direktkontakt med smeden som utför jobbet från början till slut.' },
      { number: '02', title: 'Hög precision', description: 'Noggranna mått och förstklassiga svetsfogar för bästa hållbarhet.' },
      { number: '03', title: 'Både verkstad & montage', description: 'Vi tillverkar och monterar färdigt hos er i Alingsås.' },
      { number: '04', title: 'Tydliga offerter', description: 'Fast pris ger trygghet för er budget.' },
    ],
    processSteps: [
      { number: '01', title: 'Genomgång', description: 'Vi går igenom behovet och tar fram mått och underlag.' },
      { number: '02', title: 'Offert', description: 'Fast och tydlig offert skickas inom 24 timmar.' },
      { number: '03', title: 'Tillverkning', description: 'Tillverkning och svetsning i Götene med modern maskinpark.' },
      { number: '04', title: 'Montering', description: 'Montering på plats i Alingsås med omnejd.' },
    ],
    faqs: [
      {
        question: 'Jobbar ni även mot Vårgårda och Sollebrunn?',
        answer: 'Ja, vi tar uppdrag i hela stråket Alingsås, Vårgårda, Sollebrunn och Herrljunga.',
      },
      {
        question: 'Kan ni tillverka räcken enligt Boverkets byggregler i Alingsås?',
        answer: 'Ja, vi bygger barnsäkra räcken och trappor i stål som uppfyller alla gällande byggstandarder.',
      },
    ],
  },
  {
    slug: 'goteborg',
    name: 'Göteborg',
    region: 'Västra Götalands län',
    nearbyAreas: ['Göteborg', 'Mölndal', 'Partille', 'Kungälv', 'Lerum', 'Hisingen', 'Kungsbacka'],
    pillLabel: 'Smed & Mekanik i Göteborg',
    heroTitle: 'Smed & mekanisk verkstad i Göteborg',
    heroSubtitle:
      'Skarp Smed & Mek levererar kundanpassat smide, licenssvets och mekaniska reparationer till företag, byggprojekt och verkstäder i Göteborg och Västsverige.',
    shortAnswer:
      'Skarp Smed & Mek är en certifierad smides- och mekanisk verkstad för uppdrag i Göteborg och Västra Götaland. Vi levererar måttanpassat stål, licenssvets, specialdetaljer och mekaniska reparationer med snabb inställelse och svar inom 24 timmar.',
    seoTitle: 'Smed & Mekanisk Verkstad i Göteborg | Skarp Smed & Mek',
    seoDescription:
      'Söker du smed eller mekanisk verkstad för uppdrag i Göteborg? Skarp Smed & Mek levererar specialtillverkning i metall, licenssvets och maskinreparation. Begär offert!',
    stats: {
      stat1: { value: 'Hela Göteborg', label: 'Verkstad & montage' },
      stat2: { value: '< 24h', label: 'Offertrespons' },
      stat3: { value: 'Fast pris', label: 'Inga överraskningar' },
      quote: 'Skarp Smed & Mek levererade specialtillverkade fästen och svetsade på plats i Göteborg med fantastisk precision. Stark rekommendation!',
      quoteAuthor: 'Byggledare, Göteborg',
    },
    services: [
      {
        number: '01',
        title: 'Specialtillverkning i Göteborg',
        description: 'Måttbeställda stålkonstruktioner, motorfästen, avväxlingar och specialanpassningar för Göteborgs bygg- och industrimarknad.',
        serviceSlug: 'specialtillverkning-metall',
      },
      {
        number: '02',
        title: 'Smed & svets i Göteborg',
        description: 'Certifierat svetsarbete i stål och aluminium för krävande konstruktioner, förstärkningar och reparationer i Göteborg.',
        serviceSlug: 'smed-svets',
      },
      {
        number: '03',
        title: 'Maskinreparation & mek i Göteborg',
        description: 'Mekanisk felsökning, renovering av axlar, lager och chassidelar för entreprenadmaskiner och industrier i Göteborg.',
        serviceSlug: 'maskinreparation-mek',
      },
      {
        number: '04',
        title: 'Inhyrd svetsare i Göteborg',
        description: 'Flexibel och självgående svetsresurs för verkstäder och varv/industrier i Göteborg vid arbetstoppar och projekt.',
        serviceSlug: 'inhyrd-svetskompetens',
      },
    ],
    usps: [
      {
        number: '01',
        title: 'Fasta priser, inga timmar',
        description: 'Ni vet alltid vad nästa faktura landar på. Inga byråarvoden per timme och inga överraskningar.',
      },
      {
        number: '02',
        title: 'En kontaktperson',
        description: 'Ni blir inte ett konto i en jättebyrå. En person som kan metall, svets och mek och svarar inom 24 timmar.',
      },
      {
        number: '03',
        title: 'Allt på ett ställe',
        description: 'Konstruktion, tillverkning, svetsning och montering under samma tak med samma höga finish i varje moment.',
      },
      {
        number: '04',
        title: 'Inget luddigt',
        description: 'Vi visar resultatet i hållbarhet och funktion. Rejäla dimensioner som fungerar i verkligheten.',
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Lyssna & förstå',
        description: 'Vi börjar med er ritning eller problembeskrivning och era specifika belastningskrav, inte med en färdig mall.',
      },
      {
        number: '02',
        title: 'Fast offert & tidsplan',
        description: 'Tydligt kostnadsförslag och leveransdatum utan dolda poster. Ni har full kostnadskontroll.',
      },
      {
        number: '03',
        title: 'Tillverkning & kvalitetstest',
        description: 'Hantverket utförs med noggranna toleranser och kvalitetskontroller i vår verkstad.',
      },
      {
        number: '04',
        title: 'Montage på plats i Göteborg',
        description: 'Vi levererar och monterar på plats hos er i Göteborg med fullständig funktionskontroll.',
      },
    ],
    faqs: [
      {
        question: 'Kör ni ut till projekt i Göteborg trots att verkstaden ligger i Götene?',
        answer: 'Ja, absolut! Vi åker regelbundet till Göteborg för montage, mätning och svetsarbeten. Tillverkningen sker i vår verkstad i Götene vilket håller nere omkostnaderna och ger er konkurrenskraftiga fasta priser.',
      },
      {
        question: 'Kan ni hjälpa till med byggnadssmide och avväxlingsbalkar i Göteborg?',
        answer: 'Ja, vi tillverkar bärande stålkonstruktioner, avväxlingar och smidesdetaljer för ombyggnationer och nybyggen i Göteborg.',
      },
      {
        question: 'Hur snabbt kan ni lämna offert för ett jobb i Göteborg?',
        answer: 'Om ni skickar underlag via formuläret eller e-post återkommer vi oftast inom 24 timmar med ett tydligt prisförslag.',
      },
    ],
  },
  {
    slug: 'jonkoping',
    name: 'Jönköping',
    region: 'Jönköpings län & Skaraborg',
    nearbyAreas: ['Jönköping', 'Huskvarna', 'Mullsjö', 'Habop', 'Bankeryd', 'Vaggeryd'],
    pillLabel: 'Smed & Mekanik i Jönköping',
    heroTitle: 'Smed & mekanisk verkstad i Jönköping',
    heroSubtitle:
      'Kundanpassat smide, certifierad svetsning och maskinservice för industrier, logistikföretag och entreprenörer i Jönköping och runt Vättern.',
    shortAnswer:
      'Skarp Smed & Mek levererar kundanpassat smide, licenssvets och mekaniska reparationer till Jönköping med omnejd. Vi erbjuder snabb service, personlig dialog och fasta priser utan dolda tillägg.',
    seoTitle: 'Smed & Mekanisk Verkstad i Jönköping | Skarp Smed & Mek',
    seoDescription:
      'Behöver du smed eller mekanisk verkstad i Jönköping? Skarp Smed & Mek tillverkar stålkonstruktioner, utför svetsning och maskinreparation. Begär offert!',
    stats: {
      stat1: { value: 'Vättern runt', label: 'Jönköping med omnejd' },
      stat2: { value: '< 24h', label: 'Offertsvar' },
      stat3: { value: 'Industristål', label: 'Maximal hållfasthet' },
      quote: 'Mycket bra stålkonstruktioner och smidig leverans till vår logistikpark i Jönköping. Professionellt rakt igenom.',
      quoteAuthor: 'Platschef, Jönköping',
    },
    services: [
      {
        number: '01',
        title: 'Specialtillverkning i Jönköping',
        description: 'Måttbeställda stålramar, fästen, påkörningsskydd och balksystem för logistik och industri i Jönköping.',
        serviceSlug: 'specialtillverkning-metall',
      },
      {
        number: '02',
        title: 'Smed & svets i Jönköping',
        description: 'Kvalitetssvetsning i stål för reparationer, bärande stål och maskinkomponenter.',
        serviceSlug: 'smed-svets',
      },
      {
        number: '03',
        title: 'Maskinreparation & mek i Jönköping',
        description: 'Felsökning och underhåll av tunga maskiner, hydraulikfästen och transportörer i Jönköping.',
        serviceSlug: 'maskinreparation-mek',
      },
      {
        number: '04',
        title: 'Inhyrd svetsare i Jönköping',
        description: 'Inhyrd svetskompetens för tillverkande företag i Jönköping vid arbetstoppar.',
        serviceSlug: 'inhyrd-svetskompetens',
      },
    ],
    usps: [
      { number: '01', title: 'Täckande service', description: 'Vi levererar och monterar regelbundet i Jönköping och Vätterbygden.' },
      { number: '02', title: 'Robust kvalitet', description: 'Konstruktioner anpassade för tuff industriell användning.' },
      { number: '03', title: 'Direktkontakt', description: 'Prata direkt med Lucas som tillverkar och monterar.' },
      { number: '04', title: 'Tydlig kostnadsbild', description: 'Fasta offerter utan obehagliga överraskningar.' },
    ],
    processSteps: [
      { number: '01', title: 'Behovsanalys', description: 'Vi går igenom specifikation och ritningar.' },
      { number: '02', title: 'Offert', description: 'Fast prisförslag med tydlig tidsplan.' },
      { number: '03', title: 'Tillverkning', description: 'Arbetet utförs i vår verkstad med högsta precision.' },
      { number: '04', title: 'Leverans', description: 'Snabb transport eller montage på plats i Jönköping.' },
    ],
    faqs: [
      {
        question: 'Tar ni uppdrag inom logistik och lager i Jönköping?',
        answer: 'Ja, vi tillverkar och monterar påkörningsskydd, pollare, reparationssmide och trappstål för logistikanläggningar.',
      },
      {
        question: 'Kan ni svetsa och meka på plats i Jönköping?',
        answer: 'Ja, vår servicebil är rustad för mobila uppdrag och montage i Jönköping.',
      },
    ],
  },
]

export const locationBySlug = (slug?: string) =>
  locations.find((location) => location.slug === slug)
