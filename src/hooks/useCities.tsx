import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { City } from "../types/api.types";
import { useFetch } from "../hooks/useFetch";
import { API_URL } from "../config/api";

type ProviderProps = {
  children: ReactNode;
};

type SanityQueryResponse<T> = {
  result: T[];
};

type CityContextType = {
  cities: City[];
  error: string | null;
};

export const CityContext = createContext<CityContextType | undefined>(
  undefined
);

export const CityContextProvider = ({ children }: ProviderProps) => {
  const query = '*[_type == "city"]{_id, name, description, "countryId": country._ref, "image": coalesce(image.asset->url, "")}';
  const apiUrl = `${API_URL}?query=${encodeURIComponent(query)}`;
  const { data, error } = useFetch<SanityQueryResponse<City>>(
    `${apiUrl}`
  );

  return (
    <CityContext.Provider
      value={{
        cities: data?.result ?? [],
        error,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export const useCities = () => {
  const context = useContext(CityContext);

  if (!context) {
    throw new Error(
      "useCities skal bruges inden i CityContextProvider"
    );
  }

  return context;
};
