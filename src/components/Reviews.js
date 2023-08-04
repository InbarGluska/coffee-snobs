import React, { useState } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

const ReviewsContainer = styled.div`
    margin-top: 2rem;
`;

const ReviewBox = styled.div`
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
`;

const ReviewHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const ReviewName = styled.span`
    font-weight: bold;
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
`;

const Input = styled.input`
    height: 2rem;
`;

const SubmitButton = styled.button`
    background-color: #361500;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 4rem;
`;

const DeleteButton = styled.button`
    background-color: red;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: auto;
    font-weight: bold;
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
            {reviews.map((review) => (
                <ReviewBox key={review.id}>
                    <ReviewHeader>
                        <ReviewName>{review.name}</ReviewName>
                        <span>–</span>
                        <span>{new Date(review.id).toLocaleDateString()}</span>
                        <DeleteButton
                            onClick={() => handleDeleteReview(review.id)}
                        >
                            X
                        </DeleteButton>
                    </ReviewHeader>
                    <ReviewText>{review.text}</ReviewText>
                </ReviewBox>
            ))}
        </ReviewsContainer>
    );
}
