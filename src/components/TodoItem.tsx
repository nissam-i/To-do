import { Trash2, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { Todo } from '../types';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="group flex items-center justify-between p-4 mb-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-md"
        >
            <div className="flex items-center gap-4 flex-1">
                <button
                    onClick={() => onToggle(todo.id)}
                    className={clsx(
                        "flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-300",
                        todo.completed
                            ? "bg-emerald-400 border-emerald-400"
                            : "border-white/40 hover:border-white/60"
                    )}
                >
                    {todo.completed && <Check className="w-4 h-4 text-white" />}
                </button>
                <span
                    className={clsx(
                        "text-lg text-white/90 transition-all duration-300",
                        todo.completed && "line-through text-white/40"
                    )}
                >
                    {todo.text}
                </span>
            </div>

            <motion.button
                whileHover={{ scale: 1.1, color: "#ef4444" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onDelete(todo.id)}
                className="p-2 text-white/40 hover:text-red-400 hover:bg-white/10 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
                <Trash2 className="w-5 h-5" />
            </motion.button>
        </motion.div>
    );
}
