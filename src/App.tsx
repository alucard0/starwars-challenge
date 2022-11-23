// Instructions:
// 1. Fetch the apiURL to get a list of star wars films on page load. [x]
// 2. Display the title of each film in an unordered list (<ul>). [x]
// 3. Add a button to each list element (<li>) that, upon click,
//    will show the name of all characters in the movie.
// 4. Feel free to google whatever you want. I'm not looking for
//    perfect memory of everything. I only want to know how you
//    approach problems.
//
// Notes:
// * Feel free to disregard styles completely.
// * You can google everything you want. Stack Overflow,
//   MDN, react docs... you name it. Just do let me know what
//   you are looking for.
// * Don't be afraid of asking questions. I'm here to help.

import "./App.css"
import FilmList from "./components/FilmList/FilmList"

function App(): JSX.Element {
  return (
    <div className='App'>
      <div id='intro'>
        <h1>StarWars films</h1>
        <p>A long time ago, in a galaxy far, far away...</p>
      </div>

      <div id='list'>
        <h2>Movie List:</h2>
        <FilmList />
      </div>
    </div>
  )
}

export default App
