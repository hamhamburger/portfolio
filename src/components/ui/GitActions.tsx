import React,{useEffect,useState} from 'react'
import { Box } from '@mui/material'
import { Action, GitData } from '../types';
import GitActionsTable from './GitActionsTable';


const USER = "/hamhamburger"
const API_URL = "https://api.github.com/users"
const EVENTS = "/events"


const jsonToGitData = (
  userJson: { login: string; avatar_url: string },
  actionsJson: any[]
): GitData => {
  const actions: Action[] = []

  const pushActions = actionsJson.filter((action) => action.type === "PushEvent");
  pushActions.forEach(action => {
    action.payload.commits.forEach((commit: { message: string }) => {
      const newAction = {
        message: commit.message, created_at: action.created_at,
        repo: action.repo.name
      }
      actions.push(newAction);
    });
  });
  return {userName:userJson.login,src:userJson.avatar_url,actions}
};

const GitActions = (): JSX.Element => {

  const [gitData, setGitData] = useState<GitData>({actions:[],userName:"読込中です",src:""})

  useEffect(() => {
    
    
    const fetchUserData = async ():Promise<void> => {
      try {
        const userRes = await fetch(`${API_URL}${USER}`)
        const userJson = await userRes.json()
        const actionsRes = await fetch(`${API_URL}${USER}${EVENTS}`)
        const actionsJson = await actionsRes.json()
        setGitData(jsonToGitData(userJson,actionsJson))

      } catch (error) {
        setGitData({actions:[],userName:"取得に失敗しました。",src:""})
      }
      
    }
    void fetchUserData()
   
  }, [])
  

  return (
    <Box>
      <GitActionsTable
        actions={gitData.actions}
        userName={gitData.userName}
        fontColor="white"
        src={gitData.src}
      />
      
    </Box>
  )
}

export default GitActions