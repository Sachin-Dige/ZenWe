import { mount, shallow } from 'enzyme'
import React from 'react'
import App from './App'
import Dashboard from './Components/Dashboard'
import Users from './Components/Users'

describe("Testing",() => {

// test("Check the availability of Components ", () => {
//   const component = shallow(<App />)
//   // console.log(component.debug);
//   expect(component).toMatchSnapshot()
// })

// test("Check Dashboard", () =>{  
//   const dashboard = shallow(<Dashboard />)
//   expect(dashboard).toMatchSnapshot()

// }) 

// test("check object", () => {
//   let wrapper = shallow(<Dashboard/>);
//   expect(wrapper.exists('.Typography')).toEqual(true)
// })

// it("component is render properly", () => {
//   const appComponent = mount(<App/>) ;
//   console.log(appComponent.debug());
//   const dashboard = appComponent.find('dashboard');
//   expect(dashboard.children()).toBe(true)
// })

// test("render the title of Users Component", () => {
//   const users = shallow(<Users/>)
//   expect(users.find("#header").text()).toContain("Manage the team who's involved in the hiring effort at plenty")
// })
})