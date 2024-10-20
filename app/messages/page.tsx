import { Box, Button, Input, Avatar, Flex, Text, Stack, FormControl } from "@chakra-ui/react"

export default function Messages() {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <Box p={4}>
        <Text fontSize="lg" fontWeight="bold">Messages</Text>
        <Text fontSize="sm" color="gray.500">Communicate with lenders and support</Text>
      </Box>
      <Box h="400px" overflowY="auto" pr={4} p={4}>
        <Stack spacing={4}>
          {[1, 2, 3, 4, 5].map((message) => (
            <Flex key={message} align="start" mb={4}>
              <Avatar name={message % 2 === 0 ? "Lender" : "You"} bg="gray.200">
                {message % 2 === 0 ? "L" : "Y"}
              </Avatar>
              <Stack spacing={1} ml={4}>
                <Text fontSize="sm" fontWeight="medium">{message % 2 === 0 ? "Lender" : "You"}</Text>
                <Text fontSize="sm">This is a sample message. Real messages would appear here.</Text>
                <Text fontSize="xs" color="gray.500">Sent at 10:0{message} AM</Text>
              </Stack>
            </Flex>
          ))}
        </Stack>
      </Box>
      <Box p={4} mt={2}>
        <Flex align="center">
          <FormControl flex="1">
            <Input 
              placeholder="Type your message..." 
              borderColor="gray.300" 
              _focus={{ borderColor: "blue.400" }} 
              height="40px" // Set a specific height for the input
            />
          </FormControl>
          <Button 
  type="submit" 
  bg="black" // Set background to black
  color="white" // Set text color to white for contrast
  borderRadius="md"
  size="sm" // Smaller button size
  _hover={{ bg: "gray.600" }} // Change hover background color
  _active={{ bg: "gray.700" }} // Change active background color
  ml={2} // Margin left for spacing
>
  Send
</Button>
        </Flex>
      </Box>
    </Box>
  )
}
