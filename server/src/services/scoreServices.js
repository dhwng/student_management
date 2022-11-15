const { Score, sequelize } = require("../models/index");
const { QueryTypes } = require("sequelize");
const createScoreService = async (data) => {
    const {studentId,courseId,exam15, exam45, examFinal} = data;

    return new Promise(async (resolve, reject) => {
        try {
            const newScore = await Score.create({
                studentId,
                courseId,
                exam15,
                exam45,
                examFinal,
            });

            resolve(newScore);
        } catch (e) {
            reject(false);
        }
    });
};

const deleteScoreService = async (scoreId) => {
    return new Promise(async (resolve, reject) => {
        const score = await Score.findOne({
            where: {
                id: scoreId,
            },
        });
        if (score) {
            await score.destroy({ force: true });
            resolve(true);
        } else {
            reject(false);
        }
    });
};
const getScoreService = async (scoreId) => {
    return new Promise(async (resolve, reject) => {
        if (scoreId === -1) {
            const allScores = await Score.findAll();
            resolve(allScores);
        } else {
            const score = await Score.findOne({
                where: {
                    id: scoreId,
                },
            });
            if (score) {
                resolve(score);
            } else {
                reject({});
            }
        }
    });
};
const updateScoreService = async (id, data) => {
    const {courseId,exam15, exam45, examFinal,studentId} = data;
    return new Promise(async (resolve, reject) => {
        const score = await Score.findOne({
            where: { id },
        });
        if (student) {
            await student.update({
                courseId,
                exam15,
                exam45,
                examFinal,
                studentId,
            });
            await score.save();
            resolve(score);
        } else {
            reject({});
        }
    });
};
module.exports = {
    createScoreService,
    deleteScoreService,
    getScoreService,
    updateScoreService,
};
