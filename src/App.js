import {Button, Card , Modal} from "react-bootstrap";
import {useState, useEffect} from 'react';
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key

function App() {

  // const GIF_API = 
  const gf = new GiphyFetch('qgcLvL4d5GSr9nrDEY8eGoeIlTEf78d8')

  const fetchGifs = (offset: number) => gf.trending({ offset, limit: 2 })
  // const fetchGifs = async(offset: number) => {
  //    await gf.search('dogs', { sort: 'relevant', lang: 'es', limit: 10, type: 'stickers' })
  // }

  const [posts, setPosts] = useState({});
  const [postText, setPostText] = useState('');
  const [showPosts, setShowPosts] = useState(false)

  const [gifs, setGifs] = useState();

  const [lgShow, setLgShow] = useState(false);

  const submitPosts = () => {    
    posts.text = postText
    setShowPosts(true)   
    setPostText('')
  }

  const searchGIFs = () => {

  }

  return (
    <>
    
    <Card>
      <Card.Body>
        <div style={{ display: "flex" }}>
          <textarea  placeholder="Type Something" value = {postText} onChange = {event =>setPostText(event.target.value)}></textarea>
          <Button className="mb-2"  variant="primary" size="sm" onClick={() => { setLgShow(true); searchGIFs () }}>Search GIF</Button>
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Body>
                    <Grid width={700} columns={3} fetchGifs={fetchGifs} />
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
            </Card.Body>
          </Card>}

          

      </Card.Body>
    </Card>
    </>
  );
}

export default App;
