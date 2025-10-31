import Project from "../models/project.model.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) => {
  const project = new Project(req.body);
  try {
    await project.save();
    res.status(200).json({ message: "Project added successfully!" });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const list = async (req, res) => {
  try {
    const projects = await Project.find().select("title firstname lastname email completion description");
    res.json(projects);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const projectByID = async (req, res, next, id) => {
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    req.profile = project;
    next();
  } catch (err) {
    res.status(400).json({ error: "Could not retrieve project" });
  }
};

const read = (req, res) => res.json(req.profile);

const update = async (req, res) => {
  try {
    let project = req.profile;
    project = Object.assign(project, req.body);
    project.updated = Date.now();
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    const project = req.profile;
    const deleted = await project.deleteOne();
    res.json(deleted);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, list, read, update, remove, projectByID };
