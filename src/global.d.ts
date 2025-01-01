/// <reference types="@sveltejs/kit" />

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
  author: string;
  date: string;
  body: string;
};