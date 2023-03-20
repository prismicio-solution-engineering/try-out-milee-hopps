import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.FeaturesSlice} FeaturesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 * @param { FeaturesProps }
 */

const Features = ({ slice }) => (
  <section>
    {slice.variation == "default" ? (
      <div className="bg-gray-50 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <div className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {slice?.items?.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                    <img
                      src={item.feature_icon.url}
                      alt={item.feature_icon.alt}
                    />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <div className="text-lg font-semibold leading-8 text-gray-900">
                      <PrismicRichText field={item.feature_title} />
                    </div>
                    <div className="mt-2 text-base leading-7 text-gray-600">
                      <PrismicRichText field={item.feature_description} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {slice.primary.image_position && (
            <svg
              className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
              />
            </svg>
          )}

          {/* Top part */}
          <div className="relative">
            <div className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>

          {slice.primary.image_position ?
          // Right Image
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative">
                <div className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  <PrismicRichText field={slice.primary.section_title} />
                </div>
                <div className="mt-3 text-lg text-gray-500">
                  <PrismicRichText field={slice.primary.section_description} />
                </div>

                <dl className="mt-10 space-y-10">
                  {slice?.items?.map((item, idx) => (
                    <div key={idx} className="relative">
                      <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                          <img
                            src={item.feature_icon.url}
                            alt={item.feature_icon.alt}
                          />
                        </div>
                        <div className="ml-16 text-lg font-medium leading-6 text-gray-900">
                          <PrismicRichText field={item.feature_title} />
                        </div>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">
                        <PrismicRichText field={item.feature_description} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                <img
                  className="relative mx-auto rounded-lg"
                  width={490}
                  src={slice.primary.section_image.url}
                  alt={slice.primary.section_image.alt}
                />
              </div>
            </div>
          :
          // Left Image          
            <>
              <svg
                className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <div className="relative mt-12 sm:mt-16 lg:mt-24">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8">
                  <div className="lg:col-start-2">
                    <div className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      <PrismicRichText field={slice.primary.section_title} />
                    </div>
                    <div className="mt-3 text-lg text-gray-500">
                      <PrismicRichText
                        field={slice.primary.section_description}
                      />
                    </div>

                    <dl className="mt-10 space-y-10">
                      {slice?.items?.map((item, idx) => (
                        <div key={idx} className="relative">
                          <dt>
                            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                              <img
                                src={item.feature_icon.url}
                                alt={item.feature_icon.alt}
                              />
                            </div>
                            <div className="ml-16 text-lg font-medium leading-6 text-gray-900">
                              <PrismicRichText field={item.feature_title} />
                            </div>
                          </dt>
                          <dd className="mt-2 ml-16 text-base text-gray-500">
                            <PrismicRichText field={item.feature_description} />
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                    <img
                      className="relative mx-auto rounded-lg"
                      width={490}
                      src={slice.primary.section_image.url}
                      alt={slice.primary.section_image.alt}
                    />
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </div>
    )}
  </section>
);

export default Features;
