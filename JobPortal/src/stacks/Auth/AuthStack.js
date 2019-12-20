import { SignupScreen, LoginScreen } from "../../containers/";

//Auth Stack
const AuthStack = {
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    SignupScreen: {
        screen: SignupScreen,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
}

export default AuthStack