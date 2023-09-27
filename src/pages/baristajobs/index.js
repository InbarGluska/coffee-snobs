import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "@/components/Navbar";

const PageContainer = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -1.5rem;
`;

export const StyledH2 = styled.div`
    /* display: inline-block; */
    padding: 10px 15px;
    font-size: 37px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    background-color: #a47e3b;
    border-radius: 0px;
    /* cursor: pointer; */
    transition: background-color 0.3s ease;
    margin-bottom: 0rem;
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const CoffeeShopAdsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 0rem;
    background-image: url("https://i.ibb.co/Tb5bf9t/E-amp-C10.jpg");
    background-size: 100%;
    min-height: 100vh;
    background-attachment: fixed;
    margin-bottom: 2rem;
`;

const AdCard = styled.div`
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    padding: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 40%;
`;

const AdTitle = styled.h3`
    margin-bottom: 0.5rem;
`;

const AdDescription = styled.p`
    margin-bottom: 1rem;
`;

const AdDetails = styled.p`
    margin-bottom: 0.5rem;
`;

const ApplyButton = styled.button`
    background-color: #a47e3b;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
`;

const ApplyForm = styled.form`
    margin-top: 1rem;
`;

const FileInput = styled.input`
    margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
    background-color: #a47e3b;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
`;

export default function CoffeeShopAds() {
    const [showApplyForm, setShowApplyForm] = useState({});

    const handleApplyClick = (adId) => {
        setShowApplyForm({ [adId]: true });
    };

    const handleApplyFormSubmit = (event) => {
        event.preventDefault();
        // Your logic to submit the form and handle the CV upload goes here
        // For this example, we'll just display a "Thank you for applying!" message
        alert("Thank you for applying!");
    };

    const jobAds = [
        {
            id: 1,
            title: "Barista at Cozy Cafe",
            description:
                "We are looking for an experienced barista to join our team.",
            location: "Friedrichshain",
            salary: "€12 per hour",
            qualifications: "Previous barista experience required.",
        },
        {
            id: 2,
            title: "Barista at Neumman's Cafe",
            description:
                "Join our coffee-loving team and showcase your barista skills. We are looking for someone who is able to work during the weekends",
            location: "Friedrichshain",
            salary: "€12 per hour",
            qualifications: "Barista training and latte art skills preferred.",
        },
        {
            id: 3,
            title: "Experienced Barista Needed",
            description:
                "Espresso Emporium is hiring an experienced barista to work in a fast-paced environment. Latte art skills and customer service experience are a plus.",
            location: "Kreuzberg",
            salary: "€11.50 per hour",
            qualifications:
                "Previous barista experience, latte art skills, customer service experience.",
        },
        {
            id: 4,
            title: "Coffee Enthusiast Wanted",
            description:
                "Join our team at Brewtiful Coffee House! We are looking for a coffee enthusiast who can brew the best coffee and engage with our customers.",
            location: "Mitte",
            salary: "€14 per hour",
            qualifications: "Passion for coffee.",
        },
        {
            id: 5,
            title: "Barista Extraordinaire",
            description:
                "Do you have a love for coffee and a talent for latte art? Join our team at Caffeine Central and show off your barista skills.",
            location: "Prenzlauer Berg",
            salary: "€13 per hour",
            qualifications: "Latte art skills.",
        },
        {
            id: 6,
            title: "Part-Time Barista Position",
            description:
                "Are you looking for a part-time job as a barista? Java Junction is hiring! Perfect for students or those looking for a flexible schedule.",
            location: "Mitte",
            salary: "€12 per hour",
            qualifications: "None specified.",
        },
        {
            id: 7,
            title: "Full-Time Barista Role",
            description:
                "Become a full-time barista at Beans & Brews! We offer competitive pay and opportunities for career growth in the coffee industry.",
            location: "Mitte",
            salary: "€13 per hour",
            qualifications: "None specified.",
        },
        {
            id: 8,
            title: "Coffee Shop Assistant",
            description:
                "Brewsters Cafe is hiring a coffee shop assistant to help with barista duties and provide excellent customer service.",
            location: "Charlottenburg",
            salary: "€12 per hour",
            qualifications: "None specified.",
        },
        {
            id: 9,
            title: "Barista and Cashier",
            description:
                "Join the team at Cafe 35 as a barista and cashier. This role involves taking orders, making coffee, and handling transactions.",
            location: "Neukölln",
            salary: "€12 per hour",
            qualifications: "None specified.",
        },
        {
            id: 10,
            title: "Specialty Coffee Barista",
            description:
                "If you have a passion for specialty coffee, come work with us at The Beanery. We serve only the finest single-origin beans.",
            location: "Prenzlauer Berg",
            salary: "€13 per hour",
            qualifications: "None specified.",
        },
        {
            id: 11,
            title: "Barista Trainer Position",
            description:
                "Brew Masters is seeking an experienced barista to train new hires and maintain the quality of our coffee offerings.",
            location: "Friedrichshain",
            salary: "€12 per hour",
            qualifications: "Previous barista experience, training experience.",
        },
        {
            id: 12,
            title: "Coffee Shop Manager",
            description:
                "We are hiring a coffee shop manager for Buzzworthy Cafe. This role involves overseeing baristas, inventory, and daily operations.",
            location: "Mitte",
            salary: "€15 per hour",
            qualifications: "Management experience, leadership skills.",
        },
        {
            id: 13,
            title: "Artisanal Coffee Roastery Hiring Baristas",
            description:
                "Join our artisanal coffee roastery and share your love for coffee with our customers. Training provided for coffee enthusiasts.",
            location: "Kreuzberg",
            salary: "€12 per hour",
            qualifications: "None specified.",
        },
        {
            id: 14,
            title: "Barista with Coffee Roasting Experience",
            description:
                "Roast & Sip is looking for a barista with experience in coffee roasting. Show off your skills from bean to cup.",
            location: "Mitte",
            salary: "€13 per hour",
            qualifications: "Coffee roasting experience.",
        },
    ];

    return (
        <PageContainer>
            <StyledH2>
                Looking for a job as a Barista? This is the place for you!
            </StyledH2>
            <CoffeeShopAdsContainer>
                {jobAds.map((ad) => (
                    <AdCard key={ad.id}>
                        <AdTitle>{ad.title}</AdTitle>
                        <AdDescription>{ad.description}</AdDescription>
                        <AdDetails>
                            Location: {ad.location} | Salary: {ad.salary}
                        </AdDetails>
                        <AdDetails>
                            Qualifications: {ad.qualifications}
                        </AdDetails>
                        {!showApplyForm[ad.id] && (
                            <ApplyButton
                                onClick={() => handleApplyClick(ad.id)}
                            >
                                Apply
                            </ApplyButton>
                        )}
                        {showApplyForm[ad.id] && (
                            <ApplyForm onSubmit={handleApplyFormSubmit}>
                                <FileInput
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                />
                                <SubmitButton type="submit">
                                    Submit
                                </SubmitButton>
                            </ApplyForm>
                        )}
                    </AdCard>
                ))}
            </CoffeeShopAdsContainer>
            <Navbar />
        </PageContainer>
    );
}
