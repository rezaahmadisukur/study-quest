import { Clock } from "lucide-react";
import { Progress } from "../ui/progress";
import { useEffect, useState } from "react";

interface Propstype {
  createdAt?: string;
  deadline?: string;
}

const TaskProgress = ({ createdAt, deadline }: Propstype) => {
  const [progress, setProgress] = useState(0);
  const [remainingText, setRemainingText] = useState("");

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date().getTime();
      const start = new Date(createdAt).getTime();
      const end = new Date(deadline).getTime();
      const totalDuration = end - start;
      const elapsed = now - start;

      // Calculate progress percentage
      const persentage = Math.min(
        Math.max((elapsed / totalDuration) * 100, 0),
        100
      );
      setProgress(persentage);

      // Calculate remaining time
      const remaining = end - now;
      if (remaining <= 0) {
        setRemainingText("Overdue");
      } else {
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remaining % (1000 * 60 * 60)) / (1000 * 60)
        );

        if (days > 0) setRemainingText(`${days}d ${hours}h remaining`);
        else if (hours > 0) setRemainingText(`${hours}h ${minutes}m remaining`);
        else setRemainingText(`${minutes}m remaining`);
      }
    };

    updateProgress();
    const interval = setInterval(updateProgress, 60000);
    return () => clearInterval(interval);
  }, [createdAt, deadline]);

  return (
    <div className="mt-5">
      <div className="flex gap-1 items-center text-muted ">
        <Clock className="size-3" />
        <p className="text-[10px]">{remainingText}</p>
      </div>
      <div className="mt-3">
        <Progress value={progress} />
      </div>
    </div>
  );
};

export default TaskProgress;
