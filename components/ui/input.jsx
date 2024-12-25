import * as React from "react";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  React.useEffect(() => {
    console.log(props);
  }, []);

  return (
    <input
      type={type}
      className={cn(
        `flex h-fit w-full rounded-xl tracking-tight bg-background px-5 py-3 text-lg file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
        inter.className, // Apply the Inter font class here
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
