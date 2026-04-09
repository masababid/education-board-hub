import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Layout from "@/components/Layout";
import { findResult, StudentResult } from "@/lib/mockData";

export default function Results() {
  const [rollNumber, setRollNumber] = useState("");
  const [result, setResult] = useState<StudentResult | null | undefined>(undefined);

  const handleSearch = () => {
    if (!rollNumber.trim()) return;
    setResult(findResult(rollNumber.trim()) || null);
  };

  return (
    <Layout>
      <div className="hero-gradient text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Check Your Result</h1>
          <p className="opacity-90">Enter your roll number to view your examination results</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-2xl">
        <Card className="card-elevated">
          <CardContent className="p-6">
            <div className="flex gap-3">
              <Input
                placeholder="Enter Roll Number (e.g., 200101)"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button onClick={handleSearch}>
                <Search size={18} className="mr-2" /> Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {result === null && (
          <Card className="mt-6 border-destructive">
            <CardContent className="p-6 text-center text-destructive">
              No result found for roll number "{rollNumber}". Please check and try again.
            </CardContent>
          </Card>
        )}

        {result && (
          <Card className="mt-6 card-elevated">
            <CardHeader>
              <CardTitle className="text-primary">Result Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-muted-foreground">Name:</span> <strong>{result.name}</strong></div>
                <div><span className="text-muted-foreground">Father:</span> <strong>{result.fatherName}</strong></div>
                <div><span className="text-muted-foreground">Roll No:</span> <strong>{result.rollNumber}</strong></div>
                <div><span className="text-muted-foreground">Class:</span> <strong>{result.class}</strong></div>
                <div><span className="text-muted-foreground">Year:</span> <strong>{result.year}</strong></div>
                <div><span className="text-muted-foreground">Grade:</span> <strong>{result.grade}</strong></div>
              </div>

              <div className={`text-center py-3 rounded-lg font-bold text-lg ${
                result.status === "Pass" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
              }`}>
                {result.status} — {result.obtainedMarks}/{result.totalMarks}
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-right">Marks</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {result.subjects.map((s) => (
                    <TableRow key={s.name}>
                      <TableCell>{s.name}</TableCell>
                      <TableCell className="text-right">{s.marks}</TableCell>
                      <TableCell className="text-right">{s.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
}
