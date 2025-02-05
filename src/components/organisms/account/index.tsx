import * as S from "./styles";
import useAnimation from "./animation";
import { CustomBr } from "@/components/atoms/custom-br";

export const Account = () => {
  const { sectionRef } = useAnimation();

  return (
    <S.Account ref={sectionRef}>
      <S.Wrapper>
        <S.Content>
          <S.Title>Run My Accounts – Ihre Buchhaltung neu gedacht</S.Title>
          <S.Texts>
            <S.Text>
              Effiziente Buchhaltung beginnt mit den richtigen Tools. Mit Run My
              <CustomBr byViewport="desktop" /> Accounts wird die Buchhaltung für Unternehmen
              vollständig
              <CustomBr byViewport="desktop" /> digitalisiert und automatisiert. Rechnungen
              hochladen, Zahlungen
              <CustomBr byViewport="desktop" /> überwachen und Finanzdaten in Echtzeit einsehen –
              alles passiert
              <CustomBr byViewport="desktop" /> schnell, sicher und papierlos.
            </S.Text>
            <S.Text>
              Durch die Zusammenarbeit mit Run My Accounts wird Ihr
              <CustomBr byViewport="desktop" /> Buchhaltungsaufwand auf ein Minimum reduziert,
              sodass
              <CustomBr byViewport="desktop" /> Sie sich auf das konzentrieren können, was wirklich
              zählt: Ihr
              <CustomBr byViewport="desktop" /> Geschäft.
            </S.Text>
          </S.Texts>
        </S.Content>
        <S.Container>
          <S.Video>
            <S.Subtitle>
              👉 Wie funktioniert das? Schauen Sie sich das Video an
              <CustomBr byViewport="desktop" /> und erleben Sie, wie einfach Buchhaltung sein kann:
            </S.Subtitle>
            <S.Iframe
              src="https://www.youtube.com/embed/YEmI2MDpasE?si=3omL8ZsD5roMVHgQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              frameBorder={0}
            />
          </S.Video>
          <S.Card>
            <S.CardTitle>
              Vorteile von Run My Accounts
              <CustomBr byViewport="desktop" /> für Ihr Unternehmen:
            </S.CardTitle>
            <S.CardList>
              <S.CardItem>Automatisierte Verarbeitung von Belegen und Rechnungen</S.CardItem>
              <S.CardItem>Zugriff auf tagesaktuelle Finanzdaten</S.CardItem>
              <S.CardItem>Jederzeit digitaler Zugriff auf alle Belege mit Volltextsuche</S.CardItem>
              <S.CardItem>Effizienzsteigerung und weniger Verwaltungsaufwand</S.CardItem>
            </S.CardList>
            <S.Button href="#">Jetzt Beratung buchen</S.Button>
          </S.Card>
        </S.Container>
      </S.Wrapper>
    </S.Account>
  );
};
