import { Box, Heading, Text, Button, Badge, Avatar, Flex, Stack } from "@chakra-ui/react"

export default function ViewLenders() {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <Box p={4}>
        <Heading size="md">Matched Lenders</Heading>
        <Text fontSize="sm" color="gray.500">Review and compare offers from potential lenders</Text>
      </Box>
      <Box h="400px" overflowY="auto" pr={4} p={4}>
        <Stack spacing={8}>
          {[1, 2, 3].map((lender) => (
            <Flex key={lender} align="center" justify="space-between" borderBottom="1px" pb={4}>
              <Flex align="center" mr={4}>
                <Avatar name={`Lender ${lender}`} bg="gray.200">
                  <Text color="white">L{lender}</Text>
                </Avatar>
                <Box ml={4}>
                  <Text fontSize="sm" fontWeight="medium">Lender {lender}</Text>
                  <Text fontSize="xs" color="gray.500">Rating: {4 + lender * 0.3}/5</Text>
                  <Flex mt={1}>
                    <Badge variant="outline" colorScheme="green">8% APR</Badge>
                    <Badge variant="outline" colorScheme="green" ml={2}>36 months</Badge>
                  </Flex>
                </Box>
              </Flex>
              <Button size="sm">View Offer</Button>
            </Flex>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
