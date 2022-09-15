import React from 'react'
import GitUserProfile from "./GitUserProfile"
import {Action} from '../types'
import { Box, Typography } from '@mui/material'

type Props = {
  actions: Action[];
  src: string;
  userName: string;
  fontColor: string;
}

const GitActionsTable = ({ actions, src, userName ,fontColor}: Props): JSX.Element => {
  return (
    <Box>
      <GitUserProfile userName={userName} src={src} fontColor={fontColor} />
      {actions.map((action) => {
        return (
          <Box key={action.message} sx={{margin:"20px"}}>
            <Typography
              variant='subtitle2'
              sx={{ color: fontColor, fontSize: '0.8rem' }}
            >
              {action.repo}
            </Typography>

            <Typography style={{ color: fontColor }}>{action.message}</Typography>

            <Typography
              variant='subtitle2'
              sx={{ color: fontColor, fontSize: '0.8rem' }}
            >
              {action.created_at}
            </Typography>
          </Box>
        );

      }
      )}
    </Box>
  )
}

export default GitActionsTable