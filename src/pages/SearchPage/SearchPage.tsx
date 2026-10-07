import { Link, useSearchParams } from "react-router-dom";
import { Hero } from "../../components/partials/Hero/Hero";
import { useCountries } from "../../hooks/useCountries";
import { useCities } from "../../hooks/useCities";
import { useAttractions } from "../../hooks/useAttractions";
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper";
import { Card } from "../../components/modules/Card/Card";

export const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const query = (searchParams.get("keyword") ?? "").trim()
  const { countries, error: countryErrors } = useCountries()
  const { cities, error: cityErrors } = useCities()
  const { attractions, error: attractionErrors } = useAttractions()

  const searchTerm = query.toLocaleLowerCase("da")

  const groups = [
    { title: "Lande", path: "countries", items: countries, error: countryErrors },
    { title: "Byer", path: "cities", items: cities, error: cityErrors },
    { title: "Seværdigheder", path: "attractions", items: attractions, error: attractionErrors },
  ].map(group => ({
    ...group,
    results: searchTerm ? group.items.filter(item => 
      (item.name ?? "").toLocaleLowerCase("da").includes(searchTerm) 
    ) : []
  }))

  const resultCount = groups.reduce((total, group) => total + group.results.length, 0)

  return (
    <>
      <Hero />
      <ContentWrapper pagetitle={`Søgeresultater`}>
        <p>Søgning på <i>{query}</i></p>
        {!query ? (
            <p>Indtast et søgeord i søgefeltet.</p>
          ) : (
            <>
              <p>{resultCount} resultat(er) fundet.</p>
              {groups.map(group => (
                <section key={group.path} aria-labelledby={`search-${group.path}`}>
                  <h2 id={`search-${group.path}`}>{group.title}</h2>

                  {group.error ? (
                    <p role="alert">Kunne ikke hente {group.title.toLocaleLowerCase('da')}</p>
                  ) : group.results.length === 0 ? (
                      <p>Ingen resultater</p>
                  ) : (
                    <div>
                      {group.results.map(item => (
                        <Link key={item._id} to={`/${group.path}/${item._id}`}>
                          <Card 
                            image={item.image} 
                            title={item.name} 
                            subtitle={item.description ?? ""}
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </>
          )}
      </ContentWrapper>
    </>
  )
};
