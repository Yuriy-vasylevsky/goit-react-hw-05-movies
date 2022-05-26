import './Cast.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import defaultImgActor from '../../images/defaultImgActor.png';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function Cast() {
  const [movicast, setMovicast] = useState('');
  const { moviId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${moviId}/credits?api_key=d2ada567dc639d858047ccd57be2d062&language=ru`,
      )
      .then(res => setMovicast(res.data.cast));
  }, [moviId]);

  return (
    <div className="">
      <ul className="grid">
        {movicast &&
          movicast.map(cast => {
            return (
              <li key={cast.id} className="item">
                {/* <img src="" alt="" />
                {cast.original_name} */}

                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                        : defaultImgActor
                    }
                  />
                  <Card.Body>
                    <Card.Title>{cast.original_name}</Card.Title>
                  </Card.Body>
                </Card>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
