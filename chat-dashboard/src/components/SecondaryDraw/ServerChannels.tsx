import {List,ListItem,ListItemButton,ListItemText,Box,useTheme,ListItemIcon,Typography,
} from "@mui/material";
import useCrud from "../../hooks/useCrud";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { MEDIA_URL } from "../../config";

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
}

interface ServerChannelsProps {
  data: Server[];
}

const ServerChannels = (props:ServerChannelsProps) => {
  const theme = useTheme()
  const {serverId} = useParams()
  const {data} = props

  console.log(data);
  
  return (
    <>
      <Box 
        sx={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          px: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
          position: "sticky",
          top: 0,
          backgroundColor: theme.palette.background.default,
        }}
      >
        Channels
      </Box>
      <List sx={{py:0}}>
         {data.flatMap(obj=>
          obj.channel_server.map((item)=>(
            <ListItem key={item.id} disablePadding sx={{display:"block", maxHeight:"40px"}} dense={true}>
              <Link to={`/server/${serverId}/${item.id}`} style={{textDecoration:"none", color:"inherit"}}>
                <ListItemButton sx={{minHeight:48}}>
                  
                  
                  <ListItemText 
                    primary={
                      <Typography variant='body1' textAlign="start" paddingLeft={1} sx={{bgcolor:"inherit"}}>
                        {item.name}
                      </Typography>
                  }/>
                </ListItemButton>
              </Link>
            </ListItem>
            )
          )
         )
        }
      </List>
    </>
  )
}

export default ServerChannels