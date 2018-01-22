/*
 * Copyright 2018 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Client } from 'boardgame.io/client';
import { HexGrid, Token } from 'boardgame.io/ui';
import ComplexGame from '../game';
import './index.css';

class Board extends React.Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any,
    events: PropTypes.any,
  };

  state = {
    x: 0,
    y: 0,
    z: 0,
  };

  clickCard = card => {
    this.props.moves.playCard(card);
  };

  clickHex = ({ x, y, z }) => {
    this.setState({ x, y, z });
  };

  render() {
    return (
      <div className="mk">
        <div className="mk-hand">
          {this.props.G.hand.map(card => (
            <pre
              className="mk-card"
              key={card.name}
              onClick={() => this.clickCard(card)}
            >
              {JSON.stringify(card, null, 2)}
            </pre>
          ))}
        </div>

        <HexGrid levels={6} onClick={this.clickHex}>
          <Token
            x={this.state.x}
            y={this.state.y}
            z={this.state.z}
            animate={true}
            style={{ fill: '#555' }}
          />
        </HexGrid>
      </div>
    );
  }
}

const App = Client({
  game: ComplexGame,
  numPlayers: 1,
  board: Board,
  debug: false,
});

const Render = () => (
  <div style={{ padding: 50 }}>
    <App gameID="single" />
  </div>
);

export default Render;
