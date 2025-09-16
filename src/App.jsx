import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./page";
import { cartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
