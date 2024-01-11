import { useState } from "react";
import useDonations from "../hooks/useDonations";



const ShowDonations = () => {

    const donations = useDonations();

    const [bloodGroupFilter, setBloodGroupFilter] = useState("");
    const [districtFilter, setDistrictFilter] = useState("");
    // state for blood group and district 


    // filter donations by district and blood group 
    const filteredDonations = donations.filter((donation) => {
        const bloodGroupMatch = !bloodGroupFilter || donation.bloodGroup.toLowerCase().includes(bloodGroupFilter.toLowerCase());
        const districtMatch = !districtFilter || donation.district.toLowerCase().includes(districtFilter.toLowerCase());
        const isAvailable = donation.available === 'yes';

        return bloodGroupMatch && districtMatch && isAvailable;
        // bloodGroupMatch for blood group match
        // districtMatch for district match
        // isAvailable for if the user is available for donation now 
    });

    // console.log(donations);

    return (
        <div className="container mx-auto mt-8">

            {/*  search bar  */}
            <div className="mb-4 flex justify-center items-center">
                <label htmlFor="bloodGroup" className="mr-2 hidden md:block">
                    Blood Group:
                </label>
                <select
                    id="bloodGroup"
                    className="focus:outline-none border rounded p-2"
                    onChange={(e) => setBloodGroupFilter(e.target.value)}
                    value={bloodGroupFilter}
                >
                    <option value="">All</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>

                <label htmlFor="district" className="ml-4 mr-2">

                </label>
                <input
                    className="focus:outline-none border rounded p-2 mr-1"
                    type="text"
                    placeholder="Example: Dhaka"
                    id="district"
                    value={districtFilter}
                    onChange={(e) => setDistrictFilter(e.target.value)}
                />

                <button className="bg-orange-500 border rounded hover:bg-purple-700 text-white font-bold py-2 px-4 mr-2" onClick={() => console.log("Search clicked")}>
                    Search
                </button>
            </div>

            {/* no blood warning  */}
            {
                !filteredDonations.length ?
                    <div className="container mx-auto my-10 p-6 bg-orange-300 rounded border shadow-md text-center">
                        <h2 className="text-3xl text-red-500 font-bold">No Blood Found</h2>
                        <p className="text-gray-600 text-lg">Unfortunately, no matching blood donors were found at the moment. Please search later.</p>
                    </div>
                    :
                    <h1 className="text-xl text-center font-bold mb-4">Available Blood</h1>

            }

            {/* view all blood  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                {filteredDonations.map(donation => (
                    <div
                        key={donation.id}
                        className="bg-indigo-5 bg-orange-500 border rounded-lg shadow-sm p-4 m-1"
                    >
                        <h2 className="text-lg font-semibold mb-2">
                            Blood Group: {donation.bloodGroup}
                        </h2>
                        <p className="text-gray-800 mb-2">
                            <strong>Name:</strong> {donation.name}
                        </p>
                        <p className="text-gray-800 mb-2">
                            <strong>Email:</strong> {donation.email}
                        </p>
                        <p className="text-gray-800 mb-2">
                            <strong>Phone:</strong> {donation.phoneNumber}
                        </p>
                        <p className="text-gray-800 mb-2">
                            <strong>Age:</strong> {donation.age}
                        </p>
                        <p className="text-gray-800 mb-2">
                            <strong>Gender:</strong> {donation.gender}
                        </p>
                        <p className="text-gray-800 mb-2">
                            <strong>District:</strong> {donation.district}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowDonations;