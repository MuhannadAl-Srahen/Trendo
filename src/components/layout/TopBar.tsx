import logo from '@/assets/logo.svg'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'

import { Link, useNavigate } from 'react-router'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { cn } from '@/lib/utils'
import { useHideOnScroll } from '../hooks/useHideOnScroll'
export default function TopBar() {
  const hidden = useHideOnScroll(35)
  const navigate = useNavigate()

  return (
    <div
      className={cn(
        `bg-background border-sidebar ? : fixed top-0 right-0 left-0 z-50 flex h-16 translate-y-0 items-center justify-between border-b px-6 transition-transform md:hidden`,
        {
          '-translate-y-full': hidden,
        }
      )}
    >
      <Link className='cursor-pointer' to={'/'}>
        <div className='flex items-center'>
          <div className='from-secondary to-primary/90 flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br'>
            <img src={logo} alt='a t letter' className='p-1.25' />
          </div>
          <span className='ml-1.5 font-medium tracking-tight'>trendo</span>
        </div>
      </Link>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarFallback className='from-primary/20 to-primary/10 text-primary border-primary rounded-full border-1 bg-gradient-to-br px-2.5 py-1.5'>
                M
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='absolute top-1.5 -right-4'>
            <DropdownMenuItem className='cursor-pointer' onClick={() => navigate('/profile')}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer' onClick={() => navigate('/signin')}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <button className='cursor-pointer'></button>
      </div>
    </div>
  )
}
