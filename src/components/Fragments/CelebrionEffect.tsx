import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

const CelebrationEffect = ({ message }: { message: number }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: -100 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      >
        <div className="bg-linear-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-2xl shadow-2xl border-4 border-yellow-300 flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          <div>
            <p className="text-sm opacity-90">Quest Complete!</p>
            <p className="text-3xl">+ {message}</p>
          </div>
          <motion.div
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
        </div>

        {/* Confetti effect */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1
            }}
            animate={{
              opacity: 0,
              x: Math.cos((i * 18 * Math.PI) / 180) * 200,
              y: Math.sin((i * 18 * Math.PI) / 180) * 200,
              scale: 0
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
            style={{
              backgroundColor: [
                "#fbbf24",
                "#f59e0b",
                "#ec4899",
                "#a855f7",
                "#3b82f6"
              ][i % 5]
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CelebrationEffect;
