"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

// create a snippet
export async function createSnippet(formState, formData) {
  const title = formData.get("title");
  const code = formData.get("code");

  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "Title must be at least three characters",
    };
  }

  if (typeof code !== "string" || code.length < 10) {
    return {
      message: "Code must be at least ten characters",
    };
  }

  // Check if title and code are not empty
  if (title && code) {
    // const snippet = await db.snippet.create({
    //   data: {
    //     title,
    //     code,
    //   },
    // });
    // console.log(snippet);

    throw new Error("something went wrong!");

    redirect("/");
  } else {
    console.log("please fill all fields");
  }
}

// edit a snippet
export async function editSnippet(id, formData) {
  const title = formData.get("title");
  const code = formData.get("code");

  if (title && code) {
    await db.snippet.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        code,
      },
    });
  }

  redirect("/");
}

// delete a snippet
export async function deleteSnippet(id) {
  await db.snippet.delete({
    where: {
      id: parseInt(id),
    },
  });

  return redirect("/");
}
