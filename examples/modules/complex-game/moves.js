/*
 * Copyright 2018 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

function playCard(G, ctx, card) {
  switch (ctx.phase) {
    case 'move': {
      // Remove card from hand.
      const index = G.hand.findIndex(c => c.name == card.name);
      const hand = [...G.hand.slice(0, index), ...G.hand.slice(index + 1)];

      // Update moveTotal.
      const moveTotal = G.moveTotal + card.basic.move || 0;

      // Return new G.
      return { ...G, moveTotal, hand };
    }

    default:
      return G;
  }
}

export default {
  playCard,
};
