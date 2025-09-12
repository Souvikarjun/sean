"use client"

import { useMemo, useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pie, PieChart, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Navbar from "@/components/navbar"

type CategoryId = "all" | "individual" | "voting" | "structure"

interface PageParams {
  params: {_id: string;}
}

type Amendment = {
  id: string
  title: string
  text: string
  summary: string
  points: string[]
  category: CategoryId
  positive: number
  negative: number
  neutral: number
}

const AMENDMENTS: Amendment[] = [
  {
    id: "123456",
    title: "THE LIMITED LIABILITY PARTNERSHIP (AMENDMENT) BILL, 2021GOVTORDINARY BIL",
    text:
      "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; " +
      "or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and " +
      "to petition the Government for a redress of grievances.",
    summary:
      "The LLP (Amendment) Act, 2021 was a major step by the Government of India to promote entrepreneurship and position the LLP as a preferred corporate vehicle. By decriminalizing minor offenses, introducing the 'Small LLP' concept, and streamlining the justice process, the amendment aims to create a more business-friendly environment, reduce the compliance burden, and encourage more businesses to adopt the LLP structure",
    points: [
      "Decriminalization of Offences",
      "Introduction of 'Small LLPs'",
      "Establishment of Special Courts",
      "Compounding of Offences",
      "Change in Residency Requirement for Designated Partners",
    ],
    category: "individual",
    positive: 78,
    negative: 18,
    neutral: 4
  },
  {
    id: "654321",
    title: "THE INSURANCE (AMENDMENT) BILL, 2021GOVTORDINARY BILL",
    text:
      "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, " +
      "shall not be infringed.",
    summary: "The Insurance (Amendment) Act, 2021 was a landmark reform aimed at liberalizing the insurance sector. By raising the FDI limit to 74%, the government sought to attract much-needed foreign capital, boost competition, and ultimately increase the accessibility and affordability of insurance for Indian citizens.",
    points: [
      "Increase in FDI Limit",
      "Removal of the 'Indian Owned and Controlled' Clause",
      "Introduction of Safeguards",
    ],
    category: "individual",
    positive: 57,
    negative: 10,
    neutral: 33
  },
  {
    id: "873877",
    title: "The Insolvency and Bankruptcy Code (Second Amendment) Bill, 2020GOVTORDINARY BILL",
    text:
      "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, " +
      "but in a manner to be prescribed by law.",
    summary: "The Insolvency and Bankruptcy Code (Second Amendment) Act, 2020 was not a permanent change to the insolvency law but a temporary, time-bound economic shock absorber. It effectively created a 'breathing space' for Indian businesses by Ring-fencing the period of the COVID-19 lockdown.Preventing a wave of insolvencies of otherwise healthy companies.Protecting honest management from personal liability for decisions made during an unforeseen global crisis.This measure was widely seen as a necessary intervention to preserve economic value and prevent the collapse of businesses reeling from the impact of the pandemic.",
    points: [
      "Protects privacy of homes",
      "Requires consent to quarter soldiers",
      "Applies in peace; limited in war by law",
    ],
    category: "individual",
    positive: 48,
    negative: 40,
    neutral: 12
  },
  {
    id: "4",
    title: "Fourth Amendment - Search and Seizure",
    text:
      "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, " +
      "shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly " +
      "describing the place to be searched, and the persons or things to be seized.",
    summary: "Protects against unreasonable searches and seizures and requires warrants based on probable cause.",
    points: [
      "Requires probable cause",
      "Requires particularized warrants",
      "Protects persons, houses, papers, and effects",
    ],
    category: "individual",
    positive: 78,
    negative: 18,
    neutral: 4
  },
]

// Basic English stopwords (kept concise)
const STOPWORDS = new Set([
  "the",
  "and",
  "or",
  "of",
  "to",
  "a",
  "in",
  "for",
  "on",
  "by",
  "with",
  "as",
  "be",
  "is",
  "are",
  "shall",
  "no",
  "not",
  "but",
  "any",
  "that",
  "an",
  "it",
  "at",
  "from",
  "this",
  "those",
  "these",
  "their",
  "its",
  "into",
  "about",
  "against",
  "being",
  "than",
  "nor",
  "so",
  "such",
  "may",
  "can",
  "will",
  "must",
  "without",
  "within",
  "thereof",
  "therein",
  "thereon",
  "thereby",
  "therewith",
  "therefor",
  "all",
  "our",
  "your",
  "his",
  "her",
  "they",
  "them",
  "we",
  "us",
])

export default function Page({params}:PageParams) {
  const [selectedId, setSelectedId] = useState<Amendment["id"]>("")
  const [category, setCategory] = useState<CategoryId>("all")
  const [query, setQuery] = useState("")

  const path = usePathname();
  const Id = path.split("/")[path.split("/").length - 1]
  useEffect(() => {
    setSelectedId(Id);
  }, [Id]);
//   setSelectedId(Id);

//   const listForSelect = useMemo(() => {
//     const pool = category === "all" ? AMENDMENTS : AMENDMENTS.filter((a) => a.category === category)
//     // ensure current selection stays visible; if filtered out, pick first available
//     if (!pool.find((a) => a.id === selectedId) && pool.length) {
//       return pool
//     }
//     return pool
//   }, [category, selectedId])

  const current = useMemo(() => AMENDMENTS.find((a) => a.id === selectedId) ?? AMENDMENTS[0], [selectedId])

//   const results = useMemo(() => {
//     const base = category === "all" ? AMENDMENTS : AMENDMENTS.filter((a) => a.category === category)
//     if (!query.trim()) return base
//     const q = query.toLowerCase()
//     return base.filter(
//       (a) =>
//         a.title.toLowerCase().includes(q) || a.text.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q),
//     )
//   }, [category, query])

  return (
    <main className="min-h-dvh bg-background text-foreground">

      <section className="mx-auto w-full max-w-6xl px-4 pb-10">
        {/* <SearchBar
          selectedId={selectedId}
          onSelect={setSelectedId}
          query={query}
          onQueryChange={setQuery}
          allAmendments={AMENDMENTS}
        /> */}

        <div className="mt-6 grid gap-6 md:grid-cols-[320px,1fr]">
          {/* <SidebarFilters
            selectedId={selectedId}
            onSelect={setSelectedId}
            category={category}
            onCategoryChange={setCategory}
            options={listForSelect}
          /> */}

          <div className="flex flex-col gap-6">
            <AmendmentDetails amendment={current} />

            <div className="grid gap-6 md:grid-cols-2">
              <SentimentCard />
              <WordCloudCard text={current.text} />
            </div>

            {/* <SearchResults results={results} /> */}
          </div>
        </div>
      </section>
    </main>
  )
}

function Header() {
  return (
    <header className="w-full bg-sky-800 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-4 py-6">
        <h1 className="text-balance text-center text-2xl font-semibold md:text-3xl">
          Constitutional Amendments Explorer
        </h1>
        <p className="text-center text-xs md:text-sm opacity-90">
          Explore, analyze, and understand constitutional amendments
        </p>
      </div>
    </header>
  )
}

// function SearchBar({
//   selectedId,
//   onSelect,
//   query,
//   onQueryChange,
//   allAmendments,
// }: {
//   selectedId: string
//   onSelect: (v: string) => void
//   query: string
//   onQueryChange: (v: string) => void
//   allAmendments: Amendment[]
// }) {
//   return (
//     <div className="flex w-full items-center gap-2">
//       <Select value={selectedId} onValueChange={onSelect}>
//         <SelectTrigger className="w-56">
//           <SelectValue placeholder="Select amendment" />
//         </SelectTrigger>
//         <SelectContent>
//           {allAmendments.map((a) => (
//             <SelectItem key={a.id} value={a.id}>
//               {a.title.split(" - ")[0].replace(" Amendment", "")}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//       <Input placeholder="Search" value={query} onChange={(e) => onQueryChange(e.target.value)} className="max-w-sm" />
//       <Button
//         onClick={() => {
//           /* placeholder - results are reactive to query */
//         }}
//       >
//         Search
//       </Button>
//     </div>
//   )
// }

// function SidebarFilters({
//   selectedId,
//   onSelect,
//   category,
//   onCategoryChange,
//   options,
// }: {
//   selectedId: string
//   onSelect: (v: string) => void
//   category: CategoryId
//   onCategoryChange: (v: CategoryId) => void
//   options: Amendment[]
// }) {
//   const categories = [
//     { id: "all" as const, label: "All" },
//     { id: "individual" as const, label: "Individual Rights" },
//     { id: "voting" as const, label: "Voting Rights" },
//     { id: "structure" as const, label: "Government Structure" },
//   ]

//   return (
//     <div className="flex flex-col gap-4">
//       <Card>
//         <CardHeader className="pb-2">
//           <CardTitle className="text-base">Select Amendment</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <Select value={selectedId} onValueChange={onSelect}>
//             <SelectTrigger>
//               <SelectValue placeholder="Choose amendment" />
//             </SelectTrigger>
//             <SelectContent>
//               {options.map((a) => (
//                 <SelectItem key={a.id} value={a.id}>
//                   {a.title}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <div className="pt-1">
//             <div className="mb-2 text-sm font-medium">Filter by Category</div>
//             <div className="overflow-hidden rounded-md border">
//               {categories.map((c, i) => (
//                 <button
//                   key={c.id}
//                   onClick={() => onCategoryChange(c.id)}
//                   className={[
//                     "w-full px-3 py-2 text-left text-sm",
//                     i !== categories.length - 1 ? "border-b" : "",
//                     category === c.id ? "bg-sky-600/10 text-sky-700" : "hover:bg-muted",
//                   ].join(" ")}
//                 >
//                   {c.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

function AmendmentDetails({ amendment }: { amendment: Amendment }) {
  return (
    <Card>
      <CardHeader className="border-b pb-4">
        <CardTitle className="text-lg">{amendment.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <section className="space-y-2">
          <h3 className="text-sm font-semibold">Amendment Text</h3>
          <blockquote className="rounded-md border bg-muted/40 p-4 text-sm leading-relaxed">
            {amendment.text}
          </blockquote>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold">Summary</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{amendment.summary}</p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold">Key Points</h3>
          <ul className="list-disc pl-6 text-sm leading-6">
            {amendment.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>
      </CardContent>
    </Card>
  )
}

const donutData = [
  { name: "Positive", value: 85, color: "#15803d" }, // green-700
  { name: "Neutral", value: 10, color: "#ca8a04" }, // yellow-600
  { name: "Negative", value: 5, color: "#b91c1c" }, // red-700
]

function SentimentCard() {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-base">Sentiment Analysis</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mx-auto h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={donutData} dataKey="value" nameKey="name" innerRadius={48} outerRadius={80} paddingAngle={2}>
                {donutData.map((d, idx) => (
                  <Cell key={idx} fill={d.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={24} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
          <div>
            <div className="font-semibold text-emerald-700">Positive:</div>
            <div>85%</div>
          </div>
          <div>
            <div className="font-semibold text-yellow-700">Neutral:</div>
            <div>10%</div>
          </div>
          <div>
            <div className="font-semibold text-red-700">Negative:</div>
            <div>5%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

type WordWeight = { term: string; count: number }

function WordCloudCard({ text }: { text: string }) {
  const [cloud, setCloud] = useState<WordWeight[]>([])
  const [topN, setTopN] = useState(30)

  const generateCloud = () => {
    const counts = new Map<string, number>()
    const cleaned = text
      .toLowerCase()
      .replace(/[^a-z0-9\s']/g, " ")
      .split(/\s+/)
      .filter(Boolean)
    for (const w of cleaned) {
      const base = w.replace(/^'+|'+$/g, "")
      if (!base || STOPWORDS.has(base)) continue
      counts.set(base, (counts.get(base) ?? 0) + 1)
    }
    const arr = Array.from(counts.entries())
      .map(([term, count]) => ({ term, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, Math.max(5, Math.min(80, topN)))
    setCloud(arr)
  }

  // regenerate when text changes to keep UX snappy
  useEffect(() => {
    generateCloud()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const max = Math.max(1, ...cloud.map((w) => w.count))
  const min = Math.min(1, ...cloud.map((w) => w.count))
  const scale = (c: number) => {
    const minPx = 12
    const maxPx = 34
    if (max === min) return (minPx + maxPx) / 2
    return minPx + ((c - min) / (max - min)) * (maxPx - minPx)
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Key Terms Word Cloud</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-48 w-full rounded-md border bg-muted/30 p-3 overflow-hidden" aria-label="Word cloud">
          <div className="h-full w-full overflow-auto">
            <div className="flex flex-wrap gap-2 items-start content-start">
              {cloud.length === 0 ? (
                <div className="text-sm text-muted-foreground">Click Generate to build the word cloud.</div>
              ) : (
                cloud.map((w, i) => (
                  <span
                    key={w.term}
                    className={i % 2 === 0 ? "text-sky-800" : "text-emerald-700"}
                    style={{ fontSize: `${scale(w.count)}px`, lineHeight: 1.1 }}
                    title={`${w.term}: ${w.count}`}
                  >
                    {w.term}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-xs text-muted-foreground">Top terms</label>
          <Select value={String(topN)} onValueChange={(v) => setTopN(Number.parseInt(v, 10))}>
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[15, 20, 30, 40, 50].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={generateCloud}>
            Generate Word Cloud
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// function SearchResults({ results }: { results: Amendment[] }) {
//   return (
//     <Card>
//       <CardHeader className="pb-2">
//         <CardTitle className="text-base">Search Results</CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         {results.map((a) => (
//           <div key={a.id} className="space-y-1">
//             <Link href="#" className="text-sm font-semibold text-sky-700 hover:underline">
//               {a.title}
//             </Link>
//             <p className="text-sm text-muted-foreground line-clamp-2">{a.summary}</p>
//             <hr />
//           </div>
//         ))}
//         {results.length === 0 && (
//           <p className="text-xs text-muted-foreground">No results for your filters and search.</p>
//         )}
//         <p className="text-xs text-muted-foreground">
//           Results are illustrative. Hook up your data or API to power live search.
//         </p>
//       </CardContent>
//     </Card>
//   )
// }
