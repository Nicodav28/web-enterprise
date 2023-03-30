'use strict'
const { mongoose, Schema } = require('../config/environment');
const mongooseDelete = require('mongoose-delete');

const ProspectSchema = Schema({
    tenant_id: { type: Schema.ObjectId, ref: 'tenants', required: true },
    name: { type: String, required: true },
    surname: { type: String },
    email: { type: String, required: true },
    whatsapp_number: { type: String },
    message: { type: String, required: true },
    location_ip: { type: String, required: true},
    status: { type: Number, required: true }
});

ProspectSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("prospects", ProspectSchema);