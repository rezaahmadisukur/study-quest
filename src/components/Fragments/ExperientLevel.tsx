import { Star } from "lucide-react";
import { Card } from "../ui/card";

const ExperientLevel = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border border-white/20">
      {/* Start Level */}
      <div className="flex justify-between px-5">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-orange-500 grid place-content-center rounded-full shadow-2xl shadow-neutral-950 inset-shadow-2xs inset-shadow-neutral-950">
            <Star className="size-7 text-primary-foreground stroke-2" />
          </div>
          <div className="text-primary-foreground">
            <h1 className="font-semibold text-lg">Level 1</h1>
            <p className="text-xs">Scholar Warrior</p>
          </div>
        </div>
        <div className="text-primary-foreground flex justify-end flex-col items-end">
          <h1 className="bg-linear-to-br from-yellow-400 to-orange-500 w-fit bg-clip-text text-transparent text-lg font-semibold">
            0 / 100 XP
          </h1>
          <p className="text-xs">100 XP to next level</p>
        </div>
      </div>
    </Card>
  );
};

export default ExperientLevel;
