import express from 'express';
import { Todo } from '../models/todo.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: 할 일 추가 수정 삭제 조회
 */

/**
 * @swagger
 * paths:
 *  /todos:
 *    get:
 *      summary: "할 일 조회"
 *      description: "GET방식으로 할 일 조회"
 *      tags: [Todos]
 *      responses:
 *        "200":
 *          description: 할 일 조회
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    todos:
 *                      type: array
 *                      example:
 *                          [
 *                            { "todoid": 56, "content": "자바스크립트 공부", "completed": true, "completedAt": "2022-01-18", "important": false, "description": "자바스크립트 이벤트 공부" },
 *                            { "todoid": 57, "content": "타입스크립트 공부", "completed": true, "completedAt": "2022-01-18", "important": false, "description": "타입 종류 공부하기\n인터페이스 공부하기" },
 *                            { "todoid": 58, "content": "To Do 리스트 만들기", "completed": true, "completedAt": "2022-01-18", "important": false, "description": "To Do 생성하기" },
 *                          ]
 */

// Find All
router.get('/', (req, res) => {
  Todo.findAll()
    .then((todos) => {
      if (!todos.length) return res.status(404).send({ err: 'Todo not found' });
      res.send({ todos: todos });
    })
    .catch((err) => res.status(500).send(err));
});

// Find One by todoid
router.get('/:todoid', (req, res) => {
  console.log('req.params: ', req.params);
  Todo.findOneByTodoid(req.params.todoid)
    .then((todo) => {
      if (!todo) return res.status(404).send({ err: 'Todo not found' });
      res.send(`findOne successfully: ${todo}`);
    })
    .catch((err) => res.status(500).send(err));
});

/**
 * @swagger
 *
 * /todos:
 *  post:
 *    summary: "할 일 등록"
 *    description: "POST 방식으로 할 일 등록"
 *    tags: [Todos]
 *    requestBody:
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              content:
 *                type: string
 *                description: "할 일 타이틀"
 *    responses:
 *      "200":
 *        description: 할 일 등록
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  todoid:
 *                    type: integer
 *                    example: 62
 *                  content:
 *                    type: string
 *                    example: "타운홀 참석"
 *                  completed:
 *                    type: boolean
 *                    example: false
 *                  completedAt:
 *                     type: string
 *                     example: ""
 *                  description:
 *                     type: string
 *                     example: ""
 *                  createdAt:
 *                     type: string
 *                     example: "2022-01-19T01:13:25.050Z"
 *                  important:
 *                     type: boolean
 *                     example: false
 */

// Create new todo document
router.post('/', (req, res) => {
  console.log('req.body: ', req.body);
  Todo.create(req.body)
    .then((todo) => res.send(todo))
    .catch((err) => res.status(500).send(err));
});

/**
 * @swagger
 *
 * /todos/{todoid}:
 *  put:
 *    summary: "할 일 수정"
 *    description: "PUT 방식으로 할 일 수정"
 *    tags: [Todos]
 *    parameters:
 *      - in: path
 *        name: todoid
 *        required: true
 *        description: 할 일 아이디
 *        schema:
 *          type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              content:
 *                type: string
 *                description: "할 일 타이틀"
 *    responses:
 *      "200":
 *        description: 할 일 등록
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  todoid:
 *                    type: integer
 *                    example: 62
 *                  content:
 *                    type: string
 *                    example: "타운홀 참석"
 *                  completed:
 *                    type: boolean
 *                    example: true
 *                  completedAt:
 *                     type: string
 *                     example: "2022-01-19 10:23"
 *                  description:
 *                     type: string
 *                     example: ""
 *                  createdAt:
 *                     type: string
 *                     example: "2022-01-19T01:13:25.050Z"
 *                  important:
 *                     type: boolean
 *                     example: false
 */

// Update by todoid
router.put('/:todoid', (req, res) => {
  Todo.updateByTodoid(req.params.todoid, req.body)
    .then((todo) => res.send(todo))
    .catch((err) => res.status(500).send(err));
});

/**
 * @swagger
 * /todos/{todoid}:
 *   delete:
 *    summary: "할 일 삭제"
 *    description: "DELETE 방식으로 할 일 삭제"
 *    tags: [Todos]
 *    parameters:
 *      - in: path
 *        name: todoid
 *        required: true
 *        description: 할 일 아이디
 *        schema:
 *          type: integer
 *    responses:
 *      "200":
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *              example: "OK"
 */

// Delete by todoid
router.delete('/:todoid', (req, res) => {
  Todo.deleteByTodoid(req.params.todoid)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

export default router;

/**
 * @swagger
 *     components:
 *         schemas:
 *             Todos:
 *                 type: object
 *                 required:
 *                     - todoid
 *                     - content
 *                 properties:
 *                     todoid:
 *                         type: integer
 *                         description: The auto-generated id of the to do.
 *                     content:
 *                         type: string
 *                         description: The content of to do.
 *                     description:
 *                         type: string
 *                         description: The description of to do.
 *                     completed:
 *                         type: boolean
 *                         description: Have you completed to do?
 *                     completedAt:
 *                         type: string
 *                         format: date
 *                         description: The date of to do completed.
 *                     createdAt:
 *                         type: string
 *                         format: date
 *                         description: The date of the record creation.
 *                     important:
 *                         type: boolean
 *                         description: Is it important thing?
 */
