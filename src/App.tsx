import { createBrowserRouter, RouterProvider, Link, useOutlet } from 'react-router-dom'
import LoadingView from './routes/loading/View'
import CounterView from './routes/counter/View'
import PaneView from './components/PaneView';
import Pane from './components/Pane';
import List from './components/List';
import ListItem from './components/ListItem';

import './components/styles/0_colors.scss'
import './components/styles/1_base.scss'
import './components/styles/Panes.scss'
import './components/styles/Pane.scss'
import './components/styles/SideMenu.scss'
import './components/styles/Button.scss'

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
    <Pane className={ ("side-menu " + (outlet ? " hidden" : "")) }>
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
