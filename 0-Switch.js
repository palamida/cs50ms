import React from 'react'
import { Button, View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

class ScreenComponentOne extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, align: 'center', justifyContent: 'center', borderWidth: 25, borderColor: '#f63' }}>
                <Button title="Go to screen tTWO" onPress={() => {
                    this.props.navigation.navigate('RouteNameTwo')
                }} />
            </View>
        )
    }
}

class ScreenComponentTwo extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, align: 'center', justifyContent: 'center', borderWidth: 25, borderColor: '#494' }}>
                <Button title="Go to screen ONE" onPress={() => {
                    this.props.navigation.navigate('RouteNameOne')
                }} />
            </View>
        )
    }
}

const AppNavigator = createSwitchNavigator({
    "RouteNameOne": ScreenComponentOne,
    "RouteNameTwo": ScreenComponentTwo,
})

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />
    }
}