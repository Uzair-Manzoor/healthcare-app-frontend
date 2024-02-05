import { Route, Routes } from 'react-router-dom';
import './App.css';
import Doctors from './pages/Doctors';
import Navbar from './componenets/navbar/navbar/Navbar';
import MyAppointments from './pages/MyAppointments';
import AddDoctor from './pages/AddDoctor';
import BookAppointment from './pages/BookAppointment';
import DeleteDoctor from './pages/DeleteDoctor';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Doctors />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/delete-doctor" element={<DeleteDoctor />} />
      </Routes>
    </div>
  );
}

export default App;
