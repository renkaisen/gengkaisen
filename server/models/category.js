//分类模型
const monoose = require('mongoose');
const schema = new monoose.Schema({
    name:{type:String}
})
module.exports = monoose.model('Category',schema)