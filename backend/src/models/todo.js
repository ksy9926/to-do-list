import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const Schema = mongoose.Schema;

// Define Schemes
const todoSchema = new Schema(
  {
    todoid: { type: Number, unique: true },
    content: { type: String, required: true },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false },
    completedAt: { type: String, default: '' },
    important: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

// 첫 번째 인자는 해당 collection의 단수적 표현을 나타내는 문자열이다. 실제 collection의 이름은 'Todos'로 자동 변환되어 사용된다.
// collection의 이름을 명시적으로 지정하고자 할 때는 schema 생성시 option을 지정한다.
// const todoSchema = new mongoose.Schema({...}, { collection: 'my-collection-name' })
// { lowercase: true, trim: true, max: 50, index: true 등이 들어갈 수 있다.

autoIncrement.initialize(mongoose.connection);
todoSchema.plugin(autoIncrement.plugin, {
  model: 'Todo',
  field: 'todoid',
  startAt: 1,
  increment: 1,
});

// Create new todo document
todoSchema.statics.create = function (payload) {
  // this === Model
  const todo = new this(payload);
  // return Promise
  return todo.save();
};

// Find All
todoSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by todoid
todoSchema.statics.findOneByTodoid = function (todoid) {
  return this.findOne({ todoid: todoid });
};

// Update by todoid
todoSchema.statics.updateByTodoid = function (todoid, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findOneAndUpdate({ todoid: todoid }, payload, { new: true });
};

// Delete by todoid
todoSchema.statics.deleteByTodoid = function (todoid) {
  return this.remove({ todoid: todoid });
};

export const Todo = mongoose.model('Todo', todoSchema);
