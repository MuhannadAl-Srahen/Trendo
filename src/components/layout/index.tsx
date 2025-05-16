import BottomBar from './BottomBar'
import SideBar from './SideBar'
import TopBar from './TopBar'

import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <TopBar />
      <SideBar />
      <BottomBar />
      <main className='my-16 w-full p-6 md:my-0 md:ml-64 md:p-6'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
