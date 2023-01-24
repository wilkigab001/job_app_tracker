import React, { useState } from "react";
import { Grid, TextField, Paper, Button } from "@material-ui/core";
import axios from "axios";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Submit handler has been caller");

    const user = {
      username,
      password,
    };
  };

  return (
    <div style={{ padding: 30 }}>
      <form onSubmit={submitHandler}>
        <Paper>
          <Grid
            container
            spacing={3}
            direction={"column"}
            alignItems={"center"}
          >
            <Grid item xs={12}>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                onClick={() => setRegister(!register)}
                type="button"
              >
                {" "}
                {register ? "Create Account" : "Already Have An account?"}{" "}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth type="submit"> {register ? "Login" : "Sign Up"} </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default LoginPage;
