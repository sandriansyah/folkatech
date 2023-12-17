import { Box, Card, Divider, Typography } from "@mui/material";
import TextField_email from "../component/textField_email";
import TextField_password from "../component/textField_password";
import ButtonAuth from "../component/buttonAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import baseUrl from "../config/baseUrl";

const signin = () => {
  const navigate = useNavigate();

  const onClickRegister = () => {
    navigate("/register");
  };
  const onClickSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.currentTarget.elements;
      const email = (form.namedItem("email") as HTMLInputElement).value;
      const password = (form.namedItem("password") as HTMLInputElement).value;
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const req = JSON.stringify({ email: email, password: password });

      await toast.promise(
        Promise.resolve(axios.post(baseUrl + "signin", req, config)),
        { pending: "Please wait", success: "signin berhasil" }
      );
      navigate("/products");
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  return (
    <Box
      component={"form"}
      onSubmit={onClickSignin}
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card sx={{ p: "20px", width: "500px" }}>
        <Typography sx={{ textAlign: "start" }}>Masuk</Typography>
        <TextField_email defaultValue="" required={true} />
        <TextField_password name="password" placeHolder="Password" />

        <Box width={"100%"} display={"flex"} justifyContent={"end"}>
          <Typography fontSize={"10px"} textAlign={"end"} component={"a"}>
            Lupa Password
          </Typography>
        </Box>

        <ButtonAuth text="Masuk" />

        <Box display={"flex"} justifyContent={"center"} my={"30px"}>
          <Divider sx={{ width: "80%", borderTopWidth: 1 }} />
        </Box>
        <Typography fontSize={"12px"} textAlign={"center"}>
          Belum punya akun?{" "}
          <Typography
            sx={{ cursor: "pointer" }}
            fontSize={"12px"}
            component={"a"}
            onClick={onClickRegister}
          >
            Daftar Sekarang{" "}
          </Typography>{" "}
        </Typography>
      </Card>
    </Box>
  );
};

export default signin;
function handleErrorMessage(error: unknown) {
  throw new Error("Function not implemented.");
}
