import React, { Component } from 'react';
import './App.css';
import Resume from './Resume' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="item1" className="App-header">
          <img src={process.env.PUBLIC_URL + './pink.jpeg'} className="App-logo" alt="logo" />
          <h1 className="App-title">Darlene Welch</h1>
        </header>
        <div id="item2" className="App-intro">
          {/* <h1>About Me</h1>
          <div></div> */}

        </div>
        <div id="item3">
          <h1>Projects</h1>
          <div class="proj-title"><b>Terminal RPG</b></div>
            <em>NodeJS</em>
            <br />This command line interface game walks the player through a series of rooms. The player must make it to the end alive to save the world.
          <div class="proj-title"><b>Magic The Gathering</b></div>
            <em>ReactJS, Redux, MongoDB, Node, Express</em>
            <br />Search cards using a 3rd party API, create a deck and save cards to that deck. Test the deck by yourself or with a friend with basic game mechanics.
          <div class="proj-title"><b>Secret Advice Messenger</b></div>
            <em>C#, .Net, VueJS, TypeScript</em>
            <br />A random username and profile is generated, matching the user to an unknown person to ask for advice.
        </div>

        <div id="item4" className="resume">
          <h1>Resume</h1>
          {<Resume />}
        </div>
        <div id="item5">
          <h1>Contact</h1>          
          {/* <p></p>
          <iframe title="fill-in" height="300px" width="100%" src="" name="iframe_a"></iframe>
          <p><a href="https://magic-the-gathergame.herokuapp.com/" target="iframe_a">Magic</a></p>
          <p><a href="https://the-dog-finder.herokuapp.com//" target="iframe_a">Dogs</a></p>
          <p><a href="https://docs.google.com/document/d/e/2PACX-1vQzQUDQ7ui7yMx7KRb2NRvjIcQDUEPeRRPO5tmK9vnqFw-4iP6BymhadPrvrJKCi-0ieOcLfJjIfZaN/pub?embedded=true" target="iframe_a">Resume</a></p> */}
          <p><a href="https://www.linkedin.com/in/darlene-welch/">LinkedIn</a></p>
          <p><a href="https://github.com/twilight-princess">GitHub</a></p>
          <p><a href="https://bitbucket.org/eliwel/">BitBucket</a></p>
          <p><a href="https://www.facebook.com/darelieva">Facebook</a></p>        </div>
      </div>
    );
  }
}

export default App;
