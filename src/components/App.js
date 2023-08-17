import './App.css';
import Login from './Login';
import Mypage from './Mypage';

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
