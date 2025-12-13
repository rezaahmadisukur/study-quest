import { Clock, TriangleAlert } from "lucide-react";
import { Progress } from "../ui/progress";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Propstype {
  createdAt: string;
  deadline: string;
}

const TaskProgress = ({ createdAt, deadline }: Propstype) => {
  const [progress, setProgress] = useState(0);
  const [remainingText, setRemainingText] = useState("");

  useEffect(() => {
    const updateProgress = () => {
      // Declare time task
      const now = new Date().getTime();
      const taskDeadline = new Date(deadline).getTime();
      const taskCreated = new Date(createdAt).getTime();
      // Mini Logic time task
      const totalDuration = taskDeadline - taskCreated;
      const elapsed = now - taskCreated;
      const remaining = taskDeadline - now;

      if (remaining < 0) {
        setRemainingText("Overload");
        setProgress(100);
        return;
      }

      // Calculate progress percentage
      const persentage = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(persentage);

      /** Calculate remaining time */
      // 60 (minute), 60 (second), 24 (day), 1000 (millisecond);
      const days = Math.floor(remaining / (60 * 60 * 24 * 1000));
      const hours = Math.floor(
        (remaining % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000)
      );
      const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
      const second = Math.floor((remaining % (60 * 1000)) / 1000);

      const shouldShowSecond = remaining < 60 * 60 * 1000;

      if (days > 0) {
        setRemainingText(`${days}d ${hours}h remaining`);
      } else if (hours > 0) {
        setRemainingText(
          shouldShowSecond
            ? `${hours}h ${minutes}m ${second}s remaining`
            : `${hours}h ${minutes}m remaining`
        );
      } else if (minutes > 0) {
        setRemainingText(`${minutes}m ${second}s remaining`);
      } else {
        setRemainingText(`${second}s remaining`);
      }
    };

    updateProgress();
    // 1000 is millisecond -> that's update every second for real time
    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [createdAt, deadline]);

  return (
    <div className="mt-5">
      <div
        className={`flex gap-1 items-center ${
          remainingText !== "Overload" ? "text-muted" : "text-red-500 font-bold"
        }`}
      >
        {remainingText !== "Overload" ? (
          <Clock className="size-3" />
        ) : (
          <TriangleAlert className="size-3" />
        )}
        <motion.p
          animate={
            remainingText !== "Overload"
              ? {
                  scale: [1, 1.02, 1],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }
              : {
                  opacity: [1, 0.5, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }
          }
          className="text-xs"
        >
          {remainingText}
        </motion.p>
      </div>
      <div className="mt-3 relative overflow-hidden">
        <Progress value={progress} message={remainingText} />
        {progress < 100 && (
          <motion.div
            animate={{
              x: ["-100%", "200%"]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1
            }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
          ></motion.div>
        )}
      </div>
    </div>
  );
};

export default TaskProgress;
