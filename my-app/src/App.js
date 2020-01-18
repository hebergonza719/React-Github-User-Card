import React from 'react';
import './App.css';
import UserCard from "./Components/UserCard";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followersList: ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'K-JHarris'],
      user: {}
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/hebergonza719")
      .then(res => res.json()) // needs to be parsed
      .then(gitUser => { // above line turns response into json then used as "user"
        console.log("this is user", gitUser)
        console.log("this is followers", gitUser.followers.toString());
        this.setState({ ...this.state, user: gitUser });
      })
      .catch(err => {console.log("this is error", err);})
  }

  render() {
    return (
      <div>
        <UserCard gitUser={this.state.user}/>
      </div>
    );
  }
}

export default App;
