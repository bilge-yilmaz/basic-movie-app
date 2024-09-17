import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
         <div className='container-fluid movie-app'>
         <div className="row">
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					 <div className="col"><img src={movie.Poster} alt=""></img></div>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
             </div>
             </div>
		</>
	);
};

export default MovieList;