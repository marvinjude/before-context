import React, { Component } from 'react'; 
import styled from 'styled-components';
import NG from './NG.png';

// Just a styled div for the <App> component
const AppWrapper = styled.div`
   background-color: #360c2a;;
   height:100vh;
   display: flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
`
const NavbarWrapper = styled.div`
   background-color:white;
   border-radius: 20px;
   box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
   position:relative;
`
const UserName = styled.div`
  text-align:center;
  font-size:30px;
  text-transform: uppercase;
  color:#636060;
`
const UserPosition = styled.div`
  text-transform: uppercase;
  text-align:center
  color: #8d907e;
  margin:5px;
`
const UserInfo = styled.div`
   padding:20px;
   display: flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
`
const ImageIcon = styled.img.attrs(`
  src : ${props=> props.src}
`)`
  width:50px;
`

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Prof. Yemi Osinbajo",
        image: "https://i1.wp.com/techpoint.africa/wp-content/uploads/2015/12/Professor-Yemi-Osinbajo.jpg?w=622&ssl=1",
        position: "VICE PRESIDENT. NIGERIA"
      }
    }
  }
  
  render() {
    return (
      <AppWrapper>
        <PageLayout navbar={<NavigationBar user={this.state.user}/>}/>
      </AppWrapper>
    );
  }
}

const PageLayout = ({navbar}) => {
  return (
    <React.Fragment>
      {navbar}
    </React.Fragment>
  );
}

const NavigationBar = ({user}) => {
  return (
    <NavbarWrapper>
      <Avatar user={user} />
      <UserInfo>
        <UserName>{user.name}</UserName>
        <UserPosition>
          {user.position}
        </UserPosition>
        <ImageIcon src={NG}/>
      </UserInfo>
    </NavbarWrapper>
  );  
}

const Avatar = ({ user }) => {
  return (
     <img src={user.image}/>
  )
}

export default App;
