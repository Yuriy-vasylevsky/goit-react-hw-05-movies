import './Navigation.css';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';

export default function Navigation() {
  return (
    <nav className="bg-heder">
      <Container>
        <NavLink to="/" className="link">
          Главная
        </NavLink>

        <NavLink to="/movies" className="link">
          Фильмы
        </NavLink>
      </Container>
    </nav>
  );
}
