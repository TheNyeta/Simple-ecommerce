import { Provider } from "react-redux";
import Navigation from "./app/navigation/Navigation";
import store from "./redux/store";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Navigation />
        <Toast />
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
