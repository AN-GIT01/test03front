import './App.css'
import Card from './components/card'
import PostComponent from './components/post'
import PatchComponent from './components/patch'
import RemoveComponent from './components/remove'
import GetCatComponent from './components/getCat'
import GetCatsComponent from './components/getCats'

function App() {

  return (
    <div className="main-container">
      <Card>
        <PostComponent />
      </Card>
      <Card>
        <PatchComponent />
      </Card>
      <Card>
        <RemoveComponent />
      </Card>
      <Card>
        <GetCatComponent />
      </Card>
      <Card>
        <GetCatsComponent />
      </Card>
    </div>
  )
}

export default App
