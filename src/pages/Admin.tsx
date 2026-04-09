import { useState } from "react";
import { Plus, Trash2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { mockResults, mockAnnouncements, type Announcement } from "@/lib/mockData";

export default function Admin() {
  const { toast } = useToast();
  const [announcements, setAnnouncements] = useState<Announcement[]>(mockAnnouncements);
  const [newAnn, setNewAnn] = useState({ title: "", content: "", category: "general" as Announcement["category"] });

  const addAnnouncement = () => {
    if (!newAnn.title || !newAnn.content) return;
    const ann: Announcement = {
      id: Date.now().toString(),
      title: newAnn.title,
      content: newAnn.content,
      category: newAnn.category,
      date: new Date().toISOString().split("T")[0],
    };
    setAnnouncements([ann, ...announcements]);
    setNewAnn({ title: "", content: "", category: "general" });
    toast({ title: "Announcement Added" });
  };

  const deleteAnnouncement = (id: string) => {
    setAnnouncements(announcements.filter((a) => a.id !== id));
    toast({ title: "Announcement Deleted" });
  };

  return (
    <Layout>
      <div className="hero-gradient text-primary-foreground py-8">
        <div className="container mx-auto px-4 flex items-center gap-3">
          <Shield size={28} />
          <div>
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <p className="text-sm opacity-90">Manage results, announcements, and student records</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Tabs defaultValue="announcements">
          <TabsList className="mb-6">
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="announcements" className="space-y-6">
            <Card className="card-elevated">
              <CardHeader><CardTitle className="text-primary">Add Announcement</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Title" value={newAnn.title} onChange={(e) => setNewAnn({ ...newAnn, title: e.target.value })} />
                <Textarea placeholder="Content" value={newAnn.content} onChange={(e) => setNewAnn({ ...newAnn, content: e.target.value })} />
                <div className="flex gap-3">
                  <Select value={newAnn.category} onValueChange={(v: any) => setNewAnn({ ...newAnn, category: v })}>
                    <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="result">Result</SelectItem>
                      <SelectItem value="admission">Admission</SelectItem>
                      <SelectItem value="datesheet">Date Sheet</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button onClick={addAnnouncement}><Plus size={16} className="mr-1" /> Add</Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2">
              {announcements.map((a) => (
                <Card key={a.id}>
                  <CardContent className="p-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">{a.date} · {a.category}</p>
                      <p className="font-medium text-foreground">{a.title}</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => deleteAnnouncement(a.id)}>
                      <Trash2 size={16} className="text-destructive" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="results">
            <Card className="card-elevated">
              <CardHeader><CardTitle className="text-primary">Student Results Database</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Roll No</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Marks</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockResults.map((r) => (
                      <TableRow key={r.rollNumber}>
                        <TableCell className="font-medium">{r.rollNumber}</TableCell>
                        <TableCell>{r.name}</TableCell>
                        <TableCell>{r.class}</TableCell>
                        <TableCell>{r.obtainedMarks}/{r.totalMarks}</TableCell>
                        <TableCell>{r.grade}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            r.status === "Pass" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                          }`}>
                            {r.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
