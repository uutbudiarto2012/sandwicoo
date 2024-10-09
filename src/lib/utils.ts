import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const Rupiah = (data?: number) => {
  const rp = new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style:'currency'
  }).format(data || 0);

  return rp;
};
