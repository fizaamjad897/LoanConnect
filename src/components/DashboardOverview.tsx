import { Box, Heading, Text, SimpleGrid, Flex, Badge, Progress, Button, Icon } from "@chakra-ui/react"
import { DollarSign, AlertTriangle, Star } from "lucide-react"

export default function Overview() {
  return (
    <>
      {/* Overview Cards Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
        {/* Active Loans Card */}
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Flex justify="space-between" align="center" pb={2}>
            <Heading size="sm">Active Loans</Heading>
            <Icon as={DollarSign} boxSize={4} color="gray.500" />
          </Flex>
          <Text fontSize="2xl" fontWeight="bold">3</Text>
          <Text fontSize="xs" color="gray.500">2 personal, 1 education</Text>
        </Box>

        {/* Total Borrowed Card */}
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Flex justify="space-between" align="center" pb={2}>
            <Heading size="sm">Total Borrowed</Heading>
            <Icon as={DollarSign} boxSize={4} color="gray.500" />
          </Flex>
          <Text fontSize="2xl" fontWeight="bold">$25,000</Text>
          <Text fontSize="xs" color="gray.500">Across all active loans</Text>
        </Box>

        {/* Next Payment Card */}
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Flex justify="space-between" align="center" pb={2}>
            <Heading size="sm">Next Payment</Heading>
            <Icon as={AlertTriangle} boxSize={4} color="gray.500" />
          </Flex>
          <Text fontSize="2xl" fontWeight="bold">$750</Text>
          <Text fontSize="xs" color="gray.500">Due in 5 days</Text>
        </Box>

        {/* Credit Score Card */}
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Flex justify="space-between" align="center" pb={2}>
            <Heading size="sm">Credit Score</Heading>
            <Icon as={Star} boxSize={4} color="gray.500" />
          </Flex>
          <Text fontSize="2xl" fontWeight="bold">720</Text>
          <Text fontSize="xs" color="gray.500">Excellent</Text>
        </Box>
      </SimpleGrid>

      {/* Loan Overview Section */}
      <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" mt={6}>
        <Heading size="md">Loan Overview</Heading>
        <Text fontSize="sm" color="gray.500">Your active loans and repayment progress</Text>

        <Box mt={6}>
          {/* Personal Loan */}
          <Box mb={8}>
            <Flex align="center" justify="space-between">
              <Box>
                <Text fontSize="sm" fontWeight="medium">Personal Loan</Text>
                <Text fontSize="xs" color="gray.500">$15,000 at 8% APR</Text>
              </Box>
              <Badge colorScheme="green">On Time</Badge>
            </Flex>
            <Progress value={65} size="sm" mt={2} />
            <Text fontSize="xs" color="gray.500" mt={1}>Next payment: $250 due in 5 days</Text>
          </Box>

          {/* Education Loan */}
          <Box>
            <Flex align="center" justify="space-between">
              <Box>
                <Text fontSize="sm" fontWeight="medium">Education Loan</Text>
                <Text fontSize="xs" color="gray.500">$10,000 at 5% APR</Text>
              </Box>
              <Badge colorScheme="green">On Time</Badge>
            </Flex>
            <Progress value={30} size="sm" mt={2} />
            <Text fontSize="xs" color="gray.500" mt={1}>Next payment: $500 due in 12 days</Text>
          </Box>
        </Box>

        {/* View Full Repayment Schedule Button */}
        <Button colorScheme="teal" w="full" mt={4}>View Full Repayment Schedule</Button>
      </Box>
    </>
  )
}
