import { Card } from "../ui/card";
import { Lock, Trophy } from "lucide-react";
import type { AchievementsType } from "@/types/types";
import { motion } from "motion/react";

const AchievementsComp = ({ achievements }: { achievements: [] }) => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border border-white/20 px-5">
      <div className="flex justify-between items-center">
        <h1 className="text-primary-foreground flex gap-2 items-center">
          <Trophy className="size-5 text-yellow-500" />
          <span className="text-lg">Achievements</span>
        </h1>
        <p className="text-xs text-muted-foreground">0 / 6 Unlocked</p>
      </div>
      {/* Grid Acievement */}
      <div className="grid grid-cols-6 gap-3">
        {achievements.length > 0 &&
          achievements.map((item: AchievementsType) => (
            <div
              key={item.id}
              className={`w-full flex flex-col justify-center items-center p-5 rounded-xl gap-1 relative overflow-hidden ${
                item.unlocked
                  ? "bg-fuchsia-950/20 opacity-100 shadow-xl inset-shadow inset-shadow-neutral-950 hover:scale-105 duration-300 transition-all border border-ring"
                  : "bg-fuchsia-950 opacity-50 "
              }`}
            >
              <h1 className="text-4xl">{item.icon}</h1>
              <p className="text-[10px] text-muted font-light">{item.title}</p>
              <p className="text-[10px] text-muted font-semibold text-center">
                {item.description}
              </p>
              {!item.unlocked ? (
                <Lock className="text-muted-foreground size-4 absolute top-3 right-3" />
              ) : (
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
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent rotate-45 p-50"
                ></motion.div>
              )}
            </div>
          ))}
      </div>
    </Card>
  );
};

export default AchievementsComp;
