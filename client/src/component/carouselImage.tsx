import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import Image1 from "../assets/images/image 61.png";
import Image2 from "../assets/images/image 2.png";
import Image3 from "../assets/images/image 3.png";
import Image4 from "../assets/images/image 4.png";
import Image5 from "../assets/images/image 5.png";

const CarouselImage = () => {
  var items = [
    {
      image: Image1,
    },
    { image: Image2 },
    { image: Image3 },
    { image: Image4 },
    { image: Image5 },
  ];

  return (
    <Box mt={"10px"}>
      <Carousel animation="slide" autoPlay={false}>
        {items.map((item, i) => (
          <Box display={"flex"} gap={"10px"}>
            <Box flex={1} key={i} border={1} borderColor={"#D8D8D8"}>
              <img src={item.image} alt="" style={{ maxHeight: "100px" }} />
            </Box>
            <Box flex={1} key={i} border={1} borderColor={"#D8D8D8"}>
              <img src={item.image} alt="" style={{ maxHeight: "100px" }} />
            </Box>
            <Box flex={1} key={i} border={1} borderColor={"#D8D8D8"}>
              <img src={item.image} alt="" style={{ maxHeight: "100px" }} />
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselImage;
