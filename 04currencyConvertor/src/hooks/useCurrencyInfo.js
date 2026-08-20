import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // API currency codes uppercase maangti hai (e.g. USD)
    fetch(`https://v6.exchangerate-api.com/v6/ebf9231c69f0534e9fa80479/latest/${currency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates || {}))
      .catch((err) => console.error("Error fetching currency rates:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;