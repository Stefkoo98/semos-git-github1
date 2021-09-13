import React from "react";
import PropTypes from 'prop-types';

export class Movies extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div id='movies'>
                <h2>Cool Movies</h2>
                <table border='1'>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Genre</th>
                            <th>Plot</th>
                            <th>ImdbLink</th>
                            <th>ImgURL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.map((movie, index) => {
                            return (
                                <tr key={index}>
                                    <td>{movie.name}</td>
                                    <td>{movie.date}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.plot}</td>
                                    <td><a href={movie.imdbLink}>{movie.imdbLink}</a></td>
                                    <td><img src={movie.imgURL} width='250px' height='200px' /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

Movies.propTypes = {
    movie: PropTypes.arrayOf(PropTypes.object).isRequired
}

