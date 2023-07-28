import React from "react";
import FilledButton from "../../common/FilledButton/FilledButton";

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
