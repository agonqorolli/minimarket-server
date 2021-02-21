const bookshelf = require('./bookshelf')
const Item = require('./item')

module.exports = bookshelf.model('Product', {
  tableName: 'products',
})
