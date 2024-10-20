import React, { useState } from 'react';
import { Box, Flex, Heading } from "@chakra-ui/react";
import Overview from "./DashboardOverview";
import CreateLoan from "./CreateLoanForm";
import ViewLenders from "./LenderList";
import Messages from "./Messages";
import Profile from "./ProfileManagement";
import NavBar from './NavBar'; // Import the NavBar component

const BorrowerDashboard: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('overview'); // Default component to show

  // Function to render the component based on the selected option
  const renderComponent = () => {
    switch (activeComponent) {
      case 'create-loan':
        return <CreateLoan />;
      case 'lender-list':
        return <ViewLenders />;
      case 'messages':
        return <Messages />;
      case 'profile':
        return <Profile />;
      case 'overview':
      default:
        return <Overview />;
    }
  };

  return (
    <Box maxW="container.xl" p={4} mx="auto">
      <NavBar setActiveComponent={setActiveComponent} /> {/* Pass the setter function to NavBar */}
      <Flex justify="space-between" align="center" mb={6}>
       
      </Flex>

      {/* Render the selected component below the Navbar */}
      {renderComponent()}
    </Box>
  );
};

export default BorrowerDashboard;
