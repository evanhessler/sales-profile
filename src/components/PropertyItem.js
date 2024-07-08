import React, { useState } from "react";
import { useGame } from "../context/GameContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function PropertyItem({ property }) {
  const { buyProperty } = useGame();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        height="140"
        image={property.image}
        alt="Property Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {property.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Address: {property.address}
          <br />
          Status: {property.status}
          <br />
          Construction Duration: {property.constructionDuration} months
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          General Property Information:
          <br />
          ARV: ${property.arv}
          <br />
          Rehab Cost: ${property.rehab}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Cash Purchase:
          <br />
          Price: ${property.price}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Conventional Financing:
          <br />
          Down Payment: ${property.downPayment}
          <br />
          Monthly Payment: ${property.monthlyPayment}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Hard Money Financing:
          <br />
          Est. Monthly Payment: {/* Calculation might be needed */}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Rental Information:
          <br />
          Rent: ${property.rent}/month
          <br />
          Post Rehab Rent: ${property.postRehabRent}/month
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={handleClick}
          color="success"
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
        >
          Buy
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              buyProperty(property, "cash");
              handleClose();
            }}
          >
            Buy with Cash
          </MenuItem>
          <MenuItem
            onClick={() => {
              buyProperty(property, "financing");
              handleClose();
            }}
          >
            Buy with Conventional Financing
          </MenuItem>
          <MenuItem
            onClick={() => {
              buyProperty(property, "hardMoney");
              handleClose();
            }}
          >
            Buy with Hard Money Financing
          </MenuItem>
        </Menu>
        <Button
          size="small"
          onClick={() => {
            /* Pass logic here */
          }}
          color="error"
          variant="contained"
        >
          Pass
        </Button>
      </CardActions>
    </Card>
  );
}

export default PropertyItem;
