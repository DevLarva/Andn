// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Register from './Register';
// import AndnMain from './Main/AndnMain';
// import ClientMain from './Main/ClientMain';
// import OutsourcingMain from './Main/OutsourcingMain';
// import { GlobalContextProvider } from './GlobalContext';
// import './styles.css';
// import PrivateRoute from './PrivateRoute'; // Import PrivateRoute

// function App() {
//   return (
//     <GlobalContextProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/AndnMain"
//             element={
//               <PrivateRoute>
//                 <AndnMain />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/ClientMain"
//             element={
//               <PrivateRoute>
//                 <ClientMain />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/OutsourcingMain"
//             element={
//               <PrivateRoute>
//                 <OutsourcingMain />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </Router>
//     </GlobalContextProvider>
//   );
// }

// export default App;


// /* TODO:
// - 로그인 여부에 따라 제한 접근 라우팅 구현 필요
// - 로그인 이후에 분기 처리 필요

// */


import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles.css';
import { getMonth } from './context/util';
import CalendarHeader from './Calendar/CalendarHeader';
import Sidebar from './Calendar/Sidebar';
import Month from './Calendar/Month';
import GlobalContext, { GlobalContextProvider } from './GlobalContext';
import EventModal from './Calendar/EventModal';
import Login from './Login';
import Register from './Register';
import AndnMain from './Main/AndnMain';
import ClientMain from './Main/ClientMain';
import OutsourcingMain from './Main/OutsourcingMain';
import PrivateRoute from './PrivateRoute'; // Import PrivateRoute

function CalendarApp() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className='h-screen flex flex-col'>
        <CalendarHeader />
        <div className='flex flex-1'>
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

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
          <Route
            path="/calendar"
            element={
              <PrivateRoute>
                <CalendarApp />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;

