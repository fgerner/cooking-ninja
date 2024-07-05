import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controler = new AbortController();

        const fetchData = async () => {
            setIsPending(true);
            try {
                const response = await fetch(url, {signal: controler.signal});
                const json = await response.json();
                setIsPending(false);
                setData(json);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("fetch aborted")
                }else {
                    setIsPending(false);
                    setError("Could not fetch the data");
                }
            }
        }
        fetchData()
        return () => {
            controler.abort()
        }
    }, [url]);
    return {data, isPending,error}
}
