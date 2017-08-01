var ProductMockSchema = {
  type: 'object',
  properties: {
    product: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          unique: true,
          minimum: 15001
        },
        title:{
          type: 'string'
        },
        price:{
          type: 'integer',
          minimum: 1,
          maximum: 9999999
        }
      },
      required: ['id', 'title', 'price']
    }
  }
};
module.exports = { ProductMockSchema }
