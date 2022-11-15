const express = require("express");
const { classRouter } = require("./classRoute");
const { gradeRouter } = require("./gradeRoute");
const studentRouter = require("./studentRoute");
const { userRouter } = require("./userRoute");
const { scoreRouter } = require("./scoreRoute");

const rootRouter = express.Router();
rootRouter.use("/users", userRouter);
rootRouter.use("/students", studentRouter);
rootRouter.use("/class", classRouter);
rootRouter.use("/grades", gradeRouter);
rootRouter.use("/scores", scoreRouter);
module.exports = rootRouter;
