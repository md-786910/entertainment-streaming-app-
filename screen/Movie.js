import React from 'react'
import { View, Text } from 'react-native'

const Movie = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Live')}
                title="Go to notifications"
            />
        </View>
    )
}

export default Movie
