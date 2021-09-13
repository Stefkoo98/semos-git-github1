import React from "react";
import { Movies } from './components/Movies';
import { Filmovi } from './components/Filmovi';

const movies = [
  { name: 'Paid in full', date: '25-10-2002', genre: 'Action/Drama/Crime', plot: 'Ace is an impressionable young man working for a dry cleaning business. His friend, drug dealer Mitch goes to prison.', imdbLink: 'https://www.imdb.com/title/tt0259484/?ref_=fn_al_tt_1', imgURL: 'https://m.media-amazon.com/images/M/MV5BZWU5YmRhODYtM2Y2Ny00NTUzLWEwZGUtYzYyMjQwZmIwYTgxXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_.jpg' },
  { name: 'Menace II society', date: '26-03-1993', genre: 'Crime/Drama/Thriller', plot: 'A young street hustler attempts to escape the rigors and temptations of the ghetto in a quest for a better life.', imdbLink: 'https://www.imdb.com/title/tt0107554/?ref_=fn_al_tt_3', imgURL: 'https://m.media-amazon.com/images/M/MV5BNGE3MGI0MzItNjJjNC00ZTUzLTlmZTctOGUyMDllMWM2OTcxXkEyXkFqcGdeQXVyMjQ1MjYzOTQ@._V1_.jpg0' },
  { name: 'Friday', date: '26-8-1995', genre: 'Acion/Comedy', plot: 'It is Friday and Craig Jones (Ice Cube) is unemployed, having been fired yesterday. This has lead to trouble with Smokeys  supplier, Big Worm (Faizon Love), who now wants his money, or his product back, or Smokey is a dead man.', imdbLink: 'https://www.imdb.com/title/tt0113118/?ref_=fn_al_tt_1', imgURL: 'https://m.media-amazon.com/images/M/MV5BYmEwNjNlZTUtNzkwMS00ZTlhLTkyY2MtMjM2MzlmODQyZGVhXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg' }
]


const filmovi = [
  { name: 'Boyz n the Hood', date: '12-7-1991', genre: 'Crime/Drama', plot: 'Follows the lives of three young males living in the Crenshaw ghetto of Los Angeles, dissecting questions of race, relationships, violence, and future prospects.', imdbLink: 'https://www.imdb.com/title/tt0101507/?ref_=tt_sims_tt_i_3', imgURL: 'https://m.media-amazon.com/images/M/MV5BZmRjNDI5NTgtOTIwMC00MzJhLWI4ZTYtMmU0ZTE3ZmRkZDNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg' },
  { name: 'Notorious', date: '14-08-2015', genre: 'Biography/Drama/History', plot: 'In 1987, five young men, using brutally honest rhymes and hardcore beats, put their frustration and anger about life in the most dangerous place in America into the most powerful weapon they had: their music.', imdbLink: 'https://www.imdb.com/title/tt1398426/?ref_=tt_sims_tt_i_4', imgURL: 'https://upload.wikimedia.org/wikipedia/en/7/7d/Notoriousposter08.jpg' },
  { name: 'The kind of New York', date: '05-01-1991', genre: 'Crime/Thriller', plot: 'After completing a lengthy prison sentence, one-time drug kingpin Frank White returns to New York intent on reestablishing his empire and making things as they were before he left.', imdbLink: 'https://www.imdb.com/title/tt0099939/?ref_=fn_al_tt_1', imgURL: 'https://m.media-amazon.com/images/M/MV5BOTE2NDcxNzE4N15BMl5BanBnXkFtZTgwMDc1NTk4NjE@._V1_.jpg' }
]



export function App() {

  return (

    <div id="app">
      <Movies movies={movies} />
      <br />
      <br />
      <br />
      <Filmovi filmovi={filmovi} />
    </div>
  )
}