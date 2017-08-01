import fs from 'fs';
import chalk from 'chalk';

import { UserMockSchema } from './models/user';
import { MessageMockSchema } from './models/message';
import { ProductMockSchema } from './models/product';
import { OrderMockSchema } from './models/order';

const jsf = require('json-schema-faker');

const userData    = UserMockSchema.properties.user;
const messageData = MessageMockSchema.properties.message;
const productData = ProductMockSchema.properties.product;
const orderData = OrderMockSchema.properties.order;

const dbSchema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 4,
      maxItems: 9,
      items: userData
    },
    messages: {
      type: 'array',
      minItems: 9,
      maxItems: 19,
      items: messageData
    },
    products: {
      type: 'array',
      minItems: 2,
      maxItems: 8,
      items: productData
    },
    orders: {
      type: 'array',
      minItems: 8,
      maxItems: 16,
      items: orderData
    }
  },
  required: ['users', 'messages', 'products', 'orders']
};

const newMockDb = jsf(dbSchema);

const dbFile = __dirname + '/../www/db.json'

fs.writeFileSync(dbFile, JSON.stringify(newMockDb), 'utf-8', (err) => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.blue('Mock user data generated at ' + dbFile));
  }
});
