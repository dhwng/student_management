const express = require("express");
const {
    getScoreController,
    createScoreController,
    deleteScoreController,
    updateScoreController, 
} =  require("../controllers/scoreControllers");

const scoreRouter = express.Router();

scoreRouter.get('/getScore',getScoreController);
scoreRouter.post('/createScore',createScoreController); 
scoreRouter.delete('/deleteScore',deleteScoreController); 
scoreRouter.put('/updateScore',updateScoreController);

module.exports = {
    scoreRouter,
}