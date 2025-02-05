import * as S from "./styles";
import useAnimation from "./animation";
import { CustomBr } from "@/components/atoms/custom-br";

export const Benefits = () => {
  const list = [
    {
      title: <>Persönliche Betreuung</>,
      description: (
        <>
          Privatpersonen profitieren von einer direkten Zusammenarbeit ohne unnötige
          <CustomBr byViewport="desktop" /> Bürokratie oder Weiterleitungen. Jede Situation wird
          individuell betrachtet, sodass
          <CustomBr byViewport="desktop" /> massgeschneiderte Lösungen entstehen – mit einem klaren
          Fokus auf Ihre
          <CustomBr byViewport="desktop" /> Bedürfnisse.
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="51"
          viewBox="0 0 44 51"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.05 32.2246H13.9495C9.21084 32.4598 5.01257 35.3543 3.10754 39.6996C0.809788 44.2106 5.39554 48.4746 10.7288 48.4746H33.2708C38.6073 48.4746 43.193 44.2106 40.892 39.6996C38.987 35.3543 34.7887 32.4598 30.05 32.2246Z"
            stroke="#405E20"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.75 12.7246C31.75 18.1094 27.3848 22.4746 22 22.4746C16.6152 22.4746 12.25 18.1094 12.25 12.7246C12.25 7.33983 16.6152 2.97461 22 2.97461C24.5859 2.97461 27.0658 4.00184 28.8943 5.83032C30.7228 7.6588 31.75 10.1387 31.75 12.7246Z"
            stroke="#405E20"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: <>Zeit- und Kostenersparnis</>,
      description: (
        <>
          Eine schlanke Geschäftsstruktur und moderne Tools Tools reduzieren den
          <CustomBr byViewport="desktop" /> Aufwand erheblich – sowohl für die Treuhand als auch für
          die Kunden. Das
          <CustomBr byViewport="desktop" /> bedeutet weniger Arbeitszeit und somit geringere Kosten,
          ohne Kompromisse
          <CustomBr byViewport="desktop" /> bei der Qualität.
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="48"
          viewBox="0 0 41 48"
          fill="none"
        >
          <path
            d="M39.25 47.2871C40.2165 47.2871 41 46.5036 41 45.5371C41 44.5706 40.2165 43.7871 39.25 43.7871V47.2871ZM1.75 43.7871C0.783502 43.7871 0 44.5706 0 45.5371C0 46.5036 0.783502 47.2871 1.75 47.2871V43.7871ZM5.35598 45.5369C5.35598 46.5034 6.13948 47.2869 7.10598 47.2869C8.07248 47.2869 8.85598 46.5034 8.85598 45.5369H5.35598ZM7.10598 35.9682H8.85598C8.85598 35.9442 8.85549 35.9202 8.8545 35.8962L7.10598 35.9682ZM10.231 30.2338L9.43983 28.6728C9.40724 28.6894 9.37517 28.7069 9.34368 28.7254L10.231 30.2338ZM17.0872 26.7588L17.8784 28.3198C17.8828 28.3175 17.8872 28.3153 17.8916 28.313L17.0872 26.7588ZM23.9154 26.7588L23.111 28.313C23.1157 28.3154 23.1204 28.3178 23.125 28.3202L23.9154 26.7588ZM30.7622 30.2244L31.6495 28.716C31.6178 28.6974 31.5854 28.6797 31.5525 28.663L30.7622 30.2244ZM33.8872 35.9588L32.1387 35.8868C32.1377 35.9108 32.1372 35.9348 32.1372 35.9588H33.8872ZM32.1372 45.5369C32.1372 46.5034 32.9207 47.2869 33.8872 47.2869C34.8537 47.2869 35.6372 46.5034 35.6372 45.5369H32.1372ZM35.6378 1.78711C35.6378 0.820611 34.8543 0.0371094 33.8878 0.0371094C32.9213 0.0371094 32.1378 0.820611 32.1378 1.78711H35.6378ZM33.8878 12.7246H32.1378C32.1378 12.7486 32.1383 12.7726 32.1393 12.7966L33.8878 12.7246ZM30.7628 18.459L31.554 20.0199C31.5866 20.0034 31.6186 19.9859 31.6501 19.9674L30.7628 18.459ZM23.9128 21.9309L23.1217 20.3699C23.1173 20.3721 23.1129 20.3744 23.1085 20.3766L23.9128 21.9309ZM17.0847 21.9309L17.889 20.3766C17.8847 20.3744 17.8804 20.3722 17.8761 20.3701L17.0847 21.9309ZM10.2378 18.459L9.35051 19.9674C9.38191 19.9858 9.41388 20.0033 9.44637 20.0198L10.2378 18.459ZM7.11281 12.7246L8.86133 12.7966C8.86232 12.7726 8.86281 12.7486 8.86281 12.7246H7.11281ZM8.86281 1.78711C8.86281 0.820611 8.07931 0.0371094 7.11281 0.0371094C6.14632 0.0371094 5.36281 0.820611 5.36281 1.78711H8.86281ZM33.8965 0.0371094C32.93 0.0371094 32.1465 0.820611 32.1465 1.78711C32.1465 2.75361 32.93 3.53711 33.8965 3.53711V0.0371094ZM39.2496 3.53711C40.2161 3.53711 40.9996 2.75361 40.9996 1.78711C40.9996 0.820611 40.2161 0.0371094 39.2496 0.0371094V3.53711ZM33.8937 3.53711C34.8602 3.53711 35.6437 2.75361 35.6437 1.78711C35.6437 0.820611 34.8602 0.0371094 33.8937 0.0371094V3.53711ZM7.10625 0.0371094C6.13975 0.0371094 5.35625 0.820611 5.35625 1.78711C5.35625 2.75361 6.13975 3.53711 7.10625 3.53711V0.0371094ZM7.10625 3.53711C8.07275 3.53711 8.85625 2.75361 8.85625 1.78711C8.85625 0.820611 8.07275 0.0371094 7.10625 0.0371094V3.53711ZM1.75 0.0371094C0.783502 0.0371094 0 0.820611 0 1.78711C0 2.75361 0.783502 3.53711 1.75 3.53711V0.0371094ZM16.0256 12.7756C15.1908 12.2885 14.1193 12.5704 13.6322 13.4052C13.1452 14.24 13.4271 15.3116 14.2619 15.7987L16.0256 12.7756ZM20.5 17.4121L19.6181 18.9237C20.1631 19.2416 20.8369 19.2416 21.3819 18.9237L20.5 17.4121ZM26.7381 15.7987C27.5729 15.3116 27.8549 14.24 27.3678 13.4052C26.8807 12.5704 25.8092 12.2885 24.9744 12.7756L26.7381 15.7987ZM39.25 43.7871H1.75V47.2871H39.25V43.7871ZM8.85598 45.5369V35.9682H5.35598V45.5369H8.85598ZM8.8545 35.8962C8.78468 34.1999 9.65492 32.603 11.1183 31.7422L9.34368 28.7254C6.76689 30.2412 5.23452 33.0531 5.35746 36.0401L8.8545 35.8962ZM11.0221 31.7948L17.8784 28.3198L16.2961 25.1978L9.43983 28.6728L11.0221 31.7948ZM17.8916 28.313C19.5283 27.466 21.4743 27.466 23.111 28.313L24.7197 25.2046C22.0741 23.8354 18.9285 23.8354 16.2829 25.2046L17.8916 28.313ZM23.125 28.3202L29.9719 31.7858L31.5525 28.663L24.7057 25.1974L23.125 28.3202ZM29.8749 31.7328C31.3383 32.5936 32.2085 34.1905 32.1387 35.8868L35.6357 36.0308C35.7587 33.0437 34.2263 30.2318 31.6495 28.716L29.8749 31.7328ZM32.1372 35.9588V45.5369H35.6372V35.9588H32.1372ZM32.1378 1.78711V12.7246H35.6378V1.78711H32.1378ZM32.1393 12.7966C32.2091 14.4929 31.3389 16.0898 29.8755 16.9506L31.6501 19.9674C34.2269 18.4516 35.7593 15.6397 35.6363 12.6526L32.1393 12.7966ZM29.9717 16.898L23.1217 20.3699L24.704 23.4918L31.554 20.0199L29.9717 16.898ZM23.1085 20.3766C21.4718 21.2237 19.5257 21.2237 17.889 20.3766L16.2804 23.4851C18.926 24.8542 22.0715 24.8542 24.7171 23.4851L23.1085 20.3766ZM17.8761 20.3701L11.0293 16.8982L9.44637 20.0198L16.2932 23.4917L17.8761 20.3701ZM11.1251 16.9506C9.66175 16.0898 8.79152 14.4929 8.86133 12.7966L5.3643 12.6526C5.24136 15.6397 6.77373 18.4516 9.35051 19.9674L11.1251 16.9506ZM8.86281 12.7246V1.78711H5.36281V12.7246H8.86281ZM33.8965 3.53711H39.2496V0.0371094H33.8965V3.53711ZM33.8937 0.0371094H7.10625V3.53711H33.8937V0.0371094ZM7.10625 0.0371094H1.75V3.53711H7.10625V0.0371094ZM14.2619 15.7987L19.6181 18.9237L21.3819 15.9006L16.0256 12.7756L14.2619 15.7987ZM21.3819 18.9237L26.7381 15.7987L24.9744 12.7756L19.6181 15.9006L21.3819 18.9237Z"
            fill="#405E20"
          />
        </svg>
      ),
    },
    {
      title: <>Transparenz und Klarheit</>,
      description: (
        <>
          Alle Abläufe und Ergebnisse werden verständlich und nachvollziehbar gestaltet. Es
          <CustomBr byViewport="desktop" /> gibt keine versteckten Kosten oder unklare Prozesse –
          nur einfache, effiziente
          <CustomBr byViewport="desktop" />
          Lösungen, die Vertrauen schaffen.
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="59"
          viewBox="0 0 48 59"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 45.7246C17.3475 37.1729 10.5517 30.3771 2 29.7246C10.5517 29.0721 17.3475 22.2763 18 13.7246C18.6525 22.2763 25.4483 29.0721 34 29.7246C25.4483 30.3771 18.6525 37.1729 18 45.7246V45.7246Z"
            stroke="#405E20"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38 57.7246C37.6729 53.4491 34.2755 50.0517 30 49.7246C34.2755 49.3975 37.6729 46.0001 38 41.7246C38.3271 46.0001 41.7245 49.3975 46 49.7246C41.7245 50.0517 38.3271 53.4491 38 57.7246Z"
            stroke="#405E20"
            strokeWidth="2.5"
          />
          <path
            d="M38 57.7246C37.6513 55.183 36.0958 50.3385 30 49.7246C36.0958 49.1107 37.6512 44.2662 38 41.7246C38.6139 47.8204 43.4584 49.3758 46 49.7246C43.4584 50.0733 38.6139 51.6288 38 57.7246Z"
            fill="#405E20"
            stroke="#405E20"
            strokeWidth="2.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38 57.7246C37.6729 53.4491 34.2755 50.0517 30 49.7246C34.2755 49.3975 37.6729 46.0001 38 41.7246C38.3271 46.0001 41.7245 49.3975 46 49.7246C41.7245 50.0517 38.3271 53.4491 38 57.7246Z"
            stroke="#405E20"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38 1.72461C37.6729 6.00009 34.2755 9.39754 30 9.72461C34.2755 10.0517 37.6729 13.4491 38 17.7246C38.3271 13.4491 41.7245 10.0517 46 9.72461C41.7245 9.39754 38.3271 6.00009 38 1.72461Z"
            stroke="#405E20"
            strokeWidth="2.5"
          />
          <path
            d="M38 1.72461C38.6139 7.82037 43.4584 9.37589 46 9.72461C43.4584 10.0734 38.6139 11.6288 38 17.7246C37.6513 15.183 36.0958 10.3385 30 9.72461C36.0958 9.11069 37.6513 4.26621 38 1.72461Z"
            fill="#405E20"
            stroke="#405E20"
            strokeWidth="2.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38 1.72461C37.6729 6.00009 34.2755 9.39754 30 9.72461C34.2755 10.0517 37.6729 13.4491 38 17.7246C38.3271 13.4491 41.7245 10.0517 46 9.72461C41.7245 9.39754 38.3271 6.00009 38 1.72461Z"
            stroke="#405E20"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: <>Effizienz bei sensiblen Themen</>,
      description: (
        <>
          Dank moderner Prozesse und klarer Strukturen werden auch komplexe finanzielle
          <CustomBr byViewport="desktop" />
          Angelegenheiten zügig und reibungslos gelöst. Dabei bleibt die Vertraulichkeit stets
          <CustomBr byViewport="desktop" />
          gewahrt, sodass sensible Daten in sicheren Händen sind.
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="57"
          height="35"
          viewBox="0 0 57 35"
          fill="none"
        >
          <path
            d="M39.7607 0.974609C38.7942 0.974609 38.0107 1.75811 38.0107 2.72461C38.0107 3.69111 38.7942 4.47461 39.7607 4.47461V0.974609ZM54.865 4.47461C55.8315 4.47461 56.615 3.69111 56.615 2.72461C56.615 1.75811 55.8315 0.974609 54.865 0.974609V4.47461ZM56.6146 2.72476C56.6146 1.75826 55.8311 0.974762 54.8646 0.974762C53.8981 0.974762 53.1146 1.75826 53.1146 2.72476H56.6146ZM53.1146 17.829C53.1146 18.7955 53.8981 19.579 54.8646 19.579C55.8311 19.579 56.6146 18.7955 56.6146 17.829H53.1146ZM56.1023 3.9622C56.7857 3.27878 56.7857 2.17074 56.1023 1.48733C55.4189 0.803908 54.3108 0.803908 53.6274 1.48733L56.1023 3.9622ZM28.4324 29.1572L27.195 30.3946C27.5232 30.7228 27.9683 30.9072 28.4324 30.9072C28.8966 30.9072 29.3417 30.7228 29.6699 30.3946L28.4324 29.1572ZM17.1042 17.829L18.3417 16.5916C18.0135 16.2634 17.5684 16.079 17.1042 16.079C16.6401 16.079 16.195 16.2634 15.8668 16.5916L17.1042 17.829ZM0.762563 31.6958C0.0791456 32.3792 0.0791457 33.4873 0.762563 34.1707C1.44598 34.8541 2.55402 34.8541 3.23744 34.1707L0.762563 31.6958ZM39.7607 4.47461H54.865V0.974609H39.7607V4.47461ZM53.1146 2.72476V17.829H56.6146V2.72476H53.1146ZM53.6274 1.48733L27.195 27.9198L29.6699 30.3946L56.1023 3.9622L53.6274 1.48733ZM29.6699 27.9198L18.3417 16.5916L15.8668 19.0664L27.195 30.3946L29.6699 27.9198ZM15.8668 16.5916L0.762563 31.6958L3.23744 34.1707L18.3417 19.0664L15.8668 16.5916Z"
            fill="#405E20"
          />
        </svg>
      ),
    },
  ];
  const { sectionRef } = useAnimation();

  return (
    <S.Benefits ref={sectionRef}>
      <S.Wrapper>
        <S.Content>
          <S.Title>
            Entdecken Sie einige der
            <CustomBr byViewport="desktop" /> Vorteile meines Services
          </S.Title>
          <S.List items={list} />
        </S.Content>
        <S.Container>
          <S.ImageSmall src="/imgs/privatkunden/benefits/2.png" alt="benefits" />
          <S.ImageBig src="/imgs/privatkunden/benefits/1.png" alt="benefits" />

          <S.Button href="#">Jetzt Beratung buchenn</S.Button>
        </S.Container>
      </S.Wrapper>
    </S.Benefits>
  );
};
