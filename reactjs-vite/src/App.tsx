import { Route, Routes } from 'react-router-dom'
import ExampleArea from './pages/ExampleArea'

/**
 * This is the entrypoint of your project. You define all the available routes here.
 * 
 * The structure isn't reinforced: you can define a "sidebar" component that handles the routes, or even a `routes.ts`
 * file for this. It's up to you.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ExampleArea />} />
    </Routes>
  )
}
