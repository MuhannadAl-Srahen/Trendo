import { Avatar, AvatarFallback } from '@/components/ui/avatar'

import { Bookmark, Heart, MessageCircle, SquarePen } from 'lucide-react'
import { Link, useNavigate } from 'react-router'

type CardProps = {
  userName: string
  date: string
  image: string
  Title: string
  hashtags: string[]
}

export default function Card({ userName, date, image, Title, hashtags }: CardProps) {
  const navigate = useNavigate()

  return (
    <>
      <div className='w-full rounded-lg border p-5 shadow-md md:p-6'>
        <div className='flex justify-between'>
          <div className='flex flex-wrap items-center gap-3'>
            <Avatar
              className='border-primary h-12 w-12 cursor-pointer border-1'
              onClick={() => navigate('/profile')}
            >
              <AvatarFallback className='from-primary/20 to-primary/10 text-primary bg-gradient-to-br'>
                M
              </AvatarFallback>
            </Avatar>

            <div>
              <Link
                to={'profile'}
                // to={`/profile/${userName}`}
                className='text-primary cursor-pointer font-medium break-words'
              >
                {userName}
              </Link>
              <p className='text-muted-foreground text-center text-xs'>{date}</p>
            </div>
          </div>

          <div className='flex items-center'>
            <SquarePen className='cursor-pointer' />
          </div>
        </div>

        <div className='mt-4 rounded-xl border'>
          <img
            src={image}
            alt='hollow knight character'
            className='aspect-video rounded-xl object-cover'
          />
        </div>

        <div className='flex flex-col items-start justify-between'>
          <p className='text-primary mt-2 font-semibold break-words md:text-lg'>{Title}</p>
          <p className='text-secondary-foreground break-words'>{hashtags.join(' ')}</p>
        </div>

        <div className='flex flex-wrap items-center justify-between gap-4 pt-3'>
          <div className='flex flex-wrap items-center gap-5'>
            <div className='flex items-center gap-2'>
              <Heart className='cursor-pointer' />
              <p className='text-muted-foreground text-sm'>100</p>
            </div>

            <div className='flex items-center gap-2'>
              <MessageCircle className='cursor-pointer' />
              <p className='text-muted-foreground text-sm'>10</p>
            </div>
          </div>

          <div>
            <Bookmark className='cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  )
}
