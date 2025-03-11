import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { WorkSchedule } from './pages/work-schedule'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/work-schedule' element={<WorkSchedule />}></Route>
    </Routes>
  )
}
