const {
    getScoreService,
    createScoreService,
    deleteScoreService,
    updateScoreService,
} = require("../services/scoreServices");

const getScoreController = async (req, res) => {
    const { id } = req.query;
    try {
        const score = await getScoreService(+id);
        res.status(200).send({
            statusCode: 200,
            data: score,
        });
    } catch (e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
};
const createScoreController = async (req, res) => {
    try {
        const newScore = await createScoreService(req.body);
        res.status(200).send({
            statusCode: 200,
            data: newScore,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": "Something went wrong.",
        });
    }
};
const deleteScoreController = async (req, res) => {
    const { id } = req.query;
    try {
        await deleteScoreService(id);
        res.status(200).send({
            statusCode: 200,
            message: "Successfully.",
        });
    } catch (e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
};
const updateScoreController = async (req, res) => {
    const { id } = req.query;
    try {
        const score = await updateScoreService(+id, req.body);
        res.status(200).send({
            statusCode: 200,
            data: score,
        });
    } catch (e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
};

module.exports = {
    getScoreController,
    createScoreController,
    deleteScoreController,
    updateScoreController,
};
