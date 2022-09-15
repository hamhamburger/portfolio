import { Avatar, Box } from '@mui/material';
import React from 'react'
type Props = {
  userName: string;
  src: string;
  fontColor: string;
  onClick?: () => void
}

const GitUserProfile = ({userName,src,fontColor,onClick}:Props):JSX.Element => {
  return (
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        onClick={onClick}
      >
        <Avatar src={src} alt={userName} />
        <span style={{ color: fontColor }}>{userName}</span>
      </Box>
    </>
  );
}

export default GitUserProfile