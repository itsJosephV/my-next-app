"use server"
import { signIn } from "@/auth/auth";

export async function login() {
  await signIn("microsoft-entra-id", {
    redirectTo: "/dashboard",
  });
}