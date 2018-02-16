const router = require("express").Router();
const contactsRoutes = require("./contacts");

// Book routes
router.use("/contacts", contactsRoutes);

module.exports = router;
