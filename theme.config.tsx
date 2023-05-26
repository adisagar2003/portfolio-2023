import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { AiFillLinkedin, AiOutlineLinkedin } from 'react-icons/ai'

const config: DocsThemeConfig = {
  logo: <span>Aditya</span>,
  project: {
    link: 'https://github.com/adisagar2003',
  },
  chat: {
    link: 'https://www.linkedin.com/in/aditya-sagar-42948721a/',
    icon: (
     <AiOutlineLinkedin style={{width:30, height:30}} />
    )
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Made by Aditya',
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://github.com/adisagar2003/PERN-Blog" target="_blank">
      <u> 🎉 Please give a star if you like this portfolio on GitHub</u> 
      </a>
    )
  },
  editLink:{
    component:null,
    text: null
  },
  feedback:{
    content:null,
    labels:null
  },
  search:{
    placeholder:'search content..'
  }
}

export default config
