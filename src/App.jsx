import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// import HomePage from './Pages/HomePage/HomePage';
const HomePage = React.lazy(() => import('./Pages/HomePage/HomePage'));
const MoviesPage = React.lazy(() => import('./Pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = React.lazy(() =>
  import('./Pages/MovieDetailsPage/MovieDetailsPage'),
);
const Layouts = React.lazy(() => import('./Components/Layouts/Layouts'));
const Review = React.lazy(() => import('./Pages/Reviews/Reviews'));
const Cast = React.lazy(() => import('./Pages/Cast/Cast'));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" exact element={<Layouts />}>
            <Route index element={<HomePage />} />
            <Route path="movies/*" exact element={<MoviesPage />} />
            <Route path="movies/:moviId/*" element={<MovieDetailsPage />}>
              <Route path="reviews" element={<Review />} />
              <Route path="cast" element={<Cast />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
