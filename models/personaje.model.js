'use strict';
const mongoose = require('mongoose');

const schema_personaje = new mongoose.Schema({
    'nombre': { type: String, required: true, unique: true },
    'edad': { type: Number, required: true, unique: false },
    'estatura': { type: Number, required: false, unique: false },
    'poder': { type: String, required: false, unique: false },
    'saga': { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Personaje', schema_personaje, 'personajes');