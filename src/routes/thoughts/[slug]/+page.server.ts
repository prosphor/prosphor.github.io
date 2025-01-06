import fs from "fs/promises";
import path from "path";
import { error } from "@sveltejs/kit";

export async function load({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.resolve("src/lib/thoughts", `${slug}.md`);

  let fileContent: string;
  try {
    fileContent = await fs.readFile(filePath, "utf-8");
  } catch (err: any) {
    if (err.code === "ENOENT") {
      throw error(404, `Post "${slug}" not found.`);
    } else {
      throw error(500, "An unexpected error occurred.");
    }
  }

  const lines = fileContent.split("\n");

  if (lines.length < 6 || lines[0] !== "---" || lines[4] !== "---") {
    throw error(400, "Heading is missing or malformed.");
  }

  const title = lines[1].replace("title:", "").trim().replace(/^"(.*)"$/, "$1");
  const date= lines[2].replace("publish-date:", "").trim().replace(/^"(.*)"$/, "$1");
  const note = lines[3].replace("note:", "").trim().replace(/^"(.*)"$/, "$1");
  const body = lines.slice(5).join("\n");

  const postData: PostData = {
    title,
    date,
    note,
    body,
  };

  return { postData };
}
