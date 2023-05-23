const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nama: { type: String, required: true },
    keterangan: { type: String, required: true },
    productImage: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);