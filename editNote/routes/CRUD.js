const { Router } = require("express")
const controller = require("../controllers/CRUDController")

const router = Router();

router.put("/:id", controller.updateStudent)

module.exports = router;