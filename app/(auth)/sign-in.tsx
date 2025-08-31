import { router } from "expo-router";
import { Button, Text, View } from "react-native";




export default function SingIn(){


    return (
        <View className="flex items-center justify-center">
            <Text className="bg-blue-700 text-3xl font-bold">SignIn</Text>
            <Button title="Sign Up" onPress={() => {
                router.push('/sign-up')
            }}/>
        </View>
    )
}