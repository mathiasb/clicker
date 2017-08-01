var OrderMockSchema = {
  type: 'object',
  properties: {
    order: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          unique: true,
          minimum: 15001
        },
        orderNumber:{
          type: 'string'
        },
        customerName:{
          type: 'string'
        },
        orderDate:{
          type: 'string'
        },
        orderAmount:{
          type: 'integer',
          minimum: 1,
          maximum: 9999999
        },
        orderCurrency:{
          type: 'string'
        }
      },
      required: ['id', 'orderNumber', 'customerName']
    }
  }
};
module.exports = { OrderMockSchema }
