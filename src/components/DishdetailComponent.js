import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div>
        {" "}
        <h4>Comments</h4>
        <ListGroup>
          {comments.map((comment) => (
            <ListGroupItem key={comment.id}>
              <p> {comment.comment}</p>
              <p>
                -- {comment.author} -{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  } else {
    return <div></div>;
  }
}
function RenderDish({ dish }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          {/* {this.renderComments(dish.comments)} */}
          <RenderComments comments={dish.comments} />
        </div>
      </div>
    </div>
  );
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return <RenderDish dish={props.dish} />;
  } else return <div className="row"></div>;
};
// }
export default DishDetail;
