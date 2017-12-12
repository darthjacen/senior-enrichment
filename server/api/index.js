"use strict";
const apiRouter = require("express").Router();
const db = require("../db");
const Campus = require("../db/models/campus");
const Student = require("../db/models/students");

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!

apiRouter.get("/CampusList", (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});
apiRouter.get("/CampusList/:CampusId", (req, res, next) => {
  Student.findAll({ where: { campusId: req.params.CampusId } })
    .then(students => res.json(students))
    .catch(next);
});

apiRouter.post("/NewCampusForm", (req, res, next) => {
  Campus.create(req.body)
    .then(newCampus => res.json(newCampus))
    .catch(next);
});

apiRouter.delete("/CampusList/:CampusId", (req, res, next) => {
  Campus.destroy({
    where: {
      id: req.params.CampusId
    }
  });
});

apiRouter.post("/NewStudentForm", (req, res, next) => {
  Student.create(req.body)
    .then(newStudent => res.json(newStudent))
    .catch(next);
});

apiRouter.delete("/Students/:StudentId", (req, res, next) => {
  Student.destroy({
    where: {
      id: req.params.StudentId
    }
  });
});

apiRouter.get("/Students", (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

apiRouter.get("/Students/:StudentId", (req, res, next) => {
  Student.findById(req.params.StudentId)
    .then(student => res.json(student))
    .catch(next);
});

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

module.exports = apiRouter;
