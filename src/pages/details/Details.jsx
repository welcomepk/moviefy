import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import SimilarMovies from "./carousels/SimilarMovies";
import Recommendation from "./carousels/Recommendation";
import "./style.scss"
import Error from "../../components/error/Error";
const Details = () => {
    const { mediaType, id } = useParams();
    const { data, isLoading, error: videosError } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, isLoading: isLoadingCredits, error: creditsError } = useFetch(`/${mediaType}/${id}/credits`);


    if (videosError)
        return <Error>{(videosError.message === "Network Error" ? "Check your network connection 📶" : videosError.message) || "Something went wrong!"}</Error>

    return (
        <div>
            <DetailsBanner video={data?.results[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} isLoading={isLoadingCredits} />
            <VideosSection data={data} isLoading={isLoading} />
            <SimilarMovies
                mediaType={mediaType}
                id={id}
            />
            <Recommendation mediaType={mediaType}
                id={id} />
        </div>
    )
}

export default Details