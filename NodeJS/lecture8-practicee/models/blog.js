const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({ title: { type: String }, snippet: { type: String }, body: { type: String } })

module.exports = mongoose.model('blog', blogSchema)