const {gql} = require('apollo-server');

const typeDefs = gql`
    # customer.graphql
    type Customer {
        id: ID!
        name: String
        orders: [Order]
    }
    input CreateCustomerInput {
        name: String
    }
    input FilterCustomerInput {
        id: ID
        name: Float
    }

    # order.graphql
    type Order {
        id: ID!
        customer_id: ID!
        customer: Customer
        items: [Item]
        total: Float
        completed: Boolean
    }
    input CreateOrderInput {
        customer_id: ID!
        total: Float
        completed: Boolean
    }

    input UpdateOrderInput {
        id: ID!
        customer_id: ID
        total: Float
        completed: Boolean
    }

    input FilterOrderInput {
        id: ID
        customer_id: ID
        total: Float
        completed: Boolean
    }

    # item.graphql
    type Item {
        id: ID!
        order_id: ID
        product_id: ID
        product: Product
        quantity: Int
        unit_price: Float
        total: Float
    }
    input CreateItemInput {
        order_id: ID!
        product_id: ID!
        quantity: Int
        unit_price: Float
        total: Float
    }
    input UpdateItemInput {
        id: ID!
        order_id: ID
        product_id: ID
        quantity: Int
        unit_price: Float
        total: Float
    }

    # product.graphql
    type Product {
        id: ID!
        name: String
        price: Float
    }

    # queries.graphql
    type Query {
        # Customer
        customers(filter: FilterCustomerInput): [Customer]

        # Order
        order(id: ID!): Order
        orders(filter: FilterOrderInput): [Order]

        # Product
        products: [Product]
    }

    # mutations.graphql
    type Mutation {
        # Order
        createOrder(input: CreateOrderInput!): Order
        updateOrder(input: UpdateOrderInput!): Order
        deleteOrder(id: ID!): Boolean

        # Item
        createItem(input: CreateItemInput!): Item
        updateItem(input: UpdateItemInput!): Item
        deleteItem(id: ID!): Boolean
    }
`;

module.exports = typeDefs;
