import { Flame, Funnel, Lock, Shell, Trophy } from "lucide-react";
import ExperientLevel from "./components/Fragments/ExperientLevel";
import Header from "./components/Fragments/Header";
import { Card } from "./components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./components/ui/select";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { useEffect } from "react";
import TasksQuest from "./components/Fragments/TasksQuest";
import { AddTaskComp } from "./components/Fragments/AddTaskComp";

const App = () => {
  const tasks = useSelector((state: RootState) => state.tasks.data);
  const stats = useSelector((state: RootState) => state.stats.data);

  useEffect(() => {
    localStorage.setItem("studyTasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("studyStats", JSON.stringify(stats));
  }, [stats]);

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-5xl mx-auto py-20">
        <header className="flex justify-center items-center">
          <Header />
        </header>

        <main className="my-20">
          <ExperientLevel level={stats.level} totalXP={stats.totalXP} />

          {/* CARD - Total XP, Completed, Streak */}
          <div className="grid grid-cols-3 my-5 gap-2">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 px-5">
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 bg-linear-to-br from-fuchsia-400 to-violet-500 grid place-content-center rounded-full shadow-2xl shadow-neutral-950 inset-shadow-2xs inset-shadow-neutral-950">
                  <Trophy className="size-6 text-primary-foreground stroke-2" />
                </div>
                <div className="text-primary-foreground">
                  <p className="text-xs">Total XP</p>
                  <h1 className="font-semibold text-lg">{stats.totalXP}</h1>
                </div>
              </div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 px-5">
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 bg-linear-to-br from-teal-400 to-green-500 grid place-content-center rounded-full shadow-2xl shadow-neutral-950 inset-shadow-2xs inset-shadow-neutral-950">
                  <Shell className="size-6 text-primary-foreground stroke-2" />
                </div>
                <div className="text-primary-foreground">
                  <p className="text-xs">Completed</p>
                  <h1 className="font-semibold text-lg">
                    {stats.taskCompleted}
                  </h1>
                </div>
              </div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 px-5">
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-red-500 grid place-content-center rounded-full shadow-2xl shadow-neutral-950 inset-shadow-2xs inset-shadow-neutral-950">
                  <Flame className="size-6 text-primary-foreground stroke-2" />
                </div>
                <div className="text-primary-foreground">
                  <p className="text-xs">Streak</p>
                  <h1 className="font-semibold text-lg">0</h1>
                </div>
              </div>
            </Card>
          </div>
          {/* CARD - Total XP, Completed, Streak */}

          {/* CARD - Achievements */}
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
              <div className="w-full relative flex flex-col justify-center items-center p-5 rounded-xl gap-1 bg-fuchsia-950/20">
                <h1 className="text-4xl">🎯</h1>
                <p className="text-[10px] text-muted font-light">First Quest</p>
                <p className="text-[10px] text-muted font-semibold">
                  Complete your first task
                </p>
                <Lock className="text-muted-foreground size-4 absolute top-3 right-3" />
              </div>
              <div className="w-full relative flex flex-col justify-center items-center p-5 rounded-xl gap-1 bg-fuchsia-950/20">
                <h1 className="text-4xl">🔥</h1>
                <p className="text-[10px] text-muted font-light">
                  Streak Master
                </p>
                <p className="text-[10px] text-muted font-semibold">
                  Reach a 5-test streak
                </p>
                <Lock className="text-muted-foreground size-4 absolute top-3 right-3" />
              </div>
              <div className="w-full relative flex flex-col justify-center items-center p-5 rounded-xl gap-1 bg-fuchsia-950/20">
                <h1 className="text-4xl">⭐</h1>
                <p className="text-[10px] text-muted font-light">
                  High Achiever
                </p>
                <p className="text-[10px] text-muted font-semibold">
                  Complete 10 task
                </p>
                <Lock className="text-muted-foreground size-4 absolute top-3 right-3" />
              </div>
              <div className="w-full relative flex flex-col justify-center items-center p-5 rounded-xl gap-1 bg-fuchsia-950/20">
                <h1 className="text-4xl">📚</h1>
                <p className="text-[10px] text-muted font-light">
                  Level 5 Scholar
                </p>
                <p className="text-[10px] text-muted font-semibold">
                  Reach Level 5
                </p>
                <Lock className="text-muted-foreground size-4 absolute top-3 right-3" />
              </div>
              <div className="w-full relative flex flex-col justify-center items-center p-5 rounded-xl gap-1 bg-fuchsia-950/20">
                <h1 className="text-4xl">💎</h1>
                <p className="text-[10px] text-muted font-light">
                  Priority Pro
                </p>
                <p className="text-[10px] text-muted font-semibold text-center">
                  Complete 5 high-priority task
                </p>
                <Lock className="text-muted-foreground size-4 absolute top-3 right-3" />
              </div>
              <div className="w-full relative flex flex-col justify-center items-center p-5 rounded-xl gap-1 bg-fuchsia-950/20">
                <h1 className="text-4xl">👑</h1>
                <p className="text-[10px] text-muted font-light">XP Hunter</p>
                <p className="text-[10px] text-muted font-semibold">
                  Earn 500 total XP
                </p>
                <Lock className="text-muted-foreground size-4 absolute top-3 right-3" />
              </div>
            </div>
          </Card>
          {/* CARD - Achievements */}

          <AddTaskComp />

          <Card className="bg-white/10 backdrop-blur-md border border-white/20 px-5 mt-10">
            <div className="flex gap-5 items-center">
              {/* 1 */}
              <div className="flex gap-2 items-center">
                <Funnel className="size-4 text-neutral-50" />
                <h1 className="text-sm text-neutral-50 font-semibold">
                  Filter :{" "}
                </h1>
              </div>
              {/* Priority Select Options */}
              <Select>
                <SelectTrigger className="bg-white/10 backdrop-blur-md border border-white/20 w-[180px]">
                  <SelectValue
                    placeholder="All Priorities"
                    className="placeholder:text-neutral-50"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="high">High Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          <TasksQuest tasks={tasks} />
        </main>
      </div>
    </div>
  );
};

export default App;
