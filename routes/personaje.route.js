'use strict';
const express = require('express');
const Personaje = require('../models/personaje.model');
const router = new express.Router();

router.post('/registrar-personaje', (req, res) => {

    console.log(req.body)
    let personaje = (req.body);

    let nuevo_personaje = new Personaje({
        'nombre': personaje.nombre,
        'edad': personaje.edad,
        'estatura': personaje.estatura,
        'poder': personaje.poder,
        'saga': personaje.saga
    });
    nuevo_personaje.save((err, personaje_bd) => {
        if (err) {
            res.json({
                'msj': 'No se pudo registrar el personaje ',
                err
            });
        } else {
            res.json({
                'msj': 'El personaje se registró correctamente',
                personaje_bd
            });
        }

    });
});

router.get('/listar-personajes', (req, res) => {
    Personaje.find((err, coleccion_personajes) => {
        if (err) {
            res.json({
                'msj': 'No se pudo listar los personajes',
                err
            });
        } else {
            res.json({
                'msj': 'Los personajes se listaron correctamente',
                coleccion_personajes
            });
        }
    });
});

router.get('/buscar-personaje-nombre', (req, res) => {
    Personaje.findOne({ nombre: req.query.nombre }, (err, personaje) => {
        if (err) {
            res.json({
                'msj': 'Ocurrió un error al buscar el personaje ',
                err
            });
        } else {
            if (personaje) {
                res.json({
                    'msj': 'El personaje se encontró correctamente',
                    personaje
                });
            } else {
                res.json({
                    'msj': 'No se encontró el personaje'
                });
            }

        }
    });
});

router.get('/buscar-personaje-id', (req, res) => {
    Personaje.findOne({ _id: req.query._id }, (err, personaje) => {
        if (err) {
            res.json({
                'msj': 'Ocurrió un error al buscar el personaje ',
                err
            });
        } else {
            if (personaje) {
                res.json({
                    'msj': 'El personaje se encontró correctamente',
                    personaje
                });
            } else {
                res.json({
                    'msj': 'No se encontró el personaje'
                });
            }

        }
    });
});





module.exports = router;