const bookshelf = require('./bookshelf')
const Order = require('./order')

module.exports = bookshelf.model('Customer', {
  tableName: 'customers',
  orders() {
    return this.hasMany("Order")
  }
})
