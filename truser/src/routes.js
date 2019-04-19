import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';
import ViewDataUser from './pages/list';
import UpdateDataUser from './pages/update';

const AppRoot = createStackNavigator({
    Main,
    ViewDataUser,
    UpdateDataUser
});

const App = createAppContainer(AppRoot);

export default App;