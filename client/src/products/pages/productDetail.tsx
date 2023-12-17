import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import AppBar from "../../component/appBar";
import TitleBar from "../../component/titleBar";
import ProductImage from "../../assets/images/image 61.png";
import theme from "../../theme";
import Counter from "../../component/counter";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CarouselImage from "../../component/carouselImage";
import TabsComponent from "../component/tabs";
import CardProduct from "../../component/cardProduct";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../config/baseUrl";
import { useEffect, useState } from "react";
import product from "../../models/product";
import handleErrorMessage from "../../utils/messageError";

const ProductDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [detailProduct, setDetailProduct] = useState<product>();

  const onClickDetailProduct = () => {
    navigate("/products/" + 1);
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      //   onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/products"
      //   onClick={handleClick}
    >
      Products
    </Link>,
    <Typography key="3" sx={{ color: theme.palette.primary.main }}>
      HARIO CAFE PRESS SLIM GREY 240ML
    </Typography>,
  ];

  const getProduct = async () => {
    try {
      const respons = await axios.get(baseUrl + "products/" + params.id);
      setDetailProduct(respons.data.data);
    } catch (error) {
      handleErrorMessage(error);
    }
  };
  console.log(detailProduct);
  const [listProduct, setListProduct] = useState<product[]>([]);
  const getListProduct = async () => {
    try {
      const respons = await axios.get(baseUrl + "products");
      setListProduct(respons.data.data);
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  useEffect(() => {
    getProduct();
    getListProduct();
  }, []);

  return (
    <Box pb={"20px"}>
      <AppBar />
      <TitleBar />

      <Stack spacing={2} mx={"20px"} my={"20px"}>
        <Breadcrumbs separator="  /  " aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>

      <Box display={"flex"} mx={"200px"} gap={"100px"}>
        <Box flex={1}>
          <Box
            p={"20px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            border={1}
            borderColor={"#D8D8D8"}
          >
            <img src={ProductImage} />
          </Box>
          <Box>
            <CarouselImage />
          </Box>
        </Box>

        <Box flex={1}>
          <Typography fontWeight={"bold"}>
            {detailProduct?.productName}
          </Typography>

          <Box
            my={"20px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
          >
            <Typography fontSize={"12px"}>{detailProduct?.sku}</Typography>
            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
              <Rating size="small" name="simple-controlled" value={5} />
              <Typography fontSize={"12px"}>(10)</Typography>
            </Box>
            <Box
              display={"flex"}
              gap={"10px"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                fontWeight={"bold"}
                sx={{ color: theme.palette.primary.main }}
              >
                Rp. {detailProduct?.price}
              </Typography>

              <Typography fontSize={"10px"} component={"a"} color={"#6F8EFF"}>
                Tersedia
              </Typography>
            </Box>
          </Box>

          <Box
            display={"flex"}
            gap={"10px"}
            justifyContent={"space-between"}
            mb={"20px"}
          >
            <Counter />
            <Button variant="contained">Tambah Ke Keranjang</Button>
            <IconButton>
              <FavoriteBorderIcon color="primary" />
            </IconButton>
          </Box>
          <Box>
            <Typography>{detailProduct?.description}</Typography>
          </Box>
        </Box>
      </Box>
      <Box mt={"20px"} display={"flex"} justifyContent={"center"}>
        <TabsComponent description={detailProduct?.description!} />
      </Box>
      <Box my={"30px"} px={"200px"}>
        <Typography
          fontWeight={"bold"}
          sx={{ color: theme.palette.primary.main }}
          textAlign={"center"}
        >
          Rekomendasi untuk anda
        </Typography>
        <Box mt={"20px"} display={"flex"} flexWrap={"wrap"} gap={"10px"}>
          {listProduct.map((i) => {
            return (
              <Box flex={1 / 4} key={i.id}>
                <CardProduct onClick={onClickDetailProduct} data={i} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
