import React from "react";
import { Fragment } from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Header = ({ menu, currentLocale, locales, alternatesUrls }) => (
  <section className="relative bg-white px-4">

    {/* Navigation */}
    <Popover className="relative bg-white">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <PrismicLink href="/">
              <span className="sr-only">{menu?.data?.company_name}</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={menu?.data?.logo.url}
                alt={menu?.data?.logo.alt}
              />
            </PrismicLink>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {menu?.data?.slices.map((slice, idx) => {
              return slice.variation === "dropdown" ? (
                <div key={idx}>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          )}
                        >
                          <PrismicRichText field={slice.primary.label} />
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-20 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {slice?.items?.map((item, idx) => (
                                  <PrismicLink
                                    field={item.second_level_link}
                                    key={idx}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <div className="text-base font-medium text-gray-900">
                                        <PrismicRichText
                                          field={item.second_level_label}
                                        />
                                      </div>
                                      <div className="mt-1 text-sm text-gray-500">
                                        <PrismicRichText
                                          field={item.second_level_description}
                                        />
                                      </div>
                                    </div>
                                  </PrismicLink>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </div>
              ) : (

                  <PrismicLink field={slice.primary.link} key={idx}
                  className="text-base font-medium text-gray-500 hover:text-gray-900">
                    <PrismicRichText field={slice.primary.label} />
                  </PrismicLink>
              );
            })}
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <LanguageSwitcher
              currentLocale={currentLocale}
              locales={locales}
              alternatesUrls={alternatesUrls}
            />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-20 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={menu?.data?.logo.url}
                    alt={menu?.data?.logo.alt}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-3">
                  {menu?.data?.slices.map((slice, idx) => {
                    return slice.variation === "dropdown" ? (
                      <div key={idx} className="py-3 grid gap-y-3">
                        <div className="font-semibold text-indigo-500">
                          <PrismicRichText field={slice.primary.label} />
                        </div>
                        {slice?.items?.map((item, idx) => {
                          return(
                          <PrismicLink
                            key={idx}
                            field={item.second_level_link}
                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                          >
                            <div className="ml-3 text-base font-medium text-gray-900">
                              <PrismicRichText
                                field={item.second_level_label}
                              />
                            </div>
                          </PrismicLink>
                        )})}
                      </div>
                    ) : (
                      <PrismicLink
                        field={slice.primary.link}
                        key={idx}
                        className="-m-3 flex items-center rounded-md py-3 hover:bg-gray-50"
                      >
                        <div className="ml-3 text-base font-medium text-gray-900">
                          <PrismicRichText field={slice.primary.label} />
                        </div>
                      </PrismicLink>
                    );
                  })}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <LanguageSwitcher
                  currentLocale={currentLocale}
                  locales={locales}
                  alternatesUrls={alternatesUrls}
                />
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  </section>
);
