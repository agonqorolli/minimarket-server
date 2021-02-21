module.exports = {
  Query: {
    customers: (_, {filter}, {dataSources}) =>
      dataSources.miniMarketDatabase.getCustomers(filter),
    order: (_, {id}, {dataSources}) =>
      dataSources.miniMarketDatabase.getOrder(id),
    orders: (_, {filter}, {dataSources}) =>
      dataSources.miniMarketDatabase.getOrders(filter),
    products: (_, {}, {dataSources}) =>
      dataSources.miniMarketDatabase.getProducts(),
  },
  Mutation: {
    createOrder: (_, {input}, {dataSources}) =>
      dataSources.miniMarketDatabase.createOrder(input),
    updateOrder: (_, {input}, {dataSources}) =>
      dataSources.miniMarketDatabase.updateOrder(input),
    deleteOrder: (_, {id}, {dataSources}) =>
      dataSources.miniMarketDatabase.deleteOrder(id),
    createItem: (_, {input}, {dataSources}) =>
      dataSources.miniMarketDatabase.createItem(input),
    updateItem: (_, {input}, {dataSources}) =>
      dataSources.miniMarketDatabase.updateItem(input),
    deleteItem: (_, {id}, {dataSources}) =>
      dataSources.miniMarketDatabase.deleteItem(id),
  }
};
