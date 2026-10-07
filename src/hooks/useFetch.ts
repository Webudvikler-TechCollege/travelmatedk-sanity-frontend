import { useEffect, useState } from "react";

// Definer hvilke HTTP-metoder hooket kan bruge
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const useFetch = <T>(
  url: string,
  method: HttpMethod = "GET",
  token?: string | null
) => {

  // State til data fra API'et
  const [data, setData] = useState<T | null>(null);

  // State til fejlbeskeder
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    // Funktion som henter data fra API'et
    const fetchData = async () => {

      try {

        // Send request til API'et
        const response = await fetch(url, {
          method: method,

          headers: {
            "Content-Type": "application/json",

            // Tilføj token hvis den findes
            ...(token && {
              Authorization: `Bearer ${token}`
            })
          }
        });

        // Tjek om requestet gik godt
        if (!response.ok) {
          throw new Error(
            `${response.status}: ${response.statusText}`
          );
        }

        // Konverter response til JSON
        const result = await response.json();

        // Gem resultatet i state
        setData(result);

      } catch (err) {

        // Gem fejlbeskeden i state
        if (err instanceof Error) {
          setError(err.message);
        }

      }
    };

    // Kald fetch-funktionen
    fetchData();

  }, [url, method, token]);

  // Returner både data og error
  return { data, error };
};