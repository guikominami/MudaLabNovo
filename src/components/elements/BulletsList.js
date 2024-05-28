import React, {useState} from "react";
import { styled } from "styled-components";
import linkIcon from "../../assets/icons/link.png";
//import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Link = styled.a`
  color: blue;
  text-decoration: none;

  &:hover {
    color: red;
    cursor: pointer;
  }
  img {
    width: 2%;
    vertical-align: middle;
  }
`;

const Box = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  transform: 'translate(-50%, -50%)';
  width: 16rem;
  height: 16rem;
  border: '2px solid #000';
  box-Shadow: 24;
  background-color: white;

  img {
    width: 50%;
  }

`;

/* const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}; */

const BulletsList = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState()
  const handleOpen = (imageName) => e => {
    setOpen(true);
    setImage(imageName)
  }

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.key}>
            {item.name} - <Link onClick={handleOpen(item.photo)}>Open modal</Link>
            {/*             <Link href={item.link} target="_blank">
              <img src={linkIcon} alt="link" />
            </Link> */}
          </li>
        ))}
      </ul>       
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <img src={image} alt="link" />
        </Box>
      </Modal>         
    </>
  );
};

export default BulletsList;
