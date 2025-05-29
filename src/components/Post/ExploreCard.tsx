import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Bookmark, Heart } from 'lucide-react'
import { useExploreCard } from '../hooks/useExploreCard'

type User = {
  username: string
  name: string
  image: string
  date: string
  post: string
  postId: number
  hashtags: string[]
}

type ExploreCardProps = {
  post: User
  image: string
}

export default function ExploreCard({ post, image }: ExploreCardProps) {
  const {
    handleNavigateToProfile,
    getPostPreview,
    getHashtagPreview,
    getUsernameShort,
    getAvatarFallback,
  } = useExploreCard(post.username)

  return (
    <Link
      to={`/post/${post.postId}`}
      className='group hover:border-primary/80 hover:bg-primary/10 flex cursor-pointer flex-col items-start justify-between gap-4 rounded-lg border transition-all duration-200'
    >
      {!image ? (
        <div className='m-auto flex aspect-square items-center justify-center text-gray-500'>
          No Image
        </div>
      ) : (
        <div className='rounded-t-lg border'>
          <img src={image} alt='post preview' className='aspect-video rounded-t-lg object-cover' />
        </div>
      )}

      <div className='flex flex-col items-start justify-between gap-2 px-3'>
        <p className='text-primary text-md font-bold break-words'>{getPostPreview(post.post)}</p>
        <p className='text-secondary-foreground text-xs break-words'>
          {getHashtagPreview(post.hashtags)}
        </p>
      </div>

      <div className='flex w-full items-center justify-between gap-4 p-3 pt-2'>
        <div
          className='flex cursor-pointer flex-row items-center gap-2'
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleNavigateToProfile()
          }}
        >
          <Avatar className='border-primary h-8 w-8 border-2 transition-transform duration-200 group-hover:scale-105'>
            <AvatarFallback className='from-primary/20 to-primary/10 text-primary text-md border bg-gradient-to-br font-semibold'>
              {getAvatarFallback(post.name)}
            </AvatarFallback>
          </Avatar>

          <div className='text-muted-foreground text-xs'>@{getUsernameShort(post.username)}</div>
        </div>

        <div className='flex flex-row items-center gap-2'>
          <div className='flex items-center gap-1'>
            <Heart
              className='h-6 cursor-pointer'
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                // Handle like action here
                console.log('Liked!')
              }}
            />
            <p className='text-muted-foreground text-xs'>59</p>
          </div>

          <Bookmark
            className='h-6 cursor-pointer'
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              // Handle bookmark action here
              console.log('Saved!')
            }}
          />
        </div>
      </div>
    </Link>
  )
}
