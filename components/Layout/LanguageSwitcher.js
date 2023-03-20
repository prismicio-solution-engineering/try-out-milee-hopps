import { PrismicLink } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { useRouter } from "next/router";
// const LangIcon = ({ lang }) => {
//   const code = lang.substring(3).toLowerCase();

//   return <span className={`fi fi-${code}`} />;
// };

export const LanguageSwitcher = ({ currentLocale, locales, alternatesUrls }) => {

  const router = useRouter();

  function handleChange(e) {
    const newUrl = alternatesUrls.filter(alt => alt.lang === e.target.value);

    newUrl[0] ? router.push(newUrl[0].url, newUrl[0].url, { locale : newUrl[0].lang }) : router.push("/", "/", { locale : e.target.value}) // TO-DO route to 404 page then redirect to home or default locale of that page ?
  }

  return (
    <div className="ml-auto flex items-center">
      <div className="lg:ml-8 lg:flex">
        <a className="flex items-center text-gray-700 hover:text-gray-800">
          <select
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            onChange={handleChange}
            value={currentLocale}
          >
            {locales?.map((locale) => {
              return <option key={locale}>{locale}</option>;
            })}
          </select>
        </a>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
