import { Box, Tab, Tabs, Typography, useTheme } from "@mui/material";
import React, { Fragment } from "react";

interface TabsComponentProps {
  description: string;
}

const TabsComponent = (props: TabsComponentProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box width={"80%"}>
      <Box mt={"30px"} width={"50%"} margin={"auto"}>
        <Tabs
          centered
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value={0} label="Deskripsi" />
          <Tab value={1} label="Informasi" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box p={"10px"} mt={"30px"}>
          <Typography>{props.description}</Typography>
          <Typography my={"10px"}>Spesifikasi:</Typography>
          <Typography>
            <br /> Dimensi : 11x16,5x8cm <br /> Berat :350gr <br /> Kapasitas :
            (240ml) <br /> Warna : Abu-abu / Grey <br /> Brand : Hario
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box p={"10px"} mt={"30px"}>
          <Typography>
            French Press dari Hario berbahan dasar kaca berwarna abu-abu di
            desain dengan bentuk yang ramping dan menarik. sangat cocok untuk
            membuat 1-2 gelas kopi. French Press merupakan salah satu teknik
            seduh manual yang simple, cukup untuk menyeduh air dan steep selama
            empat menit sebelum kamu menekan knob agar ampas bisa turun ke
            dasar.
          </Typography>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default TabsComponent;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Fragment>{children}</Fragment>}
    </div>
  );
};
