import { CustomBr } from "@/components/atoms/custom-br";
import * as S from "./styles";
import C from "@/constants";
import { useCallback } from "react";

export const Footer = () => {
  const handleClickUpPage = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <S.Footer>
        <S.ButtonUp onClick={handleClickUpPage}>
          Zurück nach oben
          <S.ArrowUp />
        </S.ButtonUp>
        <S.Wrapper>
          <S.Column $first={true}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="109"
              height="91"
              viewBox="0 0 109 91"
              fill="none"
            >
              <g clipPath="url(#clip0_10440_264)">
                <path
                  d="M16.5577 37.0472C13.7367 40.4983 8.75633 39.6289 4.81309 39.5645V24.2992H11.2469C12.2251 24.2992 14.3118 25.2218 15.131 25.8205C18.5223 28.2987 19.2045 33.8095 16.5577 37.0472ZM4.81309 8.66153C7.20035 8.25123 9.87264 8.38825 12.0861 9.40619L13.0185 9.96467C17.7977 13.8458 16.0969 22.9961 9.19553 22.9961H5.09282C5.07309 22.9961 4.81309 22.7365 4.81309 22.7168V8.66153ZM20.1051 26.7193C20.0286 26.6097 19.993 26.4598 19.9186 26.347C19.6316 26.0398 19.3207 25.7915 18.9861 25.6023C18.4695 25.1589 17.8842 24.8376 17.3077 24.4854C16.6001 24.0911 15.8651 23.7305 15.0699 23.5545C15.0095 23.5462 14.945 23.5586 14.8834 23.5545C14.5451 23.2666 14.7938 22.9564 15.6293 22.6237L16.3753 22.2514C17.1771 21.6674 17.7271 21.0348 18.2401 20.2036C20.2519 17.7338 20.056 13.6293 18.2401 11.0816C18.1091 10.7628 17.9226 10.4526 17.6807 10.1508C17.2792 9.78019 16.8539 9.49014 16.3753 9.22002C12.1383 6.74127 5.52349 6.20586 1.26985 8.8477C1.23416 8.88232 0.812011 8.71571 0.883037 9.11484L0.977373 40.3218C1.06792 40.4473 3.40068 40.8464 3.78087 40.8742C7.3762 41.1369 12.9801 41.1281 16.3753 40.123C22.0781 38.2521 24.2641 31.1448 20.1051 26.7193Z"
                  fill="#040606"
                />
                <path
                  d="M75.1189 55.7606C75.8954 58.0549 76.6414 60.3508 77.3568 62.6486C77.8923 64.1338 78.4518 65.6231 79.0351 67.1165C79.1935 67.5959 79.2492 68.1263 79.4081 68.6058C80.1054 70.2217 80.7437 71.8721 81.323 73.557L81.9348 74.0241L84.8162 65.6272C86.3462 61.384 87.8338 57.1166 89.247 52.83C89.4133 52.3326 89.9804 52.344 90.3916 52.4315L97.9604 73.8215C98.3747 74.4419 98.6647 72.4406 98.7496 72.1829C99.6581 69.4244 100.65 66.6926 101.6 63.9518C102.07 62.1659 102.701 60.4156 103.465 58.7392C103.774 57.3447 104.197 55.9524 104.77 54.6436C105.321 52.2362 106.067 49.8782 107.008 47.5695C107.054 47.5508 107.129 47.5808 107.195 47.5695C107.604 47.4903 107.968 47.4978 108.285 47.592C105.766 55.3777 103.165 63.1891 100.481 71.0259C100.007 72.5714 99.5095 74.1229 98.9892 75.68C98.8607 76.0495 98.7462 76.4312 98.6162 76.797L97.7612 79.4298C97.4951 80.301 96.7001 81.9452 96.0586 80.3761C95.2317 78.3399 94.468 76.2782 93.7676 74.1907C93.5716 73.5819 93.3954 72.9427 93.2081 72.3291C92.6772 71.1855 92.2651 69.9968 91.9027 68.792C90.825 65.8422 89.8264 62.374 88.5639 59.5589C88.1314 58.5944 87.9746 60.3912 87.8571 60.7513C86.5302 64.8157 85.0115 68.8173 83.6973 72.8876L82.0189 77.5416C81.225 80.9624 80.3721 81.8369 79.4598 80.1654C79.0294 78.8479 78.5769 77.5388 78.1027 76.2385C75.1038 67.376 71.7957 58.6173 68.9747 49.6906C68.9365 49.3183 68.891 49.0969 69.154 48.7808C69.368 48.5233 71.8765 47.0577 72.1437 47.2738C73.0308 50.1411 74.1033 52.9419 75.1189 55.7606Z"
                  fill="#040606"
                />
                <path
                  d="M25.6997 47.9422C26.0132 47.6566 26.8321 47.173 27.0978 47.5654L27.1112 79.5217C32.0434 79.7038 37.2548 79.7574 42.7457 79.6824C42.8751 79.4735 42.7877 79.2564 42.4835 79.0313C35.0054 73.6847 32.8203 61.705 38.9457 54.5564C39.2513 54.1999 40.7082 52.549 41.1772 52.9695C41.2868 53.0678 40.1683 54.9384 40.0269 55.2634C37.4335 61.2297 38.3152 67.5047 41.7376 72.888C42.4973 73.8259 43.2433 74.7567 43.9754 75.6804C45.262 76.692 46.6295 77.6228 48.0781 78.4728C49.8602 79.2802 51.9815 79.9437 53.962 79.969C54.7185 79.9787 58.5361 79.2378 58.7069 79.4046C59.2848 79.969 57.1393 80.6349 56.8003 80.7573C54.2779 81.6676 51.4075 81.9852 48.75 81.6183C47.0196 81.3794 46.4952 81.0879 44.6356 81.0873C37.7296 81.0854 30.8244 81.0638 23.9186 81.0886C23.7274 81.129 23.2754 80.954 23.2754 80.7999V49.8969C23.2754 49.8647 23.4803 49.3373 23.518 49.2997C24.308 49.1024 25.0418 48.2633 25.6997 47.9422Z"
                  fill="#040606"
                />
                <path
                  d="M63.3704 7.54436C66.7697 8.51836 70.0483 10.6914 70.4584 14.524C70.9735 19.34 68.9469 22.4774 64.4893 24.1128L63.9466 24.2927C62.9389 24.2724 62.3736 24.5226 62.2515 25.0436C62.278 25.0919 62.2241 25.1853 62.2515 25.2298C62.8876 25.841 63.447 26.5236 63.9299 27.2776C64.3871 27.9614 64.6864 28.4834 65.2353 29.1392L66.3542 30.6285C68.9436 33.7136 71.311 36.6144 74.4708 39.1873C74.9857 39.6066 78.0549 41.673 78.1017 41.8943C78.137 42.0606 77.9337 42.3341 77.8184 42.3571C77.5003 42.4206 74.0395 41.1132 73.4407 40.8675L72.6947 40.4951C72.3611 40.3432 71.8902 40.1103 71.5758 39.9367C70.3952 39.2132 69.2867 38.4008 68.219 37.5165C65.037 34.6599 61.6957 30.8428 59.2742 27.3228C58.9285 26.8204 56.8833 23.7022 57.2165 23.3691C61.6426 23.8768 65.8857 22.6442 66.4885 17.6381C66.9478 13.8236 65.6961 10.3003 61.8744 8.94449C61.6579 8.8676 60.3758 8.47517 60.2934 8.47517H53.8596C53.8795 9.07648 53.6971 9.63255 53.6641 10.2348C53.2473 17.8557 53.9866 25.8613 53.682 33.5232C53.7037 34.2948 52.8844 34.414 52.3677 34.7241C52.1228 35.0041 51.7823 35.1672 51.4353 35.2826C50.9845 35.5464 50.517 35.9986 49.9434 36.0272V9.12674C49.9434 9.05693 50.9202 8.36664 51.0623 8.28901C51.8737 7.74709 52.7129 7.43676 53.5798 7.3582C56.1004 7.06853 58.9671 7.16161 61.5988 7.3582C62.1627 7.40157 62.7531 7.46375 63.3704 7.54436Z"
                  fill="#040606"
                />
                <path
                  d="M1.82935 83.4983C1.1671 83.6657 0.807241 83.9492 0.701613 83.0417C0.249456 79.1577 0.69848 73.3567 0.702779 69.249C0.706421 65.7466 0.715527 62.1605 0.702706 58.6532C0.692945 55.982 0.366156 51.7985 0.701322 49.3283C0.770162 48.8209 0.820208 48.8142 1.20622 48.5291C1.46788 48.3361 4.17632 47.1966 4.34691 47.1966H20.7578C21.2416 47.1966 21.043 48.6859 20.5713 48.6859H4.99962V63.1135C4.99962 63.5398 5.94087 63.203 6.20363 63.1973C9.12243 63.1338 12.0517 63.2583 14.9713 63.2118C15.929 63.3946 15.524 64.5097 15.4429 64.5097H4.99962V81.3574C4.99962 81.4199 4.22141 82.0527 4.06718 82.1951C3.38004 82.711 2.63349 83.1772 1.82935 83.4983Z"
                  fill="#040606"
                />
                <path
                  d="M31.6675 36.2132C32.346 36.7186 33.1012 37.0703 33.9054 37.3301C37.8111 38.3637 42.3413 37.6954 43.9768 33.5151C44.1058 33.1856 44.5351 31.8935 44.5351 31.6522V8.00954C44.5351 7.62884 45.8405 7.62884 45.8405 8.00954V31.8384C45.8405 32.8192 44.7188 35.0415 44.0709 35.8429C39.6022 41.3717 26.094 39.7443 25.515 31.4643L25.5019 9.4873C25.4797 9.25012 25.5543 9.11646 25.7011 8.94147C25.8292 8.78919 28.5978 7.0104 28.7787 7.02306C28.9036 7.03162 29.0575 7.25112 29.1466 7.36095L29.2447 31.6505C29.5257 33.6339 30.1631 34.9249 31.6675 36.2132Z"
                  fill="#040606"
                />
                <path
                  d="M18.7992 83.3126C21.4549 83.5259 24.2413 84.5204 26.8182 85.1742C31.8798 86.8387 37.4246 88.019 42.8561 88.5251C51.1003 89.4965 60.4835 89.3285 68.487 87.0249C69.0586 86.8603 72.3204 85.5397 72.5065 85.7336C72.4813 85.953 72.579 86.2712 72.4752 86.4468C72.4095 86.5578 70.4673 87.4257 70.1499 87.5681C68.4254 88.3422 66.4988 88.9409 64.675 89.4559L60.0128 90.3868C52.768 91.2806 46.7352 91.1246 39.4993 90.3868C35.0016 89.9385 30.5882 89.0077 26.2588 87.5943C18.8762 85.7086 14.703 84.0729 6.82567 86.1598C6.04511 86.3666 2.35457 87.933 2.10478 87.9024C1.77027 87.8615 1.53046 87.4785 1.83561 87.1356C2.47993 86.4115 6.38116 84.5591 7.42351 84.2434C11.0647 83.0579 15.0131 82.7975 18.7992 83.3126Z"
                  fill="#040606"
                />
                <path
                  d="M78.4742 15.1775C76.1826 20.5844 76.9801 26.9752 79.9661 31.9321C80.9224 33.4465 81.7103 34.524 83.1364 35.6554C84.3118 36.7829 85.719 37.6735 87.2391 38.2616C89.5041 39.3723 91.8854 39.57 94.4164 39.3762C94.9434 39.3358 97.068 38.7969 97.2073 38.8257C97.322 38.8497 97.5503 39.1197 97.4953 39.2833C93.8472 41.5375 88.8623 41.7814 84.8224 40.3947C83.9534 40.0964 83.0476 39.5789 82.2039 39.1924C81.8656 39.0454 81.6171 38.8592 81.458 38.634C79.0003 37.0927 76.965 34.4954 75.6769 31.9321C73.9907 28.1726 73.3568 23.8162 74.558 19.8315C74.9539 17.3865 76.2972 15.0341 78.1012 13.3158C78.3672 13.1502 79.2545 12.2901 79.4072 13.0405C79.4305 13.1546 78.6142 14.7558 78.4742 15.1775Z"
                  fill="#040606"
                />
                <path
                  d="M106.822 17.4115C108.586 21.2403 108.631 25.7501 107.195 29.6982C107.179 29.7559 107.212 29.8271 107.195 29.8844C106.854 30.7958 104.734 34.7151 103.651 34.5878C103.21 34.536 103.174 34.4024 103.279 33.98C108.595 22.8178 101.337 8.44535 88.259 8.8402C87.5681 8.86124 87.0032 9.09505 86.2125 9.03418C85.2129 8.95692 85.9345 8.56096 86.4253 8.3128C94.116 4.42535 104.023 9.75333 106.822 17.4115Z"
                  fill="#040606"
                />
                <path
                  d="M56.8428 47.7553C59.8311 48.2829 63.1436 50.6536 65.2347 52.7817C69.2387 57.5083 71.0661 64.0976 68.7779 70.0948C68.7212 70.2729 68.6569 70.4803 68.5915 70.6533C68.3731 70.8497 68.2729 71.115 68.2185 71.3979C67.8849 72.0435 65.7613 75.5847 64.8627 74.7477C65.5596 72.5795 66.3989 70.4474 66.5477 68.1479C66.867 63.2168 65.4059 58.8738 62.4374 55.0156C62.2558 54.8758 62.0915 54.6852 62.0644 54.4571L59.8266 52.4093C59.0034 51.7833 58.1331 51.2248 57.2158 50.7339C54.521 49.5238 51.894 49.0251 48.9104 49.2381C48.5124 49.2664 46.8494 49.6934 46.7735 49.616C46.7539 49.5961 46.7468 49.1485 46.7725 49.0584C48.2077 48.267 49.9394 47.6447 51.5279 47.5691C52.7267 47.3321 54.234 47.3089 55.4441 47.5691C55.8753 47.5157 56.3415 47.5777 56.8428 47.7553Z"
                  fill="#040606"
                />
                <path
                  d="M51.9941 39.5645C53.1591 39.9272 53.6516 39.0976 54.8798 39.1877C55.6306 39.2428 56.3562 39.93 56.531 39.9132C56.7279 39.8942 57.2391 39.4661 57.6508 39.3478C58.3893 39.136 59.2496 39.079 59.9456 39.4474C60.1317 39.5459 60.9455 40.6061 60.9455 40.7746V44.684C60.9455 45.0534 59.8266 45.0537 59.8266 44.684V40.9608C59.8266 40.3689 58.7519 40.0588 58.2383 40.1065C56.0806 40.3071 57.3058 44.7248 56.5599 44.9601C56.3331 45.0318 55.9104 44.8404 55.9104 44.684V40.7746C55.9104 40.0858 54.0104 39.8451 53.3581 40.5531C53.2915 40.6253 52.9266 41.2884 52.9266 41.3331V44.9632H51.9941V39.5645Z"
                  fill="#040606"
                />
                <path
                  d="M33.5323 0.284373C35.1045 1.11782 35.1006 3.26279 33.5323 4.19398C31.256 5.26609 29.0415 2.95022 30.5485 0.84286C30.6007 0.774353 30.6721 0.71627 30.735 0.656698C31.585 -0.0613313 32.5213 -0.135983 33.5323 0.284373Z"
                  fill="#040606"
                />
                <path
                  d="M41.4874 3.75599C40.8323 4.42543 38.833 4.42562 38.1859 3.73756C36.4059 1.84485 39.0159 -1.2959 41.3554 0.573543C42.1909 1.24094 42.2373 2.99011 41.4874 3.75599Z"
                  fill="#040606"
                />
                <path
                  d="M107.194 47.5699L108.499 47.3846C105.885 55.2362 103.314 63.1649 100.667 71.0263C100.614 71.1838 100.552 71.1814 100.48 71.0263C102.948 63.4281 105.351 55.72 108.084 48.1784L108.127 47.5706C107.832 47.6002 107.471 47.5213 107.194 47.5699Z"
                  fill="#040606"
                />
                <path
                  d="M49.9422 44.9629H49.0098V39.6573C49.0098 39.3067 49.9422 39.3067 49.9422 39.6573V44.9629Z"
                  fill="#040606"
                />
                <path
                  d="M98.6162 76.7973C98.5733 76.9175 98.6487 77.1886 98.5735 77.3992C98.1562 78.5666 97.066 83.1306 95.7813 80.2787C94.9262 78.3808 94.3964 76.1446 93.7676 74.191L96.489 80.8813C96.9179 80.9904 96.9828 80.7439 97.165 80.4678C97.8147 79.4842 97.8682 77.7994 98.6162 76.7973Z"
                  fill="#040606"
                />
                <path
                  d="M39.4984 90.3867C35.0068 89.9286 30.4636 89.3288 26.2578 87.5943C28.5747 88.1862 30.9576 88.9554 33.2964 89.4105C35.3377 89.8076 37.5091 89.8065 39.4984 90.3867Z"
                  fill="#040606"
                />
                <path
                  d="M75.6782 31.9316C73.6983 27.9921 73.3611 24.1497 74.3728 19.8311C74.4256 19.6684 74.4879 19.6708 74.5593 19.8311C73.5846 23.9544 74.1444 28.0392 75.6782 31.9316Z"
                  fill="#040606"
                />
                <path
                  d="M107.193 29.6982C108.414 25.2363 108.418 21.7819 106.82 17.4115C107.179 17.5301 107.184 17.8661 107.291 18.1511C108.617 21.6588 108.824 26.2887 107.193 29.6982Z"
                  fill="#040606"
                />
                <path
                  d="M48.8225 38.4483C48.6539 37.7513 48.8309 36.6135 49.7536 37.0419C50.6497 37.4579 50.0512 38.9266 48.8225 38.4483Z"
                  fill="#040606"
                />
                <path
                  d="M30.5477 0.842438C29.4156 3.16053 31.1531 4.90879 33.5315 4.19356C31.4459 5.43154 29.2248 3.39212 30.1295 1.25535C30.24 0.993791 30.467 0.94855 30.5477 0.842438Z"
                  fill="#040606"
                />
                <path
                  d="M98.9883 75.6797C99.2689 74.0802 99.9828 72.5564 100.48 71.0256H100.667C100.136 72.601 99.5246 74.1364 98.9883 75.6797Z"
                  fill="#040606"
                />
                <path
                  d="M52.366 34.7237C52.2053 35.0963 51.8105 35.234 51.4336 35.2822C51.7096 35.1205 52.0753 34.898 52.366 34.7237Z"
                  fill="#040606"
                />
                <path
                  d="M73.4413 40.8672C73.0601 40.7108 72.9055 40.5905 72.6953 40.4949L73.4413 40.8672Z"
                  fill="#040606"
                />
                <path
                  d="M68.2184 71.3984C68.1863 71.0736 68.2489 70.7506 68.5913 70.6538C68.4479 71.0319 68.3672 71.1103 68.2184 71.3984Z"
                  fill="#040606"
                />
              </g>
              <defs>
                <clipPath id="clip0_10440_264">
                  <rect width="108" height="91" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            <S.Line>
              <S.List>
                <S.Item>
                  Büro im Flow wird betrieben von Buchhaltung WECHSLER, in Gunzwil, Schweiz.
                  <CustomBr byViewport="desktop" />
                  Sie ist spezialisiert in Treuhanddienstleistungen- und
                  Finanzberatungsdienstleistungen.
                  <CustomBr byViewport="desktop" />
                  Gefördert von Larissa Wechsler, Fachfrau Finanz- und Rechnungswesen und
                  zertifizierte
                  <CustomBr byViewport="desktop" />
                  Steuerspezialistin.
                </S.Item>

                <S.Item></S.Item>

                {/* <S.Item>{C.text}</S.Item> */}
              </S.List>
            </S.Line>

            <S.SocialShare>
              {C.data.social_share.map(({ link, icon: Icon, title }) => (
                <S.Link href={link} title={title} key={title}>
                  <S.Icon>
                    <Icon />
                  </S.Icon>
                </S.Link>
              ))}
            </S.SocialShare>
          </S.Column>
          <S.Column>
            <S.TitleLine>Navigation</S.TitleLine>
            <S.List>
              {C.data.navigation.map((link) => (
                <S.Item key={link.title}>
                  <S.Link {...link}>{link.title}</S.Link>
                </S.Item>
              ))}
            </S.List>
          </S.Column>
          <S.Column>
            <S.TitleLine>Kontakt</S.TitleLine>

            <S.List>
              <S.Item>{/* <S.Link href={item.link}>{item.content}</S.Link> */}</S.Item>

              <S.Item>
                <S.Link href={C.data.contact[0].link}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M2.5 3C2.5 2.73478 2.60536 2.48043 2.79289 2.29289C2.98043 2.10536 3.23478 2 3.5 2H5.653C5.88971 2.00011 6.1187 2.08418 6.29924 2.23726C6.47979 2.39034 6.60018 2.6025 6.639 2.836L7.379 7.271C7.41436 7.48222 7.38097 7.69921 7.28376 7.89003C7.18655 8.08085 7.03065 8.23543 6.839 8.331L5.291 9.104C5.84611 10.4797 6.67283 11.7293 7.72178 12.7782C8.77072 13.8272 10.0203 14.6539 11.396 15.209L12.17 13.661C12.2655 13.4695 12.4199 13.3138 12.6106 13.2166C12.8012 13.1194 13.0179 13.0859 13.229 13.121L17.664 13.861C17.8975 13.8998 18.1097 14.0202 18.2627 14.2008C18.4158 14.3813 18.4999 14.6103 18.5 14.847V17C18.5 17.2652 18.3946 17.5196 18.2071 17.7071C18.0196 17.8946 17.7652 18 17.5 18H15.5C8.32 18 2.5 12.18 2.5 5V3Z"
                      fill="black"
                    />
                  </svg>
                  +41 79 934 67 83
                </S.Link>
              </S.Item>

              <S.Item>
                <S.Link href="/kontakt">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_10440_316)">
                      <path
                        d="M15 13.8333V18.8333C15 19.2754 14.8244 19.6993 14.5118 20.0118C14.1993 20.3244 13.7754 20.5 13.3333 20.5H4.16667C3.72464 20.5 3.30072 20.3244 2.98816 20.0118C2.67559 19.6993 2.5 19.2754 2.5 18.8333V9.66667C2.5 9.22464 2.67559 8.80072 2.98816 8.48816C3.30072 8.17559 3.72464 8 4.16667 8H9.16667M12.5 5.5H17.5M17.5 5.5V10.5M17.5 5.5L8.33333 14.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10440_316">
                        <rect width="21" height="21" fill="black" transform="translate(0.5 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  Kontaktieren Sie uns
                </S.Link>
              </S.Item>

              <S.Item>
                Büro im Flow
                <br /> c/o Buchhaltung WECHSLER
                <br /> Oberlehn 1<br /> 6222 Gunzwil
              </S.Item>
            </S.List>
          </S.Column>
        </S.Wrapper>

        <S.Info>
          <S.WrapperInfo>
            <S.Copy>{C.data.footer.copyrigth.text}</S.Copy>
            <S.Agency>{C.data.footer.copyrigth.fiber}</S.Agency>
          </S.WrapperInfo>
        </S.Info>

        <S.Text>Buchhaltung</S.Text>
      </S.Footer>
    </>
  );
};
