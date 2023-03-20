import { SliceZone } from "@prismicio/react";
import { Layout } from "../../components/Layout/Layout";
import { createClient } from "../../prismicio";
import * as prismicH from "@prismicio/helpers";

// Import Slices components
import { components as defaultComponents } from '../../slices/default/index'
import { components as customComponents } from '../../slices/custom/index'

const __allComponents = { ...defaultComponents, ...customComponents }


export default function LandingPage({
  doc,
  menu,
  footer,
  locales,
  alternatesUrls,
}) {
  return (
    <div>
      <Layout
        currentLocale={doc.lang}
        locales={locales}
        alternatesUrls={alternatesUrls}
        menu={menu}
        footer={footer}
      >
        <SliceZone slices={doc.data.slices} components={__allComponents} />
      </Layout>
    </div>
  );
}

export async function getStaticProps({ params, previewData, locale, locales }) {
  const client = createClient(previewData);

  // Query document
  const doc = await client
    .getByUID("page", params.uid, { lang: locale })
    .catch((e) => {
      return null;
    });

  if (!doc) {
    return {
      notFound: true,
    };
  }

  // Query navigation
  const menu = await client.getSingle("menu", { lang: locale }).catch((e) => {
    return null;
  });

  const footer = await client
    .getSingle("footer", { lang: locale })
    .catch((e) => {
      return null; //Say no footer, same for all catch
    });

  // Query the  page
  const document = await client
    .getSingle("page", { lang: locale })
    .catch((e) => {
      return null;
    });
  if (!document) {
    return {
      notFound: true,
    };
  }

  // Get the alternate locales url with a light query
  const altLangsGraphQuery = `{
    page{
      uid
    }
  }`;

  const alternates = await client.getByIDs(
    document.alternate_languages.map((doc) => doc.id),
    { graphQuery: altLangsGraphQuery, lang: "*" }
  );

  const alternatesUrls = alternates.results.map((doc) => ({
    lang: doc.lang,
    url: doc.url,
  }));

  return {
    props: {
      doc,
      menu,
      footer,
      locales,
      alternatesUrls,
    },
  };
}

// Paths
export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("page", { lang: "*" });
  return {
      paths: documents.map((doc) => `/${doc.lang}${prismicH.asLink(doc)}`),
      fallback: false, // if a page has already been generated but doesn't show => display the cached page
  };
}
