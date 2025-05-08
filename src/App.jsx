import './App.css'
import EmptyComponent from './components/component'
import Card from './components/card'
import PostComponent from './components/post'
import PatchComponent from './components/patch'
import RemoveComponent from './components/remove'

function App() {

  return (
    <div className="main-container">
      <Card>
        <EmptyComponent/>
      </Card>
      <Card>
        <PostComponent />
      </Card>
      <Card>
        <PatchComponent />
      </Card>
      <Card>
        <RemoveComponent />
      </Card>
    </div>
  )
}

export default App
