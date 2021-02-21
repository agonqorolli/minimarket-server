const bookshelf = require('./bookshelf')
const Order = require('./order')
const Product = require('./product')

module.exports = bookshelf.model('Item', {
  tableName: 'items',
  order() {
    return this.belongsTo(Order)
  },
  product() {
    return this.belongsTo(Product)
  }
})
