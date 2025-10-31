import Education from "../models/education.model.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) => {
  const edu = new Education(req.body);
  try {
    await edu.save();
    res.status(200).json({ message: "Qualification added successfully!" });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const list = async (req, res) => {
  try {
    const eduList = await Education.find().select("title firstname lastname email completion description");
    res.json(eduList);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const educationByID = async (req, res, next, id) => {
  try {
    const edu = await Education.findById(id);
    if (!edu) return res.status(404).json({ error: "Qualification not found" });
    req.profile = edu;
    next();
  } catch (err) {
    res.status(400).json({ error: "Could not retrieve qualification" });
  }
};

const read = (req, res) => res.json(req.profile);

const update = async (req, res) => {
  try {
    let edu = req.profile;
    edu = Object.assign(edu, req.body);
    edu.updated = Date.now();
    await edu.save();
    res.json(edu);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

const remove = async (req, res) => {
  try {
    const edu = req.profile;
    const deleted = await edu.deleteOne();
    res.json(deleted);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, list, read, update, remove, educationByID };
