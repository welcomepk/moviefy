import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import "../style.scss"

const TopRated = () => {

    const [endpoint, setEndpoint] = useState("movie");
    const { data, isLoading, error } = useFetch(`/${endpoint}/top_rated`)

    const onTabChange = (tab, index) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    }

    return (
        <section className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} isLoading={isLoading} endpoint={endpoint} />
        </section>
    )
}

export default TopRated