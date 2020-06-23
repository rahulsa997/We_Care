
import React from 'react';
import {makeStyles,Component} from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import{BrowserRouter as Router,
     Switch,Route,Link} from "react-router-dom";
import {Drawer,List,ListItem,
        ListItemIcon,ListItemText, Container,Typography} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';

const useStyles= makeStyles((theme)=>({
    drawerPaper:{width: 'inherit'},
    link:{textDecoration:'none',color:theme.palette.text.primary
}

}))

function Mat(){
    const classes= useStyles();
    return(
        <Router> 
                <div style={{display:'flex'}}>
                <Drawer
                style={{width:'220px'}}
                variant="persistent"
                anchor="anchor"
                open={true}
                classes={{paper:classes.drawerPaper}}>
                     <div className="header">
                    <img src="tradeit.png" alt="trade" width="250" height="80"></img>
                </div>
                    <List>
                    <Link to="/" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>  
                            <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Home"}/>
                        </ListItem>
                        </Link>
                        <Link to="/about" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>  
                            <InfoIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"About"}/>
                        </ListItem>
                        </Link>
                    </List>

                </Drawer>
                <Switch>
                    <Route exact path="/">
                    <Container>
                        <Typography variant="h3" gutterBottom>
                        
                            </Typography>
                        <Typography variant="body1" gutterBottom>
                        <div class="navbar">
                    
                    <div class="dropdown">
                    <button class="dropbtn">WHOLESALER 
                     <i class="fa fa-caret-down"></i>
                    </button>
                      <div class="dropdown-content">
                       <a href="#">NAME</a><br></br>
                      <a href="#">ADHAAR NO</a><br></br>
                     <a href="#">SIGN OUT</a><br></br>
                    </div>
                    </div> 
                    
                    <a href="#">ORDERED PRODUCT</a>
                    <a href="#">CATEGORIES</a>
                    <a href="#">PRODUCTS</a>
                    <a href="#">NEARBY</a>
                    <a href="#">HELP</a>
                    </div>
                
                    A roundup of all actions Amazon India
                     has taken to reduce the spread of the coronavirus
                      while supporting those directly and indirectly impacted 
                      by COVID-19. 
                      <div>The nation-wide lockdown might have distanced us, but music brought us all together…virtually! Welcome to Lockdown Legends 2020: Making history with Amazon India’s first-ever virtual music talent hunt!
                    By Day One Staff
                    on 19 June 2020
                    Facebook Share
                    Linked In Share
                    Twitter Share
                    Email Share
                    </div>

Abhay Hsct, [23.06.20 15:30]
</Typography>
                        </Container>
                    </Route>
                    <Route exact path="/about">
                    <Container> 
                    <Typography variant="h3" gutterBottom>
                            About
                            </Typography>
                            <Typography variant="body1" gutterBottom>

                            An innovative event that brought together Amazonians musically, virtually
                      The nation-wide lockdown might have distanced us, but music brought us all together…virtually! Welcome to Lockdown Legends 2020: Making history with Amazon India’s first-ever virtual music talent hunt!
                    By Day One Staff
                    on 19 June 2020
                    Facebook Share
                    Linked In Share
                    Twitter Share
                    Email Share

                            </Typography>
                    </Container>
                    </Route>
                </Switch>


                </div>
        </Router>
       
    );
}
// export default Mat;
export default withStyles(useStyles)(Mat);