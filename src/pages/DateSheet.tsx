import { useState } from "react";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { mockDateSheet } from "@/lib/mockData";

export default function DateSheet() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? mockDateSheet : mockDateSheet.filter((d) => d.class === filter);

  return (
    <Layout>
      <div className="hero-gradient text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Examination Date Sheet</h1>
          <p className="opacity-90">View the schedule for upcoming examinations</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="flex justify-end mb-4">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="Matric">Matric</SelectItem>
              <SelectItem value="Inter">Intermediate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Calendar size={20} /> Annual Examination 2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Day</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Class</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((entry, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{entry.date}</TableCell>
                    <TableCell>{entry.day}</TableCell>
                    <TableCell>{entry.time}</TableCell>
                    <TableCell>{entry.subject}</TableCell>
                    <TableCell>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                        {entry.class}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
