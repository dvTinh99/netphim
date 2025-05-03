import type { Category } from './Category'
import type { Country } from './Country'

export interface Movie {
  tmdb: {
    type: string
    id: string
    season: number
    vote_average: number
    vote_count: number
  }
  imdb: {
    id: string | number | null
  }
  modified: {
    time: string
  }
  _id: string
  name: string
  slug: string
  origin_name: string
  type: string
  poster_url: string
  thumb_url: string
  sub_docquyen: boolean
  time: string
  episode_current: string
  quality: string
  lang: string
  year: number
  category: Category[]
  country: Country[]
  content: string
  actor: string[]
  director: string[]
  episodes: Episode[]
}

export interface Episode {
  server_name: string
  server_data: EpisodeData[]
}

export interface EpisodeData {
  name: string
  slug: string
  fileName: string
  link_embed: string
  link_m3u8: string
}
