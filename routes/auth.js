/*
Rutas de Usuario / Auth
host + /api/auth
*/
const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const router = Router();

router.get("/", (req, res) => {
  res.json({ ok: true });
});
router.post(
  "/new",
  [
    //middlewars
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser mayor a 5 caracteres").isLength({
      min: 5,
    }),
  ],
  crearUsuario
);
router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser mayor a 5 caracteres").isLength({
      min: 5,
    }),
  ],
  loginUsuario
);
router.get("/renew", revalidarToken);

module.exports = router;
