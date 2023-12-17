import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Fragment } from "react";

const FilterAccordion = () => {
  return (
    <div>
      {dataFilter.map((i, index) => {
        return (
          <Fragment key={index}>
            <Accordion>
              <AccordionSummary
                sx={{ bgcolor: "#F5F5F5" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> {i.title} </Typography>
              </AccordionSummary>
              {i.listFilter.map((f) => {
                return (
                  <AccordionDetails sx={{ py: "0px" }}>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label={f.name}
                      />
                      <Box>
                        <Typography> {f.value} </Typography>
                      </Box>
                    </Box>
                  </AccordionDetails>
                );
              })}
            </Accordion>
          </Fragment>
        );
      })}
    </div>
  );
};

export default FilterAccordion;

const dataFilter = [
  {
    title: "Origin",
    listFilter: [
      { name: "Aceh", value: 8 },
      { name: "Semarang", value: 90 },
      { name: "Bandung", value: 30 },
      { name: "Jawa", value: 59 },
      { name: "Amerika Selatan", value: 29 },
      { name: "Lain-lain", value: 200 },
    ],
  },
  {
    title: "Species",
    listFilter: [
      { name: "Robusta", value: 8 },
      { name: "Arabika", value: 90 },
      { name: "Bland", value: 30 },
    ],
  },
  {
    title: "Rost Lavel",
    listFilter: [
      { name: "Light Rost", value: 8 },
      { name: "Medium Rost", value: 90 },
      { name: "Dark Rost", value: 30 },
      { name: "Light to Medium Roast", value: 30 },
    ],
  },
  {
    title: "Tested",
    listFilter: [
      { name: "Sweet", value: 8 },
      { name: "Floral", value: 90 },
      { name: "Fruity", value: 30 },
      { name: "Nutty", value: 30 },
      { name: "Cocoa", value: 30 },
      { name: "Spices", value: 30 },
    ],
  },
  {
    title: "Processing",
    listFilter: [
      { name: "Honey White", value: 8 },
      { name: "Natural", value: 90 },
      { name: "Honey Gold", value: 30 },
      { name: "Honey Yellow", value: 30 },
    ],
  },
];
