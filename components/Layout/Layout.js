import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children, menu, footer, currentLocale, locales, alternatesUrls }) => {
  return (
    <div>
      <div>
        <Head>
          <title>Prismic SE POC Website</title>
        </Head>
        {menu?.data ?
          <Header menu={menu} currentLocale={currentLocale} locales={locales} alternatesUrls={alternatesUrls} />
          : null
        }
        <main className="mb-10">
          {children}
        </main>
      </div>
      {footer?.data ?
        <Footer footer={footer} />
        : null
      }
    </div>
  );
};
