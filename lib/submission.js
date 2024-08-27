"use server";

function isNotValidText(text) {
  return !text || text.trim() === "";
}

export default async function submitHandler(formData) {
  const contactCard = {
    company: formData.get("company"),
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  if (
    isNotValidText(contactCard.company) ||
    isNotValidText(contactCard.name) ||
    isNotValidText(contactCard.email) ||
    isNotValidText(contactCard.message) ||
    !contactCard.email.includes("@")
  ) {
    return { success: false };
  }

  console.log(contactCard);
}
