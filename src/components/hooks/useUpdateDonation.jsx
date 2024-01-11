import { useContext } from "react";
import useDonations from "./useDonations";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useUpdateDonation = () => {
    const donations = useDonations();
    const { user } = useContext(AuthContext);

    const currentUserDonation = donations.filter(donation => donation.email === user?.email);

    return {
        currentUserDonation,
    };
};

export default useUpdateDonation;
