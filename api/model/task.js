const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const taskScheme = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    taskName:String,
    description:String,
    status:String,
    date:String
})

taskScheme.plugin(mongoosePagination);

module.exports = mongoose.model('Astrodata', taskScheme);