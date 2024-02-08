import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BrowserRouter, Link } from "react-router-dom";
import { colors } from "@mui/material";

const pageob = [
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Technology",
    href: "/technology",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
  {
    title: "Careers",
    href: "/careers",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ComputerRoundedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "cursive",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PK Software Solutions
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pageob.map((page) => (
                <MenuItem key={page.title}>
                  <Link
                    onClick={handleCloseNavMenu}
                    to={page.href}
                    style={{ textDecoration: "inherit", color: "inherit" }}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ComputerRoundedIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            href="/"
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PKSS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pageob.map((page) => (
              <Link
                key={page.title}
                to={page.href}
                onClick={handleCloseNavMenu}
                style={{
                  margin: "1rem",
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                {page.title}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton href="" target="_blank">
              <TwitterIcon fontSize="medium"></TwitterIcon>
            </IconButton>
            <IconButton href="" target="_blank">
              <FacebookIcon fontSize="medium"></FacebookIcon>
            </IconButton>
            <IconButton href="" target="_blank">
              <YouTubeIcon fontSize="medium"></YouTubeIcon>
            </IconButton>
            <IconButton href="" target="_blank">
              <LinkedInIcon fontSize="medium"></LinkedInIcon>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
