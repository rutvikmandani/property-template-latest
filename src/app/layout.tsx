import "@/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import Header from "@/component/Layout/Header";
import Footer from "@/component/Layout/Footer";
import ProgressProvider from "@/component/ProgressBar";
import QueryLoader, { FullPageLoader } from "@/component/Loader";
import { Suspense } from "react";
import { League_Spartan } from "next/font/google";
import QueryProvider from "@/services/QueryProvider";
import { LoginModalProvider } from "@/context/LoginModalContext";
import { GlobalProvider } from "@/context/GlobalContext";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen w-full bg-background antialiased",
          leagueSpartan.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <QueryProvider>
            <QueryLoader />
            <LoginModalProvider>
              <GlobalProvider>
                <Suspense fallback={<FullPageLoader />}>
                  <ProgressProvider>
                    <div className="h-full w-full bg-secondary-bg min-h-screen">
                      <Header />
                      {children}
                      <Footer />
                    </div>
                  </ProgressProvider>
                </Suspense>
              </GlobalProvider>
            </LoginModalProvider>
          </QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
