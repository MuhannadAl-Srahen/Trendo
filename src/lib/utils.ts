import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Home, Search, Users, Bookmark, PenSquare } from 'lucide-react'

export const navigation = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'Explore', icon: Search, href: '/explore' },
  { name: 'Users', icon: Users, href: '/users' },
  { name: 'Saved', icon: Bookmark, href: '/saved-post' },
  { name: 'Create Post', icon: PenSquare, href: '/create-post' },
]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
