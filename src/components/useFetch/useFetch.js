const { axios } = require("axios");
const { useState, useEffect } = require("react")
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`http://localhost:5000${url}`)
                setData(res.data)
            } catch(err) {
                setError(err)
            }
        }
        fetchdata();
    }, [url]);

    const refetch = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`http://localhost:5000${url}`)
            setData(res.data);
        } catch(err) {
            setError(err);
        }
        setLoading(false);
    }

    return {data, loading ,error, refetch}
}



export default useFetch

