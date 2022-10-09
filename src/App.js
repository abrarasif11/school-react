import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Academic from './component/Header/Courses/Courses';
import About from './component/Header/About/About';
import Cart from './component/Header/Cart/Cart';
import Courses from './component/Header/Courses/Courses';
import Home from './component/Home/Home';

function App() {
  const router = createBrowserRouter([
{
  path: '/',
  element : <Main></Main>,
  children:[
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/home',
      element: <Home></Home>
    },
  {
    path: '/courses',
    loader : () => fetch('course.json'),
    element : <Courses></Courses>
  },
  {
    path: '/cart',
    element : <Cart></Cart>
  },
  {
    path: '/about',
    element : <About></About>
  }
  ] 
}
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>  
    </div>
  );
}

export default App;
