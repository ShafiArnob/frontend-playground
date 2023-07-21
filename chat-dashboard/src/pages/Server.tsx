import { Box, CssBaseline } from '@mui/material'
import PrimaryAppBar from './templates/PrimaryAppBar'
import PrimaryDraw from './templates/PrimaryDraw'
import SecondaryDraw from './templates/SecondaryDraw'
import Main from './templates/Main'
import MessageInterface from '../components/Main/MessageInterface'
import ServerChannels from '../components/SecondaryDraw/ServerChannels'
import UserServers from '../components/PrimaryDraw/UserServers'
import { useNavigate, useParams } from 'react-router-dom'
import useCrud from '../hooks/useCrud'
import { IServer } from '../@types/server'
import {useEffect} from 'react'


const Server = () => {
  const navigate = useNavigate();
  const { serverId, channelId } = useParams();

  const { dataCRUD, error, isLoading, fetchData } = useCrud<IServer>(
    [],
    `server/select/?by_serverid=${serverId}`
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (error !== null && error.message === "400") {
    navigate("/");
    return null;
  }

  // Check if the channelId is valid by searching for it in the data fetched from the API
  // const isChannel = (): boolean => {
  //   if (!channelId) {
  //     return true;
  //   }

  //   return dataCRUD.some((server) =>
  //     server.channel_server.some(
  //       (channel) => channel.id === parseInt(channelId)
  //     )
  //   );
  // };
  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline/>
      <PrimaryAppBar/>
      <PrimaryDraw>
        <UserServers open={false} data={dataCRUD}/>
      </PrimaryDraw>
      <SecondaryDraw>
        <ServerChannels/>        
      </SecondaryDraw>
      <Main>
        <MessageInterface/>
      </Main>
    </Box>
  )
}

export default Server