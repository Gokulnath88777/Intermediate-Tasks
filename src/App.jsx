
import './App.css'
import LinkedCounter from './LinkedCounter'
import UserNameValidation from './UserNameValidation'
import UniqueList from './UniqueList'
import SearchBox from './SearchBox'
import { createContext } from 'react'
import Section from './ReactTaskDeepData/Section'
import Content from './ReactTaskDeepData/Content'
import Display from './ReactTaskDeepData/Display'

export const nameContext=createContext()
function App() {
let name="Gokulnath"
  return (
    <>
    <LinkedCounter/>
    <UserNameValidation/>
    <UniqueList/>
    <SearchBox/>
    <nameContext.Provider value={name}>
          <Section>
            <Content>
              <Display></Display>
            </Content>
          </Section>
    </nameContext.Provider>
     </>
  )
}

export default App
