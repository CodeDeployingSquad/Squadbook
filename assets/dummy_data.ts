export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Folder {
  id: string;
  name: string;
}

export const folders: Folder[] = [
  { id: "1", name: "Personal" },
  { id: "2", name: "Work" },
  { id: "3", name: "Ideas" },
  { id: "4", name: "To-Do Lists" },
];

export const notes: { [folderId: string]: Note[] } = {
  "1": [
    {
      id: "101",
      title: "My Goals",
      content: `# My Personal Goals

## Short-term Goals
- [ ] Read a book this month
- [ ] Start a new workout routine
- [ ] Learn to cook a new recipe

## Long-term Goals
1. Travel to Japan
2. Learn a new language
3. Run a marathon

Remember to stay focused and take small steps every day!`,
      createdAt: "2024-07-01T12:00:00Z",
      updatedAt: "2024-07-01T12:00:00Z",
    },
    {
      id: "102",
      title: "Birthday Party Ideas",
      content: `# Birthday Party Ideas

## Theme Options
- Superhero party
- Tropical beach party
- Retro 80s party

## To-Do
- [ ] Choose a theme
- [ ] Make guest list
- [ ] Plan menu
- [ ] Order decorations

Don't forget to send invitations at least 2 weeks before the party!`,
      createdAt: "2024-07-02T15:30:00Z",
      updatedAt: "2024-07-02T15:30:00Z",
    },
  ],
  "2": [
    {
      id: "201",
      title: "Project Deadlines",
      content: `# Project Deadlines

## Current Projects
1. **Website Redesign**
   - Deadline: August 15, 2024
   - Status: In progress
2. **Mobile App Update**
   - Deadline: September 1, 2024
   - Status: Planning phase

## Upcoming Projects
- [ ] Client presentation (due next week)
- [ ] Team performance reviews (start in 2 weeks)

Remember to update the project management software daily!`,
      createdAt: "2024-07-03T09:15:00Z",
      updatedAt: "2024-07-03T09:15:00Z",
    },
  ],
  "3": [
    {
      id: "301",
      title: "App Ideas",
      content: `# App Ideas Brainstorm

## 1. Fitness Tracker with AI Coach
- Features:
  - Personalized workout plans
  - Real-time form correction
  - Progress tracking and motivation

## 2. Language Learning Game
- Concept: RPG-style game where you learn a language to progress
- Target languages: Spanish, Mandarin, French

## 3. Sustainable Living Helper
- Track carbon footprint
- Suggest eco-friendly alternatives
- Community challenges and rewards

Remember to validate these ideas with potential users!`,
      createdAt: "2024-07-04T18:45:00Z",
      updatedAt: "2024-07-04T18:45:00Z",
    },
  ],
  "4": [
    {
      id: "401",
      title: "Weekly Tasks",
      content: `# This Week's To-Do List

## Monday
- [ ] Team meeting at 10 AM
- [ ] Grocery shopping
- [ ] Start new book

## Tuesday
- [ ] Dentist appointment at 2 PM
- [ ] Work on project proposal
- [ ] Call mom

## Wednesday
- [ ] Submit expense reports
- [ ] Gym session
- [ ] Prep for Thursday's presentation

## Thursday
- [ ] Give project presentation
- [ ] Lunch with Alex
- [ ] Buy birthday gift for Sarah

## Friday
- [ ] Review week's progress
- [ ] Plan weekend activities
- [ ] Date night

Stay productive and don't forget to take breaks!`,
      createdAt: "2024-07-05T08:00:00Z",
      updatedAt: "2024-07-05T08:00:00Z",
    },
  ],
};

export function getNotesByFolderId(folderId: string): Note[] {
  return notes[folderId] || [];
}

export function getNoteById(noteId: string): Note | undefined {
  for (const folderNotes of Object.values(notes)) {
    const note = folderNotes.find((n) => n.id === noteId);
    if (note) return note;
  }
  return undefined;
}

export function getFolderById(folderId: string): Folder | undefined {
  return folders.find((folder) => folder.id === folderId);
}
