import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { WorkSchedule } from './pages/work-schedule'
import { Metrics } from './pages/metrics'
import { Continuos } from './pages/continuos-improvement'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/escala-discovery' element={<WorkSchedule />}></Route>
      <Route path='/metricas-sucesso' element={<Metrics />}></Route>
      <Route path='/melhoria-continua' element={<Continuos />}></Route>
    </Routes>
  )
}
