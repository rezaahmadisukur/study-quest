import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

function Progress({
  message,
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { message?: string }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={`${
          message === "Overload"
            ? "bg-linear-to-r from-red-800  via-red-700 to-red-400 h-full w-full flex-1 transition-all"
            : "bg-linear-to-r from-yellow-400 via-orange-500 to-pink-500 h-full w-full flex-1 transition-all"
        }`}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
