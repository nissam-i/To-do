import { useState, useEffect } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import type { Todo } from './types';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('premium-todos');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('premium-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-2xl">
        <div className="glass-card p-8 sm:p-12 mb-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
              Focus & Do
            </h1>
            <p className="text-white/60 text-lg">
              {todos.length} tasks • {completedCount} completed
            </p>
          </div>

          <TodoInput onAdd={addTodo} />

          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {todos.length === 0 ? (
                <div className="text-center py-12 text-white/30">
                  <p className="text-xl">No tasks yet. Add one above!</p>
                </div>
              ) : (
                todos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        <p className="text-center text-white/30 text-sm">
          Press Enter to add • Hover to delete
        </p>
      </div>
    </div>
  );
}

export default App;
