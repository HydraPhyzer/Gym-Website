import { useState} from 'react';
import Navbar from './Scenes/Navbar/Navbar'
import { SelectedPageENUM } from './Scenes/Navbar/EnumTypes';

function App() {
  const [SelectedPage,SetSelectedPage]=useState<SelectedPageENUM>(SelectedPageENUM.Home)

  return (
    <div className='App bg-gray-20'>
      <Navbar SelectedPage={SelectedPage} SetSelectedPage={SetSelectedPage} />
    </div>
  )
}

export default App
