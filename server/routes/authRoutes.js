import express from "express";
import { getUserProfile, loginUser, logoutUser, registerUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser)

//login route
/**
 * @swagger
 * /api/auth/login:
 *  post:
 *      summary: Login User
 *      tags: [Authentication]
 *      requestBody:
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                          - password
 *                      properties:
 *                          email:
 *                              type: string
 *                              format: email
 *                          password:
 *                              type: string
 *                              minlength: 6
 *      responses:
 *          200:
 *              description: Login successful
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              _id:
 *                                  type: string
 *                              name:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              role:
 *                                  type: string
 *                              token:
 *                                  type: string
 *          401:
 *              description: Invalid credentials
*/

router.post("/login", loginUser)

//profile
router.get("/profile", protect, getUserProfile)

//logout
router.post("/logout", protect, logoutUser)

//router.get("/login", (req, res) => {
//    res.send("login is working");
//})

export default router;