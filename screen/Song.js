import React from 'react'
import { View, Text } from 'react-native'

const Song = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Movie')}
                title="Go to notifications"
            />
        </View>
    )
}

export default Song
