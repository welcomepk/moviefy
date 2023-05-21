import { fetchDataFromApi } from "../utils/api";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    // console.log("render useFetch", data);
    useEffect(() => {
        // console.log("render useFetch_useEffect");
        setIsLoading(true);
        fetchDataFromApi(url)
            .then(res => setData(res.data))
            .catch(err => {
                console.log(err);
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [url])

    return { data, isLoading, error };
}

export default useFetch;