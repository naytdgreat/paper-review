import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Login from './components/pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Role from './components/role';
import StuSignup from './components/pages/stuSignup';
import RevSignup from './components/pages/revSignup';
import PaymentMethod from './components/pages/PaymentMethod';
import Student from './components/pages/student';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/role" element={<Role />}/>
        <Route path="/login" element={<Login />}/>
        {/* <Route path="/student-signup" element={<Signup />}/> */}
        <Route path="/reviewer-signup" element={<RevSignup />}/>
        <Route path="/student-signup" element={<StuSignup />}/>
        <Route path="/add-payment-method" element={<PaymentMethod />} />
        <Route path='student'element={<Student />} />
      </Routes>      
    </Router>

  );
}

export default App;
