import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useUserCard } from '@/components/hooks/useUserCard'

type User = {
  username: string
  name: string
  status: 'online' | 'offline'
}

type UserCardProps = {
  user: User
  isFollowed: boolean
  onToggleFollow: () => void
}

export default function UserCard({ user, isFollowed, onToggleFollow }: UserCardProps) {
  const { handleCardClick, handleFollowClick } = useUserCard(user.username, onToggleFollow)

  return (
    <div
      className='group hover:border-primary/80 hover:bg-primary/10 flex cursor-pointer flex-col items-center justify-center gap-3.5 rounded-2xl border py-6 transition-all duration-200'
      onClick={handleCardClick}
    >
      <Avatar className='border-primary h-20 w-20 border-2 transition-transform duration-200 group-hover:scale-105'>
        <AvatarFallback className='from-primary/20 to-primary/10 text-primary border bg-gradient-to-br text-2xl font-semibold'>
          {user.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div className='text-muted-foreground text-xs'>@{user.username}</div>
      <div className='text-primary text-lg font-semibold'>{user.name}</div>

      <div
        className={`text-xs font-medium ${
          user.status === 'online' ? 'text-green-500' : 'text-muted-foreground'
        }`}
      >
        {user.status}
      </div>
      <Button
        variant={isFollowed ? 'secondary' : 'outline'}
        className='hover:bg-primary/20 hover:border-primary/80 cursor-pointer px-4 py-2 font-semibold'
        onClick={handleFollowClick}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </div>
  )
}
