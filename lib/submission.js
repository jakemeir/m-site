"use server";

import { redirect } from "next/navigation";

function isNotValidText(text) {
  return !text || text.trim() === "";
}

export default async function submitHandler(p, formData) {
  const contactCard = {
    company: formData.get("company"),
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  if (isNotValidText(contactCard.company))
    return { message: "please enter a company" };
  if (isNotValidText(contactCard.name))
    return { message: "please enter a name" };
  if (isNotValidText(contactCard.email))
    return { message: "please enter a email" };
  if (isNotValidText(contactCard.message))
    return { message: "please enter a message" };
  if (!contactCard.email.includes("@"))
    return { message: "please enter a valid email" };

  redirect("/contact/thanks");
}
