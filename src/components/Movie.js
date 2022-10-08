import React from "react";
import { Link } from "react-router-dom";
import PropTyes from "prop-types";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="img" />
      <Link to={`/movie/${id}`}>{title}</Link>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.prototype = {
  id: PropTyes.number.isRequired,
  coverImg: PropTyes.string.isRequired,
  title: PropTyes.string.isRequired,
  summary: PropTyes.string.isRequired,
  genres: PropTyes.arrayOf(PropTyes.string).isRequired,
};
export default Movie;
