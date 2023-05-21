
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, isLoading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    if (data?.results.length === 0) return null;

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            isLoading={isLoading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;