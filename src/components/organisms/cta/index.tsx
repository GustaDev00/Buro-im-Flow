import * as S from "./styles";
import useAnimation from "./animation";

export const Cta = () => {
  const { sectionRef } = useAnimation();

  return (
    <S.Cta ref={sectionRef}>
      <S.Wrapper>
        <S.CircleG>
          <S.CircleM>
            <S.CircleP>
              <S.Chart data-fs-animation="chart" />
            </S.CircleP>
          </S.CircleM>
        </S.CircleG>

        <S.Title data-fs-animation="title">Bereit, den nächsten Schritt zu gehen?</S.Title>

        <S.Text data-fs-animation="text">
          Lassen Sie uns gemeinsam Ihre Finanzen in den Flow bringen. Ob Unternehmen oder
          Privatperson – ich stehe Ihnen mit persönlicher Beratung und klaren Lösungen zur Seite.
        </S.Text>

        <S.Container>
          <S.Button1 data-fs-animation="button1" href="/kontakt">
            Jetzt Kontakt aufnehmen
          </S.Button1>
          <S.Button2 data-fs-animation="button2" href="/kontakt">
            Beratung buchen
          </S.Button2>
        </S.Container>
      </S.Wrapper>
    </S.Cta>
  );
};
