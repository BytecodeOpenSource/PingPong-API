import * as express from 'express';
const router = express.Router();

import controllers from '../controllers';
const { Status, Player, Team, Game } = controllers;

router.get('/status', Status.ok);
router.post('/player/authenticate', Player.auth);
router.post('/player/register', Player.register);
router.post('/team/create', Team.create);
//TODO:
//router.post('/team/members', Team.getMembers)
router.post('/team/get-all-data', Team.getAll);
router.post('/game/create', Game.createGame);

export default router;
