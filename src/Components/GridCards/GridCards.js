import { Card } from 'react-bootstrap';
import img from '../../images/outOfPoster.jpg';
export default function GridCards({ options }) {
  return (
    <Card className="card">
      <Card.Img
        variant="top"
        src={
          options.poster_path
            ? `https://image.tmdb.org/t/p/w500/${options.poster_path}`
            : img
        }
      />
      <Card.Body>
        <Card.Title>{options.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
