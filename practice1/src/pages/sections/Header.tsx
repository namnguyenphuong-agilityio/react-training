import NavBar from "../../components/NavBar";

const Header: React.FC = () => {
  return (
    <div>
      <div className='signup'>
        <p>Sign up and get 20% off to your first order.</p>
        <a href='/signup' className='signup-link'>
          Sign Up Now
        </a>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
