import { Flame, Funnel, Shell, Trophy } from "lucide-react";
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
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { useEffect, useState } from "react";
import TasksQuest from "./components/Fragments/TasksQuest";
import { AddTaskComp } from "./components/Fragments/AddTaskComp";
import AchievementsComp from "./components/Fragments/AchievementsComp";
import { format } from "date-fns";
import { updateStreak } from "./redux/slices/statSlice";

const App = () => {
  const tasks = useSelector((state: RootState) => state.tasks.data);
  const stats = useSelector((state: RootState) => state.stats.data);
  const achievements = useSelector(
    (state: RootState) => state.achievements.data
  );
  const [selectOpt, setSelectOpt] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("studyTasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("studyStats", JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem("studyAchievements", JSON.stringify(achievements));
  }, [achievements]);

  useEffect(() => {
    const today = format(new Date().toISOString(), "yyyy-MM-dd");
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = format(yesterday.toISOString(), "yyyy-MM-dd");

    if (
      stats.lastCompletedDate &&
      stats.lastCompletedDate !== today &&
      stats.lastCompletedDate !== yesterdayStr
    ) {
      dispatch(updateStreak({ streak: 0 }));
    }
  }, [dispatch, stats.lastCompletedDate]);

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
                <div className="w-10 h-10 bg-linear-to-br from-fuchsia-400 to-violet-500 grid place-content-center rounded-full shadow-2xl shadow-neutral-950 inset-shadow inset-shadow-neutral-950">
                  <Trophy className="size-6 text-primary-foreground stroke-2" />
                </div>
                <div className="text-primary-foreground">
                  <p className="text-xs">Total XP</p>
                  <h1 className="font-semibold text-lg">
                    {stats.totalXP || 0}
                  </h1>
                </div>
              </div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 px-5">
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 bg-linear-to-br from-teal-400 to-green-500 grid place-content-center rounded-full shadow-2xl shadow-neutral-950 inset-shadow inset-shadow-neutral-950">
                  <Shell className="size-6 text-primary-foreground stroke-2" />
                </div>
                <div className="text-primary-foreground">
                  <p className="text-xs">Completed</p>
                  <h1 className="font-semibold text-lg">
                    {stats.taskCompleted || 0}
                  </h1>
                </div>
              </div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 px-5">
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-red-500 grid place-content-center rounded-full shadow-2xl shadow-neutral-950 inset-shadow inset-shadow-neutral-950">
                  <Flame className="size-6 text-primary-foreground stroke-2" />
                </div>
                <div className="text-primary-foreground">
                  <p className="text-xs">Streak</p>
                  <h1 className="font-semibold text-lg">{stats.streak || 0}</h1>
                </div>
              </div>
            </Card>
          </div>
          {/* CARD - Total XP, Completed, Streak */}

          {/* CARD - Achievements */}
          <AchievementsComp achievements={achievements} />
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
              <Select value={selectOpt} onValueChange={setSelectOpt}>
                <SelectTrigger className="bg-white/10 backdrop-blur-md border border-white/20 w-[180px]">
                  <SelectValue
                    placeholder="All Priorities"
                    className="placeholder:text-neutral-50"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="high">High Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          <TasksQuest tasks={tasks} selectOpt={selectOpt} />
        </main>
      </div>
    </div>
  );
};

export default App;
