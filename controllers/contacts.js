const contacts = require("../models");

const { HttpError } = require("../helpers");

const getContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getContact = async (req, res) => {
  const { id } = req.params;
  const contact = await contacts.getContactById(id);
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json(contact);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContacts(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Contact has been deleted successfully",
  });
};

const addContact = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.updateContact(id, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getContact,
  getContacts,
  deleteContact,
  addContact,
  updateContact,
};
