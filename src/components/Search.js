import React, {useState} from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './images_home/img1.jpg'
import img2 from './images_home/img2.jpg'
import img3 from './images_home/img3.jpg'
import './Style_test.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Read_more.css'

function Search() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height:'40%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  return (
  
  <>
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={10000000000}
  >
    <div className='sss'>
      
      <div className="myCarousel">
      <img src={img1} />
        <h3>Rathna</h3>
        <p>
        "Yoga is the journey of the self....
        <Button onClick={handleOpen}>Read more</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1 id='pi'>Rathna</h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <h3 id='pik'>
          "Yoga is the journey of the self through the self to the self"-Bhagavad Gita. Her explanation of the poses and their health benefits through the simple day to day examples always made me look forward to my yoga sessions with her.
          </h3>
          </Typography>
        </Box>
        </div>
      </Modal>
    
        </p>
      </div>
    </div>

    <div className='sss'>
     
      <div className="myCarousel">
      <img src={img2} />
        <h3>Sweety</h3>
        <p>
        "Yoga is the journey of the self....
        <Button onClick={handleOpen}>Read more</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1 id='pi'>Swarna</h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <h3 id='pik'>
          "Yoga is the journey of the self through the self to the self"-Bhagavad Gita. Her explanation of the poses and their health benefits through the simple day to day examples always made me look forward to my yoga sessions with her.
          </h3>
          </Typography>
        </Box>
        </div>
      </Modal>
    
        </p>
      </div>
    </div>

    <div className='sss'>
      
     <div className="myCarousel">
      <img src={img3}/>
        <h3>Rathna</h3>
        <p>
        "Yoga is the journey of the self....
        <Button onClick={handleOpen}>Read more</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1 id='pi'>Rathna</h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <h3 id='pik'>
          "Yoga is the journey of the self through the self to the self"-Bhagavad Gita. Her explanation of the poses and their health benefits through the simple day to day examples always made me look forward to my yoga sessions with her.
          </h3>
          </Typography>
        </Box>
        </div>
      </Modal>
    
        </p>
      </div>
    </div>
  </Carousel>
  </>
  )
}

export default Search