import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function checkIfFullyScrolled(e: React.UIEvent<HTMLDivElement, UIEvent>) {
  if (Math.ceil(e.currentTarget.scrollTop) + e.currentTarget.offsetHeight + 1 >= e.currentTarget.scrollHeight) {
    return true
  } else return false;
}