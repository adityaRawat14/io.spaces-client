import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatBinaryString(binaryString: string): string {
  const cleanedString = binaryString.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
  return cleanedString.trim();
}
