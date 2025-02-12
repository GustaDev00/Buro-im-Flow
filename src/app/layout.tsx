"use client";

import { Suspense, type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { fontNames } from "@/styles/fonts";
import { StyledComponentsRegistry } from "@/lib/registry";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/global";
import { GSAPInitializer } from "@/components/atoms/gsap-initializer";
import { Footer } from "@/shared/footer";
import { Loading } from "@/components/atoms/loading";
import { SmoothScroll } from "@/components/atoms/smooth-scroll";
import { Cursor } from "@/components/organisms/Cursor";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode => {
  return (
    <html lang="en">
      <body className={fontNames}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GSAPInitializer />
            <Loading />
            <main>
              <Suspense>
                <Cursor>{children}</Cursor>
              </Suspense>
            </main>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
        <SmoothScroll />
      </body>
    </html>
  );
};

export default RootLayout;
