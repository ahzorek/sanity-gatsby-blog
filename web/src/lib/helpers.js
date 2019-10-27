import {format, isFuture, parseISO} from 'date-fns'

export function cn (...args) {
  return args.filter(Boolean).join(' ')
}

export function mapEdgesToNodes (data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs ({slug}) {
  return (slug || {}).current
}

export function filterOutDocsPublishedInTheFuture ({publishedAt}) {
  return !isFuture(parseISO(publishedAt))
}

export function getBlogUrl (publishedAt, slug) {
  return `/${format(parseISO(publishedAt), 'MM/yyyy')}/${slug.current || slug}/`
}

export function buildImageObj (source = {asset: {}}) {
  const imageObj = {
    asset: {_ref: source.asset._ref || source.asset._id}
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

export function toPlainText (blocks) {
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}

export function hexToRGB(hex) {
  if(hex[0] !== '#' && hex.length !== 6 && hex.length !== 3){
    console.error('Received as HEX color:', hex)
  }
  const hexNum = hex[0] === '#' ? hex.slice([1]) : hex
  let bigint = parseInt(hexNum, 16),
      r = (bigint >> 16) & 255,
      g = (bigint >> 8) & 255,
      b = bigint & 255
  return [r,g,b]
}

export function convertToDueToneToMatrixString(x,y) {

  const color1 = hexToRGB(x)
  const color2 = hexToRGB(y)
  
  let c1   = {}
  c1.red   = color1[0] / 256
  c1.green = color1[1] / 256
  c1.blue  = color1[2] / 256
  
  let c2   = {}
  c2.red   = color2[0] / 256
  c2.green = color2[1] / 256
  c2.blue  = color2[2] / 256
  
  let value = []
  value = value.concat([c1.red - c2.red, 0, 0, 0, c2.red])
  value = value.concat([c1.green - c2.green, 0, 0, 0, c2.green])
  value = value.concat([c1.blue - c2.blue, 0, 0, 0, c2.blue])
  value = value.concat([0, 0, 0, 1, 0])

  return value.join(' ')
}

export const tmdb = "e552afa43f0a855512b415a7ea01196f"

export const Widths = {
  XLarge: '1280px',
  Large: '860px',
  Medium: '520px',
}

export function readTime(source, wordsPerMinute = 150){
  return Math.ceil((toPlainText(source.bodyText).split(" ").length) / wordsPerMinute)
}

export function getPos(img){
  return {
    X: img.hotspot ? Math.round(img.hotspot.x * 100) + '%' : 'center', 
    Y: img.hotspot ? Math.round(img.hotspot.y * 100) + '%' : 'center'
  }
}

export function isBrowser(){
  return typeof window !== 'undefined'
}