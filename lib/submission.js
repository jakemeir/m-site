"use server";

import { redirect } from "next/navigation";

function isNotValidText(text) {
  return !text || text.trim() === "";
}

export default async function submitHandler(p, formData) {
  if (isNotValidText(formData.get("company")))
    return { message: "please enter a company" };
  if (isNotValidText(formData.get("name")))
    return { message: "please enter a name" };
  if (isNotValidText(formData.get("email")))
    return { message: "please enter a email" };
  if (isNotValidText(formData.get("message")))
    return { message: "please enter a message" };
  if (!formData.get("email").includes("@"))
    return { message: "please enter a valid email" };

  try {
    fetch(process.env.SHEET_LINK, {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    return { message: "Something went wrong, please try again" };
  }

  return redirect("/contact/thanks");
}
