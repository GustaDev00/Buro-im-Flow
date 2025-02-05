import { CustomBr } from "@/components/atoms/custom-br";

export default {
  header: {
    title: (
      <>
        Steuern und Beratung neu
        <CustomBr byViewport="desktop" /> gedacht – modern und
        <CustomBr byViewport="desktop" /> persönlich
      </>
    ),
    description: (
      <>
        Steuererklärungen? Einfach hochladen. Beratung? Vor Ort
        <CustomBr byViewport="desktop" /> oder online, klar verständlich.
      </>
    ),
    img: {
      alt: "imagem 1",
      src: "/imgs/privatkunden/header/bg.png",
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
        Treuhand ist für mich mehr als nur Zahlen. Es geht darum,
        <CustomBr byViewport="desktop" /> Vertrauen zu schaffen, Prozesse zu vereinfachen und
        <CustomBr byViewport="desktop" /> echte Mehrwerte zu liefern. Meine Arbeit basiert auf drei
        <CustomBr byViewport="desktop" />
        Prinzipien: <strong>Effizienz, Transparenz</strong> und{" "}
        <strong>
          persönlicher
          <CustomBr byViewport="desktop" /> Betreuung.
        </strong>
        <br />
        <br />
        Mit modernen, digitalen Lösungen mache ich
        <CustomBr byViewport="desktop" /> Buchhaltung und Steuern so einfach wie möglich. Dabei
        <CustomBr byViewport="desktop" />
        stehe ich Ihnen jederzeit zur Seite – klar, verständlich und
        <CustomBr byViewport="desktop" /> ohne komplizierten Fachjargon. Denn ich glaube, dass
        <CustomBr byViewport="desktop" /> guter Treuhand nicht nur Ergebnisse liefert, sondern auch
        <CustomBr byViewport="desktop" />
        das Leben erleichtert.
        <br />
        <br />
        Mein Ziel: Ihnen den Kopf frei halten, damit Sie sich auf
        <CustomBr byViewport="desktop" /> das Wesentliche konzentrieren können.
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
