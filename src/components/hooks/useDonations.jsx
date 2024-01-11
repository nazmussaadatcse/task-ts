import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";



const useDonations = () => {
    const [donations, setDonations] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/donate')
            .then(res => {
                setDonations(res.data);
            })
            .catch(error => {
                console.error('Error fetching donations:', error);
            });
    }, [axiosPublic]);

    return donations;
};

export default useDonations;