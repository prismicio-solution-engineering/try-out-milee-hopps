import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.SocialFeedFlickrSlice} SocialFeedFlickrSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SocialFeedFlickrSlice>} SocialFeedFlickrProps
 * @param { SocialFeedFlickrProps }
 */

const SocialFeedFlickr = ({ slice, context }) => {

  const images = context.flickrData;

  return (
    <section id={slice.primary.anchor_id}>
      <div className="bg-white">
        <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <div className="text-2xl font-extrabold tracking-tight text-gray-900">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <PrismicLink
              field={slice.primary.social_link_url}
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              {slice.primary.social_link_label}
              <span aria-hidden="true"> &rarr;</span>
            </PrismicLink>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content flex h-80 overflow-x-auto py-2">
                <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8">
                  {images?.map(({ server, id, secret, owner, title }, idx) => (
                    <a
                      href={`https://www.flickr.com/photos/${owner}/${id}`}
                      className="relative flex h-80 w-80 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75"
                      key={idx}
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img
                          src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
                          alt={title}
                          className="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">
                        {title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeedFlickr;
