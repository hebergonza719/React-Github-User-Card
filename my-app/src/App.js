import React from 'react';
import './App.css';
import UserCard from "./Components/UserCard";



class App extends React.Component {
  state = {
    followersList: [],
    user: {},
  };

  componentDidMount() {
    fetch("https://api.github.com/users/hebergonza719")
      .then(res => res.json()) // needs to be parsed
      .then(gitUser => { // above line turns response into json then used as "user"
        console.log("this is user", gitUser)
        this.setState({ ...this.state, user: gitUser });
      })
      .catch(err => {console.log("this is error", err);})

      
    fetch(`https://api.github.com/users/hebergonza719/followers`)
      .then(res => res.json())
      // WHAT IS IT DOING HERE?
      .then(followers => {
        console.log("this is this.state.followersList before change", this.state.followersList);
        // why did it delete what I previously had?
        this.setState({ ...this.state, followersList: followers });
        console.log("this is the updated followersList in state", this.state.followersList);
      })
      .catch(err => {console.log("this is error", err);})
  }

  render() {
    return (
      <div className="application">
        <UserCard gitUser={this.state.user} />
        <div>
            <h1>These are your followers: </h1>
          {this.state.followersList.map(follower => {
            console.log("this is in render: return: forEach: follower", follower);
            return ( 
              <UserCard gitUser={follower} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
