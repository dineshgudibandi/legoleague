export interface Painting {
  id?: number
  name: string
  year: number
  description: string
  images: Images
}

export interface Artist {
  image: string
  name: string
}

export interface Images {
  thumbnail: string
  hero: Hero
  gallery: string
}

export interface Hero {
  small: string
  large: string
}
