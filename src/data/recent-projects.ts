// Recent projects data

export interface RecentProject {
  date: string;
  name: string;
  type: string;
  description: string;
  tags: string[];
  url?: string;
}

export const recentProjects: RecentProject[] = [
  {
    date: "2025-10",
    name: "Easy Journal",
    type: "Productivity",
    description: "A lightweight daily journal app built with .NET MAUI featuring quote of the day and history tracking.",
    tags: ["C#", "MAUI", "Xamarin"],
    url: "https://github.com/conor-codes/easy-journal"
  },
  {
    date: "2025-10",
    name: "Portfolio Site",
    type: "Web",
    description: "Minimal and fast portfolio built with Astro and Tailwind CSS.",
    tags: ["Astro", "TypeScript", "Tailwind"],
    url: "https://github.com/conor-codes/conor-codes-astro"
  }
];