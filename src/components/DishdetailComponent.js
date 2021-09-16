import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardImgOverlay,
  CardTitle,
  ListGroup,
  ListGroupItem,
  ListInlineItem,
  List,
} from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComments(comments) {
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
  renderDish(dish) {
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
            {this.renderComments(dish.comments)}
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.dish != null) {
      return this.renderDish(this.props.dish);
    } else return <div className="row"></div>;
  }
}
export default Dishdetail;
