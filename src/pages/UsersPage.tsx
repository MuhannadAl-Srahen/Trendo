import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import { Layers, Search } from 'lucide-react'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type User = {
  username: string
  name: string
  status: 'online' | 'offline'
}

export default function UsersPage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [position, setPosition] = useState('All')
  const [followingUsers, setFollowingUsers] = useState<string[]>([])

  const users: User[] = [
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

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = position === 'All' || user.status === position.toLowerCase()

    return matchesSearch && matchesStatus
  })

  return (
    <div className='mx-auto max-w-4xl'>
      <div className='flex flex-col gap-8'>
        <h3 className='text-primary'>Users</h3>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div className='relative flex w-full max-w-lg items-center gap-2'>
            <Search className='text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2' />
            <Input
              type='text'
              placeholder='Search users by name or username...'
              className='focus:ring-primary/30 rounded-full py-4 pl-12 focus:border-none focus:ring-1'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                className='flex cursor-pointer items-center gap-2 rounded-full'
              >
                <Layers />
                <span>{position}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value='All'>All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='online'>Online</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='offline'>Offline</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredUsers.length === 0 ? (
            <h5 className='text-muted-foreground col-span-full py-12 text-center'>
              No users found
            </h5>
          ) : (
            filteredUsers.map((user, index) => {
              const isUserFollowed = followingUsers.includes(user.username)
              return (
                <div
                  key={index}
                  className='group hover:border-primary/80 hover:bg-primary/10 flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border px-8 py-6 transition-all duration-200'
                  onClick={() => navigate(`/profile/${user.username}`)}
                >
                  <Avatar className='border-primary h-20 w-20 border-2 transition-transform duration-200 group-hover:scale-105'>
                    <AvatarFallback className='from-primary/20 to-primary/10 text-primary border bg-gradient-to-br text-2xl font-semibold'>
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className='text-muted-foreground text-xs'>@{user.username}</div>
                  <div className='text-primary text-lg font-semibold'>{user.name}</div>
                  <div
                    className={`text-xs font-medium ${user.status === 'online' ? 'text-green-500' : 'text-muted-foreground'}`}
                  >
                    {user.status}
                  </div>
                  <Button
                    variant={isUserFollowed ? 'secondary' : 'outline'}
                    className='hover:bg-primary/20 hover:border-primary/80 cursor-pointer px-4 py-2 font-semibold'
                    onClick={(e) => {
                      e.stopPropagation()
                      setFollowingUsers((prev) =>
                        isUserFollowed
                          ? prev.filter((u) => u !== user.username)
                          : [...prev, user.username]
                      )
                    }}
                  >
                    {isUserFollowed ? 'Unfollow' : 'Follow'}
                  </Button>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
