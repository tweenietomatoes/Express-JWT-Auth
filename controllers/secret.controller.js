const todoModel = require('../models/todo.model');

const getTodo = async (req,res,next) => {
	todoModel.findAll().then(todos => res.json(todos));
}

const postTodo = async (req,res,next) => {
    const create = await todoModel.create({
      Todo: 'test',
      Completed: false
    });
    const result = {
      message: 'OK',
      Id: create.Id
    }
    res.json(result)
}

module.exports = { getTodo, postTodo }
