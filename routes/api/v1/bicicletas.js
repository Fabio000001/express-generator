let express = require('express');
let router = express.Router();
let BicicletaControllerAPI = require("../../../controllers/api/v1/BicicletaControllerAPI");

/**
 * @swagger
 * tags:
 *   name: Bicicletas
 *   description: The bicycles managing API
 * /api/bicicletas:
 *   get:
 *     summary: Lists all the bicycles
 *     tags: [Bicicletas]
 *     responses:
 *       200:
 *         description: The list of the bicycles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 "bicicletas": []
 * /api/bicicletas/create:
 *   post:
 *     summary: Create a new bicycle
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       201:
 *         description: The created bicycle.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 *       500:
 *         description: Some server error
 * /api/bicicletas/update:
 *   put:
 *     summary: Modifies a bicycle
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: The bicycle was updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 *       404:
 *         description: The bicycle was not found
 *       500:
 *         description: Some server error
 * /api/bicicletas/delete:
 *   delete:
 *     summary: Remove the bicycle by id
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       204:
 *         description: The bicycle was deleted
 *       404:
 *         description: The bicycle was not found
 */

router.get("/", BicicletaControllerAPI.bicicleta_list);
router.post("/create", BicicletaControllerAPI.bicicleta_create);
router.put("/update", BicicletaControllerAPI.bicicleta_update);
router.delete("/delete", BicicletaControllerAPI.bicicleta_delete);

module.exports = router;