import { json } from "@remix-run/node";

export async function loader() {
    return json({
        ok: true,
        message: "Hello from the API"
    });
}
  