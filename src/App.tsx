import {
  Circle,
  Clock,
  Flame,
  Funnel,
  Lock,
  Pencil,
  Shell,
  Trash2,
  Trophy
} from "lucide-react";
import ExperientLevel from "./components/Fragments/ExperientLevel";
import Header from "./components/Fragments/Header";
import { Card } from "./components/ui/card";
import { DialogNewQuest } from "./components/Fragments/DialogNewQuest";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./components/ui/select";
import { Badge } from "./components/ui/badge";
import { Progress } from "./components/ui/progress";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-5xl mx-auto py-20">
        <header className="flex justify-center items-center">
          <Header />
        </header>

        <main className="my-20">
          <ExperientLevel />

          {/* CARD - Total XP, Completed, Streak */}
          <div className="grid grid-cols-3 my-5 gap-2">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 px-5">
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 bg-linear-to-br from-fuchsia-400 to-violet-500 grid place-content-center rounded-full shadow-2xl shadow-neutral-950 inset-shadow-2xs inset-shadow-neutral-950">
                  <Trophy className="size-6 text-primary-foreground stroke-2" />
                </div>
                <div className="text-primary-foreground">
                  <p className="text-xs">Total XP</p>
                  <h1 className="font-semibold text-lg">0</h1>
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
                  <h1 className="font-semibold text-lg">0</h1>
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

          <DialogNewQuest />

          <Card className="bg-white/10 backdrop-blur-md border border-white/20 px-5 mt-10">
            <div className="flex gap-5 items-center">
              {/* 1 */}
              <div className="flex gap-2 items-center">
                <Funnel className="size-4 text-neutral-50" />
                <h1 className="text-sm text-neutral-50 font-semibold">
                  Filter :{" "}
                </h1>
              </div>
              {/* 2 */}
              <div className="flex gap-2 items-center">
                <h1 className="text-xs text-neutral-50">Category : </h1>
                <Select>
                  <SelectTrigger className="bg-white/10 backdrop-blur-md border border-white/20 w-[180px]">
                    <SelectValue
                      placeholder="All Categories"
                      className="placeholder:text-neutral-50"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* 3 */}
              <div className="flex gap-2 items-center">
                <h1 className="text-xs text-neutral-50">Priority : </h1>
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
            </div>
          </Card>

          <div className="mt-10">
            <h1 className="text-2xl font-md text-muted">
              ✅ Completed Quests (1)
            </h1>
            <div className="grid grid-cols-1 gap-5">
              <Card className="border-green-500/70 bg-white/10 backdrop-blur-md border px-5 mt-10">
                <div className="flex gap-5">
                  {/* Circle Checkbox */}
                  <div>
                    <Circle className="w-6 h-6 text-purple-300 hover:text-purple-100 hover:scale-105 transition-all duration-300" />
                  </div>
                  {/* Element Tast */}
                  <div className="w-full">
                    {/* head */}
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <h1 className="flex gap-1 text-muted text-lg">
                            Web Programming
                          </h1>
                          <Badge className="bg-purple-500/20 text-purple-300 text-[10px] py-0 px-3">
                            web-prog
                          </Badge>
                        </div>
                        {/* Detail */}
                        <p className="text-[12px] text-muted-foreground">
                          Web Comic
                        </p>
                      </div>
                      <div>
                        <Badge className="bg-red-500/20 text-red-300 border-red-500/50">
                          Low Priority . 15 XP
                        </Badge>
                      </div>
                    </div>
                    {/* Progress deadline */}
                    <div className="mt-5">
                      <div className="flex gap-1 items-center text-muted ">
                        <Clock className="size-3" />
                        <p className="text-[10px]">10d 4h remaining</p>
                      </div>
                      <div className="mt-3">
                        <Progress value={55} />
                      </div>
                    </div>
                    {/* Date Deadline */}
                    <div className="mt-5 flex  justify-between items-center">
                      {/* Due Date */}
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Due: 10/13/2025, 12:00:00 AM
                        </p>
                      </div>
                      {/* Action (Edit and Delete) Button */}
                      <div className="flex gap-5">
                        <Button className="bg-green-500/20 text-green-300 border-green-500/70 w-6 h-6 hover:bg-green-500/50 transition-all duration-300 cursor-pointer">
                          <Pencil className="size-3" />
                        </Button>
                        <Button className="bg-red-500/20 text-red-300 border-red-500/70 w-6 h-6 hover:bg-red-500/50 transition-all duration-300 cursor-pointer">
                          <Trash2 className="size-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
