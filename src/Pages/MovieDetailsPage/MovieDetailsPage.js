import './MovieDetailsPage.scss';
import { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import Container from '../../Components/Container/Container';
import Cards from '../../Components/Cards/Cards';

export default function MovieDetailsPage() {
  const [detalisMovi, setDetalisMovi] = useState('');
  // const navigation = useNavigate();
  const { moviId } = useParams();

  // const body = document.querySelector('body');
  // let bgbody = {
  //   backgroundImage: `url(https://image.tmdb.org/t/p/w500/${detalisMovi.backdrop_path})`,
  // };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${moviId}?api_key=d2ada567dc639d858047ccd57be2d062&language=ua`,
      )
      .then(res => setDetalisMovi(res.data));
  }, [moviId]);

  // const body = document.querySelector('body');
  // const bgbody = {
  //   backgroundImage: `url(https://image.tmdb.org/t/p/w500/${detalisMovi.backdrop_path})`,
  //   color: 'red',
  // };
  // body.style = {
  //   backgroundImage: `url(https://image.tmdb.org/t/p/w500/${detalisMovi.backdrop_path})`,
  // };

  // const goBack = () => navigation(-1);

  return (
    <main
      className="bg"
      style={{
        backgroundImage: `linear-gradient(
      rgba(11, 16, 36, 0.904),
      rgba(61, 61, 61, 0.4)
    ),url(https://image.tmdb.org/t/p/original/${detalisMovi.backdrop_path})`,
      }}
    >
      <Container>
        {/* <button type="button" onClick={goBack}>
        Назад
      </button> */}
        <section className="MovieDetails">
          <div className="MovieDetails__photo">
            <Cards options={detalisMovi} />
          </div>

          <div className="MovieDetails__description">
            <h1>{detalisMovi.title}</h1>
            <p>
              Компании
              {detalisMovi &&
                detalisMovi.production_companies.map(compani => {
                  return <li key={compani.id}>{compani.name}</li>;
                })}
            </p>
            <p> Продолжительность: {detalisMovi.runtime} минут</p>
            <p> Девиз: {detalisMovi.tagline}</p>
            <p> Рейтинг: {detalisMovi.vote_average}</p>
            <h2>Описание</h2>
            <p>{detalisMovi.overview}</p>
          </div>
        </section>
        <section>
          <NavLink to="cast" className="link">
            Cast
          </NavLink>

          <NavLink to="reviews" className="link">
            Reviews
          </NavLink>

          <Outlet />
        </section>
      </Container>
    </main>
  );
}
