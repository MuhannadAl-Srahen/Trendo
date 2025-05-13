import { Route, Routes } from 'react-router'
import Layout from './components/layout'
import HomePage from './pages/HomePage'
import SavedPostPage from './pages/SavedPostPage'
import UsersPage from './pages/UsersPage'
import ExplorePage from './pages/ExplorePage'
import CreatePostPage from './pages/CreatePostPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='saved-post' element={<SavedPostPage />} />
        <Route path='users' element={<UsersPage />} />
        <Route path='explore' element={<ExplorePage />} />
        <Route path='create-post' element={<CreatePostPage />} />
      </Route>
    </Routes>
  )
}
