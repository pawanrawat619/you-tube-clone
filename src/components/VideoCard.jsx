import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

function VideoCard({ video }) {
  const id = video.id;
  const videoId = id.videoId;
  const snippet = video.snippet;

  return (
    <Card
      sx={{
        width: { xs: "100%" },
        maxWidth: "290px",
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: 290,
            height: 180,
          }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: 80,
          mt: "-10px",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" color="#fff" fontSize="16px">
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>

        <Link
          to={
            snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl
          }
        >
          <Typography
            variant="body2"
            color="gray"
            noWrap={true}
            fontSize="16px"
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{
                color: "gray",
                fontSize: 12,
                ml: "5px",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
    // <Card
    //   sx={{
    //     width: { xs: "100%", sm: "358px", md: "320px" },
    //     boxShadow: "none",
    //     borderRadius: 0,
    //   }}
    // >
    //   <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
    //     <CardMedia
    //       image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
    //       alt={snippet?.title}
    //       sx={{
    //         width: { xs: "100%", sm: "358px", md: "320px" },
    //         height: "180px",
    //       }}
    //     />
    //   </Link>
    //   <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
    //     <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
    //       <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
    //         {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
    //       </Typography>
    //     </Link>
    //     <Link
    //       to={
    //         snippet?.channelId
    //           ? `/channel/${snippet?.channelId}`
    //           : demoChannelUrl
    //       }
    //     >
    //       <Typography variant="subtitle2" color="gray">
    //         {snippet?.channelTitle || demoChannelTitle}
    //         <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
    //       </Typography>
    //     </Link>
    //   </CardContent>
    // </Card>
  );
}

export default VideoCard;
