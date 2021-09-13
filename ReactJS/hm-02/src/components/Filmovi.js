import React from 'react';
import PropTypes from 'prop-types';

export function Filmovi(props) {
    console.log(props);
    return (
        <div>
            <h2>Dobarrrr</h2>
            <table border='1'>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Genre</th>
                        <th>Plot</th>
                        <th>ImdbLink</th>
                        <th>ImgUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filmovi.map((film, i) => {
                        return (
                            <tr key={i}>
                                <td>{film.name}</td>
                                <td>{film.date}</td>
                                <td>{film.genre}</td>
                                <td>{film.plot}</td>
                                <td><a href={film.imdbLink}>{film.imdbLink}</a></td>
                                <td><img src={film.imgURL} width='250px' height='200px' /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


Filmovi.propTypes = {
    film: PropTypes.arrayOf(PropTypes.object).isRequired
}