import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  HStack,
  Text,
  Icon,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";  // Use Chakra's built-in icon

const CreateLoan: React.FC = () => {
  return (
    <Container maxW="container.md" p={4}>
      <Card>
        <CardHeader>
          <Heading as="h2" size="lg">
            Create a New Loan Request
          </Heading>
          <Text fontSize="md" color="gray.600">
            Fill in the details for your loan request
          </Text>
        </CardHeader>
        <CardBody>
          <form>
            <VStack spacing={4}>
              <HStack spacing={4} w="full">
                <FormControl>
                  <FormLabel htmlFor="loan-amount">Loan Amount</FormLabel>
                  <Input id="loan-amount" placeholder="Enter amount" type="number" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="loan-term">Loan Term (months)</FormLabel>
                  <Input id="loan-term" placeholder="Enter term" type="number" />
                </FormControl>
              </HStack>
              <FormControl>
                <FormLabel htmlFor="loan-purpose">Loan Purpose</FormLabel>
                <Select id="loan-purpose" placeholder="Select purpose">
                  <option value="personal">Personal</option>
                  <option value="education">Education</option>
                  <option value="business">Business</option>
                  <option value="home-improvement">Home Improvement</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="repayment-preference">Repayment Preference</FormLabel>
                <Select id="repayment-preference" placeholder="Select preference">
                  <option value="monthly">Monthly</option>
                  <option value="bi-weekly">Bi-weekly</option>
                  <option value="weekly">Weekly</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="additional-info">Additional Information</FormLabel>
                <Textarea id="additional-info" placeholder="Provide any additional details about your loan request" />
              </FormControl>
              <FormControl>
                <FormLabel>Upload Documents</FormLabel>
                <HStack spacing={2}>
                  <Button variant="outline">
                    <Icon as={AttachmentIcon} w={4} h={4} mr={2} /> {/* Chakra's AttachmentIcon */}
                    Upload
                  </Button>
                  <Text fontSize="sm" color="gray.600">
                    Upload proof of income, ID, etc.
                  </Text>
                </HStack>
              </FormControl>
            </VStack>
          </form>
        </CardBody>
        <CardFooter>
          <Button width="full" colorScheme="blue">
            Submit Loan Request
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default CreateLoan;
