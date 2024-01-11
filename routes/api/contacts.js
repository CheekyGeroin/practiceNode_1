const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");
const { validate } = require("../../middlewares");
const schemas = require("../../schema");

router.get("/", ctrl.getContacts);

router.get("/:contactId", ctrl.getContact);

router.post("/", validate(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", validate(schemas.putSchema), ctrl.updateContact);

module.exports = router;
