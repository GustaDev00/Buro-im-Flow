import { CustomBr } from "@/components/atoms/custom-br";

export default {
  header: {
    title: (
      <>
        Für KMUs, die klare Finanzen
        <CustomBr byViewport="desktop" /> und Effizienz schätzen
      </>
    ),
    description: <>Buchhaltung? Funktioniert mühelos und wie von selbst.</>,
    img: {
      alt: "imagem 1",
      src: "/imgs/unternehmen/header/bg.png",
    },
    link: "/kontakt",
  },
  philosophie: {
    title: (
      <>
        Meine
        <CustomBr byViewport="mobile" /> Philosophie
      </>
    ),
    description: (
      <>
        Klare Finanzen sind das Fundament für erfolgreiche
        <CustomBr byViewport="desktop" /> Unternehmen. Die Treuhandlösungen für KMUs setzen
        <CustomBr byViewport="desktop" /> genau hier an: Prozesse werden effizient gestaltet,
        <CustomBr byViewport="desktop" />
        komplexe Aufgaben vereinfacht und Ergebnisse
        <CustomBr byViewport="desktop" /> transparent gemacht.
        <br />
        <br />
        Automatisierung und Digitalisierung sparen wertvolle
        <CustomBr byViewport="desktop" /> Zeit und Kosten – ohne dabei den persönlichen Kontakt
        <CustomBr byViewport="desktop" /> zu verlieren. Jedes Unternehmen ist einzigartig, deshalb
        <CustomBr byViewport="desktop" />
        sind die Lösungen individuell auf die jeweiligen
        <CustomBr byViewport="desktop" /> Bedürfnisse zugeschnitten.
        <br />
        <br />
        Das Ziel? Ihrem Unternehmen den Rücken freizuhalten,
        <CustomBr byViewport="desktop" /> damit Sie sich auf das Wachstum und Ihre Kernaufgaben
        <CustomBr byViewport="desktop" />
        konzentrieren können – mit Treuhand, die Vertrauen
        <CustomBr byViewport="desktop" /> schafft und Effizienz lebt.
      </>
    ),
    imgs: [
      {
        alt: "Image",
        src: "/imgs/privatkunden/philosophie/img1.png",
      },
      {
        alt: "Image",
        src: "/imgs/privatkunden/philosophie/img2.png",
      },
    ],
    link: {
      href: "/uber-uns",
      title: "Jetzt Beratung buchen",
    },
  },
  accounting: {
    list: [
      {
        title: "Buchhaltung",
        content: (
          <>
            Eine präzise und aktuelle Buchhaltung ist das Rückgrat jedes erfolgreichen Unternehmens.
            Digitale Prozesse sorgen dafür, dass Einnahmen, Ausgaben und Belege effizient erfasst
            werden, sodass stets ein klarer Überblick über die finanzielle Lage besteht. Kein
            Aufwand, kein Chaos – nur strukturierte und verlässliche Ergebnisse.
          </>
        ),
      },
      {
        title: "Jahresabschlüsse",
        content: (
          <>
            Der Jahresabschluss bildet nicht nur die Grundlage für steuerliche Verpflichtungen,
            sondern zeigt auch die wirtschaftliche Stärke des Unternehmens. Mit professioneller
            Sorgfalt werden alle gesetzlichen Anforderungen erfüllt, während Schwachstellen und
            Potenziale aufgezeigt werden, um das Unternehmen optimal aufzustellen.
          </>
        ),
      },
      {
        title: "Steuerberatung",
        content: (
          <>
            Massgeschneiderte Steuerlösungen helfen, die Steuerlast zu minimieren und finanzielle
            Spielräume zu schaffen. Dabei werden branchenspezifische Besonderheiten berücksichtigt,
            um steuerliche Chancen optimal zu nutzen – immer rechtlich einwandfrei und transparent.
          </>
        ),
      },
      {
        title: "MWST-Abrechnungen",
        content: (
          <>
            Die Mehrwertsteuer kann komplex sein, doch mit klaren Prozessen wird sie einfach. Alle
            Abrechnungen werden pünktlich und korrekt eingereicht, damit es keine Unsicherheiten
            oder Verzögerungen gibt. Auch grenzüberschreitende Vorgänge werden rechtssicher betreut.
          </>
        ),
      },
      {
        title: "Lohnadministration",
        content: (
          <>
            Löhne müssen pünktlich und korrekt abgerechnet werden – inklusive
            Sozialversicherungsbeiträge, Quellensteuer und weiterer Verpflichtungen. Die gesamte
            Lohnadministration wird zuverlässig und stressfrei abgewickelt, sodass sich Unternehmen
            auf ihr Kerngeschäft konzentrieren können.
          </>
        ),
      },
      {
        title: "Finanz- und Businessplanung",
        content: (
          <>
            Die Zukunft eines Unternehmens erfordert klare Strategien und fundierte Entscheidungen.
            Eine durchdachte Finanz- und Businessplanung hilft, Ziele zu definieren, Risiken zu
            minimieren und das Wachstum nachhaltig zu sichern.
          </>
        ),
      },
      {
        title: "Firmengründungen",
        content: (
          <>
            Der Weg in die Selbstständigkeit beginnt mit der richtigen Unterstützung. Von der Wahl
            der optimalen Rechtsform bis zur Abwicklung aller Formalitäten wird die Gründung eines
            Unternehmens sicher und effizient begleitet, sodass der Start reibungslos gelingt.
          </>
        ),
      },
      {
        title: "Dokumentenmanagement",
        content: (
          <>
            Zeitfresser wie Papierchaos gehören der Vergangenheit an. Mit einem modernen
            Dokumentenmanagement können Unterlagen sicher online hochgeladen und organisiert werden.
            Das spart Zeit, reduziert Fehler und macht Informationen jederzeit verfügbar.
          </>
        ),
      },
      {
        title: "Beratung für KMUs",
        content: (
          <>
            Jedes KMU hat individuelle Herausforderungen und Ziele. Mit gezielter Beratung werden
            Lösungen entwickelt, die speziell auf die Anforderungen des Unternehmens abgestimmt sind
            – von der Optimierung interner Prozesse bis zur strategischen Planung.
          </>
        ),
      },
    ],
    img: {
      src: "/imgs/unternehmen/accounting/img1.png",
      alt: "Accounting",
    },
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
          href: "#",
          title: "Jetzt Beratung buchen",
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
          href: "#",
          title: "Jetzt Beratung buchen",
        },
      },
    ],
  },
};
