import { ToastAndroid } from 'react-native'


export function showToast(message) {
    if (!message)
        return
    if (Platform.OS == 'ios') {
        setTimeout(() => {
            toastRef.show(message);
        }, 100)
    }
    else {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }
}