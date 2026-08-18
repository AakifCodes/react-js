import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/ebf9231c69f0534e9fa80479/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])

    return Data

}

export default useCurrencyInfo