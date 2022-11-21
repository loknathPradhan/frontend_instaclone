import './App.css';
import MainLayout from './components/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost';
import Viewposts from './pages/Viewposts';
import Posts from './pages/Posts';

function App() {
  return (<>
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Posts/>}/>
          <Route path='main' element={<MainLayout />}>
            <Route path='view' element={<Viewposts />} />
            <Route path='add' element={<CreatePost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </>

  );
}

export default App;
