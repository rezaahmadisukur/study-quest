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
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { ChevronDownIcon, Zap } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";

export function DialogNewQuest() {
  const form = useForm();
  return (
    <Dialog>
      <div className="mt-10 flex justify-center">
        <DialogTrigger asChild>
          <Button className="bg-linear-to-br from-yellow-400 to-orange-500 cursor-pointer hover:scale-103 transition-all duration-300 text-lg font-light">
            + New Quest
          </Button>
        </DialogTrigger>
      </div>
      <Form {...form}>
        <form>
          <DialogContent className="sm:max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 text-muted">
            <DialogHeader>
              <DialogTitle className="flex gap-2 items-center">
                <Zap className="text-yellow-500" />
                <span>Create New Quest</span>
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
                  </FormItem>
                )}
              />
              {/* Three Input  */}
              <div className="grid grid-cols-3 gap-5">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Category</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="e.g. , web-programming"
                          {...field}
                          className="rounded-sm bg-white/10 backdrop-blur-md border border-white/20 placeholder:text-muted"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Priority Level</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full rounded-sm bg-white/10 backdrop-blur-md border border-white/20 placeholder:text-muted">
                            <SelectValue
                              placeholder="Select Priority"
                              {...field}
                            />
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
                        <Popover>
                          <PopoverTrigger
                            asChild
                            className="w-full rounded-sm bg-white/10 backdrop-blur-md border border-white/20 placeholder:text-muted"
                          >
                            <Button
                              variant={"outline"}
                              className="justify-between"
                            >
                              Select date
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <Calendar
                              mode="single"
                              captionLayout="dropdown"
                              {...field}
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
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
                  Save changes
                </Button>
              </div>
              <DialogClose asChild className="w-1/6">
                <Button className="cursor-pointer bg-linear-to-br from-orange-400 to-red-500 hover:opacity-80">
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
}
