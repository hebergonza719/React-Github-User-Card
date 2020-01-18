import React from "react";


function UsedCard({ gitUser }) {
  return (
    <div class="card">
      <img src={gitUser.avatar_url}/>
      <div class="card-info">
        <h3 class="name">{gitUser.name}</h3>
        <p >Username: {gitUser.login}</p>
        <p>Location: {gitUser.location}</p>
        <p>Profile: 
          <a href={gitUser.html_url}>{gitUser.html_url}</a>
        </p>
        <p>Followers: {gitUser.followers}</p>
        <p>Following: {gitUser.following}</p>
        <p>Bio: {gitUser.bio}</p>
      </div>
    </div>
  )
}

export default UsedCard;