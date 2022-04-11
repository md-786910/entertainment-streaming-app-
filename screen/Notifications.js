import React from 'react'
import { View, Text, Button } from 'react-native'

const Notifications = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    )
}

export default Notifications
