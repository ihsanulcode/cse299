import React, { useEffect, useState } from "react";
import Review from "./Review/Review";
import "../Pages/ProductExtendedView/ProductExtendedView.css";
import dwayne from "../assets/dwayne.jpg";
import duaLipa from "../assets/dua_lipa.jpg";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ReviewContainer({ user, id }) {
  const [reviewsList, setReviewsList] = useState([]);
  const fakeReviews = [
    {
      id: 1,
      name: "Dwayne Jhonson",
      reviewDate: "01 Nov 2020",
      image: dwayne,
    },
    {
      id: 2,
      name: "Dwayne Jhonson",
      reviewDate: "01 Nov 2020",
      image: dwayne,
    },
    {
      id: 3,
      name: "Dua Lipa",
      reviewDate: "04 Dec 2020",
      image: duaLipa,
    },
  ];

  useEffect(() => {
    const showLimitedReviews = fakeReviews.slice(0, 2);
    setReviewsList(showLimitedReviews);
  }, []);

  const handleSeeMoreReview = () => {
    setReviewsList(fakeReviews);
  };

  const handleReviewInput = (event) => {
    event.preventDefault();
    const rev = event.target.revInput.value;
    console.log(rev);
  };

  return (
    <div className="reviews-container">
      <div>
        {user?.uid && (
          <>
            <Container>
              <Form onSubmit={handleReviewInput}>
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    name="revInput"
                  />
                  {/* <InputGroup.Text> */}
                  <Button variant="light border-primary" type="submit">
                    Add review
                  </Button>
                  {/* </InputGroup.Text> */}
                </InputGroup>
              </Form>
            </Container>
          </>
        )}
      </div>
      <hr />
      <div>
        {reviewsList.map((fakeReview) => (
          <Review key={fakeReview.id} fakeReview={fakeReview}></Review>
        ))}
      </div>
      <Container className="mb-4">
        <button
          className="btn text-primary btn-whight border-0 see-more-btn"
          onClick={handleSeeMoreReview}
        >
          <small>See more reviews</small>
        </button>
      </Container>
    </div>
  );
}

export default ReviewContainer;
