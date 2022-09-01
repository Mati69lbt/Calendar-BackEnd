const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

//validar todas las rutas
router.use(validarJWT);

//  eventos
router.get("/", getEventos);
router.post(
  "/",
  [
    check("title", "El título es obligatirio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatirio").custom(isDate),
    check("end", "La fecha es obligatirio").custom(isDate),

    validarCampos,
  ],
  crearEvento
);
router.put(
  "/:id",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
    validarCampos,
  ],
  actualizarEvento
);
router.delete("/:id", eliminarEvento);

module.exports = router;
