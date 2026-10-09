import { temporaryMedia } from './siteContent'

export type Service = {
  slug: string
  title: string
  shortTitle: string
  eyebrow: string
  intro: string
  description: string
  image: string
  secondaryImage?: string
  details: string[]
  benefits: string[]
  seoTitle: string
  seoDescription: string
}

export const services: Service[] = [
  {
    slug: 'svartstal-rostfritt',
    title: 'Svartstål & rostfritt stål',
    shortTitle: 'Svartstål & rostfritt',
    eyebrow: 'PRECISIONSSVETS · KVALITETSSTÅL · HÅLLBARHET',
    intro:
      'Kvalificerad tillverkning och svetsning i både konstruktionsstål (svartstål) och rostfritt stål för industri, lantbruk och speciallösningar.',
    description:
      'Att arbeta i både vanligt svartstål och rostfritt stål ställer höga krav på materialkännedom, rätt svetsmetod och precision. Skarp Smed & Mek hanterar allt från tunga konstruktioner och reparationer i svartstål till finare detaljer, räcken och specialfästen i rostfritt stål. Varje arbete utförs med noggrannhet och metod anpassad för den miljö och belastning detaljen ska klara.',
    image: temporaryMedia.weldingCloseup,
    secondaryImage: temporaryMedia.weldingWorkshop,
    details: [
      'Svetsning och tillverkning i svartstål och rostfritt',
      'TIG- och MIG/MAG-svetsning med rena och starka fogar',
      'Måttanpassade fästen, konsoler och konstruktioner',
      'Rostfria räcken, ramar och korrosionståliga detaljer',
      'Arbete i verkstad i Götene eller montage på plats',
    ],
    benefits: [
      'Erfarenhet av olika stålkvaliteter och metoder',
      'Hållbara lösningar anpassade för utomhus- och industrimiljö',
      'Direkt dialog med smeden som tillverkar produkten',
    ],
    seoTitle: 'Svartstål & Rostfritt i Götene | Skarp Smed & Mek',
    seoDescription:
      'Specialtillverkning och svetsning i svartstål och rostfritt stål från Götene. Skarp Smed & Mek levererar hållbara metallösningar i Västra Götaland.',
  },
  {
    slug: 'specialtillverkning-metall',
    title: 'Specialtillverkning i metall',
    shortTitle: 'Specialtillverkning',
    eyebrow: 'MÅTTBESTÄLLT · PRAKTISKT · ROBUST',
    intro:
      'Beställningsjobb i svartstål, rostfritt och metall för kunder som behöver en lösning som inte finns färdig på hyllan.',
    description:
      'Lucas tillverkar specialprodukter på beställning i både svartstål och rostfritt stål och vill växa just den delen av verksamheten. Exempel är motorfästen, maskindetaljer, konsoler och stålstaket. Varje uppdrag bedöms utifrån behov, konstruktion och användning.',
    image: temporaryMedia.weldingWorkshop,
    secondaryImage: temporaryMedia.weldingCloseup,
    details: [
      'Specialprodukter i svartstål och rostfritt efter behov',
      'Motorfästen och maskinspecifika fästen',
      'Stålstaket, grindar och räckeslösningar',
      'Anpassning, tillverkning och reparation',
    ],
    benefits: [
      'Direkt kontakt med den som utför jobbet',
      'Lösningar anpassade efter uppdraget',
      'Möjlighet att ta både lokala och större jobb',
    ],
    seoTitle: 'Specialtillverkning i svartstål & rostfritt i Götene | Skarp Smed & Mek',
    seoDescription:
      'Specialtillverkning i svartstål och rostfritt från Götene. Skarp Smed & Mek hjälper till med måttbeställda stålkonstruktioner och speciallösningar.',
  },
  {
    slug: 'smed-svets',
    title: 'Smed & svets',
    shortTitle: 'Smed & svets',
    eyebrow: 'SVETSNING · SMIDE · REPARATION',
    intro:
      'Praktiskt smides- och svetsarbete för verkstäder, företag och beställare som behöver få metall att hålla, passa eller fungera.',
    description:
      'Svetsning är en stor del av verksamheten. Arbetet omfattar smide, stålarbete och reparationer där svets och metallbearbetning behövs för att lösa uppgiften.',
    image: temporaryMedia.weldingCloseup,
    secondaryImage: temporaryMedia.weldingWorkshop,
    details: [
      'Svetsning av metallkomponenter',
      'Smidesarbete och anpassningar',
      'Reparation av metalldelar',
      'Arbete på plats eller i verkstad beroende på uppdrag',
    ],
    benefits: [
      'Brett praktiskt kunnande',
      'Flexibilitet mellan tillverkning och reparation',
      'Utgår från Götene och arbetar i Västra Götaland',
    ],
    seoTitle: 'Smed & svets i Götene och Västra Götaland | Skarp Smed & Mek',
    seoDescription:
      'Svetsning, smide och metallreparation från Götene. Skarp Smed & Mek tar uppdrag i Västra Götaland och kan resa längre för större jobb.',
  },
  {
    slug: 'maskinreparation-mek',
    title: 'Maskinreparation & mek',
    shortTitle: 'Maskin & mek',
    eyebrow: 'FELSÖKNING · REPARATION · PRAKTISKA LÖSNINGAR',
    intro:
      'Mekaniskt arbete och reparationer när maskiner, fästen eller komponenter behöver åtgärdas eller anpassas.',
    description:
      'Utöver svets och smide arbetar Lucas även med mekaniska reparationer av maskiner. Den kombinationen gör det möjligt att lösa uppdrag där både mekanik och metallarbete behövs.',
    image: temporaryMedia.machineRepair,
    secondaryImage: temporaryMedia.weldingWorkshop,
    details: [
      'Mekaniska reparationer av maskiner',
      'Anpassning av fästen och metalldelar',
      'Kombinerade svets- och mekjobb',
      'Bedömning efter maskinens och uppdragets behov',
    ],
    benefits: [
      'En kontakt för både mek och metallarbete',
      'Praktisk problemlösning på plats',
      'Passar uppdrag där standarddelar inte räcker',
    ],
    seoTitle: 'Maskinreparation & mek i Götene | Skarp Smed & Mek',
    seoDescription:
      'Maskinreparation och mekaniskt arbete från Götene, ofta i kombination med svetsning, smide och specialanpassade metalldelar.',
  },
  {
    slug: 'inhyrd-svetskompetens',
    title: 'Inhyrd svetskompetens',
    shortTitle: 'Inhyrd svetsare',
    eyebrow: 'FLEXIBEL FÖRSTÄRKNING FÖR VERKSTÄDER',
    intro:
      'Extra arbetskraft för verkstäder och verksamheter som behöver förstärkning inom svets och praktiskt metallarbete.',
    description:
      'Lucas hyr även ut sin arbetskraft till olika verkstäder, främst för svetsarbete. Den här sidan gör den delen av verksamheten tydlig för företag som söker flexibel förstärkning.',
    image: temporaryMedia.weldingWorkshop,
    secondaryImage: temporaryMedia.weldingCloseup,
    details: [
      'Svetsarbete som inhyrd resurs',
      'Förstärkning vid arbetstoppar eller större jobb',
      'Resor inom Västra Götaland och längre vid större uppdrag',
    ],
    benefits: [
      'Flexibel resurs när behov uppstår',
      'Erfarenhet av verkstadsmiljö',
      'Kombinerar svetsning med praktiskt mek- och smideskunnande',
    ],
    seoTitle: 'Inhyrd svetsare i Västra Götaland | Skarp Smed & Mek',
    seoDescription:
      'Behöver verkstaden extra svetskompetens? Skarp Smed & Mek utgår från Götene och kan hyras in för svets- och metallarbete.',
  },
]

export const serviceBySlug = (slug?: string) =>
  services.find((service) => service.slug === slug)
