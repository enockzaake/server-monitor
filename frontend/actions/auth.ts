"use server";
const BASE_URL = process.env.SERVER_URL;

export async function RegisterAction(form: FormData) {
  const first_name = form.get("first_name") as string;
  const last_name = form.get("last_name") as string;
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const data = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
  };

  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("Health:", await res.json());
  } catch (err: any) {
    console.log("Register result:", err.message);
  }
  console.log("New User Data:", JSON.stringify(data, null, 2));
}

export async function LoginAction(form: FormData) {
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const data = {
    email: email,
    password: password,
  };

  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("Login result:", await res.json());
  } catch (err: any) {
    console.log("Error health:", err.message);
  }
}
