import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const s = serve({ port: 4300 });

console.log("http://localhost:4300/");

for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
