import './Reviews.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [moviReviews, setMoviReviews] = useState([]);
  const { moviId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${moviId}/reviews?api_key=d2ada567dc639d858047ccd57be2d062&language=en-US&page=1`,
      )
      .then(res => setMoviReviews(res.data.results));
  }, [moviId]);

  return (
    <div className="">
      {moviReviews &&
        moviReviews.map(cast => {
          return (
            <div className="" key={cast.id}>
              <p>{cast.author_details.name}</p>
              <p>{cast.content}</p>
            </div>
          );
        })}
    </div>
  );
}
