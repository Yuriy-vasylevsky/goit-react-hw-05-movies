// import axios from 'axios';
import './HomePage.scss';
import Api from '../../services/tehMovi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GridCards from '../../Components/GridCards/GridCards';
import Container from '../../Components/Container/Container';
export default function HomePage() {
  const [trendMovi, setTrendMovi] = useState('');

  useEffect(() => {
    Api.ApiTehMovi().then(res => setTrendMovi(res));
  }, []);

  return (
    <main className="main-bg">
      <Container>
        <section className="">
          <ul className="grid ">
            {trendMovi &&
              trendMovi.map(movi => {
                return (
                  <li className="item">
                    <Link
                      to={`/movies/${movi.id}`}
                      key={movi.id}
                      className="link"
                    >
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
