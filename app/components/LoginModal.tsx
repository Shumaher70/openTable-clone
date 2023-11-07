'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};

const LoginModal = ({ isSignIn }: { isSignIn?: boolean }) => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const renderContent = (singInContent: string, singUpContent: string) => {
      return isSignIn ? singInContent : singUpContent;
   };

   return (
      <div>
         <button
            className={`${renderContent(
               'bg-blue-400 text-white',
               ''
            )} border p-1 px-4 rounded mr-3`}
            onClick={handleOpen}
         >
            {renderContent('Sign in', 'Sing up')}
         </button>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
               </Typography>
            </Box>
         </Modal>
      </div>
   );
};

export default LoginModal;
