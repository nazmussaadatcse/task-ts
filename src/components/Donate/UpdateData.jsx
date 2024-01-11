import { useForm } from 'react-hook-form';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useUpdateDonation from '../hooks/useUpdateDonation';
import { Link, useNavigate } from 'react-router-dom';


const UpdateData = () => {

    const currentUserDonation = useUpdateDonation();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const id = currentUserDonation.currentUserDonation[0]?._id;
    const navigate = useNavigate();

    console.log(currentUserDonation.currentUserDonation[0]);

    const onSubmit = (data) => {
        console.log('updated data::', data);

        // put req to save data to DB 
        axiosPublic.put(`/updatedata/${id}`, data)
            .then(res => {
                console.log(res.data);

                if (res.data.modifiedCount && res.data.matchedCount) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Data Updated",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                else if (!res.data.modifiedCount && res.data.matchedCount) {
                    Swal.fire({
                        title: "Data is Up to Date",
                        icon: "warning"
                    });
                }
            })

    };

    const handleDeleteProfile = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete all data!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/deletedata/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            navigate('/');
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Data Deleted",
                                showConfirmButton: false,
                                timer: 2000
                            });

                            setTimeout(() => {
                                window.location.reload();
                            }, 1500);
                        }
                        else if (!res.data.modifiedCount && res.data.matchedCount) {
                            Swal.fire({
                                title: "Data is Up to Date",
                                icon: "warning"
                            });
                        }
                    })

            }
        });

    }

    return (
        <div className="max-w-md mx-auto my-8">
            {
                user ?
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className='flex flex-col items-center'>
                            <img className='w-24 h-24 rounded-md border shadow' src={user?.photoURL} alt="" />
                            <h1 className="text-xl text-center font-bold mb-4">Update Your Profile</h1>


                            <span onClick={() => handleDeleteProfile(currentUserDonation.currentUserDonation[0]?._id)} className="bg-red-500 hover:bg-red-600 text-white px-4 my-1 rounded-md hover:cursor-pointer">Delete</span>
                        </div>
                        <div>
                            <label htmlFor="bloodGroup" className="block text-gray-700">
                                Blood Group
                            </label>
                            <select
                                id="bloodGroup"
                                defaultValue={currentUserDonation.currentUserDonation[0]?.bloodGroup}
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
                                defaultValue={currentUserDonation.currentUserDonation[0]?.name}
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
                                defaultValue={currentUserDonation.currentUserDonation[0]?.phoneNumber}
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
                                defaultValue={currentUserDonation.currentUserDonation[0]?.age}
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
                                defaultValue={currentUserDonation.currentUserDonation[0]?.weight}
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
                                defaultValue={currentUserDonation.currentUserDonation[0]?.gender}
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
                                defaultValue={currentUserDonation.currentUserDonation[0]?.available}
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
                                defaultValue={currentUserDonation.currentUserDonation[0]?.district}
                                {...register('district', { required: true })}
                                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none"
                            />
                            {errors.district && <p className="text-red-500">{errors.district.message}</p>}

                        </div>

                        <button
                            type="submit"
                            className="bg-orange-500 border rounded hover:bg-purple-700 text-white font-bold py-2 px-4 mr-2"
                        >
                            Update
                        </button>
                    </form>
                    :
                    <h2 className='text-center border border-red-200 bg-red-100 font-semibold'>
                        Login First
                    </h2>
            }


        </div>
    );
};

export default UpdateData;
