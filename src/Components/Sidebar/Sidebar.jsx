import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow/SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQfniAGFxBnFdtMRmpK8BnTN082bMLIo515fUZjEufqpLw3n9IwjJsaprNwPFsUDgruy8rdjNOJ5WHDulU"
        title="Mifthah"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={SupervisorAccountIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
