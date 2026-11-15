// Dodaje podadresu sajta (basePath) ispred putanje do fajla iz /public.
// next/image i <video> to ne rade sami kada je sajt na podadresi.
export function putanja(p: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p}`;
}
