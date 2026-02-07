# 📊 Skill Progress Self-Assessment Tool

A frontend-focused analytics tool that helps users **track, visualize, and understand their skill growth over time**.  
Users can rate their skills, select a specific skill, and view progress based on the **last three ratings** using interactive charts.

---

## 🌐 Live Demo

🔗 **Hosted Link:**  
👉 https://skill-progress-self-assessment-tool.vercel.app/


## 🚀 Problem Statement

Learners often struggle to understand their *actual* skill level.  
Simple averages don’t reflect recent improvement or decline.

This project solves that by:
- Allowing users to **rate skills multiple times**
- Showing **recent progress trends**
- Visualizing data using charts instead of raw numbers

---

## ✨ Features

- 🧠 **Skill Selection**
  - Dropdown to select a specific skill
  - View progress for only the chosen skill

- 📈 **Progress Visualization**
  - Bar chart showing the **last 3 ratings**
  - Helps identify improvement or decline

- 🔄 **Reactive UI**
  - UI updates instantly when:
    - Ratings change
    - Skills are added or deleted
    - A different skill is selected

- 🧹 **Edge-case Handling**
  - Gracefully handles:
    - Deleted skills
    - Empty skill lists
    - No ratings yet

---

## 🖥️ Screenshots (Optional)
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/a6c2acfd-badc-43f4-a25e-3512b8ececb2" />

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **Chakra UI (v3)** – UI components & layout
- **Recharts** – Data visualization
- **Recoil** – Global state management

### Tooling
- Vite
- JavaScript (ES6+)

---

## 📊 Progress Logic

Instead of averaging all ratings:

- Only the **last 3 ratings** are considered
- This gives a **more realistic view** of recent performance

```js
const lastThreeRatings = ratings.slice(-3);
```
## Clone the repository
git clone https://github.com/abhikainthla/Skill-Progress-Self-Assessment-Tool.git

## Install dependencies
npm install

## Start development server
npm run dev

