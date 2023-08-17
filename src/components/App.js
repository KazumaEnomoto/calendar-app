import './App.css';
import Login from './Login';
import Calendar from './Calendar';
import Customer from './Customer';
import CustomerDetail from './CustomerDetail';
import Schedule from './Schedule';
import Mypage from './Mypage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/customerdetail" element={<CustomerDetail />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </div>
  )
}

export default App;
