let Bicicleta = require("../../../models/Bicicleta");

exports.bicicleta_list = function (req, res) {
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
};

exports.bicicleta_create = function (req, res) {
    let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.latitud, req.body.longitud];

    Bicicleta.add(bici);

    res.status(201).json({
        bicicleta: bici
    })
}

exports.bicicleta_update = function (req, res) {
    let bici = Bicicleta.allBicis.find(bici => bici.id == req.body.id);

    bici = Bicicleta.changeValues(bici, req.body);

    Bicicleta.removeById(req.body.id);
    Bicicleta.add(bici);
    Bicicleta.allBicis.sort((a, b) => a.id - b.id);

    res.status(200).json({
        bicicleta: bici
    })
}

exports.bicicleta_delete = function (req, res) {
    //También es posible utilizar params para recibir la id mediante la url
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
};