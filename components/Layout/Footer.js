import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";


const navLinks = (footer) => {
    return (
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {footer.data?.internalLinks?.map((menuLink, idx) => {
                return (
                    <div key={idx} className="px-5 py-2">
                        <div className="text-base text-gray-500 hover:text-gray-900">
                            <PrismicLink field={menuLink.link} >
                                <PrismicRichText field={menuLink.link_label} />
                            </PrismicLink>
                        </div>
                    </div>
                )
            })}
        </nav>
    )
}

const socialLinks = (footer) => {
    return (
        <div className="mt-8 flex justify-center space-x-6">
            {footer.data?.social_links?.map((item, idx) => (
                <div key={idx} field={item.social_link} className="text-gray-400 hover:text-gray-500">
                    <PrismicLink field={item.social_link}>
                        <img className="h-6 w-6" src={item.social_icon.url} alt={item.social_icon.alt} />
                    </PrismicLink>
                </div>
            ))}
        </div>
    )
}

const copyright = (footer) => {
    return (
        <span className="px-4 mt-8 text-center text-base text-gray-400">
            <PrismicRichText field={footer?.data?.copyright} />
        </span>
    )
}

export function Footer({ footer }) {
    return (
        <footer className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                {navLinks(footer)}
                {socialLinks(footer)}
                {copyright(footer)}
            </div>
        </footer >
    )
}