import { useState, useMemo } from 'react'

export type User = {
  username: string
  name: string
  status: 'online' | 'offline'
  userId: number
}

const initialUsers: User[] = [
  { userId: 1, username: 'alice.johnson', name: 'Alice Johnson', status: 'online' },
  { userId: 2, username: 'bobsmith', name: 'Bob Smith', status: 'offline' },
  { userId: 3, username: 'charlied', name: 'Charlie Davis', status: 'online' },
  { userId: 4, username: 'diana_e', name: 'Diana Evans', status: 'offline' },
  { userId: 5, username: 'ethanbrown', name: 'Ethan Brown', status: 'online' },
  { userId: 6, username: 'fiona.clark', name: 'Fiona Clark', status: 'offline' },
  { userId: 7, username: 'george_m', name: 'George Miller', status: 'online' },
  { userId: 8, username: 'hannahmoore', name: 'Hannah Moore', status: 'offline' },
  { userId: 9, username: 'ian.w', name: 'Ian Wilson', status: 'online' },
  { userId: 10, username: 'jasminelee', name: 'Jasmine Lee', status: 'offline' },
  { userId: 11, username: 'kevinhall', name: 'Kevin Hall', status: 'online' },
  { userId: 12, username: 'laura.s', name: 'Laura Scott', status: 'offline' },
  { userId: 13, username: 'mike_a', name: 'Mike Adams', status: 'online' },
  { userId: 14, username: 'nina.turner', name: 'Nina Turner', status: 'offline' },
  { userId: 15, username: 'oscar_y', name: 'Oscar Young', status: 'online' },
  { userId: 16, username: 'paulagreen', name: 'Paula Green', status: 'offline' },
  { userId: 17, username: 'quinn.h', name: 'Quinn Harris', status: 'online' },
  { userId: 18, username: 'rachbaker', name: 'Rachel Baker', status: 'offline' },
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
