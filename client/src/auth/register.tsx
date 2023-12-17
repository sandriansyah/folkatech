import { Box, Button, Card, Divider, Typography } from "@mui/material";
import TextField_text from "../component/textField_text";
import TextField_email from "../component/textField_email";
import ButtonAuth from "../component/buttonAuth";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TextField_phone from "../component/textField_phoney";
import TextField_password from "../component/textField_password";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import baseUrl from "../config/baseUrl";
import handleErrorMessage from "../utils/messageError";
import { User } from "../models/user";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [stepRegister, setStepRegister] = useState<"ONE" | "TWO">("ONE");
  const [newUser, setNewUser] = useState<User>();

  const onCLickNextToStep2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const firstname = (form.namedItem("firstName") as HTMLInputElement).value;
    const lastName = (form.namedItem("lastName") as HTMLInputElement).value;
    const email = (form.namedItem("email") as HTMLInputElement).value;

    setNewUser({
      ...newUser,
      firstName: firstname,
      lastName: lastName,
      email: email,
    });
    if (firstname && lastName && email) {
      setStepRegister("TWO");
    }
  };
  const onCLickNextToSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.currentTarget.elements;
      const phone = (form.namedItem("phone") as HTMLInputElement).value;
      const password = (form.namedItem("password") as HTMLInputElement).value;
      const confirmPassword = (form.namedItem("password") as HTMLInputElement)
        .value;

      if (password !== confirmPassword) {
        return toast.warn("password tidak sama");
      }
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const user: User = { ...newUser, phone: phone, password: password };
      const req = JSON.stringify(user);

      await toast.promise(
        Promise.resolve(axios.post(baseUrl + "register", req, config)),
        { pending: "Please wait", success: "Registrasi berhasil" }
      );

      navigate("/signin");
    } catch (error) {
      handleErrorMessage(error);
    }
  };
  const onClickBack = () => {
    setStepRegister("ONE");
  };

  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {stepRegister === "ONE" ? (
        <RegisterStep1 onClickNext={onCLickNextToStep2} user={newUser!} />
      ) : (
        <RegisterStep2
          onClickBack={onClickBack}
          onClickNext={onCLickNextToSubmit}
        />
      )}
    </Box>
  );
};

export default Register;

interface RegisterStep1 {
  onClickNext: (e: React.FormEvent<HTMLFormElement>) => void;
  user: User;
}
const RegisterStep1 = (props: RegisterStep1) => {
  const navigate = useNavigate();

  const onClickSignin = () => {
    navigate("/signin");
  };
  return (
    <Box component={"form"} onSubmit={props.onClickNext}>
      <Card sx={{ p: "20px", width: "500px" }}>
        <Typography sx={{ textAlign: "start" }}>Daftar Sekarang</Typography>
        <TextField_text
          defaultValue={props.user?.firstName! ?? ""}
          placeholder="Nama Depan"
          name="firstName"
          required={true}
        />
        <TextField_text
          defaultValue={props.user?.lastName! ?? ""}
          placeholder="Nama Belakang"
          name="lastName"
          required={true}
        />
        <TextField_email
          required={true}
          defaultValue={props.user?.email! ?? ""}
        />
        <ButtonAuth text="Selanjutnya" />
        <Box display={"flex"} justifyContent={"center"} my={"30px"}>
          <Divider sx={{ width: "80%", borderTopWidth: 1 }} />
        </Box>
        <Typography fontSize={"12px"} textAlign={"center"}>
          Sudah punya akun?{" "}
          <Typography
            sx={{ cursor: "pointer" }}
            fontSize={"12px"}
            component={"a"}
            onClick={onClickSignin}
          >
            Masuk{" "}
          </Typography>{" "}
        </Typography>
      </Card>
    </Box>
  );
};

interface RegisterStep2 {
  onClickNext: (e: React.FormEvent<HTMLFormElement>) => void;
  onClickBack: () => void;
}

const RegisterStep2 = (props: RegisterStep2) => {
  const navigate = useNavigate();

  const onClickSignin = () => {
    navigate("/signin");
  };
  return (
    <Box component={"form"} onSubmit={props.onClickNext}>
      <Card sx={{ p: "20px", width: "500px" }}>
        <Box display={"flex"} justifyContent={"start"}>
          <Button
            variant="text"
            startIcon={<KeyboardBackspaceIcon />}
            onClick={props.onClickBack}
          >
            Kembali
          </Button>
        </Box>

        <TextField_phone />
        <TextField_password placeHolder="Password" name="password" />
        <TextField_password
          placeHolder="Konfirmasi Password"
          name="confirmPassword"
        />
        <ButtonAuth text="Selanjutnya" />
        <Box display={"flex"} justifyContent={"center"} my={"30px"}>
          <Divider sx={{ width: "80%", borderTopWidth: 1 }} />
        </Box>
        <Typography fontSize={"12px"} textAlign={"center"}>
          Sudah punya akun?{" "}
          <Typography
            sx={{ cursor: "pointer" }}
            fontSize={"12px"}
            component={"a"}
            onClick={onClickSignin}
          >
            Masuk{" "}
          </Typography>{" "}
        </Typography>
      </Card>
    </Box>
  );
};
