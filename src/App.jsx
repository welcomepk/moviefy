
import Home from "./pages/home/Home";
import PageNotFound from "./pages/404/PageNotFound";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResult";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { fetchDataFromApi } from "./utils/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getApiConfig, getGenres } from "./store/homeSlice";

function App() {

  const dispatch = useDispatch();

  const fetchConfig = () => {
    fetchDataFromApi("/configuration")
      .then(res => {
        const url = {
          backdrop: res.data?.images.secure_base_url + "original",
          poster: res.data?.images.secure_base_url + "original",
          profile: res.data?.images.secure_base_url + "original",
        }
        dispatch(getApiConfig(url))
      })
  }
  const fetchAllGenres = async () => {
    const allGenres = {};
    const types = ['tv', 'movie'];
    const promises = [];
    types.forEach(type => {
      promises.push(fetchDataFromApi(`/genre/${type}/list`));
    })
    let data = await Promise.all(promises);
    data = [...data.map(obj => obj.data)]

    data?.forEach(({ genres }) => {
      genres?.forEach(genre => {
        allGenres[genre.id] = genre
      })
    })
    dispatch(getGenres(allGenres));
  }
  useEffect(() => {
    fetchConfig();
    fetchAllGenres();
  }, []);


  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mediaType/:id" element={<Details />} />  // tv-show or movie
      <Route path="/search/:query" element={<SearchResult />} />
      <Route path="/explore/:mediaType" element={<Explore />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
}

export default App
