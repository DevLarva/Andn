import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AndnMain from './Main/AndnMain';
import ClientMain from './Main/ClientMain';
import OutsourcingMain from './Main/OutsourcingMain';
import { GlobalContextProvider } from './GlobalContext';
import './styles.css';
import PrivateRoute from './PrivateRoute'; // Import PrivateRoute

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/AndnMain"
            element={
              <PrivateRoute>
                <AndnMain />
              </PrivateRoute>
            }
          />
          <Route
            path="/ClientMain"
            element={
              <PrivateRoute>
                <ClientMain />
              </PrivateRoute>
            }
          />
          <Route
            path="/OutsourcingMain"
            element={
              <PrivateRoute>
                <OutsourcingMain />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;


/* TODO:
- 로그인 여부에 따라 제한 접근 라우팅 구현 필요
- 로그인 이후에 분기 처리 필요

*/