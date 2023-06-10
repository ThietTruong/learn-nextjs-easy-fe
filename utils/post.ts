import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { IPost } from "@/models";
const BLOG_FOLDER = path.join(process.cwd(), "blog");
export async function getPostList(): Promise<IPost[]> {
  // read all md files in the blog folder
  const postList: IPost[] = [];
  const fileNameList = await fs.readdirSync(BLOG_FOLDER);

  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName);
    const fileContent = await fs.readFileSync(filePath, "utf-8");
    const { data, content, excerpt } = matter(fileContent);
    if (fileName == ".DS_Store") continue;
    const item = {
      id: fileName,
      slug: data.slug,
      title: data.title || "",
      thumbnailUrl: data.image || null,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      tagList: data.tags,
      publishedDay: data.date,
      description: excerpt || "",
      mdContent: content,
    };
    postList.push(item);
  }

  return postList;
}
