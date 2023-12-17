import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import CardProduct from "../../component/cardProduct";
import FilterAccordion from "../../component/filterAccordion";
import RangePrice from "../../component/rangePrice";
import TitleBar from "../../component/titleBar";
import AppBar from "../../component/appBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import handleErrorMessage from "../../utils/messageError";
import axios from "axios";
import baseUrl from "../../config/baseUrl";
import product from "../../models/product";

const ListProducts = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [listProduct, setListProduct] = useState<product[]>([]);

  const onClickDetailProduct = (id: string) => {
    navigate("/products/" + id);
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
    <Typography key="3" sx={{ color: theme.palette.primary.main }}>
      Products
    </Typography>,
  ];

  const getListProduct = async () => {
    try {
      const respons = await axios.get(baseUrl + "products");
      setListProduct(respons.data.data);
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  useEffect(() => {
    getListProduct();
  }, []);

  return (
    <>
      <AppBar />
      <TitleBar />
      <Stack spacing={2} mx={"20px"} my={"20px"}>
        <Breadcrumbs separator="  /  " aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>

      <Box display={"flex"} gap={"15px"} width={"100%"} p={"10px"}>
        <Box width={"20%"}>
          <Typography fontWeight={"bold"}>Urutkan Berdasarkan</Typography>
          <RangePrice />
          <FilterAccordion />
        </Box>
        <Grid container width={"80%"} spacing={2} sx={{ marginLeft: "0px" }}>
          {listProduct!.map((i, index) => {
            return (
              <Grid item xs={3} key={index}>
                <CardProduct
                  onClick={() => onClickDetailProduct(i.id!)}
                  data={i}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default ListProducts;
