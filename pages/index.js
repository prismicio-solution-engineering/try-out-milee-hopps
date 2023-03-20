import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout/Layout";
import { createClient } from "../prismicio";
import axios from "axios";

// Import Slices components
import { components as defaultComponents } from '../slices/default/index'
import { components as customComponents } from '../slices/custom/index'

const __allComponents = {  ...defaultComponents, ...customComponents }

export default function Home({ doc, menu, footer, flickrData, locales, alternatesUrls }) {
  return (
    <div>
      <Layout
        currentLocale={doc?.lang}
        alternatesUrls={alternatesUrls}
        locales={locales}
        menu={menu}
        footer={footer}
      >
        <SliceZone
          slices={doc?.data.slices}
          components={__allComponents}
          context={{ flickrData: flickrData }}
        />
      </Layout>
    </div>
  );
}

export async function getStaticProps({ previewData, locale, locales }) {
  // try with "locales"

  const client = createClient(previewData);

  // Query document
  const doc = await client
    .getSingle("homepage", { lang: locale })
    .catch((e) => {
      console.log(e);
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
      return null;
    });

  //Query social media feed

  const socialFeedSlice =
    (await doc?.data?.slices?.filter(
      (slice) => slice.slice_type === "social_feed_flickr"
    )) || null;

  const postCount = socialFeedSlice[0]?.primary?.number_of_posts || 10;

  async function getSocialDataFeed(postCount) {
    if (socialFeedSlice.length >= 1) {
      const response = await axios
        .get(
          `https://www.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=f929272a6239bdb54c3d66101055135c&group_id=14808571@N24&sort=relevance&per_page=${postCount}&format=json&nojsoncallback=1`
        )
        .then((res) => {
          return res.data.photos.photo;
        })
        .catch((error) => {
          console.log(error);
        });
      return response;
    } else {
      return null;
    }
  }

  const flickrData = await getSocialDataFeed(postCount);

  // Get the alternate locales url with a light query

  const altLangsGraphQuery = `{
    homepage{
      meta_title
    }
  }`;

  const alternates = await client.getByIDs(
    doc.alternate_languages.map((doc) => doc.id),
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
      flickrData,
      alternatesUrls,
      locales
    },
  };
}
