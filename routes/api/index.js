const router = require("express").Router();

const propertyRoutes = require("./properties.js");
const userRoutes = require("./users.js");

router.use("/properties", propertyRoutes);
router.use("/users", userRoutes);
module.exports = router;
