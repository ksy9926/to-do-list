import swaggerUi from 'swagger-ui-express';
import swaggereJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    info: {
      title: 'Test API',
      version: '1.0.0',
      description: 'Test API with express',
    },
    host: 'localhost:8080',
    basePath: '/',
  },
  apis: ['./routes/*.js', './swagger/*'],
};

export const specs = swaggereJsdoc(options);
