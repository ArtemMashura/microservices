const { Router } = require("express")
const controller = require("../controllers/CRUDController")

const router = Router();

router.delete("/:id", controller.deleteStudent)

module.exports = router;