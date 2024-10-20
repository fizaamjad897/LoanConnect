import { getAllBorrowers } from '@/lib/actions/borrower.action';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={4}>
        Welcome to the Borrower Dashboard
      </Heading>
      <Text fontSize="lg" mb={8}>
        Your one-stop solution for managing loans and lenders.
      </Text>
      <Link href="/dashboard">
        <Button colorScheme="blue">Go to Dashboard</Button>
      </Link>
    </Box>
  );
}
