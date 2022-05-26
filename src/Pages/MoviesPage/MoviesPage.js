import './MoviesPage.scss';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Container from '../../Components/Container/Container';
import GridCards from '../../Components/GridCards/GridCards';
import Searchbar from '../../Components/Searchbar/Searchbar';

export default function MoviesPage() {
  const [movis, setMovis] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQery, setsearchQery] = useState(searchParams.get('qery') ?? '');

  useEffect(() => {
    if (searchQery === '') {
      return;
    }

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d2ada567dc639d858047ccd57be2d062&language=en-US&query=${searchQery}&page=1&include_adult=false`,
      )
      .then(res => setMovis(res.data.results));
    setSearchParams({ qery: searchQery });
  }, [searchQery, setSearchParams]);

  const getSearchQery = value => {
    setsearchQery(value);
  };

  return (
    <main className="main-bg">
      <Container>
        <Searchbar getSearchQery={getSearchQery} />
        <section className="section-movi">
          <ul className="grid">
            {movis.map(movi => {
              return (
                <li className="item">
                  <Link to={`${movi.id}`} key={movi.id} className="link">
                    <GridCards options={movi} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </Container>
    </main>
  );
}
