import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroBannerSlice} HeroBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroBannerSlice>} HeroBannerProps
 * @param { HeroBannerProps }
 */
const HeroBanner = ({ slice }) => (
  <section>
    {slice.variation !== "withSignUpAndMedia" && (
      <div className="relative mb-6 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8" />
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <div className="block xl:inline">
                    <PrismicRichText field={slice.primary.title_top_line} />{" "}
                  </div>
                  <div className="block text-indigo-600 xl:inline">
                    <PrismicRichText field={slice.primary.title_bottom_line} />
                  </div>
                </div>
                <div className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  <PrismicRichText field={slice.primary.description} />
                </div>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  {slice.variation == "default" &&
                    slice?.items?.map((item, idx) => (
                      <div
                        key={idx}
                        className="mt-3 rounded-md shadow sm:mt-0 sm:mr-3"
                      >
                        <PrismicLink
                          className={
                            item.cta_type == "Primary"
                              ? "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                              : "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                          }
                          field={item.cta_link}
                        >
                          {item.cta_label}
                        </PrismicLink>
                      </div>
                    ))}
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
          />
        </div>
      </div>
    )}
    {slice.variation == "withSignUpAndMedia" && (
      <main className="mx-auto my-16 max-w-7xl px-4 sm:my-24 sm:px-6 lg:my-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <div className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              <div className="block text-gray-900">
                <PrismicRichText field={slice.primary.title_top_line} />
              </div>
              <div className="block text-indigo-600">
                <PrismicRichText field={slice.primary.title_bottom_line} />
              </div>
            </div>
            <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              <PrismicRichText field={slice.primary.description} />
            </div>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <div className="text-base font-medium text-gray-900">
                <PrismicRichText field={slice.primary.sign_up_message} />
              </div>
              <form className="mt-3 sm:flex">
                <label htmlFor="email" className="sr-only">
                  {slice.primary.form_label}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-gray-300 p-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1"
                  placeholder={slice.primary.form_placeholder}
                />
                <button
                  type="submit"
                  className="mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
                  onClick={(e) => {e.preventDefault()}}
                >
                  {slice.primary.form_cta_label}
                </button>
              </form>
              <div className="mt-3 text-sm text-gray-500">
                <PrismicRichText field={slice.primary.privacy_message} />
              </div>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button
                type="button"
                className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <img
                  className="w-full"
                  src={slice.primary.media_thumbnail.url}
                  alt={slice.primary.media_thumbnail.alt}
                />
                {slice.primary.show_play_video_button && (
                  <span
                    className="absolute inset-0 flex h-full w-full items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-20 w-20 text-indigo-500"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle
                        opacity="0.9"
                        cx={42}
                        cy={42}
                        r={42}
                        fill="white"
                      />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    )}
  </section>
);

export default HeroBanner;
