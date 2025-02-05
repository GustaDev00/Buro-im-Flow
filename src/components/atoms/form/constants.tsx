import { CustomBr } from "@/components/atoms/custom-br";

export default {
  contact: {
    title: (
      <>
        Jetzt Kontakt <CustomBr byViewport="mobile" />
        aufnehmen
      </>
    ),
    subtitle: (
      <>
        Wir sind für Sie da – Lassen Sie
        <CustomBr byViewport="mobile" /> uns Ihr Projekt
        <CustomBr byViewport="desktop" /> gemeinsam
        <CustomBr byViewport="mobile" /> besprechen
      </>
    ),

    form: {
      inputs: [
        { label: "Name", type: "text", name: "name", placeholder: "z.B. Jonn Wyss" },
        { label: "Telefonnummer", type: "text", name: "phone", placeholder: "+41 00 000 00 00" },
        { label: "E-Mail Adresse", name: "email", placeholder: "Jhon@gmail.com", type: "email" },
        {
          label: "Ihre Nachricht",
          name: "message",
          placeholder: "Ich hätte gerne eine Offerte bezüglich…",
          type: "textarea",
        },
      ],
      button: "Nachricht senden",
    },
    map: <>Lerchenstrasse 22 8754 Netstal</>,
    content: [
      {
        icon: (
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
        ),
        subtitle: <>Direkter Kontakt</>,
      },
    ],
  },
};
