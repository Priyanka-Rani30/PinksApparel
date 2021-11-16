import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SingInAndSignUp from './pages/sign-n and signup page/sign-n and signup page';
import { auth } from './components/firebase/firebase.utils';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth= null;
  // subscribing to firebase method to get the logged in user object
  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged((user)=>{
      this.setState({currentUser:user})
      console.log(user,this.state.currentUser);
    })
   
  }

  componentWillUnmount(){
     auth.unsubscribeFromAuth();
  }


  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SingInAndSignUp} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
