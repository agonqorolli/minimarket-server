const {SQLDataSource} = require('datasource-sql');
const Order = require('../models/order')
const Customer = require('../models/customer')
const Item = require('../models/item')
const Product = require('../models/product')

class MiniMarketDatabase extends SQLDataSource {
  /* CUSTOMERS */
  getCustomers(filter = {}) {
    return Customer
      .where(filter)
      .fetchAll({withRelated: ['orders', 'orders.customer']})
      .then((customers) => customers.toJSON())
  }

  /* ORDERS */
  getOrder(id) {
    return Order
      .where({id})
      .fetch({withRelated: ['customer', 'items', 'items.product']})
      .then((order) => order.toJSON())
  }

  getOrders(filter = {}) {
    return Order
      .where(filter)
      .fetchAll({withRelated: ['customer', 'items', 'items.product']})
      .then((orders) => orders.toJSON())
  }

  createOrder(input = {}) {
    return new Order({...input})
      .save(null, {method: 'insert'})
      .then((order) => order.toJSON())
  }

  updateOrder(input = {}) {
    return Order
      .where({id: input.id})
      .save({...input}, {method: 'update'})
      .then((order) => order.toJSON())
  }

  deleteOrder(id = {}) {
    return Order
      .where({id})
      .destroy()
      .then(() => true)
      .catch(() => false)
  }

  /* ITEMS */
  createItem(input = {}) {
    return new Item({...input})
      .save(null, {method: 'insert'})
      .then((item) => item.toJSON())
  }

  updateItem(input = {}) {
    return Item
      .where({id: input.id})
      .save({...input}, {method: 'update'})
      .then((item) => item.toJSON())
  }

  deleteItem(id = {}) {
    return Item
      .where({id})
      .destroy()
      .then(() => true)
      .catch(() => false)
  }

  /* PRODUCTS */
  getProducts() {
    return Product
      .fetchAll()
      .then((products) => products.toJSON())
  }
}

module.exports = MiniMarketDatabase;
