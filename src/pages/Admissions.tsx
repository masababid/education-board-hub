import { BookOpen, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { mockAnnouncements } from "@/lib/mockData";

const admissionAnnouncements = mockAnnouncements.filter((a) => a.category === "admission" || a.category === "general");

const requirements = [
  "Attested copies of previous certificates",
  "4 passport size photographs",
  "CNIC / B-Form copy",
  "Father/Guardian CNIC copy",
  "Domicile certificate",
  "Migration certificate (if applicable)",
];

export default function Admissions() {
  return (
    <Layout>
      <div className="hero-gradient text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Admissions</h1>
          <p className="opacity-90">Information about admissions for academic session 2025-26</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-4xl space-y-8">
        <Card className="card-elevated border-l-4 border-l-primary">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-primary mb-2">Admissions Open — Session 2025-26</h2>
            <p className="text-muted-foreground mb-4">
              Applications are being accepted for Matric and Intermediate regular examinations. Last date: April 30, 2025.
            </p>
            <Button>Download Admission Form</Button>
          </CardContent>
        </Card>

        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <BookOpen size={20} /> Required Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {requirements.map((req) => (
                <li key={req} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle size={16} className="text-green-600 shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Related Announcements</h2>
          <div className="space-y-3">
            {admissionAnnouncements.map((a) => (
              <Card key={a.id} className="card-elevated">
                <CardContent className="p-5">
                  <p className="text-xs text-muted-foreground mb-1">{a.date}</p>
                  <h3 className="font-semibold text-foreground">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{a.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
