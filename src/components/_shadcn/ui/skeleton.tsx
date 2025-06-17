import { cn } from "@/lib/_shadcn/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("tw-animate-pulse tw-rounded-md tw-bg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
