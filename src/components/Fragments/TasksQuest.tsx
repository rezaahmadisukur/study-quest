import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Circle, CircleCheckBig, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import {
  checkedTask,
  removeTask,
  type addTaskType
} from "@/redux/slices/taskSlice";
import TaskProgress from "./TaskProgress";
import { EditTaskComp } from "./EditTaskComp";
import { addStat } from "@/redux/slices/statSlice";

const TasksQuest = ({
  tasks,
  selectOpt
}: {
  tasks: addTaskType[];
  selectOpt: string;
}) => {
  const dispatch = useDispatch();
  const sortedArray = [...tasks].sort((a, b) =>
    a.deadline.localeCompare(b.deadline)
  );

  const filterData = sortedArray.filter((task) => {
    const data = task.priority === selectOpt;
    switch (selectOpt) {
      case "high":
        return data;
      case "medium":
        return data;
      case "low":
        return data;
      default:
        return sortedArray;
    }
  });

  return (
    <div>
      {filterData.length > 0 ? (
        <div className="mt-10">
          <h1 className="text-2xl font-md text-muted">
            ✅ Completed Quests ({filterData.length})
          </h1>
          <div className="grid grid-cols-1 gap-5 mt-10">
            {filterData.length > 0 &&
              filterData.map((task: addTaskType) => (
                <Card
                  key={task.id}
                  className={cn(
                    "bg-white/10 backdrop-blur-md border px-5",
                    task.completed ? "border-green-500/70" : "border-red-500/70"
                  )}
                >
                  <div className="flex gap-5">
                    {/* Circle Checked Task */}
                    <div>
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          dispatch(
                            checkedTask({
                              id: task.id,
                              completed: task.completed
                            })
                          );
                          dispatch(addStat({ priority: task.priority }));
                        }}
                        disabled={task.completed}
                      >
                        {task.completed ? (
                          <CircleCheckBig className="w-6 h-6 text-green-500" />
                        ) : (
                          <Circle className="w-6 h-6 text-purple-300 hover:text-purple-100 hover:scale-105 transition-all duration-300" />
                        )}
                      </button>
                    </div>
                    {/* Element Tast */}
                    <div className="w-full">
                      {/* head */}
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-1">
                          <h1 className="text-muted text-lg">{task.title}</h1>
                          {/* Detail */}
                          <p className="text-[12px] text-muted-foreground">
                            {task.description}
                          </p>
                        </div>
                        {/* Badge Priority */}
                        <div>
                          <Badge
                            className={cn(
                              task.priority === "high"
                                ? "bg-red-500/20 text-red-300 border-red-500/50"
                                : task.priority === "medium"
                                ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
                                : "bg-green-500/20 text-green-300 border-green-500/50"
                            )}
                          >
                            {task.priority === "high"
                              ? "High Priority . 50 XP"
                              : task.priority === "medium"
                              ? "Medium Priority . 30 XP"
                              : "Low Priority . 15 XP"}
                          </Badge>
                        </div>
                      </div>
                      {/* Progress deadline */}
                      {!task.completed && (
                        <TaskProgress
                          createdAt={task.createdAt}
                          deadline={task.deadline}
                        />
                      )}
                      {/* Date Deadline */}
                      <div className="mt-5 flex justify-between items-center">
                        {/* Due Date */}
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Due:{" "}
                            {new Date(task.deadline).toLocaleString("en-EN", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true
                            })}
                          </p>
                        </div>
                        {/* Action (Edit and Delete) Button */}
                        <div className="flex gap-5">
                          {!task.completed && (
                            <span>
                              <EditTaskComp taskId={task.id} />
                            </span>
                          )}
                          <Button
                            className="bg-red-500/20 text-red-300 border-red-500/70 w-6 h-6 hover:bg-red-500/50 transition-all duration-300 cursor-pointer"
                            onClick={() =>
                              dispatch(removeTask({ id: task.id }))
                            }
                          >
                            <Trash2 className="size-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      ) : (
        <div className="text-muted mt-10 flex justify-center items-center flex-col">
          <div className="text-[80px]">📚</div>
          <p className="text-muted">
            No quests yet! Create your first quest to begin your study journey.
          </p>
        </div>
      )}
    </div>
  );
};

export default TasksQuest;
