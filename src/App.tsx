import { useState,useEffect} from 'react';
import Navbar from './Scenes/Navbar/Navbar'
import { SelectedPageENUM } from './Scenes/Navbar/EnumTypes';
import Home from './Scenes/Home/Home';
import Benifits from './Scenes/Benifits/Benifits';
import Classes from './Scenes/Classes/Classes';

function App() {
  const [SelectedPage,SetSelectedPage]=useState<SelectedPageENUM>(SelectedPageENUM.Home)
  const [IsTopOfPage,SetIsTopOfPage]=useState<boolean>(true)

  useEffect(() => {
    const HandleScroll=()=>{
      if(window.scrollY===0){SetIsTopOfPage(true);SetSelectedPage(SelectedPageENUM.Home)}
      if(window.scrollY!==0){SetIsTopOfPage(false)}
    }

    window.addEventListener("scroll",HandleScroll)
    return ()=>window.removeEventListener("scroll",HandleScroll)
  },[])
  

  return (
    <div className='App bg-gray-20'>
      <Navbar SelectedPage={SelectedPage} SetSelectedPage={SetSelectedPage} IsTopOfPage={IsTopOfPage}/>
      <Home SetSelectedPage={SetSelectedPage} />
      <Benifits SetSelectedPage={SetSelectedPage} />
      <Classes/>
    </div>
  )
}

export default App
