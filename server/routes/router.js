const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/api/users", controller.create);
router.get("/api/users", controller.find);
router.get("/api/users/:id", controller.findSingle);
router.put("/api/users/:id", controller.update);
router.delete("/api/users/:id", controller.delete);

module.exports = router;
