import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Samungli Road, Quetta, Balochistan, Pakistan" },
  { icon: Phone, label: "Phone", value: "+92-XXX-XXXXXXX" },
  { icon: Mail, label: "Email", value: "info@bbisequetta.edu.pk" },
  { icon: Clock, label: "Working Hours", value: "Mon - Fri: 8:00 AM - 3:00 PM" },
];

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Thank you for contacting us. We will respond shortly." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <div className="hero-gradient text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="opacity-90">Get in touch with BBISE Quetta for any queries or feedback</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <Card key={item.label} className="card-elevated">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold text-foreground mb-4">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                <Textarea placeholder="Your Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
