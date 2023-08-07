import React, { useState } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { TiDeleteOutline } from "react-icons";

const ReviewsContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 4rem;
`;

const ReviewBox = styled.div`
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 50%;
`;

const ReviewHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const ReviewName = styled.span``;

const ReviewDate = styled.span`
    color: #888;
`;

const ReviewText = styled.p`
    margin-top: 0.5rem;
    margin-bottom: 2rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
`;

const TextArea = styled.textarea`
    resize: vertical;
    width: 51%;
    height: 70px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    padding: 0.5rem;
`;

const Input = styled.input`
    height: 1.5rem;
    width: 20%;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    padding: 0.5rem;
`;

const SubmitButton = styled.button`
    background-color: #a47e3b;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    max-width: 200px;
    margin: 0 auto 4rem;
    font-size: 16px;
    &:hover {
        background-color: #61481c;
    }
`;

const DeleteButton = styled.button`
    background-color: red;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-left: auto;
`;

export default function Reviews({ shopId }) {
    const [reviewName, setReviewName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [reviews, setReviews] = useLocalStorageState("reviews", []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (reviewName.trim() === "" || reviewText.trim() === "") return;

        const newReview = {
            id: Date.now(),
            name: reviewName,
            text: reviewText,
            shopId: shopId, // Add the coffee shop ID to the review
        };

        setReviews((prevReviews) => [newReview, ...prevReviews]);
        setReviewName("");
        setReviewText("");
    };

    const handleDeleteReview = (id) => {
        setReviews((prevReviews) =>
            prevReviews.filter((review) => review.id !== id)
        );
    };

    // Function to check if a review was written 5 minutes ago
    const isFiveMinutesAgo = (timestamp) => {
        const currentTime = new Date().getTime();
        const reviewTime = new Date(timestamp).getTime();
        const fiveMinutesInMilliseconds = 5 * 60 * 1000; // 5 minutes in milliseconds
        return currentTime - reviewTime <= fiveMinutesInMilliseconds;
    };

    // Filter reviews based on the associated coffee shop ID
    const filteredReviews = reviews.filter(
        (review) => review.shopId === shopId
    );

    return (
        <ReviewsContainer>
            <h2>Reviews</h2>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    placeholder="Your Name"
                />
                <TextArea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Write your review..."
                />
                <SubmitButton type="submit">Submit Review</SubmitButton>
            </Form>
            {filteredReviews.map((review) => (
                <ReviewBox key={review.id}>
                    <ReviewHeader>
                        <ReviewName>{review.name}</ReviewName>
                        <ReviewDate>
                            {new Date(review.id).toLocaleDateString()}
                        </ReviewDate>
                        {isFiveMinutesAgo(review.id) && ( // Show the delete button if the review was written 5 minutes ago
                            <DeleteButton
                                onClick={() => handleDeleteReview(review.id)}
                            >
                                X
                            </DeleteButton>
                        )}
                    </ReviewHeader>
                    <ReviewText>{review.text}</ReviewText>
                </ReviewBox>
            ))}
        </ReviewsContainer>
    );
}
