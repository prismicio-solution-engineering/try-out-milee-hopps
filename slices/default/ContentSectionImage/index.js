import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ContentSectionImageSlice} ContentSectionImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSectionImageSlice>} ContentSectionImageProps
 * @param { ContentSectionImageProps }
 */
const ContentSectionImage = ({ slice }) => (
  <section>
    <div className="relative mb-6 bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        {slice.variation == "default" && (
          <>
            {/* Using PrismicNextImage */}
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl m-2">Using PrismicNextImage</h2>
            <div className="h-full w-full object-cover">
              <PrismicNextImage field={slice.primary.image} />
            </div>
          </>
        )}

        {slice.variation == "withResponsiveViews" && (
          <>
            {/* Using image responsive views */}
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl m-2">Using Image field responsive views</h2>
            <picture>
              {slice.primary.image.mobile ? (
                <source
                  srcSet={slice.primary.image.mobile.url}
                  media="(max-width: 640px)"
                />
              ) : (
                <div />
              )}
              <img
                src={slice.primary.image.url}
                alt={slice.primary.image.alt}
                className="h-full w-full object-cover"
              />
            </picture>
          </>
        )}
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Award winning support
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We’re here to help
          </p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Visit the help center
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContentSectionImage;
