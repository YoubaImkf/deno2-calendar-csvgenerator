const startDate = new Date("2024-10-19T18:00:00");
const totalScheduleDays  = 30;

// Change the structure as you need 🩶
const schedule = [
  {
    day: "Monday",
    activities: [
      {
        time: "18:00",
        duration: 1,
        focus: "Data Structures & Algorithms (DSA)",
        description:
          "Study a new data structure or algorithm (e.g., linked lists, AVL trees, DFS, BFS).",
      },
      {
        time: "19:00",
        duration: 1,
        focus: "LeetCode Problem",
        description:
          "Solve a DSA-related problem focusing on the structure or algorithm studied.",
      },
    ],
  },
  {
    day: "Tuesday",
    activities: [
      {
        time: "18:00",
        duration: 1,
        focus: "Rustlings Exercise",
        description:
          "Complete one Rustlings exercise and review the concepts covered.",
      },
      {
        time: "19:00",
        duration: 1,
        focus: "Rust Text Editor",
        description:
          "Work on data structures (e.g., arrays, gap buffers) or cursor movement logic.",
      },
    ],
  },
  {
    day: "Wednesday",
    activities: [
      {
        time: "18:00",
        duration: 1,
        focus: "Data Structures & Algorithms (DSA)",
        description: "Continue studying a new data structure or algorithm.",
      },
      {
        time: "19:00",
        duration: 1,
        focus: "LeetCode Problem",
        description:
          "Solve a DSA-related problem focusing on the structure or algorithm studied.",
      },
    ],
  },
  {
    day: "Thursday",
    activities: [
      {
        time: "18:00",
        duration: 1,
        focus: "Rustlings Exercise",
        description:
          "Complete one Rustlings exercise and review the concepts covered.",
      },
      {
        time: "19:00",
        duration: 1,
        focus: "Rust Text Editor",
        description:
          "Continue developing the text editor, focusing on data structures or new functionality.",
      },
    ],
  },
  {
    day: "Friday",
    activities: [
      {
        time: "18:00",
        duration: 1,
        focus: "Data Structures & Algorithms (DSA)",
        description: "Deepen understanding of a structure or algorithm.",
      },
      {
        time: "19:00",
        duration: 1,
        focus: "LeetCode Problem",
        description:
          "Solve a challenging problem or optimize a previous solution.",
      },
    ],
  },
  {
    day: "Saturday",
    activities: [
      {
        time: "14:00",
        duration: 2,
        focus: "Deep Dive into DSA",
        description:
          "Review and implement DSA topics from the week. Compare DFS and BFS.",
      },
      {
        time: "16:00",
        duration: 1,
        focus: "LeetCode Practice",
        description:
          "Attempt a medium-difficulty problem or optimize previous solutions.",
      },
      {
        time: "17:00",
        duration: 1,
        focus: "Rustlings",
        description: "Complete a more challenging Rustlings exercise.",
      },
    ],
  },
  {
    day: "Sunday",
    activities: [
      {
        time: "14:00",
        duration: 3,
        focus: "Rust Text Editor",
        description:
          "Work on complex aspects like undo/redo functionality and separating visual representation from text storage.",
      },
      {
        time: "17:00",
        duration: 2,
        focus: "DSA Recap and Notes",
        description:
          "Review the week's learning, write key takeaways, and create notes for future reference.",
      },
    ],
  },
];

let csvContent = "Subject,Start Date,Start Time,End Date,End Time,Description\n";

function getEndTime(startTime: Date, duration: number): Date {
  const endTime = new Date(startTime);
  endTime.setHours(endTime.getHours() + duration);
  return endTime;
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

function formatTime(date: Date): string {
  return date.toTimeString().split(" ")[0];
}

function processActivities(date: Date, activities: { 
  time: string; 
  duration: number; 
  focus: string; 
  description: string; 
}[]): void {
  activities.forEach(activity => {
    const startTime = new Date(date);
    const [hours, minutes] = activity.time.split(":").map(Number);
    startTime.setHours(hours, minutes, 0, 0);
    const endTime = getEndTime(startTime, activity.duration);
    
    // Write event to CSV
    csvContent += `"${activity.focus}","${formatDate(date)}","${activity.time}","${formatDate(endTime)}","${formatTime(endTime)}","${activity.description}"\n`;
  });
}

for (let i = 0; i < totalScheduleDays ; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);

  const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
  const daySchedule = schedule.find(s => s.day === dayOfWeek);

  if (daySchedule) {
    processActivities(date, daySchedule.activities);
  }
}

await Deno.writeTextFile("calendar_events.csv", csvContent);
console.log("CSV file generated: calendar_events.csv");
