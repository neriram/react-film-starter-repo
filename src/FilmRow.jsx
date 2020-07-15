import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log('fetching details for ' + film)
    }
    render() {

        return (
            <div>
                <div className="film-row" onClick={()=> this.handleDetailsClick('film')}>
                   <FilmPoster poster_path={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} 
                    title={this.props.film.title}
                   />
                    <div className="film-summary">
                        <h1>{this.props.film.title}</h1>
                        <p>{this.props.film.release_date.substring(0,4)}</p>
                    </div>
                    <Fave />
                </div>
            </div>
        );
    }
}

export default FilmRow;