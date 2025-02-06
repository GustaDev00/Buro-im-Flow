import * as S from "./styles";
import useAnimation from "./animation";
import { ResponsiveElement } from "@/utils/responsive-element";
import { useState } from "react";

export const Offer = () => {
  const { sectionRef } = useAnimation();
  const [active, setActive] = useState(0);
  const services = [
    {
      title: "Steuern",
      description:
        "Steuern müssen nicht kompliziert sein. Die Steuererklärung wird vollständig übernommen – von der Erfassung aller notwendigen Unterlagen bis zur fristgerechten Einreichung. Dabei wird sichergestellt, dass alle Abzüge und steuerlichen Vorteile berücksichtigt werden. Langfristige Strategien zur Steueroptimierung schaffen zusätzliche Entlastung, damit keine Möglichkeit ungenutzt bleibt.",
      button: "Beratung buchen",
      image: "/imgs/privatkunden/offer/card-1.png",
    },
    {
      title: "Finanzplanung",
      description:
        "Eine gute Finanzplanung ist die Basis für Sicherheit und Gelassenheit. Ob es um die Optimierung von Einnahmen und Ausgaben oder um die Planung grösserer Anschaffungen geht – individuelle Konzepte sorgen für Struktur und Klarheit in der finanziellen Zukunft. Alle Pläne werden verständlich aufbereitet und auf persönliche Ziele abgestimmt.",
      button: "Beratung buchen",
      image: "/imgs/privatkunden/offer/card-2.png",
    },
    {
      title: "Pensionsplanung",
      description:
        "Der Ruhestand beginnt mit einer soliden Vorsorge. Die Pensionsplanung berücksichtigt sowohl die aktuelle finanzielle Situation als auch künftige Bedürfnisse. Ziel ist es, eine langfristige Absicherung zu schaffen und dabei alle Möglichkeiten, wie steuerliche Vorteile oder staatliche Förderungen, optimal zu nutzen.",
      button: "Beratung buchen",
      image: "/imgs/privatkunden/offer/card-3.png",
    },
    {
      title: "Dokumentenmanagement",
      description:
        "Papierlos und stressfrei: Mit einem digitalen Dokumentenmanagement können alle relevanten Unterlagen sicher hochgeladen und verwaltet werden. Der gesamte Prozess wird transparent gestaltet, sodass jederzeit Zugriff auf wichtige Dokumente besteht. Kein Papierchaos, sondern einfache und schnelle Lösungen.",
      button: "Beratung buchen",
      image: "/imgs/privatkunden/offer/card-4.png",
    },
  ];

  return (
    <S.Offer ref={sectionRef}>
      <S.Wrapper>
        <S.Title data-fs-animation="title">Was ich anbieten</S.Title>
        <S.Container>
          <ResponsiveElement
            breakpoints={{
              isMobileOrTabletVertical: (
                <>
                  {services.map(({ title, description }, index) => (
                    <S.Content
                      key={index}
                      $active={active === index}
                      onClick={() => setActive(index)}
                      data-fs-animation="item"
                    >
                      <S.Bg src={`/imgs/privatkunden/offer/card-${index + 1}.png`} alt="offer-bg" />
                      <S.Info>
                        <S.Subtitle>{title}</S.Subtitle>
                        <S.Text>{description}</S.Text>
                        <S.button href="/kontakt" data-fs-animation="button">
                          Jetzt Beratung buchen
                        </S.button>
                      </S.Info>
                    </S.Content>
                  ))}
                </>
              ),
            }}
            content={services.map(({ title, description }, index) => (
              <S.Content
                key={index}
                $active={active === index}
                onClick={() => setActive(index)}
                data-fs-animation="item"
              >
                <S.Bg src={`/imgs/privatkunden/offer/card-${index + 1}.png`} alt="offer-bg" />
                <S.Info>
                  <S.Subtitle>{title}</S.Subtitle>
                  <S.Text>{description}</S.Text>
                  <S.button href="/kontakt" data-fs-animation="button">
                    Jetzt Beratung buchen
                  </S.button>
                </S.Info>
              </S.Content>
            ))}
          />
        </S.Container>
      </S.Wrapper>
    </S.Offer>
  );
};
