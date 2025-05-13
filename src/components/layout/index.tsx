import SideBar from './SideBar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <SideBar />
      <main className='w-full p-6 md:ml-64'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
