import { createContext, useContext } from "react";
import type { Attraction, ProviderProps, SanityQueryResponse } from "../types/api.types";
import { useFetch } from "../hooks/useFetch";
import { API_URL } from "../config/api";

type AttractionContextType = {
  attractions: Attraction[];
  error: string | null;
};

export const AttractionContext = createContext<AttractionContextType | undefined>(
  undefined
);

export const AttractionContextProvider = ({ children }: ProviderProps) => {
  const query = '*[_type == "attraction"]{_id, code, name, description, "cityId": city._ref, "image": coalesce(image.asset->url, ""), latitude, longitude, website,"cityId": city._ref,}';
  const apiUrl = `${API_URL}?query=${encodeURIComponent(query)}`;
  const { data, error } = useFetch<SanityQueryResponse<Attraction>>(
    `${apiUrl}`
  );

  return (
    <AttractionContext.Provider
      value={{
        attractions: data?.result ?? [],
        error,
      }}
    >
      {children}
    </AttractionContext.Provider>
  );
};

export const useAttractions = () => {
  const context = useContext(AttractionContext);

  if (!context) {
    throw new Error(
      "useAttraction skal bruges inden i AttractionContextProvider"
    );
  }

  return context;
};
