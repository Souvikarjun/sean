"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { ViewToggle } from "@/components/view-toggle"
import { Filters, type FilterValues } from "@/components/filters"
import { AmendmentCard, type Amendment } from "@/components/record-card"
import Topbar from "@/components/topbar"

export default function AmendmentsPage() {

  // Demo dataset for the UI
  const data = useMemo<Amendment[]>(
    () => [
      {
        id: "123456",
        date: "September 01, 2025",
        tags: ["LEGAL FRAMEWORK", "CORPORATE AFFAIRS"],
        status: "PASSED",
        title: "THE LIMITED LIABILITY PARTNERSHIP (AMENDMENT) BILL, 2021GOVTORDINARY BILL",
        summary:
          "The LLP (Amendment) Act, 2021 was a major step by the Government of India to promote entrepreneurship and position the LLP as a preferred corporate vehicle. By decriminalizing minor offenses, introducing the 'Small LLP' concept, and streamlining the justice process, the amendment aims to create a more business-friendly environment, reduce the compliance burden, and encourage more businesses to adopt the LLP structure.",
        referenceNo: "GOVT/2025/142",
        effectiveDate: "September 15, 2025",
        impact: "High Impact",
        files: [
          { kind: "pdf", label: "PDF (285 KB)" },
          { kind: "doc", label: "Word Doc (195 KB)" },
        ],
      },
      {
        id: "654321",
        date: "August 28, 2025",
        tags: ["CORPORATE AFFAIRS"],
        status: "PASSED",
        title: "THE INSURANCE (AMENDMENT) BILL, 2021GOVTORDINARY BILL",
        summary:
          "In summary, the Insurance (Amendment) Act, 2021 was a landmark reform aimed at liberalizing the insurance sector. By raising the FDI limit to 74%, the government sought to attract much-needed foreign capital, boost competition, and ultimately increase the accessibility and affordability of insurance for Indian citizens.",
        referenceNo: "GOVT/2025/079",
        effectiveDate: "September 10, 2025",
        impact: "High Impact",
        files: [
          { kind: "pdf", label: "PDF (285 KB)" },
          { kind: "doc", label: "Word Doc (195 KB)" },
        ],
      },
    ],
    [],
  )

  const [filters, setFilters] = useState<FilterValues>({
    category: "all",
    year: "all",
    status: "all",
  })
  const [view, setView] = useState<"list" | "grid">("list")

  const filtered = data.filter((item) => {
    const byCategory = filters.category === "all" || item.tags.map((t) => t.toLowerCase()).includes(filters.category)
    const byYear = filters.year === "all" || (item.effectiveDate?.toLowerCase().includes(filters.year) ?? false)
    const byStatus = filters.status === "all" || item.status.toLowerCase() === filters.status.replace("-", " ")
    return byCategory && byYear && byStatus
  })

  function clearAll() {
    setFilters({ category: "all", year: "all", status: "all" })
  }

  return (
    <main className="container mx-auto">
      {/* Breadcrumb */}
      <div className="p-4 sm:p-6">
        
      <div className="items-left w-full">
        <nav aria-label="Breadcrumb" className="mb-6 items-left">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Latest Amendments</li>
        </ol>
      </nav>

      {/* Filters */}
      <section aria-labelledby="filters" className="mb-6">
        <h2 id="filters" className="sr-only">
          Filters
        </h2>
        <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto]">
          <Filters value={filters} onChange={setFilters} />
          <Button variant="destructive" className="justify-self-start md:justify-self-end" onClick={clearAll}>
            Clear All
          </Button>
        </div>
      </section>
      </div>

      {/* Header and View Toggle */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-balance">Amendment Records</h1>
        <ViewToggle value={view} onChange={setView} />
      </div>

      {/* Records */}
      {filtered.length === 0 ? (
        <p className="text-muted-foreground">No amendments match your filters.</p>
      ) : (
        <div className={cn(view === "grid" ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "flex flex-col gap-6")}>
          {filtered.map((item) => (
            <AmendmentCard key={item.id} amendment={item} />
          ))}
        </div>
      )}
      </div>
    </main>
  )
}
