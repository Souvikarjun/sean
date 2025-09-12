"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type FilterValues = {
  category: "all" | "legal framework" | "policy" | "guidelines"
  year: "all" | "2025" | "2024" | "2023"
  status: "all" | "implemented" | "in-progress" | "draft"
}

export function Filters({
  value,
  onChange,
}: {
  value: FilterValues
  onChange: (v: FilterValues) => void
}) {
  return (
    <>
      <div className="space-y-1">
        <label className="text-sm font-medium">Category:</label>
        <Select
          value={value.category}
          onValueChange={(v: FilterValues["category"]) => onChange({ ...value, category: v })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="legal framework">Legal Framework</SelectItem>
            <SelectItem value="policy">Policy</SelectItem>
            <SelectItem value="guidelines">Guidelines</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Year:</label>
        <Select value={value.year} onValueChange={(v: FilterValues["year"]) => onChange({ ...value, year: v })}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Years" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Status:</label>
        <Select value={value.status} onValueChange={(v: FilterValues["status"]) => onChange({ ...value, status: v })}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="implemented">Implemented</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  )
}
