export const content = {
  header: {
    myAcc: "My Account",
    roll: "Admin",
    settings: "Settings",
    logout: "Logout",
    engCountry: "English",
    uaeCountry: "عربي",
    accIcon: "/assets/account-icon.png",
    settingsIcon: "/assets/settings-icon.png",
    logoutIcon: "/assets/logout-icon.png",
    searchIconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.465 0a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
      </svg>
    ),
  },
  chartContent: {
    activeVehicles: "Active Vehicles",
    inactiveVehicles: "In-Active Vehicles",
  },
  banner: {
    banner_p1: "Get a bird’s eye",
    banner_p2: "in a snap.",
    banner_p3: "in a snap.",
    banner_desc:
      "We equip you with the tools to customise your dashboards and track feet status, fleet status, decorations, and violations at a glance.",
  },
  tripRoute: {
    title: "Trip Route",
    description:
      "Draw Trip Route by Adding Start point, Way points, and End point",
    selectData: {
      selectTitle: "Select Sector",
      sector1: "Sector 1",
      sector2: "Sector 2",
    },
    autoGenerate: "Auto Generate",
    add: "Add",
    startPoint: "Start Point",
    wayPoint: "Way Point",
    stopPoint: "Stop Point",
    btnCancel: "Cancel",
    btnSave: "Save",
    plus: "+",
  },
  sidebar: {
    home: "Home",
    operation: "Operation",
    map: "Map",
    report: "Report",
    controlPanel: "Control Panel",
    needHelp: "Need Help?",
    desc: "Click here to find Functionalities, Help, and More!",
    discover: "Discover",
  },
  dashboard: {
    container1: {
      title: "VPark Fleet",
    },
    items: [
      {
        id: "1",
        dot: "yellow",
        description: "Smart Vehicle 1",
      },
      {
        id: "2",
        dot: "green",
        description: "Smart Vehicle 2",
      },
      {
        id: "3",
        dot: "yellow",
        description: "Smart Vehicle 4",
      },
      {
        id: "4",
        dot: "red",
        description: "Smart Vehicle 5",
      },
      {
        id: "5",
        dot: "yellow",
        description: "Smart Vehicle 6",
      },
      {
        id: "6",
        dot: "yellow",
        description: "Smart Vehicle 7",
      },
      {
        id: "6",
        dot: "yellow",
        description: "Smart Vehicle 8",
      },
      {
        id: "7",
        dot: "yellow",
        description: "Smart Vehicle 9",
      },
      {
        id: "8",
        dot: "yellow",
        description: "Smart Vehicle 10",
      },
    ],
    images: [
      { img: "Camera", imgDesc: "Online", btnLabel: "Active" },
      { img: "Network", imgDesc: "Available", btnLabel: "Active" },
      { img: "Memory", imgDesc: "20%", btnLabel: "Normal" },
      { img: "CPU Temp", imgDesc: "70°", btnLabel: "High" },
    ],
    cards: [
      {
        src: "/assets/cards-icon.png",
        title: "2,108",
        description: "Total Violations",
      },
      {
        src: "/assets/searchFolder.png",
        title: "100,000",
        description: "Total Dedications",
      },
      {
        src: "/assets/cards-icon.png",
        title: "48",
        description: "Total Active Vehicles",
      },
      {
        src: "/assets/cards-icon.png",
        title: "50,000",
        description: "Total Distance in KM",
      },
    ],
  },
};
