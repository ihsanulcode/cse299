import React from "react";
import { Container } from "react-bootstrap";
import { FaThumbsUp, FaThumbsDown, FaCheckCircle } from "react-icons/fa";
import "./Review.css";

function Review({ fakeReview }) {
  const { image, name, reviewDate } = fakeReview;
  return (
    <div className="review mt-2">
      <Container>
        <div className="d-flex align-items-center">
          <img src={image} alt="" />
          <div>
            <p className="ms-2 mb-0">
              <small>
                <span className="text-muted">By</span>
                {name}
              </small>
              ,{" "}
              <small>
                <span className="text-muted">{reviewDate}</span>
              </small>
            </p>
            <p>
              <small className="text-success ms-2">
                <FaCheckCircle />
                Verified User
              </small>
            </p>
          </div>
        </div>
        <div className="review-text-container mt-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            veritatis quisquam ipsum cupiditate atque mollitia ullam ducimus
            alias? Totam amet ut officiis dolor sint deleniti excepturi aperiam
            officia harum dolorem labore a consequatur quasi, quae quidem
            consectetur nisi, fugiat neque veniam. Nesciunt ullam voluptate
            facere quidem dolor id aut nam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus adipisci praesentium
            asperiores delectus quis iste! Velit placeat, debitis ea officia
            laudantium repellendus culpa minus autem rerum omnis accusamus nobis
            eligendi, nemo provident possimus voluptatibus natus? Itaque maiores
            saepe quas ad neque sunt voluptatibus, consequuntur asperiores ipsa
            impedit voluptatem dicta alias!
          </p>
          <p className="text-primary">Read More</p>
        </div>
        <div className="mt-2">
          <p className="text-muted">
            <small>Was This Review Helpful to you?</small>
          </p>
        </div>
        <div className="d-flex">
          <div className="icon-box m-2">
            <FaThumbsUp className="icons m-2 " />
          </div>
          <div className="icon-box m-2">
            {" "}
            <FaThumbsDown className="icons m-2" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Review;
