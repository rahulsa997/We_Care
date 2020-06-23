

// import {
//     BrowserRouter as Router,
//     Switch, Route, Link
// } from "react-router-dom";
// import {
//     Drawer, List, ListItem,
//     ListItemIcon, ListItemText, Container, Typography
// } from "@material-ui/core";
// import HomeIcon from "@material-ui/icons/Home";
// import InfoIcon from '@material-ui/icons/Info';
import React, { useState, Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit' },
    link: {
        textDecoration: 'none', color: theme.palette.text.primary
    }

}))

function Mat() {
    const classes = useStyles();
    return (
        <Router>
            class App extends Component
            {
                constructor()
{
                super();
    this.state={
                ema:'',
        pass:'',
        st:false
    }
}

handleLogin = () =>  {
   if(this.state.ema=="Astha" && this.state.pass=="12345"){
                alert("Hello")
        this.setState({st: true})
    } else {
                alert("not loggedin")
            }
}

handleChangeFields=(event)=>{
                this.setState({
                    ...this.state,
                    [event.target.name]: event.target.value
                })

            }
  render()
            {
        const {classes} = this.props
        return (

            <div>
                {this.state.pass}
                {this.state.st ? (<div> Welcome</div>) : (
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Log in
    </Typography>


                            <div className={classes.form} noValidate>

                                <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Student name" name="ema" autoComplete="email" autoFocus onChange={this.handleChangeFields} />


                                <TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Student ID" type="password" id="password" autoComplete="current-password" onChange={this.handleChangeFields} />
                                <TextField variant="outlined" margin="normal" required fullWidth id="ans" label="Value" name="ans" autoFocus onChange={this.handleChangeFields} value={this.state.pass} />


                                <FormControlLabel control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me" />

                                <Button onClick={this.handleLogin} fullWidth variant="contained" color="primary" className={classes.submit}>Sign In </Button>

                                <Grid container>
                                    <Grid item xs>
                                        <Link href="" variant="body2">
                                            Forgot password?
                      </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>

                            </div>
                        </div>
                    </Container>

                )}
            </div>

        );
    }

}


        </Router>

    );
}
// export default Mat;
export default withStyles(useStyles)(Mat);