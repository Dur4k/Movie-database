import { useState, useEffect } from "react";

export const useFetchingUrl = (link) => {
  const [object, setObject] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(link);
        const json = await response.json();
        setObject(json);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [link]);
  return { object };
};
export const useFetchingUrl1 = (link) => {
  const [object1, setObject1] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(link);
        const json = await response.json();
        setObject1(json.cast.map((i) => i));
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [link]);
  return { object1 };
};

export const useFetchingUrl2 = (link) => {
  const [object2, setObject2] = useState([]);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(link);
        const json = await response.json();
        setObject2(json.results);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
    setLoading2(false);
  }, [link]);
  return { object2, loading2 };
};
export const useFetchingUrl3 = (link) => {
  const [object3, setObject3] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(link);
        const json = await response.json();
        setObject3(json.genres);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [link]);
  return { object3 };
};
