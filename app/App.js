import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import MedicalData from './components/MedicalData';
import CallDoctor from './components/CallDoctor';
import NavBar from './components/NavBar';
import styles from './styles';

const Header = () => (
  <Text style={ styles.header }>Доктор kowechka</Text>
)

const Preferences = () => (
  <View>
    <Text>This is preferences</Text>
  </View>
)

const store = createStore(reducer); 

export default class App extends Component {
  state = {
    activeTab: "summary"
  }

  componentDidMount() {
    Actions[this.state.activeTab]()
  }

  componentDidUpdate() {
    Actions[this.state.activeTab]()
  }

  changeTab = (tabKey) => {
    this.setState({
      activeTab: tabKey
    })
  }

  render() {
    return(
      <Provider store={store}>
        <View style={ styles.appContainer }>
          <Header />
          
          <Router sceneStyle={ styles.routerContainer }>          
            <Scene key="root" tabs hideTabBar>
              <Scene key="summary" component={ MedicalData } hideNavBar />
              <Scene key="calldoctor" component={ CallDoctor } hideNavBar />
              <Scene key="preferences" component={ Preferences } hideNavBar />
            </Scene>          
          </Router>

          <View style={ styles.bottom }>
            <NavBar style={ styles.navBar } changeTab={ this.changeTab } currentTab={ this.state.activeTab } />
          </View>
        </View>
      </Provider>
    )
  }  
}




