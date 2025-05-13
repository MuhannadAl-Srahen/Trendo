import SideBar from './SideBar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className='flex min-h-screen'>
      <SideBar />
      <main className='p flex-1 items-center justify-center'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
