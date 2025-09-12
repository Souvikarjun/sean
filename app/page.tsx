import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Scale, Phone, Mail, Users, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Scale className="h-8 w-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold text-white">Amendment Analyzer</h1>
              <p className="text-sm text-slate-300">Government Portal</p>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Bar */}
      {/* <div className="bg-blue-600 py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-white">
              <Phone className="h-4 w-4" />
              <span className="text-sm">Helpline: 1800-XXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Mail className="h-4 w-4" />
              <span className="text-sm">support@gov.in</span>
            </div>
          </div>
          <select className="bg-blue-500 text-white border border-blue-400 rounded px-3 py-1 text-sm">
            <option>English</option>
          </select>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-balance">
                Welcome to Amendment <span className="text-blue-400">Sentiment Analyzer</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Analyze public sentiment on government amendments and policy changes. Submit your feedback, track public
                opinion, and receive expert insights through our advanced AI-powered platform.
              </p>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">Login</Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg bg-transparent"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Register
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Card className="bg-slate-800 border-slate-700 p-8 text-center">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Analysis</h3>
                <p className="text-slate-300">Real-time sentiment analysis and public opinion tracking</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">50000</div>
              <div className="text-slate-300">Amendments Analyzed</div>
            </div>
            <div className="text-center">
              <Card className="bg-slate-800 border-slate-700 p-6">
                <div className="text-5xl font-bold text-orange-500 mb-2">2500</div>
                <div className="text-slate-300">Active Users</div>
              </Card>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">95%</div>
              <div className="text-slate-300">% Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">24</div>
              <div className="text-slate-300">Hour Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-bold text-white mb-6 text-balance">Get Started with Amendment Analysis</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Join our platform to access advanced sentiment analysis tools and contribute to government policy
                discussions.
              </p>
            </div>
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">Login</Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg bg-transparent"
              >
                <Users className="mr-2 h-5 w-5" />
                Register
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Amendment Analyzer</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Help Center
              </a>
            </div>
            <div className="text-slate-400 text-sm">© 2025 Amendment Sentiment Analyzer. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}