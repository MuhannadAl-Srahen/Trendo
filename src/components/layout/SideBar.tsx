import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import logo from '../../assets/logo.svg'
import { cn, navigation } from '@/lib/utils'
import { LogOut, User } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router'

export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const profilePath = '/profile'

  const navItemClasses =
    'group text-muted-foreground hover:bg-muted hover:text-foreground flex items-center rounded-md px-3 py-4 text-sm font-medium transition-all'

  return (
    <aside className='border-sidebar fixed hidden h-screen w-64 flex-col overflow-auto border-r md:flex'>
      {/* Logo */}
      <div className='flex items-center p-6'>
        <div onClick={() => navigate('/')} className='flex cursor-pointer items-center'>
          <div className='from-secondary to-primary/90 flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br'>
            <img src={logo} alt='Trendo Logo' className='p-1.25' />
          </div>
          <span className='ml-3 text-lg font-medium tracking-tight'>trendo</span>
        </div>
      </div>

      {/* Profile */}
      <div className='mt-6 px-5'>
        <div className='flex items-center'>
          <Avatar
            className='border-primary h-12 w-12 cursor-pointer border-1'
            onClick={() => navigate(profilePath)}
            aria-label='User profile picture'
          >
            <AvatarFallback className='from-primary/20 to-primary/10 text-primary bg-gradient-to-br'>
              M
            </AvatarFallback>
          </Avatar>
          <div className='ml-3'>
            <p
              className='text-primary cursor-pointer font-medium'
              onClick={() => navigate(profilePath)}
            >
              Muhannad
            </p>
            <p className='text-muted-foreground text-xs'>@_glock_x</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='mt-14 flex-1 space-y-2 px-3'>
        {navigation.map((item) => {
          const isActive = location.pathname === item.href

          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(navItemClasses, {
                'bg-primary/10 text-primary': isActive,
              })}
              aria-label={item.name}
            >
              <item.icon
                className={cn(
                  'text-muted-foreground group-hover:text-foreground mr-3 h-5 w-5 transition-colors',
                  {
                    'text-primary': isActive,
                  }
                )}
              />
              {item.name}
              {isActive && (
                <div className='bg-primary ml-auto h-1.5 w-1.5 rounded-full' aria-hidden='true' />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Profile + Logout */}
      <div className='flex flex-col gap-2 px-3 pb-6'>
        <Link
          to={profilePath}
          className={cn(navItemClasses, {
            'bg-primary/10 text-primary': location.pathname === profilePath,
          })}
        >
          <User
            className={cn(
              'text-muted-foreground group-hover:text-foreground mr-3 h-5 w-5 transition-colors',
              {
                'text-primary': location.pathname === '/profile',
              }
            )}
          />
          Profile
          {location.pathname === profilePath && (
            <div className='bg-primary ml-auto h-1.5 w-1.5 rounded-full' aria-hidden='true' />
          )}
        </Link>
        <Link
          to='/signin'
          className='group text-muted-foreground hover:bg-destructive/10 hover:text-destructive flex cursor-pointer items-center rounded-md px-3 py-4 text-sm font-medium transition-all'
        >
          <LogOut className='text-muted-foreground group-hover:text-destructive mr-3 h-5 w-5' />
          Logout
        </Link>
      </div>
    </aside>
  )
}
