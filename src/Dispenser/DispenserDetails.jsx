import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  colishaManualPDF,
  dzv1701ManualPDF,
  dzv2003ManualPDF,
  dzv2004ManualPDF,
  dzv2005ManualPDF,
  dzv2021ManualPDF,
  dzv2024ManualPDF,
} from "../assets/documents";
import {
  ColishaImg,
  ColishaImgEight,
  ColishaImgEleven,
  ColishaImgFive,
  ColishaImgFour,
  ColishaImgNine,
  ColishaImgOne,
  ColishaImgSeven,
  ColishaImgSix,
  ColishaImgTen,
  ColishaImgThree,
  ColishaImgTwelve,
  ColishaImgTwo,
  Dzv1701Img,
  Dzv1701ImgEight,
  Dzv1701ImgEleven,
  Dzv1701ImgFive,
  Dzv1701ImgFour,
  Dzv1701ImgNine,
  Dzv1701ImgOne,
  Dzv1701ImgSeven,
  Dzv1701ImgSix,
  Dzv1701ImgTen,
  Dzv1701ImgThree,
  Dzv1701ImgTwelve,
  Dzv1701ImgTwo,
  Dzv2003Img,
  Dzv2003ImgEight,
  Dzv2003ImgEleven,
  Dzv2003ImgFive,
  Dzv2003ImgFour,
  Dzv2003ImgFourteen,
  Dzv2003ImgNine,
  Dzv2003ImgOne,
  Dzv2003ImgSeven,
  Dzv2003ImgSix,
  Dzv2003ImgTen,
  Dzv2003ImgThirteen,
  Dzv2003ImgThree,
  Dzv2003ImgTwelve,
  Dzv2003ImgTwo,
  Dzv2004Img,
  Dzv2004ImgEight,
  Dzv2004ImgEleven,
  Dzv2004ImgFive,
  Dzv2004ImgFour,
  Dzv2004ImgFourteen,
  Dzv2004ImgNine,
  Dzv2004ImgOne,
  Dzv2004ImgSeven,
  Dzv2004ImgSix,
  Dzv2004ImgTen,
  Dzv2004ImgThirteen,
  Dzv2004ImgThree,
  Dzv2004ImgTwelve,
  Dzv2004ImgTwo,
  Dzv2005Img,
  Dzv2005ImgEight,
  Dzv2005ImgEleven,
  Dzv2005ImgFive,
  Dzv2005ImgFour,
  Dzv2005ImgFourteen,
  Dzv2005ImgNine,
  Dzv2005ImgOne,
  Dzv2005ImgSeven,
  Dzv2005ImgSix,
  Dzv2005ImgTen,
  Dzv2005ImgThirteen,
  Dzv2005ImgThree,
  Dzv2005ImgTwelve,
  Dzv2005ImgTwo,
  Dzv2021Img,
  Dzv2021ImgEight,
  Dzv2021ImgEleven,
  Dzv2021ImgFive,
  Dzv2021ImgFour,
  Dzv2021ImgNine,
  Dzv2021ImgOne,
  Dzv2021ImgSeven,
  Dzv2021ImgSix,
  Dzv2021ImgTen,
  Dzv2021ImgThirteen,
  Dzv2021ImgThree,
  Dzv2021ImgTwelve,
  Dzv2021ImgTwo,
  Dzv2024Img,
  Dzv2024ImgEight,
  Dzv2024ImgEleven,
  Dzv2024ImgFive,
  Dzv2024ImgFour,
  Dzv2024ImgNine,
  Dzv2024ImgOne,
  Dzv2024ImgSeven,
  Dzv2024ImgSix,
  Dzv2024ImgTen,
  Dzv2024ImgThree,
  Dzv2024ImgTwelve,
  Dzv2024ImgTwo,
} from "../assets/images";
import { useState } from "react";

