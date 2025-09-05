import { format } from "date-fns";

export function hello(name) {
  const today = format(new Date(), "YYYY-mm-dd");

  return `[${today}] Hello ${name}`;
}
