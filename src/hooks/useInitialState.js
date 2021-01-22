import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  const { mylist = [], trends = [], originals = [] } = videos;

  return { mylist, trends, originals };
};

export default useInitialState;
