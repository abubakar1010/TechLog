import { MainLayout } from "./components/layout/MainLayout"
import { ProtectedRoute } from "./components/ui/ProtectedRoute"


function App() {

  console.log("first")

  return (
    <ProtectedRoute role={undefined}>
    <MainLayout />
    </ProtectedRoute>

  )
}

export default App
