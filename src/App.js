import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import NG from './NG.png';

// Media template sizes
const sizes = {
  large: 1200,
  medium: 992,
  small: 768,
  extraSmall: 766
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {});

const AppWrapper = styled.div`
  background-color:black;
  height:100vh;
`
const CenteredFlex = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
`
const NavbarWrapper = CenteredFlex.extend`
   background-color:black; 
   height:8vh;
   justify-content: flex-end;
`
const UserName = styled.div`
  text-align:center;
  font-size:25px;
  text-transform: uppercase;
  color:#636060;
`
const PageLayoutWrapper = styled.div`
  height:100vh;
`
const UserPosition = styled.div`
  text-transform: uppercase;
  text-align:center
  color: #8d907e;
  margin:5px;
`
const UserInfo = CenteredFlex.extend`
   background-color:white;
   padding:20px;
   flex-direction:column;
`
const MainWrapper = CenteredFlex.withComponent('main').extend`
  background-color:white;
  position:relative;
  height:92vh;
`

const Image = styled.img.attrs(`
  src : ${props => props.src}
`)
`
  width:100%;
  ${props => props.rounded && css`
     border-radius:50%;
  `}
  ${props => props.small && css`
     width:40px;
     height:40px;
  `}
`

const Card = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  border-radius:20px;
  
  ${media.medium`width:50%`}
  ${media.small`width:50%`}
  ${media.extraSmall`width:80%`}
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
        <PageLayout>
          <NavigationBar avatar={<Avatar user={this.state.user} />} />
          <Main user={this.state.user}/>
        </PageLayout>
      </AppWrapper>
    );
  }
}

const PageLayout = ({children}) => {
  return (
    <PageLayoutWrapper>
      {children}
    </PageLayoutWrapper>
  );
}

const NavigationBar = ({avatar}) => {
  return (
    <NavbarWrapper>
      {avatar}
    </NavbarWrapper>
  );  
}



const Main = ({ user }) => { 
  return (
    <MainWrapper>
      <Card>
        <Image src={user.image} />
        <UserInfo>
          <UserName>{user.name}</UserName>
          <UserPosition>{user.position}</UserPosition>
          <Image small src={NG}/>
        </UserInfo>
      </Card>
    </MainWrapper>
  )
}

const Avatar = ({ user }) => {
  return (
     <Image small rounded src={user.image} />
  )
}

export default App;
