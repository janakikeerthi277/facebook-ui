import { Button, Modal } from "react-bootstrap";
import { useState} from "react";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

function GifList({ gifData }) {
  const gf = new GiphyFetch("qgcLvL4d5GSr9nrDEY8eGoeIlTEf78d8");
  const [postText, setPostText] = useState("");
  const [lgShow, setLgShow] = useState(false);

  const fetchGifs = (offset) => {
    if (postText === "") {
      return gf.trending({ offset, limit: 2 });
    }
    return gf.search(postText, { offset, limit: 2 });
  };

  return (
    <>
      <Button
        className="mb-2"
        variant="secondary"
        size="sm"
        onClick={() => {
          setLgShow(true);
          console.log(lgShow);
        }}
      >
        Search GIF
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <input
            type="text"
            placeholder="Search GIF"
            value={postText}
            onChange={(event) => setPostText(event.target.value)}
          />
        </Modal.Header>
        <Modal.Body>
          <Grid
            width={700}
            columns={3}
            fetchGifs={fetchGifs}
            noLink={true}
            key={postText}
            onGifClick={(gif, e) => {
              //   setGif(gif);
              gifData(gif.images.fixed_width.url);
              setLgShow(false);
            }}
          />
        </Modal.Body>

        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
}

export default GifList;
