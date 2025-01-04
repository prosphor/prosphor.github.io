/// <reference types="@sveltejs/kit" />
/// <reference types="@modyfi/vite-plugin-yaml/modules" />

declare module "*.yaml";

type SortField = "date-published" | "last-updated";
type SortOrder = "asc" | "desc";
type Thought = {
  filename: string;
  title: string;
  summary: string;
  "date-published": string;
  "last-updated": string;
};

type PostData = {
  title: string;
  date: string;
  body: string;
};