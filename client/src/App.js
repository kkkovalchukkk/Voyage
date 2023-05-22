import "./app.css";

import Header from "./components/Header";
import Layout from "./components/Layout";
import Travels from "./components/Travels";
import EditWindow from "./components/EditWindow";
import PopupWindow from "./components/PopupWindow";
import LoginPopup from "./components/LoginPopup";
import {useState} from "react";
import RegisterPopup from "./components/RegisterPopup";

function App() {
  const [loginPopupIsToggle, setloginPopupIsToggle] = useState(false);
  const [registerPopupIsToggle, setregisterPopupIsToggle] = useState(false);

  const showLoginPopup = () => setloginPopupIsToggle(true);
  const hideLoginPopup = () => setloginPopupIsToggle(false);

  const showRegisterPopup = () => setregisterPopupIsToggle(true);
  const hideRegisterPopup = () => setregisterPopupIsToggle(false);

  return (
    <div className='App'>
      <PopupWindow
        loginPopupIsToggle={loginPopupIsToggle}
        registerPopupIsToggle={registerPopupIsToggle}
      >
        <LoginPopup
          loginPopupIsToggle={loginPopupIsToggle}
          hideLoginPopup={hideLoginPopup}
        />
        <RegisterPopup
          hideRegisterPopup={hideRegisterPopup}
          registerPopupIsToggle={registerPopupIsToggle}
        />
      </PopupWindow>
      <Header
        showLoginPopup={showLoginPopup}
        showRegisterPopup={showRegisterPopup}
      />
      <Layout>
        <Travels />
        <div className='wrapper'>
          <EditWindow />
        </div>
      </Layout>
    </div>
  );
}

export default App;
