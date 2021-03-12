import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchingUrl = (link) => {
  const [object, setObject] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    await axios
      .get(link)
      .then(function (response) {
        setObject(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    setLoading(false);
  }, []);
  return { object, loading };
};
