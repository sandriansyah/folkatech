import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";

import ProductImage from "../assets/images/image 61.png";
import product from "../models/product";

interface CardProductProps {
  onClick: () => void;
  data: product;
}

const CardProduct = (props: CardProductProps) => {
  const theme = useTheme();
  return (
    <Box onClick={props.onClick}>
      <Card sx={{ p: "20px", width: "250px", height: "350px" }}>
        <CardMedia
          sx={{ height: 140, m: "20px" }}
          image={ProductImage}
          title="green iguana"
        />
        <CardContent>
          <Typography fontSize={"13px"} fontWeight={"bold"}>
            {props.data?.productName}
          </Typography>
          <Typography fontSize={"12px"}>{props.data?.sku}</Typography>
          <Rating size="small" name="simple-controlled" value={3} />
          <Typography sx={{ color: theme.palette.primary.main }}>
            Rp {props.data?.price}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardProduct;
