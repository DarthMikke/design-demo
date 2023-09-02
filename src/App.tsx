import './App.css'
import { createBrowserRouter, RouterProvider, Link, useOutlet } from 'react-router-dom'
import LoadingView from './routes/loading/View'
import CounterView from './routes/counter/View'
import PaneView from './components/PaneView';
import Pane from './components/Pane';
import List from './components/List';
import ListItem from './components/ListItem';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainView />,
      children: [
        {
          path: "/loading",
          element: <LoadingView />,
        },
        {
          path: "/counter",
          element: <CounterView />,
        },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

function MainView() {
  const outlet = useOutlet();

  return <PaneView>
    <Pane className={ "side-menu" }>
      <List>
        <ListItem><Link to='/'>Forside</Link></ListItem>
        <ListItem><Link to='/loading'>Plasshaldarside</Link></ListItem>
        <ListItem><Link to='/counter'>Teljar</Link></ListItem>
      </List>
      <List>
        <ListItem>Innstillingar</ListItem>
        <ListItem>Logg ut</ListItem>
      </List>
    </Pane>
    {outlet ? outlet : <Pane><p>Vel ein ting i menyen.</p></Pane>}
  </PaneView>
}

export default App
