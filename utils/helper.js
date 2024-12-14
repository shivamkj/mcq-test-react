export function encodeParams(obj) {
  return Object.entries(obj)
    .map((kv) => kv.map(encodeURIComponent).join("="))
    .join("&");
}

export function parseQueryParam(key) {
  if (typeof window == "undefined") return;
  const query = window.location.search;

  const start = query.indexOf(key + "=") + key.length + 1;
  const end = query.indexOf("&", start);
  const value = query.slice(start, end == -1 ? undefined : end);

  if (value == null || value == "") {
    return null;
  }
  return decodeURIComponent(value);
}
