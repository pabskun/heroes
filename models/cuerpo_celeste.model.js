'use strict';
const mongoose = require('mongoose');

const schema_cuerpo = new mongoose.Schema({
    'nombre': { type: String, required: true, unique: true },
    'masa': { type: Number, required: true, unique: false },
    'temperatura_media': { type: Number, required: false, unique: false },
    'duracion_dia': { type: Number, required: false, unique: false }
});

module.exports = mongoose.model('Cuerpo_celeste', schema_cuerpo, 'cuerpos_celestes');