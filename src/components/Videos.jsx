import { Stack, Box } from "@mui/material";
import Loader from "./Loader";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
function Videos({ videos, direction }) {
  if (!videos?.length) return <Loader />;

  return (
    <>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        gap={2}
      >
        {videos.map(function (item, index) {
          return (
            <Box key={index}>
              {item.id.channelId && <ChannelCard channelDetail={item} />}
              {item.id.videoId && <VideoCard video={item} />}
            </Box>
          );
        })}
      </Stack>
    </>
  );
}
export default Videos;
