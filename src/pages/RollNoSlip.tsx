import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { findResult } from "@/lib/mockData";
import boardLogo from "@/assets/board-logo.png";

export default function RollNoSlip() {
  const [rollNumber, setRollNumber] = useState("");
  const [examType, setExamType] = useState("");
  const [found, setFound] = useState<boolean | null>(null);
  const [studentData, setStudentData] = useState<any>(null);

  const handleSearch = () => {
    if (!rollNumber.trim() || !examType) return;
    const result = findResult(rollNumber.trim());
    setFound(!!result);
    setStudentData(result || null);
  };

  return (
    <Layout>
      <div className="hero-gradient text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Download Roll Number Slip</h1>
          <p className="opacity-90">Enter your details to download your examination roll number slip</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-2xl">
        <Card className="card-elevated">
          <CardContent className="p-6 space-y-4">
            <Select value={examType} onValueChange={setExamType}>
              <SelectTrigger><SelectValue placeholder="Select Examination" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="matric">Matric Annual 2025</SelectItem>
                <SelectItem value="inter">Intermediate Annual 2025</SelectItem>
                <SelectItem value="supply">Supplementary 2025</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Enter Roll Number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />
            <Button onClick={handleSearch} className="w-full">Search Roll Number Slip</Button>
          </CardContent>
        </Card>

        {found === false && (
          <Card className="mt-6 border-destructive">
            <CardContent className="p-6 text-center text-destructive">
              No record found. Please verify your details and try again.
            </CardContent>
          </Card>
        )}

        {found && studentData && (
          <Card className="mt-6 card-elevated">
            <CardHeader className="text-center border-b">
              <img src={boardLogo} alt="BBISE" width={60} height={60} className="mx-auto mb-2" loading="lazy" />
              <CardTitle className="text-primary text-lg">Roll Number Slip</CardTitle>
              <p className="text-sm text-muted-foreground">Annual Examination 2025</p>
            </CardHeader>
            <CardContent className="p-6 space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div><span className="text-muted-foreground">Roll No:</span> <strong>{studentData.rollNumber}</strong></div>
                <div><span className="text-muted-foreground">Name:</span> <strong>{studentData.name}</strong></div>
                <div><span className="text-muted-foreground">Father:</span> <strong>{studentData.fatherName}</strong></div>
                <div><span className="text-muted-foreground">Class:</span> <strong>{studentData.class}</strong></div>
              </div>
              <div className="border-t pt-3">
                <p className="text-muted-foreground text-xs">Subjects: {studentData.subjects.map((s: any) => s.name).join(", ")}</p>
              </div>
              <Button variant="secondary" className="w-full mt-4">
                <Download size={16} className="mr-2" /> Print / Download Slip
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
}
