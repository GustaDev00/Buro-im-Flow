import * as S from "./styles";
import useAnimation from "./animation";
import { CustomBr } from "@/components/atoms/custom-br";

export const Benefits = ({ ...props }) => {
  const list = [
    {
      title: <>Digitale Prozesse</>,
      description: (
        <>
          Effizienz, die Zeit spart und Abläufe
          <CustomBr byViewport="desktop" /> vereinfacht.
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <path
            d="M2.54474 20.4875C1.58534 20.3705 0.712797 21.0535 0.595863 22.0129C0.478929 22.9723 1.16188 23.8448 2.12128 23.9618L2.54474 20.4875ZM10.7944 32.6348C10.9113 33.5942 11.7838 34.2772 12.7432 34.1603C13.7026 34.0433 14.3856 33.1708 14.2687 32.2114L10.7944 32.6348ZM2.85204 15.5166C1.89109 15.4131 1.02825 16.1083 0.924841 17.0693C0.821428 18.0302 1.5166 18.8931 2.47755 18.9965L2.85204 15.5166ZM15.76 32.2789C15.8634 33.2399 16.7263 33.935 17.6872 33.8316C18.6482 33.7282 19.3433 32.8654 19.2399 31.9044L15.76 32.2789ZM2.54328 26.3525C1.58378 26.2364 0.711816 26.9201 0.595686 27.8796C0.479557 28.8391 1.16324 29.711 2.12274 29.8272L2.54328 26.3525ZM4.92902 32.6334C5.04515 33.5929 5.91712 34.2766 6.87661 34.1605C7.83611 34.0444 8.51979 33.1724 8.40366 32.2129L4.92902 32.6334ZM23.3229 30.6732C22.3564 30.6785 21.5772 31.4664 21.5826 32.4328C21.5879 33.3993 22.3757 34.1785 23.3422 34.1732L23.3229 30.6732ZM29.9543 29.6374L28.71 28.4068L29.9543 29.6374ZM32.6665 22.9852H30.9165L30.9166 22.9949L32.6665 22.9852ZM32.6665 11.5278L30.9165 11.5181V11.5278H32.6665ZM29.9543 4.87567L28.71 6.10623V6.10623L29.9543 4.87567ZM23.3325 2.08984L23.3422 0.339844H23.3325V2.08984ZM11.6672 2.08984V0.339817L11.6575 0.33987L11.6672 2.08984ZM5.0455 4.87567L6.28978 6.10623L5.0455 4.87567ZM0.583245 11.5376C0.588615 12.504 1.37646 13.2832 2.34294 13.2778C3.30942 13.2724 4.08856 12.4846 4.08319 11.5181L0.583245 11.5376ZM2.12128 23.9618C6.66235 24.5152 10.2409 28.0938 10.7944 32.6348L14.2687 32.2114C13.5205 26.073 8.68316 21.2356 2.54474 20.4875L2.12128 23.9618ZM2.47755 18.9965C9.47754 19.7498 15.0067 25.2789 15.76 32.2789L19.2399 31.9044C18.3105 23.2679 11.4886 16.446 2.85204 15.5166L2.47755 18.9965ZM2.12274 29.8272C3.59263 30.0051 4.75112 31.1636 4.92902 32.6334L8.40366 32.2129C8.03214 29.1433 5.61287 26.724 2.54328 26.3525L2.12274 29.8272ZM23.3422 34.1732C26.2957 34.1568 29.1217 32.9679 31.1985 30.8679L28.71 28.4068C27.2859 29.8468 25.3481 30.662 23.3229 30.6732L23.3422 34.1732ZM31.1985 30.8679C33.2754 28.7679 34.4329 25.9289 34.4165 22.9755L30.9166 22.9949C30.9278 25.0201 30.1341 26.9668 28.71 28.4068L31.1985 30.8679ZM34.4165 22.9852V11.5278H30.9165V22.9852H34.4165ZM34.4165 11.5376C34.4329 8.5841 33.2754 5.74509 31.1985 3.6451L28.71 6.10623C30.1341 7.5462 30.9278 9.49292 30.9166 11.5181L34.4165 11.5376ZM31.1985 3.64511C29.1217 1.54512 26.2957 0.356188 23.3422 0.33987L23.3229 3.83982C25.3481 3.85101 27.2859 4.66626 28.71 6.10623L31.1985 3.64511ZM23.3325 0.339844H11.6672V3.83984H23.3325V0.339844ZM11.6575 0.33987C8.70408 0.356188 5.87807 1.54512 3.80123 3.6451L6.28978 6.10623C7.71388 4.66626 9.65168 3.85101 11.6769 3.83982L11.6575 0.33987ZM3.80123 3.6451C1.72438 5.74509 0.566837 8.5841 0.583245 11.5376L4.08319 11.5181C4.07194 9.49292 4.86567 7.5462 6.28978 6.10623L3.80123 3.6451Z"
            fill="#405E20"
          />
        </svg>
      ),
    },
    {
      title: <>Hohe Kompetenz</>,
      description: (
        <>
          Präzision und Expertise auf höchstem
          <CustomBr byViewport="desktop" /> Niveau.
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="37"
          viewBox="0 0 47 37"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.16699 6.40431V30.108C2.16699 32.7263 4.28949 34.8488 6.90773 34.8488H40.0929C42.7112 34.8488 44.8337 32.7263 44.8337 30.108V6.40431C44.8337 3.78608 42.7112 1.66357 40.0929 1.66357H6.90773C4.28949 1.66357 2.16699 3.78608 2.16699 6.40431Z"
            stroke="#405E20"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.6113 13.5153H37.7224"
            stroke="#405E20"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M30.6113 20.6266H37.7224"
            stroke="#405E20"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.1299 13.5156C21.1299 16.1339 19.0074 18.2564 16.3892 18.2564C13.7709 18.2564 11.6484 16.1339 11.6484 13.5156C11.6484 10.8974 13.7709 8.7749 16.3892 8.7749C17.6465 8.7749 18.8523 9.27437 19.7414 10.1634C20.6304 11.0525 21.1299 12.2583 21.1299 13.5156Z"
            stroke="#405E20"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.90813 27.7377C13.5049 20.3018 21.2536 22.639 25.8711 27.7377"
            stroke="#405E20"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: <>Rundum-Service</>,
      description: (
        <>
          Persönliche Betreuung, die Ihnen
          <CustomBr byViewport="desktop" /> alles aus einer Hand bietet.
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="43"
          viewBox="0 0 35 43"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.01371 38.2593L3.05175 40.7866C2.85889 40.8826 2.62995 40.8712 2.44759 40.7565C2.26523 40.6418 2.15579 40.4404 2.15877 40.225V4.48596C2.12899 3.03529 3.28036 1.8349 4.73101 1.8042H30.4731C31.9238 1.8349 33.0751 3.03529 33.0453 4.48596V40.225C33.0483 40.4404 32.9389 40.6418 32.7565 40.7565C32.5742 40.8712 32.3452 40.8826 32.1524 40.7866L27.1904 38.2593C26.9928 38.1584 26.7559 38.1735 26.5726 38.2986L22.5795 41.0113C22.3727 41.1518 22.101 41.1518 21.8943 41.0113L17.9461 38.3295C17.7393 38.1889 17.4676 38.1889 17.2609 38.3295L13.3126 41.0113C13.1059 41.1518 12.8342 41.1518 12.6275 41.0113L8.6315 38.3098C8.45038 38.1811 8.21335 38.1617 8.01371 38.2593Z"
            stroke="#405E20"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5801 25.8274C9.88972 25.8274 9.33008 26.387 9.33008 27.0774C9.33008 27.7677 9.88972 28.3274 10.5801 28.3274V25.8274ZM24.3792 28.3274C25.0696 28.3274 25.6292 27.7677 25.6292 27.0774C25.6292 26.387 25.0696 25.8274 24.3792 25.8274V28.3274ZM12.8684 16.3652C12.3803 15.877 11.5888 15.877 11.1007 16.3652C10.6125 16.8533 10.6125 17.6448 11.1007 18.1329L12.8684 16.3652ZM14.7927 20.0572L13.9088 20.9411C14.397 21.4292 15.1884 21.4292 15.6766 20.9411L14.7927 20.0572ZM24.1009 12.5167C24.5891 12.0285 24.5891 11.2371 24.1009 10.7489C23.6128 10.2608 22.8213 10.2608 22.3332 10.7489L24.1009 12.5167ZM10.5801 28.3274H24.3792V25.8274H10.5801V28.3274ZM11.1007 18.1329L13.9088 20.9411L15.6766 19.1733L12.8684 16.3652L11.1007 18.1329ZM15.6766 20.9411L24.1009 12.5167L22.3332 10.7489L13.9088 19.1733L15.6766 20.9411Z"
            fill="#405E20"
          />
        </svg>
      ),
    },
  ];
  const { sectionRef } = useAnimation();

  return (
    <S.Benefits ref={sectionRef} {...props}>
      <S.Wrapper>
        <S.Content>
          <S.Title data-fs-animation="title">
            Entdecken Sie einige der
            <CustomBr byViewport="desktop" /> Vorteile meines Services
          </S.Title>
          <S.List items={list} data-fs-animation="list-item" />
        </S.Content>
        <S.Container>
          <S.Grid data-fs-animation="grid" />
        </S.Container>
      </S.Wrapper>
    </S.Benefits>
  );
};
