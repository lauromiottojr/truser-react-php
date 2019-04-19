import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';

const AppRoot = createStackNavigator({
    Main
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#DA552F',
            },
            headerTintColor: '#FFF',
        },
    });

const App = createAppContainer(AppRoot);

export default App;