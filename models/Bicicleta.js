/**
 * @swagger
 * components:
 *   schemas:
 *     Bicicleta:
 *       type: object
 *       required:
 *         - id
 *         - color
 *         - modelo
 *         - ubicacion
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the bicycle
 *         color:
 *           type: string
 *           description: The color of your bicycle
 *         modelo:
 *           type: string
 *           description: The bicycle's model
 *         ubicacion:
 *           type: array<number>
 *           description: The current ubication
 *       example:
 *         id: 1
 *         color: Rojo
 *         modelo: Trek
 *         ubicacion: [28.503789, -13.853296]
 */

let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.allBicis = [];

Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

Bicicleta.changeValues = function (bici, nuevo) {
    return bici = {
        id: bici.id,
        color: nuevo.color || bici.color,
        modelo: nuevo.modelo || bici.modelo,
        ubicacion: [
            nuevo.latitud || bici.ubicacion[0],
            nuevo.longitud || bici.ubicacion[1]
        ]
    };
}

Bicicleta.removeById = function (id) {
    this.allBicis = this.allBicis.filter(bici => bici.id != id);
}

let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;