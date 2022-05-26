import Card from 'react-bootstrap/Card';
import img from '../../images/outOfPoster.jpg';

export default function Cards({ options }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={
          options.poster_path
            ? `https://image.tmdb.org/t/p/w500/${options.poster_path}`
            : img
        }
      />

      <Card.Body className="card-bg">
        <Card.Title>
          <a href={options.homepage} className="link">
            Перейти на сайт фильма
          </a>
        </Card.Title>
        <Card.Text>{options.release_date}</Card.Text>
      </Card.Body>
    </Card>
  );
}
