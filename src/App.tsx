/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import GitHubProfile from './components/GitHubProfile';
import BoardroomWrapper from './components/BoardroomWrapper';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Monitor, Zap, Cpu } from 'lucide-react';

export default function App() {
  const [skin, setSkin] = useState<'slime' | 'boardroom'>('slime');

  const toggleSkin = () => {
    setSkin(prev => prev === 'slime' ? 'boardroom' : 'slime');
    // Trigger haptic if available
    if ('vibrate' in navigator) {
      navigator.vibrate([30, 10, 30]);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0d1117] overflow-x-hidden">
      {/* Global Skin Toggle Button */}
      <motion.button
        onClick={toggleSkin}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl group flex items-center gap-3 overflow-hidden transition-all hover:bg-white/20"
      >
        <div className="relative w-6 h-6">
          <AnimatePresence mode="wait">
            {skin === 'slime' ? (
              <motion.div
                key="slime-icon"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Zap className="w-5 h-5 text-[#ADFF2F]" />
              </motion.div>
            ) : (
              <motion.div
                key="boardroom-icon"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Cpu className="w-5 h-5 text-[#00ff41]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors pr-2">
          Switch to {skin === 'slime' ? 'Boardroom' : 'Slime'}
        </span>
      </motion.button>

      <AnimatePresence mode="wait">
        {skin === 'slime' ? (
          <motion.div
            key="slime-skin"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
          >
            <GitHubProfile />
          </motion.div>
        ) : (
          <motion.div
            key="boardroom-skin"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
          >
            <BoardroomWrapper />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
