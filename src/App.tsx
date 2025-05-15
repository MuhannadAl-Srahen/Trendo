import { Route, Routes } from 'react-router'
import Layout from './components/layout'
import HomePage from './pages/HomePage'
import SavedPostPage from './pages/SavedPostPage'
import UsersPage from './pages/UsersPage'
import ExplorePage from './pages/ExplorePage'
import CreatePostPage from './pages/CreatePostPage'
import ProfilePage from './pages/ProfilePage'
import SignupForm from './components/auth/SignupForm'
import SigninForm from './components/auth/SigninForm'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='saved-post' element={<SavedPostPage />} />
        <Route path='users' element={<UsersPage />} />
        <Route path='explore' element={<ExplorePage />} />
        <Route path='create-post' element={<CreatePostPage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='*' element={<div className='text-muted-foreground text-8xl'>404</div>} />
        <Route path='signin' element={<SigninForm />} />
        <Route path='signup' element={<SignupForm />} />
      </Route>
    </Routes>
  )
}
