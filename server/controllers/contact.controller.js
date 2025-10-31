import Contact from "../models/contact.model.js";
import errorHandler from "./error.controller.js";

// Create new contact
const create = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    return res.status(200).json({
      message: "Contact successfully added!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Get all contacts
const list = async (req, res) => {
  try {
    const contacts = await Contact.find().select("firstname lastname email");
    res.json(contacts);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Get contact by ID
const contactByID = async (req, res, next, id) => {
  try {
    const contact = await Contact.findById(id);
    if (!contact)
      return res.status(404).json({ error: "Contact not found" });
    req.profile = contact;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve contact",
    });
  }
};

// Read a single contact
const read = (req, res) => {
  return res.json(req.profile);
};

// Update contact
const update = async (req, res) => {
  try {
    let contact = req.profile;
    contact = Object.assign(contact, req.body);
    contact.updated = Date.now();
    await contact.save();
    res.json(contact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Delete contact
const remove = async (req, res) => {
  try {
    const contact = req.profile;
    const deleted = await contact.deleteOne();
    res.json(deleted);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { create, list, read, update, remove, contactByID };
