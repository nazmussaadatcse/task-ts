import { useForm } from 'react-hook-form';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';


const Donate = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();



    const onSubmit = (data) => {
        console.log(data);

        // post req to save data to DB 
        axiosPublic.post(`/donate`, data)
            .then(res => {
                console.log(res.data);

                if (res.data.insertedId) {
                    navigate('/')
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Listed for Donation",
                        showConfirmButton: false,
                        timer: 2000
                    });

                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);

                }
                else if (res.data.message) {
                    Swal.fire({
                        title: "ALready Exist",
                        icon: "warning"
                    });
                }
            })

    };

    return (
        <div className="max-w-md mx-auto mt-8">
            {
                user ?
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className='flex flex-col items-center'>
                            <img className='w-24 h-24 rounded-md border shadow' src={user?.photoURL} alt="" />
                            <h1 className="text-xl text-center font-bold mb-4">Enter Your Info</h1>


                        </div>
                        <div>
                            <label htmlFor="bloodGroup" className="block text-gray-700">
                                Blood Group
                            </label>
                            <select
                                id="bloodGroup"
                                {...register('bloodGroup')}
                                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none"
                            >
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register('name', { required: true })}
                                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none"
                            />
                            {errors.name && <p className="text-red-500">Name is required</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                defaultValue={user?.email}
                                readOnly
                                {...register('email')}

                                className="border text-gray-500 border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                {...register('phoneNumber')}
                                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="age" className="block text-gray-700">
                                Age
                            </label>
                            <input
                                type="number"
                                id="age"
                                {...register('age', { required: true, min: { value: 18, message: 'Age must be at least 18' } })}
                                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none"
                            />
                            {errors.age && <p className="text-red-500">{errors.age.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="age" className="block text-gray-700">
                                Weight (kg)
                            </label>
                            <input
                                type="number"
                                id="weight"
                                {...register('weight', { required: true, min: { value: 18, message: 'Weight must be at least 45' } })}
                                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none"
                            />
                            {errors.weight && <p className="text-red-500">{errors.weight.message}</p>}

                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-gray-700">
                                Gender
                            </label>
                            <select
                                id="gender"
                                {...register('gender')}
                                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="available" className="block text-gray-700">
                                Available to Donate?
                            </label>
                            <select
                                id="available"
                                {...register('available')}
                                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none"
                            >
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="district" className="block text-gray-700">
                                District Name
                            </label>
                            <input
                                type="text"
                                id="district"
                                {...register('district', { required: true })}
                                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none"
                            />
                            {errors.district && <p className="text-red-500">{errors.district.message}</p>}

                        </div>

                        <button
                            type="submit"
                            className="bg-orange-500 border rounded hover:bg-purple-700 text-white font-bold py-2 px-4 mr-2"
                        >
                            Submit
                        </button>
                    </form>
                    :
                    <div className='h-[400px]'>
                        <h2 className='text-center border border-red-200 bg-red-100 font-semibold'>
                            Login First
                        </h2>
                    </div>
            }
        </div>
    );
};

export default Donate;
