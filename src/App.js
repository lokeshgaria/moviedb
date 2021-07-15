import Header from "./components/Header";
import Movies from "./components/Movie";
import MovieDetails from "./components/MovieDetails"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";




function App() {
  return (
    <div className="App">
    
      <Router>
      <Header />
      {/**movies */}
        <Switch>
          <Route path="/" exact render={() =>   <Movies />  } />
          <Route path="/movieDetail/:id" exact render={() => <MovieDetails />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
