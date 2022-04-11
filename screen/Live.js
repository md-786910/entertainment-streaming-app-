import React from 'react'
import { View, Text } from 'react-native'

const Live = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Home')}
                title="Go to notifications"
            />
        </View>
    )
}

export default Live
