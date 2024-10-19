# 📅 Deno v2.0.2 CSV Calendar Generator

Welcome to the Deno CSV Calendar Generator! This script creates a CSV file containing your scheduled activities, making it easy to import into Google Calendar. 

## 🚀 Getting Started

### 📦 Prerequisites

- You need [Deno](https://deno.land/) installed on your machine. If you haven't installed it yet, you can do so by following the instructions on the Deno website.

### ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd <your-repo-folder>
   ```

2. **Run the script:**

   Open your terminal and execute the following command to run the calendar generator:

   ```bash
   deno run --allow-write(or -W) main.ts
   ```

   This command will create a `calendar_events.csv` file in the same directory.

### 📅 How to Use the CSV

The generated CSV file (`calendar_events.csv`) contains your scheduled activities, formatted as follows:

| Subject | Start Date | Start Time | End Date | End Time | Description |
| ------- | ----------- | ----------- | --------- | --------- | ----------- |
| ...     | ...         | ...         | ...       | ...       | ...         |

### 🗓️ Importing to Google Calendar

To import your CSV file into Google Calendar, follow these steps:

1. Open [Google Calendar](https://calendar.google.com/).
2. On the left side, click the **+** next to "Other calendars."
3. Select **Import** from the dropdown menu.
4. Click on **Select file from your computer** and choose the `calendar_events.csv` file.
5. Choose the calendar you want to add the events to.
6. Click on **Import**.

Your events should now appear in your Google Calendar! 🎉
