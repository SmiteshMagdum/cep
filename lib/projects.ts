export type ProjectIdea = {
  name: string;
  desc: string;
};

export const projects: ProjectIdea[] = [
  { name: "Recipe card", desc: "A single page for one recipe — ingredients list, steps, and a photo placeholder." },
  { name: "Countdown page", desc: "Counts down to a date you pick, shown in days, hours, and minutes." },
  { name: "Quote generator", desc: "A button that shows a new quote each time it's clicked, from a list you write." },
  { name: "Tic-tac-toe board", desc: "A 3x3 grid two people can play on, with a winner check." },
  { name: "Personal profile card", desc: "A card with a name, short bio, and links — like a digital business card." },
  { name: "To-do list", desc: "Add a task, check it off, and see it cross out or disappear." },
  { name: "Pricing table", desc: "Three plans side by side, with one marked as 'recommended'." },
  { name: "Weather widget", desc: "A card showing a city, temperature, and condition — the data can be fake." },
  { name: "Restaurant menu page", desc: "Sections for starters, mains, and desserts, each with prices." },
  { name: "Photo gallery grid", desc: "A responsive grid of images that highlights one on hover." },
  { name: "Music player UI", desc: "Just the interface — a play button, song title, and a progress bar." },
  { name: "Contact form", desc: "Name, email, and message fields, plus a button that says 'sent' when clicked." },
  { name: "Coffee shop landing page", desc: "A hero, a short menu, and hours — nothing needs to actually work." },
  { name: "Flashcard app", desc: "Click a card to flip it and reveal the answer on the back." },
  { name: "Birthday countdown", desc: "Enter a date and show how many days are left until it." },
];
