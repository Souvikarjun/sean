"use client"

import { Button } from "@/components/ui/button"
import { List, LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"

export function ViewToggle({
  value,
  onChange,
}: {
  value: "list" | "grid"
  onChange: (v: "list" | "grid") => void
}) {
  return (
    <div className="inline-flex items-center gap-2">
      <Button
        variant={value === "list" ? "default" : "outline"}
        className={cn("gap-2")}
        onClick={() => onChange("list")}
        aria-pressed={value === "list"}
      >
        <List className="size-4" />
        <span className="hidden sm:inline">List View</span>
      </Button>
      <Button
        variant={value === "grid" ? "default" : "outline"}
        className={cn("gap-2")}
        onClick={() => onChange("grid")}
        aria-pressed={value === "grid"}
      >
        <LayoutGrid className="size-4" />
        <span className="hidden sm:inline">Grid View</span>
      </Button>
    </div>
  )
}
