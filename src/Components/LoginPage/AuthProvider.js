import React, { createContext, useState, useContext } from "react";
import Modal from "react-modal";
import LoginPage from "./LoginPage";
import "./AuthProvider.css"; // Import file with custom styles

Modal.setAppElement("#root");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const login = (username) => {
    if (username) {
      setUser({ username });
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const handleLoginSuccess = (username) => {
    setIsLoginModalOpen(false);
    setUser({ username: user.username });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
      {!user && (
        <Modal
          isOpen={isLoginModalOpen}
          onRequestClose={() => setIsLoginModalOpen(false)}
          contentLabel="Login Modal"
          className="custom-modal"
        >
          <LoginPage
            onClose={() => setIsLoginModalOpen(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        </Modal>
      )}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
