import { CustomBr } from "@/components/atoms/custom-br";

export default {
  header: {
    title: (
      <>
        Online-Treuhand, die <CustomBr byViewport="desktop" /> persönlich bleibt
      </>
    ),
    description: (
      <>
        Einfacher Zugang zu präzisen Ergebnissen und persönlicher <CustomBr byViewport="desktop" />
        Betreuung – digital, effizient und verlässlich.
      </>
    ),
    img: {
      alt: "imagem 1",
      src: "/imgs/home/header/home.png",
    },
    link: "#",
  },
  intro: [
    {
      text: (
        <>
          <strong>Larissa Wechsler</strong> ist Fachmitglied bei <strong>SwissAccounting</strong> –
          dem grössten schweizerischen Verband für Rechnungslegung und Controlling. Vertrauen Sie
          auf geprüfte Qualität und Fachkompetenz.
        </>
      ),
      img: {
        alt: "SwissAccounting",
        src: "/imgs/home/intro/SwissAccounting.png",
      },
    },
    {
      text: (
        <>
          Effiziente und moderne Buchhaltungsprozesse dank der Partnerschaft mit{" "}
          <strong>Run My Accounts</strong> – Ihrer digitalen Lösung für automatisierte Buchhaltung
          und effiziente Workflows.
        </>
      ),
      img: {
        alt: "SwissAccounting",
        src: "/imgs/home/intro/run-accont.png",
      },
    },
  ],
  technology: {
    title: (
      <>
        Für mich ist digital kein Ersatz,
        <CustomBr byViewport="desktop" /> sondern eine Ergänzung.
      </>
    ),
    description: (
      <>
        Moderne Technik macht vieles einfacher – doch Vertrauen,
        <CustomBr byViewport="desktop" /> Kompetenz und persönliche Betreuung bleiben unersetzlich.
        <CustomBr byViewport="desktop" /> Büro im Flow verbindet digitale Prozesse mit einem klaren
        <CustomBr byViewport="desktop" /> Fokus auf das Wesentliche: exakte Finanzen, effiziente
        Abläufe
        <CustomBr byViewport="desktop" /> und eine vertrauensvolle Zusammenarbeit.
      </>
    ),
    img: {
      alt: "Image",
      src: "/imgs/home/technology/computer.png",
    },
    link: "/uber-uns",
  },
  solutions: {
    title: (
      <>
        Meine
        <br /> Treuhandlösungen
      </>
    ),
    card: [
      {
        subtitle: <>Privatpersonen</>,
        bg: {
          src: "/imgs/home/solutions/card-1.png",
          alt: "Image 1",
        },
        text: (
          <>
            Beratung, die Klarheit schafft. Ich unterstütze Sie bei Steuererklärungen,
            <CustomBr byViewport="desktop" />
            Steueroptimierung und Pensionsplanung. Meine Beratung ist persönlich und
            <CustomBr byViewport="desktop" /> unkompliziert, damit Ihre Finanzen genau das tun, was
            sie sollen – Sie entlasten.
          </>
        ),
        link: {
          href: "/privatkunden",
          title: "Mehr erfahren",
        },
      },
      {
        subtitle: <>Unternehmen</>,
        bg: {
          src: "/imgs/home/solutions/card-2.png",
          alt: "Image 2",
        },
        text: (
          <>
            Von der Buchhaltung bis zur Finanzplanung – ich biete Ihnen Treuhandlösungen,
            <CustomBr byViewport="desktop" /> die auf Ihre Unternehmensziele abgestimmt sind.
            Moderne Prozesse und
            <CustomBr byViewport="desktop" /> persönlicher Einsatz sorgen dafür, dass Sie mehr Zeit
            für Ihr Geschäft haben.
          </>
        ),
        link: {
          href: "/unternehmen",
          title: "Mehr erfahren",
        },
      },
    ],
  },
};
