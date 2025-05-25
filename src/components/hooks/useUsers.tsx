import { useState, useMemo } from 'react'

export type User = {
  username: string
  name: string
  status: 'online' | 'offline'
  id: number
}

const initialUsers: User[] = [
  { username: 'alice.johnson', name: 'Alice Johnson', status: 'online', id: 1 },
  { username: 'bobsmith', name: 'Bob Smith', status: 'offline', id: 2 },
  { username: 'charlied', name: 'Charlie Davis', status: 'online', id: 3 },
  { username: 'diana_e', name: 'Diana Evans', status: 'offline', id: 4 },
  { username: 'ethanbrown', name: 'Ethan Brown', status: 'online', id: 5 },
  { username: 'fiona.clark', name: 'Fiona Clark', status: 'offline', id: 6 },
  { username: 'george_m', name: 'George Miller', status: 'online', id: 7 },
  { username: 'hannahmoore', name: 'Hannah Moore', status: 'offline', id: 8 },
  { username: 'ian.w', name: 'Ian Wilson', status: 'online', id: 9 },
  { username: 'jasminelee', name: 'Jasmine Lee', status: 'offline', id: 10 },
  { username: 'kevinhall', name: 'Kevin Hall', status: 'online', id: 11 },
  { username: 'laura.s', name: 'Laura Scott', status: 'offline', id: 12 },
  { username: 'mike_a', name: 'Mike Adams', status: 'online', id: 13 },
  { username: 'nina.turner', name: 'Nina Turner', status: 'offline', id: 14 },
  { username: 'oscar_y', name: 'Oscar Young', status: 'online', id: 15 },
  { username: 'paulagreen', name: 'Paula Green', status: 'offline', id: 16 },
  { username: 'quinn.h', name: 'Quinn Harris', status: 'online', id: 17 },
  { username: 'rachbaker', name: 'Rachel Baker', status: 'offline', id: 18 },
]

export function useUsers() {
  const [searchQuery, setSearchQuery] = useState('')
  const [position, setPosition] = useState('All')
  const [followingUsers, setFollowingUsers] = useState<string[]>([])

  const filteredUsers = useMemo(() => {
    return initialUsers.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesStatus = position === 'All' || user.status === position.toLowerCase()
      return matchesSearch && matchesStatus
    })
  }, [searchQuery, position])

  const toggleFollow = (username: string) => {
    setFollowingUsers((prev) =>
      prev.includes(username) ? prev.filter((u) => u !== username) : [...prev, username]
    )
  }

  return {
    searchQuery,
    setSearchQuery,
    position,
    setPosition,
    filteredUsers,
    followingUsers,
    toggleFollow,
  }
}
