import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Upload } from "lucide-react";

export default function Profile() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Box mb={4}>
        <h2 className="text-xl font-bold">Profile Management</h2>
        <p className="text-gray-600">Update your personal information and settings</p>
      </Box>
      <form className="space-y-4">
        <FormControl id="full-name" isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input placeholder="John Doe" />
        </FormControl>
        
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="john@example.com" type="email" />
        </FormControl>
        
        <FormControl id="phone" isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input placeholder="+1 (555) 123-4567" type="tel" />
        </FormControl>
        
        <FormControl id="address" isRequired>
          <FormLabel>Address</FormLabel>
          <Textarea placeholder="Enter your full address" />
        </FormControl>
        
        <Box>
          <FormLabel>Upload New Documents</FormLabel>
          <Box display="flex" alignItems="center">
            <Button variant="outline" leftIcon={<Upload className="h-4 w-4" />}>
              Upload
            </Button>
            <p className="ml-2 text-sm text-gray-500" style={{ marginLeft: '8px' }}> {/* Adjust the margin as needed */}
              Update your identification or financial documents
            </p>
          </Box>
        </Box>
      </form>
      
      <Box mt={4}>
        <Button width="full" colorScheme="blue">Save Changes</Button>
      </Box>
    </Box>
  );
}
