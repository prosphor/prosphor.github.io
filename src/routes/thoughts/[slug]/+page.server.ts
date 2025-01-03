import fs from "fs/promises";
import path from "path";
import { error } from "@sveltejs/kit";

export async function load({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.resolve("src/lib/thoughts", `${slug}.md`);

  let fileContent: string;
  try {
    fileContent = await fs.readFile(filePath, "utf-8");
  } catch (err) {
    throw error(404, `Post "${slug}" not found.`);
  }

  const lines = fileContent.split("\n");
  if (lines.length < 5 || !lines[0].startsWith("---")) {
    throw error(400, "Heading is missing or malformed.");
  }

  const titleLine = lines[1];
  const title = titleLine.replace("title:", "").trim().replace(/^"(.*)"$/, "$1");
  const dateLine = lines[2];
  const date = dateLine.replace("publish-date:", "").trim().replace(/^"(.*)"$/, "$1");
  const markdownContent = lines.slice(4).join("\n");

  const postData: PostData = {
    title: title,
    date: date,
    body: markdownContent,
  };

  return postData;
}
