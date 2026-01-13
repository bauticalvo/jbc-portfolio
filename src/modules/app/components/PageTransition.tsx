import { motion, AnimatePresence } from 'framer-motion';

export const PageTransition = ({ show }: { show: boolean }) => {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[9999] w-full h-full pointer-events-auto">
          {/* <motion.div
            className="absolute bottom-0 left-0 w-full h-full bg-secondary"
            initial={{ y: '100%', opacity: 1}}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.77, 0, 0.175, 1] }}
          /> */}

          <motion.div
            className="absolute bottom-0 left-0 w-full h-full ease-in-out bg-linear-to-t from-secondary from-10% via-transparent via-40% to-90% to-transparent"
            initial={{ y: '100%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};
