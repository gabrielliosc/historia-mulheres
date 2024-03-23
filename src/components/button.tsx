import { Alert, Button, Pressable, Text } from "react-native";
import { StyleSheet } from 'react-native';

export default function RandomButton(){
    function handleButton(){
        console.log("teste")
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    }
    return(
        <Pressable style={styles.button} onPress={handleButton}>
            <Text style={styles.text}>Sortear uma história</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#BA549A',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 80,
        borderRadius: 4,
        elevation: 3,
    },
    text: {
        color: 'white',
        textTransform: 'uppercase',
    },
});