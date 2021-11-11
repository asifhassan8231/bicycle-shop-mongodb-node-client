import { AppBar, Container, CssBaseline, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardMain from '../DashboardMain/DashboardMain';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import UserOrder from '../UserOrder/UserOrder';
import UserPayment from '../UserPayment/UserPayment';
import UserReview from '../UserReview/UserReview';

const drawerWidth = 200;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar sx={{ bgcolor: '#ff9e80' }} />
            <Divider />
            <List >
                <ListItem style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to={`${url}/manageOrder`} style={{ textDecoration: 'none', color: 'orangeRed', fontSize: '20px', fontWeight: 300, borderBottom: '1px solid orange', marginBottom: '20px' }}>Manage Orders</Link>
                    <Link to={`${url}/addProduct`} style={{ textDecoration: 'none', color: 'orangeRed', fontSize: '20px', fontWeight: 300, borderBottom: '1px solid orange', marginBottom: '20px' }}>Add Product</Link>
                    <Link to={`${url}/manageProduct`} style={{ textDecoration: 'none', color: 'orangeRed', fontSize: '20px', fontWeight: 300, borderBottom: '1px solid orange', marginBottom: '20px' }}>Manage Products</Link>
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'orangeRed', fontSize: '20px', fontWeight: 300, borderBottom: '1px solid orange', marginBottom: '20px' }}>Make Admin</Link>
                    <Link to={`${url}/userOrder`} style={{ textDecoration: 'none', color: 'orangeRed', fontSize: '20px', fontWeight: 300, borderBottom: '1px solid orange', marginBottom: '20px' }}>My Orders</Link>
                    <Link to={`${url}/userReview`} style={{ textDecoration: 'none', color: 'orangeRed', fontSize: '20px', fontWeight: 300, borderBottom: '1px solid orange', marginBottom: '20px' }}>Review</Link>
                    <Link to={`${url}/userPayment`} style={{ textDecoration: 'none', color: 'orangeRed', fontSize: '20px', fontWeight: 300, borderBottom: '1px solid orange', marginBottom: '20px' }}>Payment</Link>
                    <Link to='/home' style={{ textDecoration: 'none', color: 'red', fontSize: '20px', fontWeight: 500, borderBottom: '1px solid orange', marginBottom: '20px' }}>Back To Home</Link>
                </ListItem>

            </List>
            <Divider />


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}>

                <Toolbar sx={{ bgcolor: '#d84315' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>

            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders">

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}

                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Container>
                    <Switch>
                        <Route exact path={path}>
                            <DashboardMain></DashboardMain>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/manageOrder`}>
                            <ManageOrder></ManageOrder>
                        </Route>
                        <Route path={`${path}/manageProduct`}>
                            <ManageProduct></ManageProduct>
                        </Route>
                        <Route path={`${path}/userOrder`}>
                            <UserOrder></UserOrder>
                        </Route>
                        <Route path={`${path}/userPayment`}>
                            <UserPayment></UserPayment>
                        </Route>
                        <Route path={`${path}/userReview`}>
                            <UserReview></UserReview>
                        </Route>
                    </Switch>
                </Container>
            </Box>
        </Box>
    );
};

export default Dashboard;