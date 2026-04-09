export interface StudentResult {
  rollNumber: string;
  name: string;
  fatherName: string;
  class: string;
  year: string;
  totalMarks: number;
  obtainedMarks: number;
  grade: string;
  status: "Pass" | "Fail";
  subjects: { name: string; marks: number; total: number }[];
}

export interface DateSheetEntry {
  date: string;
  day: string;
  time: string;
  subject: string;
  class: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: "admission" | "result" | "general" | "datesheet";
  content: string;
}

export const mockResults: StudentResult[] = [
  {
    rollNumber: "200101",
    name: "Muhammad Ahmed",
    fatherName: "Muhammad Ali",
    class: "Matric (10th)",
    year: "2025",
    totalMarks: 1100,
    obtainedMarks: 892,
    grade: "A",
    status: "Pass",
    subjects: [
      { name: "English", marks: 78, total: 100 },
      { name: "Urdu", marks: 85, total: 100 },
      { name: "Mathematics", marks: 90, total: 100 },
      { name: "Physics", marks: 82, total: 100 },
      { name: "Chemistry", marks: 88, total: 100 },
      { name: "Biology", marks: 76, total: 100 },
      { name: "Islamiat", marks: 92, total: 100 },
      { name: "Pak Studies", marks: 89, total: 100 },
      { name: "Computer Science", marks: 95, total: 100 },
      { name: "General Science", marks: 80, total: 100 },
      { name: "Sindhi/Balochi", marks: 37, total: 100 },
    ],
  },
  {
    rollNumber: "200102",
    name: "Fatima Bibi",
    fatherName: "Abdul Karim",
    class: "Matric (10th)",
    year: "2025",
    totalMarks: 1100,
    obtainedMarks: 978,
    grade: "A+",
    status: "Pass",
    subjects: [
      { name: "English", marks: 92, total: 100 },
      { name: "Urdu", marks: 95, total: 100 },
      { name: "Mathematics", marks: 88, total: 100 },
      { name: "Physics", marks: 90, total: 100 },
      { name: "Chemistry", marks: 93, total: 100 },
      { name: "Biology", marks: 89, total: 100 },
      { name: "Islamiat", marks: 96, total: 100 },
      { name: "Pak Studies", marks: 91, total: 100 },
      { name: "Computer Science", marks: 87, total: 100 },
      { name: "General Science", marks: 85, total: 100 },
      { name: "Sindhi/Balochi", marks: 72, total: 100 },
    ],
  },
];

export const mockDateSheet: DateSheetEntry[] = [
  { date: "2025-06-01", day: "Monday", time: "09:00 AM", subject: "English (Compulsory)", class: "Matric" },
  { date: "2025-06-03", day: "Wednesday", time: "09:00 AM", subject: "Urdu (Compulsory)", class: "Matric" },
  { date: "2025-06-05", day: "Friday", time: "09:00 AM", subject: "Mathematics", class: "Matric" },
  { date: "2025-06-07", day: "Saturday", time: "09:00 AM", subject: "Physics", class: "Matric" },
  { date: "2025-06-10", day: "Tuesday", time: "09:00 AM", subject: "Chemistry", class: "Matric" },
  { date: "2025-06-12", day: "Thursday", time: "09:00 AM", subject: "Biology", class: "Matric" },
  { date: "2025-06-14", day: "Saturday", time: "09:00 AM", subject: "Islamiat", class: "Matric" },
  { date: "2025-06-16", day: "Monday", time: "09:00 AM", subject: "Pakistan Studies", class: "Matric" },
  { date: "2025-06-18", day: "Wednesday", time: "09:00 AM", subject: "Computer Science", class: "Inter" },
  { date: "2025-06-20", day: "Friday", time: "09:00 AM", subject: "General Science", class: "Inter" },
  { date: "2025-06-22", day: "Sunday", time: "09:00 AM", subject: "Economics", class: "Inter" },
  { date: "2025-06-24", day: "Tuesday", time: "09:00 AM", subject: "Civics", class: "Inter" },
];

export const mockAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Annual Examination 2025 Results Announced",
    date: "2025-04-01",
    category: "result",
    content: "The results of Annual Examination 2025 for Matric and Intermediate have been announced. Students can check their results online.",
  },
  {
    id: "2",
    title: "Admission Open for Session 2025-26",
    date: "2025-03-25",
    category: "admission",
    content: "Admissions are now open for the academic session 2025-26. Last date to submit forms is April 30, 2025.",
  },
  {
    id: "3",
    title: "Date Sheet for Supplementary Examination 2025",
    date: "2025-03-20",
    category: "datesheet",
    content: "The date sheet for supplementary examination 2025 has been released. Examinations will commence from June 1, 2025.",
  },
  {
    id: "4",
    title: "Important Notice: Fee Submission Deadline Extended",
    date: "2025-03-15",
    category: "general",
    content: "The deadline for fee submission has been extended to March 31, 2025 for all students.",
  },
  {
    id: "5",
    title: "Scholarship Program for Meritorious Students",
    date: "2025-03-10",
    category: "general",
    content: "Applications are invited for the Chief Minister's Scholarship Program for students who secured A+ grade in their examinations.",
  },
];

export function findResult(rollNumber: string): StudentResult | undefined {
  return mockResults.find((r) => r.rollNumber === rollNumber);
}
