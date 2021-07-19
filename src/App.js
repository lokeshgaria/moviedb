import React , {useState} from "react";
import Header from "./components/Header";
import Movies from "./components/Movie";
import MovieDetails from "./components/MovieDetails"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";




function App() {

const [movie , setMoviename] = useState("");
 const getmovieName =(name) =>{
   console.log("movie name",name)
   setMoviename(name);
}


  return (
    <div className="App">
    
      <Router>
      <Header sendName={getmovieName} />
      {/**movies */}
        <Switch>
          <Route path="/" exact render={(props) =>   <Movies {...props} movieName={movie} />  } />
          <Route path="/movieDetail/:id" exact render={() => <MovieDetails />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
