import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Home, Search, Users, Bookmark, PenSquare } from 'lucide-react'

export const navigation = [
  { name: 'Home', icon: Home, href: '#' },
  { name: 'Explore', icon: Search, href: '#' },
  { name: 'Users', icon: Users, href: '#' },
  { name: 'Saved', icon: Bookmark, href: '#' },
  { name: 'Create Post', icon: PenSquare, href: '#' },
]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
