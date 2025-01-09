import { useState } from "react";
import LoginModal from "./Login/Login";
import RegisterModal from "./Register/Register";

export default function Auth() {
  const [isLoginOpen, setLoginOpen] = useState(true);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const switchToRegister = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  const switchToLogin = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  const closeModals = () => {
    setLoginOpen(false);
    setRegisterOpen(false);
  };

  return (
    <>
      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeModals}
        onSwitchToRegister={switchToRegister}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={closeModals}
        onSwitchToLogin={switchToLogin}
      />
    </>
  );
}
