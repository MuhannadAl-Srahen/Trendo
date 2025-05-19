import { useState, useMemo } from 'react'

export type User = {
  username: string
  name: string
  status: 'online' | 'offline'
}

const initialUsers: User[] = [
  { username: 'alice.johnson', name: 'Alice Johnson', status: 'online' },
  { username: 'bobsmith', name: 'Bob Smith', status: 'offline' },
  { username: 'charlied', name: 'Charlie Davis', status: 'online' },
  { username: 'diana_e', name: 'Diana Evans', status: 'offline' },
  { username: 'ethanbrown', name: 'Ethan Brown', status: 'online' },
  { username: 'fiona.clark', name: 'Fiona Clark', status: 'offline' },
  { username: 'george_m', name: 'George Miller', status: 'online' },
  { username: 'hannahmoore', name: 'Hannah Moore', status: 'offline' },
  { username: 'ian.w', name: 'Ian Wilson', status: 'online' },
  { username: 'jasminelee', name: 'Jasmine Lee', status: 'offline' },
  { username: 'kevinhall', name: 'Kevin Hall', status: 'online' },
  { username: 'laura.s', name: 'Laura Scott', status: 'offline' },
  { username: 'mike_a', name: 'Mike Adams', status: 'online' },
  { username: 'nina.turner', name: 'Nina Turner', status: 'offline' },
  { username: 'oscar_y', name: 'Oscar Young', status: 'online' },
  { username: 'paulagreen', name: 'Paula Green', status: 'offline' },
  { username: 'quinn.h', name: 'Quinn Harris', status: 'online' },
  { username: 'rachbaker', name: 'Rachel Baker', status: 'offline' },
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