const offer = [
  {
    id: 1,
    name: "Aparat za vodu Coolisha",
    price: "18,000.00 рсд",
    manual: colishaManualPDF,
    mainImg: <ColishaImg className="main-img" />,
    gallery: [
      <ColishaImgOne className="gallery-img" />,
      <ColishaImgTwo className="gallery-img" />,
      <ColishaImgThree className="gallery-img" />,
      <ColishaImgFour className="gallery-img" />,
      <ColishaImgFive className="gallery-img" />,
      <ColishaImgSix className="gallery-img" />,
      <ColishaImgSeven className="gallery-img" />,
      <ColishaImgEight className="gallery-img" />,
      <ColishaImgNine className="gallery-img" />,
      <ColishaImgTen className="gallery-img" />,
      <ColishaImgEleven className="gallery-img" />,
      <ColishaImgTwelve className="gallery-img" />,
    ],
    description:
      "Collisha samostojeći dispenzer za vodu kombinuje moderan dizajn i vrhunsku funkcionalnost. Obezbeđuje toplu i hladnu vodu, koristi efikasan kompresorski sistem hlađenja i izrađen je od visokokvalitetnih prehrambenih materijala. Sa snažnim kapacitetom grejanja i hlađenja, niskom potrošnjom energije i tihim radom, idealan je za kancelarije, domove i javne prostore. Dispenzer poseduje elegantnu konstrukciju, dug vek trajanja i koristi ekološki rashladni gas R134a. ISO9001 sertifikovan proizvod za svakodnevnu sigurnu i čistu upotrebu.",

    advantages: [
      "Elegantni, inovativni samostojeći model",
      "Sistem hlađenja: električno hlađenje ili kompresor",
      "Frižider/ormarić dostupan, U-oblik isparivača (opcija)",
      "Ekskluzivni atraktivni dizajn spoljašnjosti",
      "Topla i hladna voda ili obična voda",
      "Rezervoar od nerđajućeg čelika - varen ili brušen",
      "Snažno hlađenje, nizak nivo buke, niska potrošnja energije, visoke performanse i dug radni vek",
      "Materijali prehrambenog kvaliteta",
      "U duhu ekologije, za čistu vodenu sredinu",
      "Sertifikovan prema ISO9001 standardu",
    ],

    specifications: [
      { label: "Model", value: "YLRS-D2" },

      { label: "Napon i frekvencija", value: "220-240V / 110-127V, 50/60Hz" },
      { label: "Snaga grejanja", value: "550W" },
      { label: "Snaga hlađenja", value: "95W" },
      { label: "Kapacitet grejanja", value: "5L/h, temperatura 85-95°C" },
      { label: "Kapacitet hlađenja", value: "	2L/h, temperatura 5-10°C" },
      { label: "Dimenzije pakovanja", value: "34 x 33 x 101 cm" },
      { label: "Kapacitet utovara", value: "550 komada u 40' HQ kontejne" },
      { label: "Neto/Bruto težina", value: "14 kg / 15 kg" },
      { label: "Rashladno sredstvo", value: "R134a" },
    ],
  },
  {
    id: 2,
    name: "Aparat za vodu DZV-1701",
    price: "16,800.00 рсд",
    manual: dzv1701ManualPDF,
    mainImg: <Dzv1701Img className="main-img " />,
    gallery: [
      <Dzv1701ImgOne className="gallery-img" />,
      <Dzv1701ImgTwo className="gallery-img" />,
      <Dzv1701ImgThree className="gallery-img" />,
      <Dzv1701ImgFour className="gallery-img" />,
      <Dzv1701ImgFive className="gallery-img" />,
      <Dzv1701ImgSix className="gallery-img" />,
      <Dzv1701ImgSeven className="gallery-img" />,
      <Dzv1701ImgEight className="gallery-img" />,
      <Dzv1701ImgNine className="gallery-img" />,
      <Dzv1701ImgTen className="gallery-img" />,
      <Dzv1701ImgEleven className="gallery-img" />,
      <Dzv1701ImgTwelve className="gallery-img" />,
    ],

    description:
      "Dispenzer za vodu DZV-1701 predstavlja savršeno rešenje za dom, kancelariju ili poslovni prostor. Zahvaljujući kompresorskoj tehnologiji hlađenja, ovaj aparat brzo obezbeđuje vodu željene temperature — hladnu (5-10°C) ili toplu (85-95°C), idealnu za osveženje, pripremu čaja, kafe ili instant obroka.Sa kapacitetom rezervoara od 5 litara, obezbeđuje dugotrajan rad bez potrebe za čestim dopunjavanjem. Napravljen je od kvalitetne plastike, što garantuje dugovečnost, jednostavno održavanje i moderan izgled koji se lako uklapa u svako okruženje.Bilo da se koristi u kuhinji, kancelariji ili čekaonici, DZV-1701 donosi savršen balans između funkcionalnosti, dizajna i praktičnosti.",
    advantages: [
      "Kompresorska tehnologija hlađenja",
      "Hladna voda temperature 5-10°C",
      "Topla voda temperature 85-95°C",
      "Kapacitet rezervoara 5 litara",
      "Efikasno hlađenje i brzo zagrevanje",
      "Moderan i kompaktan dizajn",
      "Lako održavanje zahvaljujući kvalitetnoj plastici",
      "Pogodan za domaćinstva, kancelarije i čekaonice",
      "Jednostavno korišćenje - topla i hladna voda na dohvat ruke",
      "Elegantna bela boja koja se uklapa u svaki enterijer",
    ],
    specifications: [
      { label: "Tehnologija hlađenja", value: "Kompresorska" },
      { label: "Kapacitet hlađenja vode", value: "2 lit./h (5-10°C)" },
      { label: "Kapacitet grejanja vode", value: "5 lit./h (85-95°C)" },
      { label: "Kapacitet rezervoara", value: "5 L" },
      { label: "Dimenzije aparata", value: "20 x 32 x 108.5 cm" },
      { label: "Težina", value: "13 kg" },
      { label: "Boja proizvoda", value: "Bela" },
      { label: "Materijal", value: "Plastika" },
      { label: "Napajanje", value: "220-240V / 50Hz" },
    ],
  },
  {
    id: 3,
    name: "Aparat za vodu DZV-2004 K",
    price: "17,500.00 рсд",
    manual: dzv2004ManualPDF,
    mainImg: <Dzv2004Img className="main-img" />,
    gallery: [
      <Dzv2004ImgOne className="gallery-img" />,
      <Dzv2004ImgTwo className="gallery-img" />,
      <Dzv2004ImgThree className="gallery-img" />,
      <Dzv2004ImgFour className="gallery-img" />,
      <Dzv2004ImgFive className="gallery-img" />,
      <Dzv2004ImgSix className="gallery-img" />,
      <Dzv2004ImgSeven className="gallery-img" />,
      <Dzv2004ImgEight className="gallery-img" />,
      <Dzv2004ImgNine className="gallery-img" />,
      <Dzv2004ImgTen className="gallery-img" />,
      <Dzv2004ImgEleven className="gallery-img" />,
      <Dzv2004ImgTwelve className="gallery-img" />,
      <Dzv2004ImgThirteen className="gallery-img" />,
      <Dzv2004ImgFourteen className="gallery-img" />,
    ],
    description:
      "H2O DZV-2004 K je kompresorski dispenzer koji omogućava trenutno točenje hladne i tople vode. Savršen je izbor za dom, kancelariju ili poslovne prostore. Kombinuje vrhunske performanse, energetsku efikasnost i elegantan dizajn koji se lako uklapa u svako okruženje. Zahvaljujući kompresorskoj tehnologiji, osigurava brzo hlađenje, dok funkcija zagrevanja omogućava uvek dostupnu toplu vodu za čaj, kafu ili instant napitke. Kompaktan je, jednostavan za korišćenje i održavanje, i pruža idealan balans između funkcionalnosti i estetike.",

    advantages: [
      "Kombinuje hladnu i toplu vodu na dohvat ruke",
      "Kompresorska tehnologija za efikasno hlađenje",
      "Moderan i elegantan dizajn koji se uklapa u svaki prostor",
      "Idealan za dom, kancelariju i poslovne prostore",
      "Ekološki prihvatljiv i energetski efikasan",
      "Brzo hlađenje i grejanje vode",
      "Jednostavno održavanje i dug vek trajanja",
      "Tih rad i pouzdana konstrukcija",
    ],

    specifications: [
      { label: "Tip uređaja", value: "Kompresorski dispenzer za vodu" },
      { label: "Model", value: "H2O DZV-2004 K" },
      { label: "Kapacitet hlađenja", value: "0.71 l/h" },
      { label: "Kapacitet grejanja", value: "5 l/h" },
      { label: "Dimenzije (Š × D × V)", value: "310 × 320 × 940 mm" },
      { label: "Funkcije", value: "Hladna i topla voda" },
      { label: "Primena", value: "Stambeni i kancelarijski prostori" },
      { label: "Dizajn", value: "Moderan, kompaktan, elegantan" },
      { label: "Energetska efikasnost", value: "Da (ekološki prihvatljiv)" },
    ],
  },

  {
    id: 4,
    name: "Aparat za vodu DZV-2003",
    price: "19,700.00 рсд",
    manual: dzv2003ManualPDF,
    mainImg: <Dzv2003Img className="main-img" />,
    gallery: [
      <Dzv2003ImgOne className="gallery-img" />,
      <Dzv2003ImgTwo className="gallery-img" />,
      <Dzv2003ImgThree className="gallery-img" />,
      <Dzv2003ImgFour className="gallery-img" />,
      <Dzv2003ImgFive className="gallery-img" />,
      <Dzv2003ImgSix className="gallery-img" />,
      <Dzv2003ImgSeven className="gallery-img" />,
      <Dzv2003ImgEight className="gallery-img" />,
      <Dzv2003ImgNine className="gallery-img" />,
      <Dzv2003ImgTen className="gallery-img" />,
      <Dzv2003ImgEleven className="gallery-img" />,
      <Dzv2003ImgTwelve className="gallery-img" />,
      <Dzv2003ImgThirteen className="gallery-img" />,
      <Dzv2003ImgFourteen className="gallery-img" />,
    ],
    description:
      "Aparat za vodu DZV–2003 kombinuje pouzdanost, moderan izgled i visoke performanse u jednom uređaju. Ovaj kompresorski dispenzer omogućava trenutno uživanje u osvežavajuće hladnoj ili prijatno toploj vodi, idealnoj za čaj, kafu ili brze obroke. Zahvaljujući naprednoj tehnologiji hlađenja i snažnom sistemu grejanja, DZV–2003 pruža stabilan rad tokom celog dana. Dizajniran je da se uklopi u svaki prostor – od doma i kancelarije, do poslovnih i javnih prostora – uz jednostavno održavanje i energetsku efikasnost.",

    advantages: [
      "Kombinuje hladnu i toplu vodu na dohvat ruke",
      "Kompresorska tehnologija za efikasno hlađenje",
      "Brzo hlađenje i grejanje vode",
      "Temperatura hladne vode 5–10°C",
      "Temperatura tople vode 88–97°C",
      "Moderan i elegantan dizajn koji se uklapa u svaki prostor",
      "Jednostavno održavanje i dug vek trajanja",
      "Tih rad i pouzdana konstrukcija",
      "Idealan za dom, kancelariju i poslovne prostore",
      "Ekološki prihvatljiv i energetski efikasan",
    ],

    specifications: [
      { label: "Tip uređaja", value: "Kompresorski dispenzer za vodu" },
      { label: "Model", value: "H2O DZV–2003" },
      { label: "Kapacitet hlađenja", value: "2 l/h (5–10°C)" },
      { label: "Nominalna snaga hlađenja", value: "110 W" },
      { label: "Kapacitet grejanja", value: "5 l/h (88–97°C)" },
      { label: "Nominalna snaga grejanja", value: "550 W" },
      { label: "Rashladno sredstvo", value: "R134a" },
      { label: "Nominalna frekvencija", value: "50 Hz" },
      { label: "Dimenzije (Š × D × V)", value: "330 × 350 × 990 mm" },
      { label: "Težina", value: "15 kg" },
      { label: "Boja", value: "Bela" },
      { label: "Dizajn", value: "Moderan, kompaktan i elegantan" },
      { label: "Primena", value: "Stambeni i kancelarijski prostori" },
      { label: "Energetska efikasnost", value: "Da (ekološki prihvatljiv)" },
    ],
  },
  {
    id: 5,
    name: "Aparat za vodu DZV-2005",
    price: "19,900.00 рсд",
    manual: dzv2005ManualPDF,
    mainImg: <Dzv2005Img className="main-img" />,
    gallery: [
      <Dzv2005ImgOne className="gallery-img" />,
      <Dzv2005ImgTwo className="gallery-img" />,
      <Dzv2005ImgThree className="gallery-img" />,
      <Dzv2005ImgFour className="gallery-img" />,
      <Dzv2005ImgFive className="gallery-img" />,
      <Dzv2005ImgSix className="gallery-img" />,
      <Dzv2005ImgSeven className="gallery-img" />,
      <Dzv2005ImgEight className="gallery-img" />,
      <Dzv2005ImgNine className="gallery-img" />,
      <Dzv2005ImgTen className="gallery-img" />,
      <Dzv2005ImgEleven className="gallery-img" />,
      <Dzv2005ImgTwelve className="gallery-img" />,
      <Dzv2005ImgThirteen className="gallery-img" />,
      <Dzv2005ImgFourteen className="gallery-img" />,
    ],
    description:
      "Aparat za vodu DZV–2005 je moderan i pouzdan kompresorski dispenzer dizajniran za svakodnevnu upotrebu u domovima, kancelarijama i poslovnim prostorima. Sa elegantnim crnim dizajnom, ovaj model kombinuje funkcionalnost, energetski efikasnost i moderan izgled. Omogućava brz pristup hladnoj (5–10 °C) i toploj vodi (88–97 °C), uz kapacitet od 2 l/h za hladnu i 5 l/h za toplu vodu.Zahvaljujući snažnom kompresorskom sistemu hlađenja, ekološkom rashladnom sredstvu R134a i tihom radu, DZV–2005 pruža dugotrajan komfor, sigurnost i pouzdanost. Idealan je izbor za svakoga ko želi kvalitetno rešenje za svakodnevnu hidraciju sa dozom stila.",

    advantages: [
      "Kombinuje toplu i hladnu vodu na dohvat ruke",
      "Kompresorska tehnologija za brzo i efikasno hlađenje",
      "Brzo zagrevanje i hlađenje vode bez čekanja",
      "Temperatura hladne vode 5–10°C",
      "Temperatura tople vode 88–97°C",
      "Moderan dizajn u elegantnoj crnoj boji",
      "Tih rad i energetska efikasnost",
      "Jednostavno održavanje i dug vek trajanja",
      "Izdržljiva konstrukcija od prehrambenih materijala",
      "Idealan za dom, kancelariju i poslovne prostore",
    ],

    specifications: [
      { label: "Tip uređaja", value: "Kompresorski dispenzer za vodu" },
      { label: "Model", value: "H2O DZV–2005" },
      { label: "Način hlađenja", value: "Kompresorsko" },
      { label: "Kapacitet hlađenja", value: "2 l/h (5–10°C)" },
      { label: "Nominalna snaga hlađenja", value: "110 W" },
      { label: "Kapacitet grejanja", value: "5 l/h (88–97°C)" },
      { label: "Nominalna snaga grejanja", value: "550 W" },
      { label: "Rashladno sredstvo", value: "R134a (ekološki prihvatljivo)" },
      { label: "Nominalna frekvencija", value: "50 Hz" },
      { label: "Dimenzije (Š × D × V)", value: "325 × 365 × 1120 mm" },
      { label: "Težina", value: "15,5 kg" },
      { label: "Boja", value: "Crna" },
    ],
  },

  {
    id: 6,
    name: "Aparat za vodu DZV-2021",
    price: "20,500.00 рсд",
    manual: dzv2021ManualPDF,
    mainImg: <Dzv2021Img className="main-img" />,
    gallery: [
      <Dzv2021ImgOne className="gallery-img" />,
      <Dzv2021ImgTwo className="gallery-img" />,
      <Dzv2021ImgThree className="gallery-img" />,
      <Dzv2021ImgFour className="gallery-img" />,
      <Dzv2021ImgFive className="gallery-img" />,
      <Dzv2021ImgSix className="gallery-img" />,
      <Dzv2021ImgSeven className="gallery-img" />,
      <Dzv2021ImgEight className="gallery-img" />,
      <Dzv2021ImgNine className="gallery-img" />,
      <Dzv2021ImgTen className="gallery-img" />,
      <Dzv2021ImgEleven className="gallery-img" />,
      <Dzv2021ImgTwelve className="gallery-img" />,
      <Dzv2021ImgThirteen className="gallery-img" />,
    ],

    description:
      "Aparat za vodu DZV-2021 je savremeni kompresorski dispenzer dizajniran da pruži svakodnevnu udobnost i praktičnost u domu, kancelariji, školama ili poslovnim prostorima. Obezbeđuje brz pristup hladnoj i toploj vodi uz kapacitet hlađenja do 3 l/h i grejanja do 5 l/h. Sa modernim, kompaktnim dizajnom i elegantnom crnom završnom obradom, lako se uklapa u svaki enterijer. Zahvaljujući energetskoj efikasnosti, pouzdanom radu i jednostavnom održavanju, DZV-2021 predstavlja idealno rešenje za sve koji traže spoj funkcionalnosti, stila i komfora.",

    advantages: [
      "Kombinuje toplu i hladnu vodu na dohvat ruke",
      "Efikasno kompresorsko hlađenje i brzo grejanje",
      "Kapacitet hlađenja do 3 l/h i grejanja do 5 l/h",
      "Veliki kapacitet rezervoara – 5 litara",
      "Moderan crni dizajn koji se uklapa u svaki prostor",
      "Kompaktne dimenzije za laku integraciju u bilo koji enterijer",
      "Jednostavno korišćenje i održavanje",
      "Tih rad i energetska efikasnost",
      "Izrađen od kvalitetne plastike prehrambenog kvaliteta",
      "Idealan za dom, kancelariju, škole i poslovne prostore",
    ],

    specifications: [
      { label: "Tip uređaja", value: "Kompresorski dispenzer za vodu" },
      { label: "Model", value: "H2O DZV–2021" },
      { label: "Način hlađenja", value: "Kompresorsko" },
      { label: "Kapacitet hlađenja", value: "2–3 l/h" },
      { label: "Kapacitet grejanja", value: "5 l/h" },
      { label: "Kapacitet rezervoara", value: "5 l" },
      { label: "Dimenzije (Š × D × V)", value: "310 × 320 × 966 mm" },
      { label: "Težina", value: "13 kg" },
      { label: "Boja", value: "Crna" },
      { label: "Materijal", value: "Plastika" },
      { label: "Funkcije", value: "Hladna i topla voda" },
    ],
  },
  {
    id: 7,
    name: "Aparat za vodu DZV-2024",
    price: "21,200.00 рсд",
    manual: dzv2024ManualPDF,
    mainImg: <Dzv2024Img className="main-img" />,
    gallery: [
      <Dzv2024ImgOne className="gallery-img" />,
      <Dzv2024ImgTwo className="gallery-img" />,
      <Dzv2024ImgThree className="gallery-img" />,
      <Dzv2024ImgFour className="gallery-img" />,
      <Dzv2024ImgFive className="gallery-img" />,
      <Dzv2024ImgSix className="gallery-img" />,
      <Dzv2024ImgSeven className="gallery-img" />,
      <Dzv2024ImgEight className="gallery-img" />,
      <Dzv2024ImgNine className="gallery-img" />,
      <Dzv2024ImgTen className="gallery-img" />,
      <Dzv2024ImgEleven className="gallery-img" />,
      <Dzv2024ImgTwelve className="gallery-img" />,
    ],

    description:
      "Aparat za vodu DZV-2024 BD-A je savremeni kompresorski dozator sa donjim položajem boce, dizajniran za maksimalnu praktičnost i udobnost. Zahvaljujući tom rešenju, izbegava se podizanje teških balona, što ga čini idealnim izborom za dom, kancelarije i poslovne prostore. Obezbeđuje efikasno hlađenje i grejanje vode sa kapacitetom od 1 l/h za hladnu i 5 l/h za toplu vodu. Sa kompaktnim dimenzijama od 310 × 320 × 1110 mm i težinom od 14 kg, ovaj model se lako uklapa u svaki prostor, dok siva boja i kvalitetna plastika doprinose modernom i elegantnom izgledu.",

    advantages: [
      "Boca se postavlja dole – bez podizanja i prosipanja",
      "Efikasno hlađenje i grejanje vode (1 l/h i 5 l/h)",
      "Kompresorski sistem za stabilne performanse",
      "Moderan sivi dizajn koji se uklapa u svaki enterijer",
      "Kompaktan, stabilan i jednostavan za upotrebu",
      "Izrađen od kvalitetne plastike prehrambenog kvaliteta",
      "Tih i pouzdan rad uz nisku potrošnju energije",
      "Pogodan za dom, kancelarije i poslovne prostore",
      "Jednostavno postavljanje i održavanje",
      "Praktično rešenje za svakodnevnu upotrebu",
    ],

    specifications: [
      { label: "Model", value: "DZV-2024 BD-A" },
      {
        label: "Tip uređaja",
        value: "Kompresorski dispenzer za vodu (boca dole)",
      },
      { label: "Kapacitet hlađenja vode", value: "1 l/h" },
      { label: "Kapacitet grejanja vode", value: "5 l/h" },
      { label: "Dimenzije (Š × D × V)", value: "310 × 320 × 1110 mm" },
      { label: "Težina", value: "14 kg" },
      { label: "Boja", value: "Siva" },
      { label: "Materijal", value: "Plastika" },
      { label: "Funkcije", value: "Hladna i topla voda" },
    ],
  },
];

