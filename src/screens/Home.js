import React from 'react'
import { Text, ScrollView, View } from 'react-native'
import ui from '../common/ui'

export default function Home() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: ui.PRIMARY }}>
            <View style={{ padding: 12 }}>
                <Text>This is home page</Text>
            </View>
        </ScrollView>
    )
}
