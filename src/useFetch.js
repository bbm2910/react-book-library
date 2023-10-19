import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [info, setInfo] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        //pause the fetch
        const abortCntrl = new AbortController();

        setTimeout(() => { //setTimeout added to simultate the fetch from the server
            fetch(url, { signal: abortCntrl.signal })
                .then(response => {
                    if (!response.ok) {
                        throw Error('Data could not be fetched for this resource.')
                    }
                    return response.json();
                })
                .then((data) => {
                    setInfo(data);
                    setLoading(false);
                    setError(null);
                })
                .catch(fetchErr => {
                    if (fetchErr.name === "AbortError") {
                        console.log('fetch canceled');
                    }
                    else {
                        setError(fetchErr.message);
                        setLoading(false);
                    }
                })
        }, 1500);
        return () => abortCntrl.abort();

    }, [url]);

    return { info, isLoading, error }
}
export default useFetch;
