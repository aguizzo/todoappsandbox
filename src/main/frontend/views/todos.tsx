import { ViewConfig } from '@vaadin/hilla-file-router/types.js';

export const config: ViewConfig = { menu: { order: 1, icon: 'line-awesome/svg/react.svg' }, title: 'Todos' };

import { useEffect, useState } from 'react';
import { TodoEndpoint } from 'Frontend/generated/endpoints';
import Todo from 'Frontend/generated/com/example/application/data/Todo';

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TodosView = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
      const fetchTodos = async () => {
          try {
              const data = await TodoEndpoint.getTodos();
              setTodos(data);
          }
          catch (error) {
              console.error('Error fetching todos:', error);
          }
      }

      fetchTodos();
    }, []);


  return (
    <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <img style={{ width: '200px' }} src="images/empty-plant.png" />
      <h2>This place intentionally left empty</h2>
      <p>It’s a place where you can grow your own UI 🤗</p>
      <p>Total todos: {todos.length}</p>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      <Button color="primary" variant="contained">Material button</Button>
    </div>
  );
}

export default TodosView;