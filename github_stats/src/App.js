import React, { useState, useEffect } from "react";
import * as github from "octonode";
import "./App.css";

const client = github.client();

const Profile = (userData) => (
  <div className="card" style={{ width: 20 + "rem" }}>
    <img className="card-img-top" src={userData.avatar_url} />
    <div className="card-body">
      <h5 className="card-title">{userData.name}</h5>
      <h6 className="card-text">{userData.location}</h6>
      <p className="card-text">{userData.bio}</p>
    </div>
  </div>
);

export default function App() {
  let [userData, setUserData] = useState({});
  let [dataStatus, setDataStatus] = useState(false);
  let [reposStatus, setReposStatus] = useState(false);
  let [reposUrl, setReposUrl] = useState("");
  let [repos, setRepos] = useState({});
  let [searchInput, setSearchInput] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const SearchArea = () => (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => changeHandler(e)}
      />
      <div className="input-group-btn">
        <button
          className="btn btn-default"
          type="submit"
          onClick={() => console.log("hello")}
        >
          Search
        </button>
      </div>
    </div>
  );

  const Monitor = () => {
    if (reposStatus) {
      return <ul class="list-group">
        {repos.map(repo => <li class="list-group-item active">{repo.name}</li>)}
      </ul>
      
    } else {
      return <p> No repo data to filter! </p>;
    }
  };

  const getRepos = async () => {
    if (!reposStatus) {
      let response = await fetch(reposUrl);
      if (response.ok) {
        let json = await response.json();
        setRepos(json);
        console.log(json);
        setReposStatus(true);
      } else {
        alert("HTTP Error:" + response.status);
      }
    }
  };

  const getData = () => {
    if (!dataStatus) {
      client.get("/users/popescuaaa", {}, function (
        err,
        status,
        body,
        headers
      ) {
        setUserData(body);
        setDataStatus(true);
        setReposUrl(body.repos_url);
        console.log(body);
      });
    }
  };

  useEffect(() => {
    getData();
    getRepos();
  });

  return (
    <div className="container main">
      <div className="profile">{Profile(userData)}</div>
      <div className="search-bar">{SearchArea()}</div>
      <div className="monitor">{Monitor()}</div>
    </div>
  );
}
