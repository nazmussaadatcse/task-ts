import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useUpdateDonation from '../hooks/useUpdateDonation';

const Header = () => {

    const { user, loading, googleLogin, logOut } = useContext(AuthContext);
    const currentUserDonation = useUpdateDonation();
    const navigate = useNavigate();
    console.log(currentUserDonation);


    const handleGoogleLogIn = () => {
        if (!user) {
            googleLogin()

            .then(result=>{
                const user = result.user;
                console.log('user:',user);
                if(user){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Logged-In",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                navigate('/')
            })
        } else {
            logOut();
        }
    };

    return (
        <header className="bg-orange-400 p-4 flex justify-between items-center">
            <div className="flex items-center">
                {/* Replace 'logo.svg' with your actual logo */}
                <img src="https://i.ibb.co/G30pz0C/blood-donation-logo.png" alt="Logo" className="h-12 md:h-20 mr-1 md:mr-4" />
                {/* <h1 className="text-white text-lg font-bold">TS Blood Donation</h1> */}
            </div>
            <nav className="flex items-center gap-2">
                <NavLink
                    to="/"
                    className="text-black mr-1 md:mr-4 hover:text-gray-600"
                    activeClassName="text-gray-300"
                >
                    Home
                </NavLink>
                
                {
                    currentUserDonation?.currentUserDonation[0]?._id? 
                    <NavLink
                    to="/updatedonation"
                    className="text-black mr-1 md:mr-4 hover:text-gray-600"
                    activeClassName="text-gray-300"
                >
                    Update
                </NavLink>
                :
                <NavLink
                    to="/donate"
                    className="text-black mr-1 md:mr-4 hover:text-gray-600"
                    activeClassName="text-gray-300"
                >
                    Donate
                </NavLink>
                }

                <div>
                    {user ?
                        (
                            <button
                                onClick={handleGoogleLogIn}
                                className={`btn  border rounded px-2 text-white hover:text-gray-300 ${user ? 'bg-red-500' : 'bg-blue-500'
                                    }`}
                            >
                                Logout
                            </button>
                        )
                        :
                        (
                            <button
                                onClick={handleGoogleLogIn}
                                className={`btn border rounded px-2 text-white hover:text-gray-300 ${user ? 'bg-red-500' : 'bg-purple-700'
                                    }`}
                            >
                                Login
                            </button>
                        )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
