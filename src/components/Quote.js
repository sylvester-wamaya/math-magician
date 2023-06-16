import React, { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const apiKey = 'rruW2yeTLFMLFy5iDM0R8w==YVB0xOk1qJHHR1fZ';
  const api = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(api, { headers: { 'X-Api-Key': `${apiKey}` } });
        const quoteData = await res.json();
        setQuote(quoteData);
      } catch (err) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuote, setIsLoading]);

  if (hasError) { <div>Something went wrong...</div>; }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}><p className="quote">{quote.length > 0 ? quote.map((item) => item.quote) : 'Something went wrong'}</p></div>
  );
}

export default Quote;
