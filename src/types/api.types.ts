import type { ReactNode } from "react"

export type SanityQueryResponse<T> = {
  result: T[];
};

export type ProviderProps = {
  children: ReactNode;
};

export type TravelItem = {
  _id: string
  name: string
  image: string
  description: string
}

export interface Country extends TravelItem {
  code: string
}

export interface City extends TravelItem {
  slug: string
  countryId: string | null
}

export interface Attraction extends TravelItem {
  cityId: string | null
  slug: string
  latitude: number
  longitude: number
  address: string
  website: string
}
