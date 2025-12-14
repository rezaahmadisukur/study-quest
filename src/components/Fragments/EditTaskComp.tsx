import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { CalendarIcon, Pencil, Zap } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format } from "date-fns";
import { Label } from "../ui/label";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { editTask, updateTask } from "@/redux/slices/taskSlice";
import type { RootState } from "@/redux/store";

const formSchema = zod.object({
  questName: zod.string().min(1, { message: "Quest Name is required" }),
  description: zod.string().min(1, { message: "Descripton is required" }),
  priority: zod.string().min(1, { message: "Priority is required" }),
  deadline: zod.string().min(1, { message: "Deadline is required" })
});

export function EditTaskComp({ taskId }: { taskId: string }) {
  const task = useSelector((state: RootState) =>
    state.tasks.data.find((t: { id: string }) => t.id === taskId)
  );
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      questName: task.title,
      description: task.description,
      priority: task.priority,
      deadline: task.deadline
    }
  });
  const [date, setDate] = useState<Date | undefined>(new Date(task.deadline));
  const [time, setTime] = useState<string>(task.deadline.split("T")[1]);
  const [open, setOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddTask = (values: zod.infer<typeof formSchema>) => {
    // console.log(values.deadline);
    dispatch(updateTask({ id: task.id, values: values }));
    setIsDialogOpen(false);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    if (date) {
      const [hours, minutes] = e.target.value.split(":");
      const newDate = new Date(date);
      newDate.setHours(
        Number.parseInt(hours, 10),
        Number.parseInt(minutes, 10)
      );
      setDate(newDate);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <div className="flex justify-center">
        <DialogTrigger asChild>
          <Button
            onClick={() => dispatch(editTask({ id: taskId }))}
            className="bg-green-500/20 text-green-300 border-green-500/70 w-6 h-6 hover:bg-green-500/50 transition-all duration-300 cursor-pointer"
          >
            <Pencil />
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent
        className="sm:max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 text-muted overflow-auto"
        aria-description=""
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddTask)}>
            <DialogHeader>
              <DialogTitle className="flex gap-2 items-center">
                <Zap className="text-yellow-500" />
                <span>Update New Quest</span>
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="questName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-secondary">
                      Quest Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="e.g. , Web Programming 2 Chap 5"
                        {...field}
                        className="rounded-sm bg-white/10 backdrop-blur-md border border-white/20 placeholder:text-muted"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Quest details..."
                        {...field}
                        className="rounded-sm bg-white/10 backdrop-blur-md border border-white/20 placeholder:text-muted"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Three Input  */}
              <div className="grid grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Priority Level</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full rounded-sm bg-white/10 backdrop-blur-md border border-white/20 placeholder:text-muted">
                            <SelectValue placeholder="Select Priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - 15 XP</SelectItem>
                            <SelectItem value="medium">
                              Mediium - 30 XP
                            </SelectItem>
                            <SelectItem value="high">High - 50 XP</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Deadline</FormLabel>
                      <FormControl>
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              className={cn(
                                "justify-start text-left font-normal rounded-sm bg-white/10 backdrop-blur-md border border-white/20 placeholder:text-muted",
                                !date && "text-muted-foreground"
                              )}
                              variant="outline"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                `${format(date, "PPP")} at ${time}`
                              ) : (
                                <span>Pick a date and time</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent align="center" className="w-auto p-0">
                            <div className="divide-y overflow-hidden bg-background">
                              <Calendar
                                mode="single"
                                onSelect={(selectedDate) => {
                                  if (!selectedDate) return;
                                  setDate(selectedDate);
                                }}
                                selected={date}
                              />
                              <div className="space-y-2 p-4">
                                <Label htmlFor="time">Time</Label>
                                <Input
                                  className="w-full"
                                  id="time"
                                  onChange={(e) => handleTimeChange(e)}
                                  type="time"
                                  value={time}
                                />
                                <Button
                                  onClick={() => {
                                    if (date) {
                                      const deadlineString = `${format(
                                        date,
                                        "yyyy-MM-dd"
                                      )}T${time}`;
                                      field.onChange(deadlineString);
                                      setOpen(false);
                                    }
                                  }}
                                  className="w-full"
                                >
                                  Done
                                </Button>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter className="mt-10">
              <div className="w-5/6">
                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-linear-to-br from-fuchsia-400 to-violet-500 hover:opacity-80"
                >
                  Update task
                </Button>
              </div>
              <DialogClose asChild className="w-1/6">
                <Button className="cursor-pointer bg-linear-to-br from-orange-400 to-red-500 hover:opacity-80">
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
