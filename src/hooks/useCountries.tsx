import { createContext, useContext } from "react";
import type { Country, ProviderProps, SanityQueryResponse } from "../types/api.types";
import { useFetch } from "../hooks/useFetch";
import { API_URL } from "../config/api";

type CountryContextType = {
  countries: Country[];
  error: string | null;
};

export const CountryContext = createContext<CountryContextType | undefined>(
  undefined
);

export const CountryContextProvider = ({ children }: ProviderProps) => {
  const query = '*[_type == "country"]{_id, code, name, description, "image": coalesce(image.asset->url, "")}';
  const apiUrl = `${API_URL}?query=${encodeURIComponent(query)}`;
  const { data, error } = useFetch<SanityQueryResponse<Country>>(
    `${apiUrl}`
  );

  return (
    <CountryContext.Provider
      value={{
        countries: data?.result ?? [],
        error,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountries = () => {
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error(
      "useCountries skal bruges inden i CountryContextProvider"
    );
  }

  return context;
};
