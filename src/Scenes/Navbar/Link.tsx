import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPageENUM } from './EnumTypes'
import { PropType } from './Navbar'

type Props=PropType&{
    Page:string,
}
const Link = ({Page,SelectedPage,SetSelectedPage}:Props) => {
    let LowerCasePage=Page.toLocaleLowerCase().replace(/ /g,"") as SelectedPageENUM;
  return (
    <AnchorLink 
    className={`${SelectedPage===LowerCasePage?"text-primary-500":""} transition duration-500 hover:text-primary-500`}
    href={`#${Page}`}
    onClick={()=>{SetSelectedPage(LowerCasePage)}}
    >
    {Page}
    </AnchorLink>
  )
}

export default Link