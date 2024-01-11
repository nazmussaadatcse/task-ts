import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqData = [
        {
            question: 'How can I sign up to donate blood on the platform?',
            answer: 'To sign up for blood donation, visit our website and click on the "Donate Blood" button. Complete the registration process, providing necessary information such as your contact details, blood type, and preferred donation location.'
        },
        {
            question: 'What are the eligibility criteria for blood donation?',
            answer: 'To be eligible to donate blood, you must be in good health, meet age and weight requirements, and fulfill specific criteria. Check our platform or consult with our medical team for detailed eligibility guidelines.'
        },
        {
            question: 'How does the platform match donors with recipients?',
            answer: 'Our platform employs a sophisticated matching algorithm that considers factors like blood type, location, and urgency. When a donation request is received, the algorithm identifies potential donors who meet the criteria and sends notifications to them.'
        },
        {
            question: 'Is my personal information safe on the blood donation platform?',
            answer: 'We prioritize the privacy and security of your personal information. Our platform uses industry-standard encryption and complies with data protection regulations. Your information is only shared with authorized personnel and is never disclosed to third parties without your consent.'
        },
        {
            question: 'Can I receive updates on the impact of my blood donation?',
            answer: 'Yes, after each successful donation, you will receive updates on how your blood has been utilized, such as the number of lives saved or specific medical cases your donation has supported. This transparency allows you to see the tangible difference your generosity is making in the community.'
        },
    ];

    const handleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='my-8 px-4 lg:px-0'> {/* Adjusting overall padding for mobile and removing margin */}
    <h2 className="text-xl font-bold my-4 text-center text-black"> Frequently Asked Question</h2>
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start"> {/* Flex direction adjustment for desktop */}
        <div className="lg:w-1/2 lg:p-12 mb-8">
            <div className="accordion">
                {faqData.map((faq, index) => (
                    <div className="mb-4" key={index}>
                        <input
                            type="checkbox"
                            id={`question${index + 1}`}
                            className="hidden"
                            checked={activeIndex === index}
                        />
                        <label
                            htmlFor={`question${index + 1}`}
                            className="flex text-orange-500 justify-between items-center bg-gray-100 hover:bg-orange-100 cursor-pointer py-2 px-4 rounded-lg font-semibold"
                            onClick={() => handleAccordion(index)}
                        >
                            <span>{faq.question}</span>
                            < FaArrowDown className='text-orange-600'>
                            </FaArrowDown>
                        </label>
                        <div className={`panel mt-2 ${activeIndex === index ? '' : 'hidden'}`}>
                            <p className="py-2 rounded-md text-gray-900 px-4 border">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="lg:w-1/2 lg:p-4">
            {/* Add your image */}
            <img src="https://i.ibb.co/L5MYXqM/faq-removebg-preview.png" alt="Your Image" className="w-full" />
        </div>
    </div>
</div>

    );
};

export default Faq;