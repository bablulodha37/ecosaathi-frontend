// Yahan humne aapka LIVE Backend URL daal diya hai
const BASE_URL = "https://ecosaathi-backend.onrender.com";

export async function api(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const opts = {
    headers: { "Content-Type": "application/json" },
    ...options,
  };
  if (opts.body && typeof opts.body === "object") {
    opts.body = JSON.stringify(opts.body);
  }

  const res = await fetch(url, opts);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "API Error");
  return data;
}