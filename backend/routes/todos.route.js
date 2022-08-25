
import express from 'express'
const router = express.Router()
import { getAllTodos, getATodo, createATodo, createManyTodos, updateATodo, deleteATodo }  from   '../controlers/todos.controller.js';

router.get("/todos-all", getAllTodos);
router.get("/todo/:id", getATodo);
router.post("/todo/new", createATodo);
router.post("/todos-many", createManyTodos);
router.put("/todo/:id", updateATodo);
router.delete("/todo/:id", deleteATodo);

export default router
