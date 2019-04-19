import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';
import ViewDataUser from './pages/list';

const AppRoot = createStackNavigator({
    Main,
    ViewDataUser
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