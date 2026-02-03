import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface TodoInputProps {
    onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full mb-8">
            <div className="relative flex items-center">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What needs to be done?"
                    className="w-full px-6 py-4 text-lg text-white placeholder-white/50 bg-white/10 border border-white/20 rounded-2xl shadow-lg backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15 transition-all duration-300"
                />
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={!text.trim()}
                    className="absolute right-2 p-3 bg-white/20 hover:bg-white/30 text-white rounded-xl border border-white/20 backdrop-blur-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </motion.button>
            </div>
        </form>
    );
}
