import { Link } from "react-router-dom";
import { Search, FileText, Calendar, BookOpen, Megaphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { mockAnnouncements } from "@/lib/mockData";
import heroBg from "@/assets/hero-bg.jpg";
import boardLogo from "@/assets/board-logo.png";

const quickLinks = [
  { icon: Search, label: "Check Result", desc: "Search by Roll Number", path: "/results" },
  { icon: FileText, label: "Roll Number Slip", desc: "Download your slip", path: "/roll-no-slip" },
  { icon: Calendar, label: "Date Sheet", desc: "View exam schedule", path: "/date-sheet" },
  { icon: BookOpen, label: "Admissions", desc: "Apply now", path: "/admissions" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 text-center text-primary-foreground px-4 py-16 max-w-3xl mx-auto">
          <img src={boardLogo} alt="BBISE Logo" width={80} height={80} className="mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Balochistan Board of Intermediate & Secondary Education
          </h1>
          <p className="text-lg opacity-90 mb-8">Quetta, Balochistan — Established 1990</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/results">Check Result</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/date-sheet">View Date Sheet</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((item) => (
            <Link key={item.path} to={item.path}>
              <Card className="card-elevated hover:scale-[1.02] transition-transform cursor-pointer h-full">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Megaphone className="text-primary" size={24} />
            Latest Announcements
          </h2>
        </div>
        <div className="space-y-3">
          {mockAnnouncements.map((a) => (
            <Card key={a.id} className="card-elevated">
              <CardContent className="p-5 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      a.category === "result" ? "bg-green-100 text-green-700" :
                      a.category === "admission" ? "bg-blue-100 text-blue-700" :
                      a.category === "datesheet" ? "bg-amber-100 text-amber-700" :
                      "bg-secondary text-secondary-foreground"
                    }`}>
                      {a.category.charAt(0).toUpperCase() + a.category.slice(1)}
                    </span>
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{a.content}</p>
                </div>
                <ArrowRight className="text-muted-foreground shrink-0 mt-1" size={18} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
