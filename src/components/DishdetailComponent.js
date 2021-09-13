import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardImgOverlay,
  CardTitle,
  ListGroup,
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
          <List>
            {comments.map((comment) => (
              <ListInlineItem key={comment.id}>
                <p> {comment.comment}</p>
                <p>
                  {comment.author} - {comment.date}
                </p>
              </ListInlineItem>
            ))}
          </List>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  renderDish(dish) {
    return (
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
    );
  }

  render() {
    if (this.props.dish != null) {
      return this.renderDish(this.props.dish);
    } else return <div className="row"></div>;
  }
}
export default Dishdetail;
