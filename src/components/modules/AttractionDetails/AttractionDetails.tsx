import { useParams } from "react-router-dom";
import { useAttractions } from "../../../hooks/useAttractions";
import { BackLink } from "../../elements/BackLink/BackLink";
import { LocationMap } from "../LocationMap/LocationMap";
import { ContentWrapper } from "../../../layouts/ContentWrapper/ContentWrapper";
import { AttractionDetailsStyled } from "./AttractionDetails.styled";

export const AttractionDetails = () => {
    const { id } = useParams();
    const { attractions, error } = useAttractions();

    const attraction = attractions.find(
        attraction => attraction._id === id
    )

    if (error) {
        return `<p>Der opstod en fejl: ${error}</p>`;
    }

    if (!attraction) {
        return <p>Henter sted...</p>;
    }

    return (
        <ContentWrapper pagetitle={attraction.name}>
            <AttractionDetailsStyled>
                <BackLink />
                <div className="details-grid">
                    <img
                        className="details-image"
                        src={attraction.image}
                        alt={attraction.name}
                    />
                    <div className="details-content">
                        <p>{attraction.description}</p>

                        <a
                            href={attraction.website}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Besøg hjemmeside
                        </a>
                    </div>
                </div>

                <LocationMap
                    latitude={attraction.latitude}
                    longitude={attraction.longitude}
                    name={attraction.name}
                />

            </AttractionDetailsStyled>

        </ContentWrapper>
    );
};