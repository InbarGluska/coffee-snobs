import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
    margin-bottom: 3.5rem;
`;

export default function ReviewsSection({ shopId }) {
    const [reviewName, setReviewName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const storedReviews = JSON.parse(
            localStorage.getItem("reviews") || "[]"
        );
        setReviews(storedReviews);
    }, []);

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

    useEffect(() => {
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }, [reviews]);

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
                    </ReviewHeader>
                    <ReviewText>{review.text}</ReviewText>
                </ReviewBox>
            ))}
        </ReviewsContainer>
    );
}
