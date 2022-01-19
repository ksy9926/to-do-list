import swaggereJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'To Do 서비스 프로젝트 API',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      contact: {
        name: '김수영',
        url: 'https://github.com/sooyoung-k',
        email: 'sooyoungk@tripbtoz.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080', // 요청 URL
      },
    ],
  },
  apis: ['./src/routes/*.js'], //Swagger 파일 연동
};

export const specs = swaggereJsdoc(options);
