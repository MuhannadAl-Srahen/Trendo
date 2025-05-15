import { cn, navigation } from '@/lib/utils'
import { Link, useLocation } from 'react-router'

export default function BottomBar() {
  const location = useLocation()
  return (
    <div className='border-sidebar bg-background fixed right-0 bottom-0 left-0 z-50 flex h-16 items-center justify-between border-t md:hidden'>
      <nav className='flex w-full items-center justify-around'>
        {navigation.map((item) => {
          const isActive = location.pathname === item.href

          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'group text-muted-foreground hover:bg-muted hover:text-foreground flex items-center rounded-md px-4 py-4 text-sm font-medium transition-all',
                {
                  'bg-primary/10 text-primary': isActive,
                }
              )}
            >
              <item.icon
                className={cn(
                  'text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors',
                  {
                    'text-primary': isActive,
                  }
                )}
              />

              {isActive && <div className='bg-primary ml-auto' aria-hidden='true' />}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
