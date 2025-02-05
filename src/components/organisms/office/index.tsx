import * as S from "./styles";
import useAnimation from "./animation";

export const Office = () => {
  const { sectionRef } = useAnimation();

  return (
    <S.Office ref={sectionRef}>
      <S.Wrapper>
        <S.Columns>
          <S.ImageTop src="/imgs/home/office/top1.png" alt="Top 1" />
          <S.ImageRectangle src="/imgs/home/office/rectangle.png" alt="Rectangle" />
        </S.Columns>

        <S.Content>
          <S.Title data-fs-animation="title">Wieso Büro im Flow</S.Title>
          <S.Text data-fs-animation="text">
            Weil Ihre Finanzen ein System verdienen, das funktioniert. Effizienz trifft
            Verlässlichkeit. Büro im Flow bringt digitale Prozesse und persönliche Betreuung
            zusammen, um Ihre Finanzen reibungslos zu gestalten. Mit klaren Abläufen, modernsten
            Tools und fundiertem Fachwissen profitieren Sie von weniger Stress, mehr Transparenz und
            Lösungen, die wirklich passen.
          </S.Text>
          <S.Button data-fs-animation="button" href="/kontakt">
            Jetzt Beratung buchen
          </S.Button>
        </S.Content>

        <S.Columns>
          <S.ImageTop2 src="/imgs/home/office/top2.png" alt="Top 2" />
          <S.ImageCircle src="/imgs/home/office/circle.png" alt="Circle" />
        </S.Columns>
      </S.Wrapper>
    </S.Office>
  );
};
