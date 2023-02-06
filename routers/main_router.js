const express = require("express");
const mainRouter = express.Router();

const studentRouter = require("./student/stu_ac_holder");
const studentDetails = require("./student/stu_details");
const RouterTeacherdetails = require("./teacher/teacherdetails");
const RouterSch_principal = require("./school principle/sch_principle");
//sample router
mainRouter.get("/", (req, res) => {
  res.status(200).json({ title: "admes & cdp360 backend", version: "v1.0.0" });
});
 
mainRouter.use(studentRouter)  
mainRouter.use(studentDetails)  
mainRouter.use(RouterTeacherdetails)  
mainRouter.use(RouterSch_principal)   

module.exports = mainRouter;
