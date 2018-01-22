/*
 * Copyright 2018 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import * as Mana from './mana';

export const MARCH = {
  name: 'MARCH',
  basic: { move: 2 },
  advanced: { move: 4 },
  mana: Mana.GREEN,
};

export const STAMINA = {
  name: 'STAMINA',
  basic: { move: 2 },
  advanced: { move: 4 },
  mana: Mana.BLUE,
};
