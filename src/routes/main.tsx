import { Routes, Route } from 'react-router-dom'
import * as Pages from 'src/page'

export const RoutePath = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pages.LandingPage.Main />} />
        <Route path="home" element={<Pages.Home.Main />} />
        <Route path="blog" element={<Pages.Blog.Main />} />
      </Routes>
    </div>
  )
}
