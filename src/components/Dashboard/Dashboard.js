import React from "react";
import FilledButton from "../Common/FilledButton/FilledButton";

const Dashboard = ({ removeToken }) => {
  return (
    <h2>
      Dashboard
      <FilledButton
        type="submit"
        onClick={removeToken}
        color="primary"
        variant="contained"
        fullWidth
        label="Sign In"
      />
    </h2>
  );
};

export default Dashboard;
