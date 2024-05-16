import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SideBarItem from "./SideBarItem";
import { getUserInfo } from "@/services/auth.service";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        sx={{
          py: 1,
          mt: 1,
        }}
        component={Link}
        href={"/"}
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40} />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          PH Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SideBarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
