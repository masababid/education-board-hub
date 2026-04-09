import { Link } from "react-router-dom";
import { Search, FileText, Calendar, BookOpen, Megaphone, ArrowRight, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { mockAnnouncements } from "@/lib/mockData";
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
      <section className="hero-gradient relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-primary-foreground px-4 py-16 max-w-3xl mx-auto">
          <img src={boardLogo} alt="BBISE Quetta Logo" width={90} height={90} className="mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Balochistan Board of Intermediate & Secondary Education
          </h1>
          <p className="text-lg opacity-90 mb-8">Quetta, Balochistan, Pakistan</p>
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

      {/* About BBISE */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">About BBISE Quetta</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Balochistan Board of Intermediate and Secondary Education (BBISE), Quetta was established under the Balochistan Boards of Intermediate and Secondary Education Act. The Board is responsible for conducting examinations, prescribing courses of studies, and granting certificates and diplomas for Secondary School Certificate (SSC) and Higher Secondary School Certificate (HSSC) examinations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BBISE Quetta serves thousands of students across the province, ensuring quality education standards and transparent examination processes. The Board is committed to academic excellence and the educational development of Balochistan.
            </p>
          </div>
          <Card className="card-elevated border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <UserCircle className="text-primary" size={28} />
                <h3 className="text-lg font-bold text-foreground">Chairman's Message</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                "The Balochistan Board of Intermediate and Secondary Education, Quetta is dedicated to upholding the highest standards of examination and education. We strive to provide transparent, fair, and efficient services to all students and institutions under our jurisdiction."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                "Our mission is to foster academic excellence and contribute to the educational development of the province of Balochistan."
              </p>
              <p className="text-sm font-semibold text-primary mt-4">— Chairman, BBISE Quetta</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Announcements */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
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
        </div>
      </section>
    </Layout>
  );
}
