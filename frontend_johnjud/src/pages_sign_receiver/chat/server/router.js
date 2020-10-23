const express = require("../../../pages_sign_receiver/chat/server/node_modules/express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;