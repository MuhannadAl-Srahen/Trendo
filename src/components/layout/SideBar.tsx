import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import logo from '../../assets/sidebar_logo.svg'
import { cn, navigation } from '@/lib/utils'
import { useState } from 'react'
import { LogOut } from 'lucide-react'

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Home')

  return (
    <div className='border-sidebar flex h-screen w-64 flex-col border-r'>
      {/* Logo */}
      <div className='flex items-center p-6'>
        <div className='from-secondary to-primary/90 flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br'>
          <img src={logo} alt='a t letter' className='p-1.25' />
        </div>
        <span className='ml-3 text-lg font-medium tracking-tight'>trendo</span>
      </div>

      {/* Profile */}
      <div className='mt-6 px-5'>
        <div className='flex items-center'>
          <Avatar className='border-primary h-12 w-12 border-1'>
            <AvatarFallback className='from-primary/20 to-primary/10 text-primary bg-gradient-to-br'>
              M
            </AvatarFallback>
          </Avatar>
          <div className='ml-3'>
            <p className='text-primary font-medium'>Muhannad</p>
            <p className='text-muted-foreground text-xs'>@_glock_x</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='mt-14 flex-1 space-y-2 px-3'>
        {navigation.map((item) => {
          const isActive = activeItem === item.name
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={cn(
                'group flex items-center rounded-md px-3 py-4 text-sm font-medium transition-all',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon
                className={cn(
                  'mr-3 h-5 w-5 transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                )}
              />
              {item.name}
              {isActive && (
                <div className='bg-primary ml-auto h-1.5 w-1.5 rounded-full' aria-hidden='true' />
              )}
            </a>
          )
        })}
      </nav>

      {/* Logout */}
      <div className='mt-auto px-3 pb-6'>
        <a
          href='#'
          className='group text-muted-foreground hover:bg-destructive/10 hover:text-destructive flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-all'
        >
          <LogOut className='text-muted-foreground group-hover:text-destructive mr-3 h-5 w-5' />
          Logout
        </a>
      </div>
    </div>
  )
}
