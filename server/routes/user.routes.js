import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/")
  .get(userCtrl.getUsers)
  .post(userCtrl.addUser);

router.route("/:id")
  .get(authCtrl.requireSignin, userCtrl.getUserById)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.updateUser)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.deleteUser);

export default router;