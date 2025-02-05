import { sendMail } from "@/api/send-mail";
import * as S from "./styles";
import C from "./constants";
import { validations } from "./validations";
import { SendMailRequest } from "@/api/send-mail/request";
import { useFormik } from "formik";
import { useState } from "react";
import useAnimation from "./animation";

export const Form = () => {
  const { sectionRef } = useAnimation();
  const { contact } = C;
  const [isModalOpen, setIsModalOpen] = useState({
    isActive: false,
    send: true,
    title: <>Nachricht gesendet</>,
    text: (
      <>
        Ihre Nachricht wurde erfolgreich gesendet. Unser Team <br /> wird Ihnen in Kürze per E-Mail
        antworten.
      </>
    ),
  });
  const [loading, setLoading] = useState(false);

  const closeModal = (send?: boolean) => {
    setIsModalOpen({
      ...isModalOpen,
      isActive: false,
      send: send ?? true,
    });
  };

  const openModal = (send: boolean) => {
    setIsModalOpen({
      ...isModalOpen,
      isActive: true,
      send,
      title: send ? (
        <>Nachricht gesendet</>
      ) : (
        <>
          Füllen Sie alle Felder <br />
          korrekt aus
        </>
      ),
    });
  };

  const formik = useFormik<SendMailRequest>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validations,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await sendMail(values);
        openModal(true);
        setLoading(false);

        setTimeout(() => {
          closeModal(true);
        }, 4000);

        formik.resetForm();
      } catch {
        openModal(false);
        setLoading(false);

        setTimeout(() => {
          closeModal(false);
        }, 4000);
      }
    },
  });

  return (
    <>
      <S.Modal $active={isModalOpen.isActive} $error={isModalOpen.send}>
        <S.ModalContent>
          <S.WrapperModal>
            <S.IconModal />
            <S.TitleModal>{isModalOpen.title}</S.TitleModal>
            <S.TextModal>{isModalOpen.text}</S.TextModal>
            <S.ButtonModal onClick={() => closeModal()}>OK</S.ButtonModal>
          </S.WrapperModal>
        </S.ModalContent>
        <S.Blackout onClick={() => closeModal()} data-timeline="blackout" />
      </S.Modal>

      <S.Contact ref={sectionRef} data-timeline="contact">
        <S.Wrapper data-timeline="wrapper">
          <S.Container data-timeline="container">
            <S.Form onSubmit={formik.handleSubmit} data-timeline="form">
              {contact.form.inputs.map((input, index) => (
                <S.Label
                  key={index}
                  $gridName={input.name}
                  $error={Boolean(
                    formik.touched[input.name as keyof SendMailRequest] &&
                      formik.errors[input.name as keyof SendMailRequest],
                  )}
                  data-timeline={`label-${input.name}`}
                >
                  <S.TextInput data-timeline={`text-input-${input.name}`}>
                    {input.label}
                  </S.TextInput>
                  {input.type === "textarea" ? (
                    <S.TextArea
                      {...formik.getFieldProps(input.name)}
                      placeholder={input.placeholder}
                      name={input.name}
                      data-timeline={`textarea-${input.name}`}
                    />
                  ) : (
                    <S.Input
                      {...formik.getFieldProps(input.name)}
                      type={input.type}
                      name={input.name}
                      placeholder={input.placeholder}
                      data-timeline={`input-${input.name}`}
                    />
                  )}
                </S.Label>
              ))}
              <S.Button type="submit" data-timeline="submit-button">
                {contact.form.button} {loading && "..."}
              </S.Button>
            </S.Form>
            <S.Content data-timeline={`content`}>
              <S.IconContent data-timeline={`icon-content`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M2.7354 21.5827C1.776 21.4657 0.903458 22.1487 0.786524 23.1081C0.66959 24.0675 1.35254 24.94 2.31194 25.0569L2.7354 21.5827ZM11.3196 34.0646C11.4365 35.024 12.3091 35.707 13.2685 35.59C14.2279 35.4731 14.9108 34.6006 14.7939 33.6412L11.3196 34.0646ZM3.05329 16.4487C2.09234 16.3453 1.2295 17.0405 1.12609 18.0014C1.02268 18.9624 1.71785 19.8252 2.6788 19.9286L3.05329 16.4487ZM16.4479 33.6978C16.5514 34.6587 17.4142 35.3539 18.3751 35.2505C19.3361 35.1471 20.0313 34.2842 19.9279 33.3233L16.4479 33.6978ZM2.73394 27.6401C1.77444 27.5239 0.902476 28.2076 0.786347 29.1671C0.670218 30.1266 1.3539 30.9986 2.3134 31.1147L2.73394 27.6401ZM5.26184 34.0632C5.37797 35.0227 6.24994 35.7063 7.20943 35.5902C8.16893 35.4741 8.85261 34.6021 8.73649 33.6426L5.26184 34.0632ZM24.2022 32.1029C23.2357 32.1082 22.4565 32.8961 22.4619 33.8625C22.4672 34.829 23.255 35.6082 24.2215 35.6029L24.2022 32.1029ZM31.0508 30.9757L29.8065 29.7451L31.0508 30.9757ZM33.8521 24.1053H32.102L32.1021 24.115L33.8521 24.1053ZM33.8521 12.272L32.1021 12.2623V12.272H33.8521ZM31.0508 5.40163L29.8065 6.63219L29.8065 6.63219L31.0508 5.40163ZM24.2118 2.52441L24.2215 0.774414H24.2118V2.52441ZM12.1638 2.52441V0.774387L12.1541 0.774441L12.1638 2.52441ZM5.32485 5.40163L6.56912 6.63219H6.56913L5.32485 5.40163ZM0.773614 12.2818C0.778984 13.2482 1.56683 14.0274 2.53331 14.022C3.49979 14.0166 4.27893 13.2288 4.27356 12.2623L0.773614 12.2818ZM2.31194 25.0569C7.02819 25.6318 10.7448 29.3484 11.3196 34.0646L14.7939 33.6412C14.0244 27.3275 9.049 22.3522 2.7354 21.5827L2.31194 25.0569ZM2.6788 19.9286C9.93528 20.7095 15.667 26.4413 16.4479 33.6978L19.9279 33.3233C18.9708 24.4302 11.9464 17.4057 3.05329 16.4487L2.6788 19.9286ZM2.3134 31.1147C3.85775 31.3016 5.07493 32.5188 5.26184 34.0632L8.73649 33.6426C8.35596 30.4986 5.87799 28.0206 2.73394 27.6401L2.3134 31.1147ZM24.2215 35.6029C27.2566 35.5861 30.1608 34.3643 32.2951 32.2062L29.8065 29.7451C28.325 31.2431 26.309 32.0913 24.2022 32.1029L24.2215 35.6029ZM32.2951 32.2062C34.4293 30.0482 35.6189 27.1307 35.602 24.0955L32.1021 24.115C32.1138 26.2218 31.288 28.2471 29.8065 29.7451L32.2951 32.2062ZM35.6021 24.1053V12.272H32.1021V24.1053H35.6021ZM35.602 12.2818C35.6189 9.24663 34.4293 6.32912 32.2951 4.17107L29.8065 6.63219C31.288 8.13023 32.1138 10.1555 32.1021 12.2623L35.602 12.2818ZM32.2951 4.17107C30.1608 2.01302 27.2566 0.791209 24.2215 0.774441L24.2022 4.27439C26.309 4.28603 28.325 5.13416 29.8065 6.63219L32.2951 4.17107ZM24.2118 0.774414H12.1638V4.27441H24.2118V0.774414ZM12.1541 0.774441C9.119 0.791209 6.21485 2.01302 4.08058 4.17107L6.56913 6.63219C8.05065 5.13416 10.0666 4.28603 12.1735 4.27439L12.1541 0.774441ZM4.08058 4.17107C1.94631 6.32912 0.756753 9.24663 0.773614 12.2818L4.27356 12.2623C4.26186 10.1555 5.0876 8.13023 6.56912 6.63219L4.08058 4.17107Z"
                    fill="#405E20"
                  />
                </svg>
              </S.IconContent>
              <S.SubTitle data-timeline={`subtitle`}>Direkter Kontakt</S.SubTitle>
              <S.List $line={true} data-timeline={`list-phones`}>
                <S.Item data-timeline={`list-item-phone`}>
                  <S.Link
                    href="tel:+41799346783"
                    title="Phone: +41 79 934 67 83"
                    data-timeline={`phone-link`}
                  >
                    Phone: <S.Span data-timeline={`phone-content`}>+41 79 934 67 83</S.Span>
                  </S.Link>
                </S.Item>
              </S.List>
            </S.Content>

            <S.Content data-timeline={`content`}>
              <S.IconContent data-timeline={`icon-content`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="30"
                  viewBox="0 0 49 30"
                  fill="none"
                >
                  <path
                    d="M34.0585 0.851318C33.092 0.851318 32.3085 1.63482 32.3085 2.60132C32.3085 3.56782 33.092 4.35132 34.0585 4.35132V0.851318ZM46.7333 4.35132C47.6998 4.35132 48.4833 3.56782 48.4833 2.60132C48.4833 1.63482 47.6998 0.851318 46.7333 0.851318V4.35132ZM48.4829 2.6015C48.4829 1.635 47.6994 0.851495 46.7329 0.851495C45.7664 0.851495 44.9829 1.635 44.9829 2.6015H48.4829ZM44.9829 15.2763C44.9829 16.2428 45.7664 17.0263 46.7329 17.0263C47.6994 17.0263 48.4829 16.2428 48.4829 15.2763H44.9829ZM47.9704 3.83893C48.6538 3.15551 48.6538 2.04748 47.9704 1.36406C47.287 0.680641 46.1789 0.680641 45.4955 1.36406L47.9704 3.83893ZM24.552 24.7824L23.3146 26.0199C23.998 26.7033 25.106 26.7033 25.7894 26.0199L24.552 24.7824ZM15.0459 15.2763L16.2833 14.0389C15.5999 13.3555 14.4919 13.3555 13.8085 14.0389L15.0459 15.2763ZM1.13366 26.7137C0.450239 27.3971 0.450239 28.5051 1.13366 29.1886C1.81707 29.872 2.92511 29.872 3.60853 29.1886L1.13366 26.7137ZM34.0585 4.35132H46.7333V0.851318H34.0585V4.35132ZM44.9829 2.6015V15.2763H48.4829V2.6015H44.9829ZM45.4955 1.36406L23.3146 23.545L25.7894 26.0199L47.9704 3.83893L45.4955 1.36406ZM25.7894 23.545L16.2833 14.0389L13.8085 16.5137L23.3146 26.0199L25.7894 23.545ZM13.8085 14.0389L1.13366 26.7137L3.60853 29.1886L16.2833 16.5137L13.8085 14.0389Z"
                    fill="#405E20"
                  />
                </svg>
              </S.IconContent>
              <S.SubTitle data-timeline={`subtitle`}>Standort</S.SubTitle>
              <S.List $line={true} data-timeline={`list-phones`}>
                <S.Item data-timeline={`list-item-phone`}>
                  <S.Link
                    href="https://maps.app.goo.gl/ze38X24fMi9fY3WW6"
                    title="Büro im Flow maps"
                    data-timeline={`phone-link`}
                  >
                    <S.Span data-timeline={`phone-content`}>
                      Büro im Flow
                      <br /> c/o Buchhaltung WECHSLER
                      <br /> Oberlehn 1<br /> 6222 Gunzwil
                    </S.Span>
                  </S.Link>
                </S.Item>
              </S.List>
            </S.Content>
          </S.Container>
        </S.Wrapper>
      </S.Contact>
    </>
  );
};
