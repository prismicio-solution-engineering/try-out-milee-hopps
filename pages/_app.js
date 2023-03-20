import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
    internalLinkComponent={({ href, locale, ...props }) => (
      <Link href={href} locale={locale}>
        <a {...props} />
      </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}