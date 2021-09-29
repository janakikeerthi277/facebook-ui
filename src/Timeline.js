import { Button, Card, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

import GifList from "./GifList";

function Timeline() {
  const gf = new GiphyFetch("qgcLvL4d5GSr9nrDEY8eGoeIlTEf78d8");

  const [posts, setPosts] = useState({});
  const [postText, setPostText] = useState("");
  const [showPosts, setShowPosts] = useState(false);
  const [gifs, setGif] = useState({});
  const [lgShow, setLgShow] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const submitPosts = () => {
    setPosts(postText);
    setShowPosts(true);
    setShowGif(true);
    setPostText("");
  };

  const gifData = (data) => {
    setGif(data);
    console.log(data);
  };

  return (
    <>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "800px" }}>
          <Card.Body>
            <Container fluid>
              <Row>
                <textarea
                  placeholder="What's on your mind?"
                  value={postText}
                  onChange={(event) => setPostText(event.target.value)}
                ></textarea>
              </Row>
            </Container>
            <br />

            <Row xs={4} md={6} style={{ justifyContent: "right" }}>
              <Button
                variant="primary"
                size="sm"
                style={{ marginRight: "5px" }}
              >
                Only Me
              </Button>{" "}
              <Button
                variant="primary"
                size="sm"
                style={{ marginRight: "5px" }}
                onClick={submitPosts}
              >
                Post
              </Button>
            </Row>
            <br />

            <Row lg={2}>
              <GifList gifData={gifData}></GifList>{" "}
              <Button
                className="mb-2"
                variant="outline-dark"
                size="sm"
                onClick={() => {
                  setLgShow(true);
                  console.log(lgShow);
                }}
              >
                Tag Friends
              </Button>
              <Button
                className="mb-2"
                variant="outline-dark"
                size="sm"
                onClick={() => {
                  setLgShow(true);
                  console.log(lgShow);
                }}
              >
                Check In
              </Button>
              <Button
                className="mb-2"
                variant="outline-dark"
                size="sm"
                onClick={() => {
                  setLgShow(true);
                  console.log(lgShow);
                }}
              >
                Tag Event
              </Button>
            </Row>

            <hr />
            {showPosts && (
              <Card>
                <Card.Body>
                  <Card.Title>{posts}</Card.Title>
                  {showGif && <img src={gifs} />}
                </Card.Body>
              </Card>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Timeline;
