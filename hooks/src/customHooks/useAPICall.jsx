import React, { useEffect, useState } from "react";

function UseAPICall(api) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((dataResp) => setData(dataResp));

    setLoading(false);
  }, [api]);

  return { data, loading };
}

export default UseAPICall;
