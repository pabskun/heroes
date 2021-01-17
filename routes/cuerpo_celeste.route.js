'use strict';
const express = require('express');
const Cuerpo_celeste = require('../models/cuerpo_celeste.model');
const router = new express.Router();

router.post('/registrar-cuerpo', (req, res) => {
    let cuerpo = JSON.parse(req.body.cuerpo);


    let nuevo_cuerpo = new Cuerpo_celeste({
        'nombre': cuerpo.nombre,
        'masa': cuerpo.masa,
        'temperatura_media': cuerpo.temperatura_media,
        'duracion_dia': cuerpo.duracion_dia
    });
    nuevo_cuerpo.save((err, cuerpo_bd) => {
        if (err) {
            res.json({
                'msj': 'No se pudo registrar el cuerpo celeste',
                err
            });
        } else {
            res.json({
                'msj': 'El cuerpo celeste se registró correctamente',
                cuerpo_bd
            });
        }

    });
});

router.get('/listar-cuerpos', (req, res) => {
    Cuerpo_celeste.find((err, coleccion_cuerpos) => {
        if (err) {
            res.json({
                'msj': 'No se pudo listar los cuerpos celestes',
                err
            });
        } else {
            res.json({
                'msj': 'Los cuerpos celestes se listaron correctamente',
                coleccion_cuerpos
            });
        }
    });
});

router.get('/buscar-cuerpo-nombre', (req, res) => {
    Cuerpo_celeste.findOne({ nombre: req.query.nombre }, (err, cuerpo) => {
        if (err) {
            res.json({
                'msj': 'Ocurrió un error al buscar el cuerpo celeste',
                err
            });
        } else {
            if (cuerpo) {
                res.json({
                    'msj': 'El cuerpo celeste se encontró correctamente',
                    cuerpo
                });
            } else {
                res.json({
                    'msj': 'No se encontró el cuerpo celeste'
                });
            }

        }
    });
});

router.get('/buscar-cuerpo-id', (req, res) => {
    Cuerpo_celeste.findOne({ _id: req.query._id }, (err, cuerpo) => {
        if (err) {
            res.json({
                'msj': 'Ocurrió un error al buscar el cuerpo celeste',
                err
            });
        } else {
            if (cuerpo) {
                res.json({
                    'msj': 'El cuerpo celeste se encontró correctamente',
                    cuerpo
                });
            } else {
                res.json({
                    'msj': 'No se encontró el cuerpo celeste'
                });
            }

        }
    });
});





module.exports = router;