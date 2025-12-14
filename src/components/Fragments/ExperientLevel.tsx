import { Star } from "lucide-react";
import { Card } from "../ui/card";
import { Progress } from "../ui/progress";

interface PropsType {
  level?: number;
  totalXP: number;
}

const ExperientLevel = ({ level, totalXP }: PropsType) => {
  const xpToNextLevel = 100;
  const currentXpLevel = (totalXP || 0) % xpToNextLevel;
  const progressPercent = (currentXpLevel / xpToNextLevel) * 100;
  return (
    <Card className="bg-white/10 backdrop-blur-md border border-white/20">
      {/* Start Level */}
      <div className="px-5 flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-orange-500 grid place-content-center rounded-full shadow-2xl shadow-neutral-950 inset-shadow inset-shadow-neutral-950">
              <Star className="size-7 text-primary-foreground stroke-2" />
            </div>
            <div className="text-primary-foreground">
              <h1 className="font-semibold text-lg">Level {level || 1}</h1>
              <p className="text-xs">Scholar Warrior</p>
            </div>
          </div>
          <div className="text-primary-foreground flex justify-end flex-col items-end">
            <h1 className="bg-linear-to-br from-yellow-400 to-orange-500 w-fit bg-clip-text text-transparent text-lg font-semibold">
              {currentXpLevel} / {xpToNextLevel} XP
            </h1>
            <p className="text-xs">
              {xpToNextLevel - currentXpLevel} XP to next level
            </p>
          </div>
        </div>
        <Progress
          className="bg-gray-700 h-4 rounded-full"
          value={progressPercent}
        />
      </div>
    </Card>
  );
};

export default ExperientLevel;
