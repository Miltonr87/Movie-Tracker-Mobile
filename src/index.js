import React from "react";
import ReactDOM from "react-dom";
import SearchMovies from "./components/SearchMovies";
import Footer from "./components/Footer";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">🎬 Movie Tracker Mobile</h1>
        <SearchMovies />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
