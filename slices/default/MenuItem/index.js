import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * @typedef {import("@prismicio/client").Content.MenuSlice} MenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MenuSlice>} MenuProps
 * @param { MenuProps }
 */
const Menu = ({ slice }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      {/* <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200" />
                  <div className="space-y-12 px-4 pt-10 pb-6">
                    <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                      {slice?.variation == "dropdown" && (
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                          <div>
                            <div className="font-medium text-gray-900">
                              <PrismicRichText
                                className="font-medium text-gray-900"
                                field={slice.primary.dropdown_label}
                              />
                            </div>
                            <ul
                              role="list"
                              aria-labelledby={`mobile-featured-heading-${(
                                <PrismicRichText
                                  className="font-medium text-gray-900"
                                  field={slice.primary.dropdown_label}
                                />
                              )}`}
                              className="mt-6 space-y-6"
                            >
                              {slice?.items?.map((item, idx) => (
                                <li key={idx} className="flex">
                                  <PrismicLink
                                    className=" text-gray-700 hover:text-gray-500"
                                    field={item.second_level_link}
                                  >
                                    <PrismicRichText
                                      field={item.second_level_label}
                                    />
                                  </PrismicLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      {slice?.variation == "default" && (
                        <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                          <div className="flow-root">
                            <PrismicLink
                              className="-m-2 block p-2 font-medium text-gray-900"
                              field={slice.primary.link}
                            >
                              <PrismicRichText field={slice.primary.label} />
                            </PrismicLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Tab.Group>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root> */}

      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  {/* <div className="hidden lg:flex lg:items-center">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </a>
                  </div> */}

                  <div className="hidden h-full lg:flex">
                    {/* Mega menus */}
                    <Popover.Group className="ml-8">
                      <div className="flex h-full justify-center space-x-8">
                        {
                          slice?.variation == "dropdown" && (
                            <Popover className="flex">
                              {({ open }) => (
                                <>
                                  <div className="relative flex">
                                    <Popover.Button
                                      className={classNames(
                                        open
                                          ? "border-indigo-600 text-indigo-600"
                                          : "border-transparent text-gray-700 hover:text-gray-800",
                                        "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                      )}
                                    >
                                      <PrismicRichText
                                        field={slice.primary.dropdown_label}
                                      />
                                    </Popover.Button>
                                  </div>

                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Popover.Panel className="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                                      <div
                                        className="absolute inset-0 top-1/2 bg-white shadow"
                                        aria-hidden="true"
                                      />

                                      <div className="relative bg-white">
                                        <div className="mx-auto max-w-7xl px-8">
                                          <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                            <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                              <div>
                                                <ul
                                                  role="list"
                                                  aria-labelledby={`desktop-featured-heading-${(
                                                    <PrismicRichText
                                                      field={
                                                        slice.primary
                                                          .dropdown_label
                                                      }
                                                    />
                                                  )}`}
                                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                >
                                                  {slice?.items?.map(
                                                    (item, idx) => (
                                                      <li
                                                        key={idx}
                                                        className="flex"
                                                      >
                                                        <PrismicLink
                                                          className="font-medium text-gray-900 hover:text-gray-700"
                                                          field={
                                                            item.second_level_link
                                                          }
                                                        >
                                                          <PrismicRichText
                                                            field={
                                                              item.second_level_label
                                                            }
                                                          />
                                                        </PrismicLink>
                                                      </li>
                                                    )
                                                  )}
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          )
                        }

                        {slice?.variation == "default" && (
                          <PrismicLink
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                            field={slice.primary.link}
                          >
                            <PrismicRichText field={slice.primary.label} />
                          </PrismicLink>
                        )}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  {/* <a href="#" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                      className="h-8 w-auto"
                    />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Menu;
