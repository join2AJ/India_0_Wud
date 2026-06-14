import { useEffect } from 'react'

export const SITE_URL = 'https://india-0-wud.netlify.app'
export const SITE_NAME = 'Indowud NFC'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

function setMeta(attr, key, value) {
  if (!value) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!data) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Sets the document title, meta description, canonical URL, Open Graph /
 * Twitter card tags and an optional JSON-LD block for the current route.
 * Renders nothing - it's a head-management side effect only, since the
 * project has no react-helmet-style dependency.
 */
export default function Seo({ title, description, path = '', image, type = 'website', jsonLd, noindex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — A Pioneering Wood That Lets You Breathe Freely`
    const desc = description || 'Indowud — Climate-positive Natural Fibre Composite boards from agricultural rice husk waste. A pioneering wood that lets you breathe freely.'
    const url = `${SITE_URL}${path}`
    const img = image || DEFAULT_IMAGE

    document.title = fullTitle
    setMeta('name', 'description', desc)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setLink('canonical', url)

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:site_name', SITE_NAME)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)
    setMeta('name', 'twitter:image', img)

    setJsonLd('seo-jsonld', jsonLd)

    return () => setJsonLd('seo-jsonld', null)
  }, [title, description, path, image, type, jsonLd, noindex])

  return null
}
