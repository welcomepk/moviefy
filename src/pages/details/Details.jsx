import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import SimilarMovies from "./carousels/SimilarMovies";
import Recommendation from "./carousels/Recommendation";
import "./style.scss"

const Details = () => {
    const { mediaType, id } = useParams();
    const { data, isLoading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, isLoadingCredits } = useFetch(`/${mediaType}/${id}/credits`);


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