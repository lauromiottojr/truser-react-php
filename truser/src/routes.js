import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';

const AppRoot = createStackNavigator({
    Main
});

const App = createAppContainer(AppRoot);

export default App;