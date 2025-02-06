import * as S from "./styles";
import useAnimation from "./animation";
import { CustomBr } from "@/components/atoms/custom-br";

export const FaceBehind = () => {
  const { sectionRef } = useAnimation();

  return (
    <S.FaceBehind ref={sectionRef}>
      <S.Bg>
        <S.Image src="/imgs/uber-uns/face-behind/bg.png" alt="face behind" />
        <S.Title data-fs-animation="title">
          Das
          <CustomBr byViewport="mobile" /> Gesicht
          <CustomBr byViewport="mobile" /> hinter
          <CustomBr byViewport="desktop" /> Büro
          <CustomBr byViewport="mobile" /> im Flow
        </S.Title>
      </S.Bg>

      <S.Wrapper>
        <S.Container>
          <S.Content data-fs-animation="content">
            Hallo, ich bin <strong>Larissa Wechsler</strong>, Geschäftsinhaberin von Büro im Flow
            und Ihre Partnerin für alle Treuhand-Dienstleistungen. Mit jahrelanger Erfahrung und
            einem klaren Fokus auf Effizienz und Präzision unterstütze ich KMUs,
            Selbständigerwerbende und Privatpersonen bei allen Fragen rund um Buchhaltung, Steuern
            und Finanzplanung.
          </S.Content>
          <S.User>
            <S.Data>
              <S.Info>
                <S.BusinessOwner>
                  <S.BusinessIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M19.791 9.37484L21.0931 6.51025L23.9577 5.20817L21.0931 3.90609L19.791 1.0415L18.4889 3.90609L15.6243 5.20817L18.4889 6.51025L19.791 9.37484ZM11.9785 9.89567L9.37435 4.1665L6.77018 9.89567L1.04102 12.4998L6.77018 15.104L9.37435 20.8332L11.9785 15.104L17.7077 12.4998L11.9785 9.89567ZM19.791 15.6248L18.4889 18.4894L15.6243 19.7915L18.4889 21.0936L19.791 23.9582L21.0931 21.0936L23.9577 19.7915L21.0931 18.4894L19.791 15.6248Z"
                        fill="#405E20"
                      />
                    </svg>
                  </S.BusinessIcon>
                  <S.BusinnessTitle>Geschäftsinhaberin</S.BusinnessTitle>
                </S.BusinessOwner>
                <S.Name>Larissa Wechsler</S.Name>
              </S.Info>
              <S.ImageUser
                src="/imgs/uber-uns/face-behind/lari.png"
                alt="Larissa Wechsler"
                data-fs-animation="image"
              />
            </S.Data>
            <S.Card>
              <S.Qualifications>
                <S.QualificationsTitle>
                  <S.QualificationsIcons>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="55"
                      viewBox="0 0 50 55"
                      fill="none"
                    >
                      <path
                        d="M39.584 20.6248L42.1882 14.3228L47.9173 11.4582L42.1882 8.59359L39.584 2.2915L36.9798 8.59359L31.2507 11.4582L36.9798 14.3228L39.584 20.6248ZM23.959 21.7707L18.7507 9.1665L13.5423 21.7707L2.08398 27.4998L13.5423 33.229L18.7507 45.8332L23.959 33.229L35.4173 27.4998L23.959 21.7707ZM39.584 34.3748L36.9798 40.6769L31.2507 43.5415L36.9798 46.4061L39.584 52.7082L42.1882 46.4061L47.9173 43.5415L42.1882 40.6769L39.584 34.3748Z"
                        fill="#405E20"
                      />
                    </svg>
                  </S.QualificationsIcons>
                  <S.QualificationsText>Meine Qualifikationen</S.QualificationsText>
                </S.QualificationsTitle>
              </S.Qualifications>
              <S.List>
                <S.Item>
                  Fachfrau im Finanz- und Rechnungswesen mit eidgenössischem Fachausweis
                </S.Item>
                <S.StrongItem>Zertifizierte Steuerspezialistin für:</S.StrongItem>
                <S.ListOrder>
                  <S.SubItem>Selbständigerwerbende</S.SubItem>
                  <S.SubItem>Juristische Personen</S.SubItem>
                  <S.SubItem>Unselbständig Erwerbende</S.SubItem>
                </S.ListOrder>
              </S.List>
              <S.Text>
                Regelmässige Weiterbildungen gehören für mich dazu, damit ich Sie immer nach den
                neuesten Standards unterstützen kann.
              </S.Text>
            </S.Card>
          </S.User>
        </S.Container>
      </S.Wrapper>
    </S.FaceBehind>
  );
};
