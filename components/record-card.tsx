"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Bookmark, Share2, FileText, FileIcon,} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export type Amendment = {
  id: string
  date: string
  tags: string[]
  status: "PASSED" | "ASSENTED" | "DRAFT"
  title: string
  summary?: string
  referenceNo: string
  effectiveDate?: string
  impact?: "Low Impact" | "Medium Impact" | "High Impact"
  files?: { kind: "pdf" | "doc"; label: string }[]
}


export function AmendmentCard({ amendment }: { amendment: Amendment }) {
  return (
    <Card className="border-blue-200">
      <div className="p-4 sm:p-6">
        {/* Top meta row */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-4 text-blue-600" aria-hidden="true" />
              {amendment.date}
            </span>
            <span className="hidden sm:inline h-4 w-px bg-border" aria-hidden="true" />
            {amendment.tags.map((t) => (
              <Badge key={t} variant="secondary" className="bg-blue-50 text-blue-700">
                {t}
              </Badge>
            ))}
            <Badge
              className={cn(
                "capitalize",
                amendment.status === "PASSED" && "bg-green-100 text-green-700",
                amendment.status === "ASSENTED" && "bg-yellow-100 text-yellow-700",
                amendment.status === "DRAFT" && "bg-gray-100 text-gray-700",
              )}
            >
              {amendment.status.toLowerCase()}
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" aria-label="Bookmark">
              <Bookmark className="size-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Share">
              <Share2 className="size-4" />
            </Button>
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg font-semibold text-pretty">{amendment.title}</h3>

        {/* Summary */}
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{amendment.summary}</p>

        {/* Meta bar */}
        <div className="mt-4 rounded-md border bg-card p-3 text-sm">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Meta label="Reference No:" value={amendment.referenceNo} highlight />
            {amendment.effectiveDate && <Meta label="Effective Date:" value={amendment.effectiveDate} />}
            {amendment.impact && (
              <Meta
                label="Impact Level:"
                value={amendment.impact}
                valueClass={amendment.impact === "High Impact" ? "text-red-600" : undefined}
              />
            )}
          </div>
        </div>

        {/* Files and CTA */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {amendment.files?.map((f, idx) => (
              <Button key={idx} variant="outline" className="gap-2 bg-transparent">
                {f.kind === "pdf" ? (
                  <FileText className="size-4 text-blue-600" />
                ) : (
                  <FileIcon className="size-4 text-blue-600" />
                )}
                {f.label}
              </Button>
            ))}
          </div>
          <Link href={`/latest/amendments/${amendment.id}`}><Button className="self-start sm:self-auto">View Details</Button></Link> 
        </div>
      </div>
    </Card>
  )
}

function Meta({
  label,
  value,
  highlight,
  valueClass,
}: {
  label: string
  value: string
  highlight?: boolean
  valueClass?: string
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("font-medium", highlight && "text-blue-700", valueClass)}>{value}</span>
    </div>
  )
}
