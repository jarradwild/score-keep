// Load React:
import React from 'react';
import ReactDOM from 'react-dom';

// How to load a meteor module:
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

// Load players.js
import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';


Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    let title = 'Score Keep';
    ReactDOM.render(<App title={title} players={positionedPlayers} />, document.getElementById('app'));
  });
});
