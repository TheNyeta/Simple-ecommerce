import { Provider } from "react-redux";
import Navigation from "./app/navigation/Navigation";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
