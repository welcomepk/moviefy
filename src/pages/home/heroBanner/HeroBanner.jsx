import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";

import "./style.scss"

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector(state => state.home);
    const { data, isLoading, error } = useFetch("/movie/upcoming");

    useEffect(() => {
        if (data) {
            const bg_url = data.results[Math.floor(Math.random() * 20)].backdrop_path
            setBackground(url.backdrop + bg_url);
        }
    }, [data]);

    const handleSearchQuery = (e) => {
        e.preventDefault();
        if (query.length > 0) {
            navigate("/search/" + query)
        }
    }

    return (
        <div className='heroBanner'>
            {!isLoading && <div className="backdrop-img">
                <Img src={background} />
            </div>}
            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover. Explore now.
                    </span>
                    <form onSubmit={handleSearchQuery} className="searchInput">
                        <input type="text" placeholder='Search for a movie or TV show...'
                            value={query}
                            // onKeyUp={handleSearchQuery}
                            onChange={e => setQuery(e.target.value)}
                        />
                        <button onClick={handleSearchQuery}>Search</button>
                    </form>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner