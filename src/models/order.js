const bookshelf = require('./bookshelf')
const Item = require('./item')
const Customer = require('./customer')

module.exports = bookshelf.model('Order', {
  tableName: 'orders',
  customer() {
    return this.belongsTo(Customer)
  },
  items() {
    return this.hasMany(Item)
  },
})
