import SideBar from './components/layout/SideBar'

export default function App() {
  return (
    <div className='flex min-h-screen'>
      <SideBar />
      <main className='p flex-1 items-center justify-center'>
        <h1 className='border-b py-3 text-center text-2xl font-semibold'>Home Page</h1>
        <p className='text-muted-foreground mt-2'>Welcome to Trendo</p>
      </main>
    </div>
  )
}
