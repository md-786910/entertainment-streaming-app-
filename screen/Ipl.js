import React from 'react'
import { View, Text, Button } from 'react-native'

const Ipl = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Ipl')}
                title="Go to notifications"
            />
        </View>
    )
}

export default Ipl
