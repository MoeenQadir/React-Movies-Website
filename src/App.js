
import './App.css';
import './Components/Movies.js'
import Movies from './Components/Movies.js'
import Header from './Components/Header.js'
import json from './Components/movie.json'



function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-movies'>
        {
        json.map((element,index)=>{
          return (
          <Movies 
          key={index}
          poster={element.Poster} 
          title={element.Title} 
          year={element.Year}
          />
          )
        })
        }
      </div>
    </div>
  )
      }

export default App;
