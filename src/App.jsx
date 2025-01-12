import './App.css'
import About_us  from './components/About_us'
import Statement from './components/Statement'
function App() {
  return(
    <div className='bg-black flex flex-col min-h-screen px-24'>
      <div className='flex-grow'>
      <About_us />
      <Statement />
      </div>
    </div>
  )
}

export default App
