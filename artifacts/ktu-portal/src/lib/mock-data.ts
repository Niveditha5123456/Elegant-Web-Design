export const studentData = {
  name: "Arjun Nair",
  rollNumber: "TVE21CS024",
  semester: "S6",
  department: "Computer Science & Engineering",
  college: "College of Engineering Trivandrum",
  cgpa: 8.76,
  attendance: 84.5,
  rank: 112,
  dues: 1250,
};

export const currentCourses = [
  { code: "CST302", name: "Compiler Design", credits: 4, internal: 42, faculty: "Dr. Latha K", attendance: 85 },
  { code: "CST304", name: "Computer Graphics", credits: 3, internal: 38, faculty: "Prof. Sunil Kumar", attendance: 78 },
  { code: "CST306", name: "Algorithm Analysis", credits: 4, internal: 46, faculty: "Dr. Bindu V", attendance: 92 },
  { code: "CST308", name: "Comprehensive Course Work", credits: 1, internal: 45, faculty: "Prof. Rajesh M", attendance: 100 },
  { code: "HUT300", name: "Industrial Economics", credits: 3, internal: 35, faculty: "Dr. Thomas George", attendance: 72 },
  { code: "MCN301", name: "Disaster Management", credits: 0, internal: null, faculty: "Prof. Anita S", attendance: 88 },
];

export const feeHistory = [
  { id: "FEE-8472", semester: "S6", amount: 35000, type: "Tuition Fee", date: "2024-01-15", status: "Paid" },
  { id: "FEE-8473", semester: "S6", amount: 1500, type: "Exam Fee", date: "2024-03-10", status: "Paid" },
  { id: "FEE-8474", semester: "S6", amount: 1250, type: "Hostel Rent", date: "2024-04-01", status: "Pending" },
];

export const timeline = [
  { id: 1, title: "Exam Registration Opened", date: "Today, 10:00 AM", type: "alert" },
  { id: 2, title: "Assignment 3 Graded: Compiler Design", date: "Yesterday", type: "academic" },
  { id: 3, title: "Fee Payment Received (Exam Fee)", date: "Mar 10, 2024", type: "payment" },
  { id: 4, title: "Attendance Warning: Industrial Economics", date: "Mar 05, 2024", type: "warning" },
];

export const timetable = [
  { day: "Mon", slots: ["CST302", "CST306", "HUT300", "LUNCH", "CST304", "CST308", "-"] },
  { day: "Tue", slots: ["CST304", "CST302", "CST306", "LUNCH", "HUT300", "LAB", "LAB"] },
  { day: "Wed", slots: ["CST306", "CST304", "CST302", "LUNCH", "MCN301", "-", "-"] },
  { day: "Thu", slots: ["HUT300", "CST306", "CST304", "LUNCH", "LAB", "LAB", "LAB"] },
  { day: "Fri", slots: ["CST302", "HUT300", "MCN301", "LUNCH", "CST308", "-", "-"] },
];
