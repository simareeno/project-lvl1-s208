#!/usr/bin/env node

import { welcomeUser, game } from '..';

const ROUNDS = 3;

const user = welcomeUser();
game(ROUNDS, user);
