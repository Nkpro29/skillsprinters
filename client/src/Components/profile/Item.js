import React from "react";
import { TextField, Paper, Button } from "@mui/material";

function Item({ item, onNext }) {
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {item.inputTitle.map((input) => (
        <Paper
          key={input.id}
          style={{
            width: "50%",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px 0",
            boxSizing: "border-box",
          }}
        >
          <p style={{ fontSize: 20 }}>{input.id}</p>
          <TextField fullWidth />
        </Paper>
      ))}
      <Button onClick={onNext}>Save </Button>
    </Paper>
  );
}

export default Item;