const DispenserDetails = () => {
  const { id } = useParams();
  const dispenser = offer.find((item) => item.id === Number(id));
  if (!dispenser) {
    return <p>Dispenzer nije pronađen.</p>;
  }
  const [activeTabs, setActiveTabs] = useState("");
  const handleTabClick = (tabName) => {
    setActiveTabs((prev) => (prev === tabName ? "" : tabName));
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [dispenser.mainImg, ...dispenser.gallery];
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="dispenser-details-section">
      <div className="dispenser-details-section-holder sections-holder">
        <div
          className="details-gallery"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="gallery-grid">
            <div className="main-image">
              {" "}
              <div className="slider-container">
                <button className="arrow left" onClick={prevSlide}>
                  ❮
                </button>

                <div
                  className="slider-track"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((img, index) => (
                    <div key={index} className="slide">
                      {img}
                    </div>
                  ))}
                </div>

                <button className="arrow right" onClick={nextSlide}>
                  ❯
                </button>
              </div>
            </div>

            <div className="thumbnails">
              {dispenser.gallery.slice(0, 4).map((img, i) => (
                <div
                  key={i}
                  className="thumb"
                  data-aos="zoom-in"
                  data-aos-delay={i * 50}
                >
                  {img}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="details-info"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="dispenser-name-holder">
            <h2 className="dispenser-name">{dispenser.name}</h2>
            <div className="price-holder">
              <p className="price">{dispenser.price}</p>
              <a href="tel:+38163320085" className="product-cta-link">
                <button className="product-cta">Pozovite nas</button>
              </a>
            </div>
          </div>
          <div className="description">
            <p>{dispenser.description}</p>
          </div>

          <div className="tabs">
            <button
              className={activeTabs === "karakteristike" ? "active" : ""}
              onClick={() => handleTabClick("karakteristike")}
            >
              Karakteristike
            </button>
            <button
              className={activeTabs === "specifikacije" ? "active" : ""}
              onClick={() => handleTabClick("specifikacije")}
            >
              {" "}
              Tehničke specifikacije
            </button>
            <button onClick={() => window.open(dispenser.manual, "_blank")}>
              Upustvo za upotrebu
            </button>
          </div>

          {activeTabs === "karakteristike" && (
            <ul
              className="advantages-list"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {dispenser.advantages.map((adv, i) => (
                <li key={i} data-aos="fade-up" data-aos-delay={i * 50}>
                  {" "}
                  {adv}
                </li>
              ))}
            </ul>
          )}

          {activeTabs === "specifikacije" && (
            <table
              className="specifications-table"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <tbody>
                {dispenser.specifications.map((spec, i) => (
                  <tr key={i}>
                    <td className="spec-label">{spec.label}</td>
                    <td className="spec-value">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};

export default DispenserDetails;
