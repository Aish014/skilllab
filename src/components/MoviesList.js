import React from "react";

function MoviesList() {
  const movies = [
    { name: "Avengers Endgame", genre: "Action", releaseDate: "2022-04-10", rating: "9.2", price: "300r" },
    { name: "The Batman", genre: "Thriller", releaseDate: "2012-05-15", rating: "7.5", price: "250r" },
  ];

  return (
    <div>
      <h2>Now Showing</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Rating</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.rating}</td>
              <td>{movie.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MoviesList;
