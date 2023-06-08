import React, { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [hasError, setHasError] = useState(false)

  const apiKey = 'rruW2yeTLFMLFy5iDM0R8w==YVB0xOk1qJHHR1fZ';
  const api = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(api,
          {
            method: 'GET',
            withCredentials: true,
            headers: {
              'X-Api-Key': `${apiKey}`,
              'Content-Type': 'application/json',
            },
          });
        const quoteData = await res.json();
        setQuote(quoteData);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        // setHasError(true)
      }
    };
    fetchQuote();
  }, [setQuote]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>{quote.map((item) => item.quote)}</div>
  );
}

export default Quote;
