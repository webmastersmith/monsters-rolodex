import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { monsters } from "./monsters";
import { SearchBox } from "./components/search-box/search-box.component.jsx";
// import logo from "./logo.svg";
// import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters,
      search: "",
    };
  }

  // defers request until after render.
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ monsters: users }));
  // }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App h-100">
        <div className="flex justify-center py-8">
          <SearchBox
            placeholder="name search"
            handleChange={(e) => this.setState({ search: e.target.value })}
          />
        </div>

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
