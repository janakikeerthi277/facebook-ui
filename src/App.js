import {Button, Card , Modal} from "react-bootstrap";
import {useState, useEffect} from 'react';
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key

function App() {

  const gf = new GiphyFetch('qgcLvL4d5GSr9nrDEY8eGoeIlTEf78d8')

  const [posts, setPosts] = useState({});
  const [postText, setPostText] = useState('');
  const [showPosts, setShowPosts] = useState(false)
  const [gifs, setGif] = useState({})
  const [lgShow, setLgShow] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const submitPosts = () => {    
    posts.text = postText
    setShowPosts(true)  
    setShowGif(true) ;  
    setPostText('')
  }

  const fetchGifs = (offset) => {
    if(postText==='')  // if user does not input anything in the text area, search for trending gifs
    {
      return gf.trending({ offset, limit: 2 })
    }
    return gf.search(postText, { offset, limit: 2 })
  }

  return (
    <>
    
    <Card>
      <Card.Body>
        <div style={{ display: "flex" }}>
          <textarea  placeholder="Type Something" value = {postText} onChange = {event =>setPostText(event.target.value)}></textarea>
          <Button className="mb-2"  variant="primary" size="sm" onClick={() => { setLgShow(true)}}>Search GIF</Button>
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Body>
                    <Grid width={700} columns={3} fetchGifs={fetchGifs} noLink={true} key={postText} onGifClick={(gif, e) => {setGif(gif); setLgShow(false)}}/>
                </Modal.Body>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
            </Modal>
        </div>
        <br/> 
        <Button variant="primary" size="sm" onClick={submitPosts}>Click here to create the new post!</Button>{' '}
        <hr/> 
        {showPosts && 
          <Card>
            <Card.Body>
              <Card.Title>
                {posts.text}
              </Card.Title>
              {showGif && <img  src={gifs.images.fixed_width.url}/>}
            </Card.Body>
          </Card>}
      </Card.Body>
    </Card>
    </>
  );
}

export default App;
