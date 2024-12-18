import React, {useState} from "react";
import { styled } from "styled-components";
import linkIcon from "../../assets/icons/link.png";
import Modal from '@mui/material/Modal';

const List = styled.ul`

  width: 100%;

  @media (max-width: 48em) {
    width: 60%;

    align-items: start;
    text-align: left;
    width: 100%;
    padding: 0rem;
    margin: 0.5rem 0rem 1rem 1rem;
  }

`;

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

  @media (max-width: 64em) {
    img {
      width: 2.5%;
    }
  }   

  @media (max-width: 48em) {
    img {
      width: 7%;
    }
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
  padding: 1rem;

  img {
    width: 100%;
    align-items: center;
  }

  @media (max-width: 48em) {

    top: 30%;
    left: 12%;

  }    

`;

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
      <List>
        {data.map((item) => (
          <li key={item.key}>
            {item.name} - <Link onClick={handleOpen(item.photo)}><img src={linkIcon} alt="link" /></Link>
            {/*             <Link href={item.link} target="_blank">
              <img src={linkIcon} alt="link" />
            </Link> */}
          </li>
        ))}
      </List>       
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
