import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const SimilarMovies = ({ mediaType, id }) => {
    const { data, isLoading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
    if (data?.results.length === 0) return null;
    return (
        <Carousel
            title={title}
            data={data?.results}
            isLoading={isLoading}
            endpoint={mediaType}
        />
    );
};

export default SimilarMovies;
