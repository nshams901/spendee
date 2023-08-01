
import Topbar from './layout/Topbar'
import Layout from './layout'
import Dashboard from './pages/Dashboard'
import { store } from '../store'
import { Provider } from 'react-redux/es/exports'

function App() {

  return (
    <Provider store={store}>
      <Layout>
        <Topbar/>
        <Dashboard/>
      </Layout>
    </Provider>
  )
}

export default App
