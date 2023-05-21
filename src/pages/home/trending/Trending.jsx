import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import "../style.scss"
import ErrorBoundary from "../../../components/errorBoudaries/ErrorBoundary";

const OurFallbackComponent = ({ error, componentStack, resetErrorBoundary }) => {
    return (
        <div>
            <h1>An error occurred: {error.message}</h1>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
};

const Trending = () => {

    const [endpoint, setEndpoint] = useState("day");
    const { data, isLoading, error } = useFetch("/trending/all/" + endpoint)


    const onTabChange = (tab, index) => {
        setEndpoint(tab === "Day" ? "day" : "week")
    }
    return (
        <section className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} isLoading={isLoading} />
        </section>
    )
}

export default Trending