// import Example from './0-Switch'
// export default Example
import React from 'react';
import { Button, SectionList, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import contacts, { compareNames } from './contacts'
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';
// import ContactsList from './ContactsList'
// import SectionListContacts from './SectionListContacts'
// import AddContactForm from './AddContactForm'

const AppNavigator = createSwitchNavigator({
  AddContact: AddContactScreen,
  ContactList: ContactListScreen,
}, {
  initialRouteName: 'ContactList'
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  state = {
    showContacts: true,
    // showForm: false,
    contacts: contacts,
  };

  addContact = newContact => {
    this.setState(prevState => ({
      showForm: false,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  // toggleContacts = () => {
  //   this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  // };

  // sort = () => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.sort(compareNames),
  //   }));
  // };

  // showForm = () => {
  //   this.setState({ showForm: true });
  // };

  render() {
    // if (this.state.showForm)
    //   return
    // return (
    //   <View style={styles.container}>
    //     <Button title="toggle contacts" onPress={this.toggleContacts} />
    //     <Button title="add contact" onPress={this.showForm} />
    //     {this.state.showContacts && (
    //       <SectionListContacts contacts={this.state.contacts} />
    //     )}
    //   </View>
    // );
    return <AppContainer screenProps={{ contacts: this.state.contacts, addContact: this.addContact }} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});