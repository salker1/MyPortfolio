import express from "express";
import eduCtrl from "../controllers/education.controller.js";

const router = express.Router();

router.route("/api/qualifications")
  .get(eduCtrl.list)
  .post(eduCtrl.create);

router.route("/api/qualifications/:educationId")
  .get(eduCtrl.read)
  .put(eduCtrl.update)
  .delete(eduCtrl.remove);

router.param("educationId", eduCtrl.educationByID);

export default router;
