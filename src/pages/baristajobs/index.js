import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "@/components/Navbar";

const PageContainer = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CoffeeShopAdsContainer = styled.div`
    margin-top: 2rem;
    background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc_JIu-X1CQ5IeMtCEnbjVRgwrGhZoii-iC0Ya7qKyuUFy5GlavWwWSn4ZnaHqzw2jtLcD1Mh3_BG5Qqa8gefG9rTM64bw9a7YqJDV9iRpLQx7mr4tV8izSlv1BMpOSp_18ZsfrSl9_fI2MPNmlueXWnL973jAXSHXZTX2RvroVEAv9hN-0tbtbH5MEy--KGHItEVvKkbw_n5od9xELiOOng4osMkVwsH8eSyMXkUgy4cKauivNDmQ_QxtNPALHm_UgsOMVAI-bb2bkFStFAGKd8fSiFW8ZFV51R5APOw1bWMw40qzSKfQCMl0lLGw8cn_M6SoXIlyZbt3dDja48IlTgN8pl0ZwqyaK_iGd94X8nvkYR9s-ah2MUU5QP-ZDRqgfnvvbpq1_QtkWq_KNHXBhgA341TgQpG7TStyGYPdjRct-KhexpU3K4a9Y-Lp6HVK_7xr2U-zuREdmH4C6-7hmyN3pPdPIQii8JeRTJn2LVaWM3OMU8nIxGjsmxjxkqv2XqkNPG8tlgMbx8nasIpZ71111LRXrz1PRj8BBAInhtXd4S93NxnDrfLqVPiBcRVKoQzuu9RHVKRBtFNgJLSCZBdG6pMEsbxoH9sJ_7tMckoGdmaGkdrkrnDucIO62FPVeQ79BrjMWmtiVZflLFmq7LnOqRwUPEBuoB2Ve6lgFTM0HxUtRzMdL6UdaZk2h14g9y4hVEI6ovZHVBo96Vp4Gw4S3n1wJ3f9wfQMhMoJtKHT0mJWIXIWvT1ixiCQ2-B5clJznyVtRxP6ZLO4ariI28DYGeNvFRykML03yMSm-7HqLnI4J1k93unqAJzXQUkBEWPaqvA5VUuyR7gCNlbTSZgiS-HbdvCfmjCPIpnUhzWO8qBXJ5cC4ODeJ9thAscpQYx2ftZ5rUfkihLO227askhA=w1326-h884-s-no?authuser=0");
    background-size: 100%;
    min-height: 100vh;
    background-attachment: fixed;
`;

const AdCard = styled.div`
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 50%;
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
            title: "Barista at Coffee Haven",
            description:
                "We are looking for an experienced barista to join our team.",
            location: "123 Main Street, City",
            salary: "$12 per hour",
            qualifications: "Previous barista experience required.",
        },
        {
            id: 2,
            title: "Barista at Espresso Delight",
            description:
                "Join our coffee-loving team and showcase your barista skills.",
            location: "456 Oak Avenue, Town",
            salary: "$14 per hour",
            qualifications: "Barista training and latte art skills preferred.",
        },
    ];

    return (
        <PageContainer>
            <CoffeeShopAdsContainer>
                <h2>
                    Are you looking for a job as a Barista? this is the place
                    for you!
                </h2>
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
