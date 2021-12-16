import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleSearchChange(event) {
    event => this.setState({searchField: event.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

  
    return (
      <div className="App">
        <SearchBox placeHolder='search monsters' handleChange={this.handleSearchChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;