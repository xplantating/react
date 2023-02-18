import logo from './logo.jpg';
import './App.css'; 


function Profile() {
  return (
    <div className='App'>
     <img src={logo} className="scale" alt="logo" />
    <p>xplantating</p>
    </div>
  );
}

export default function ProfileAndrew() {
  return (
      <Profile />
  );
}
