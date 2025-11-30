"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const destinationEmail = process.env.DESTINATION_EMAIL;

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Please fill out all fields." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [destinationEmail || "delivered@resend.dev"], // User needs to update this or verify their domain
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    });

    if (error) {
      console.error("Resend error:", error);
      return { error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Server error:", error);
    return { error: "Something went wrong. Please try again." };
  }
}
