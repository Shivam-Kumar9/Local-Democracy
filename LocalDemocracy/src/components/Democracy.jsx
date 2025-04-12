import { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
  Icon,
  Input,
  Textarea,
  Progress,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from '@chakra-ui/react';
import { FaBell, FaVoteYea, FaChartBar, FaUsers, FaRegComments, FaClock } from 'react-icons/fa';

export default function DemocracyPlatform() {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');

  const features = [
    { icon: FaBell, title: 'Real-time Alerts', desc: 'Instant neighborhood updates' },
    { icon: FaVoteYea, title: 'Community Voting', desc: 'Voice your opinion on local issues' },
    { icon: FaRegComments, title: 'Legislation Simplified', desc: 'Understand policy impacts' },
    { icon: FaChartBar, title: 'Impact Visualization', desc: 'See policy outcomes' },
    { icon: FaUsers, title: 'Organizing Tools', desc: 'Mobilize community efforts' },
  ];

  const sampleIssues = [
    { id: 1, title: 'New Bike Lanes Proposal', time: '2h ago', votes: 234 },
    { id: 2, title: 'School District Changes', time: '5h ago', votes: 891 },
    { id: 3, title: 'Park Renovation Plan', time: '1d ago', votes: 1567 },
  ];

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Navigation */}
      <Flex
        as="nav"
        p={4}
        bg={cardBg}
        boxShadow="md"
        position="sticky"
        top="0"
        zIndex="sticky"
      >
        <Heading size="md" color="blue.600">CommunityVoice</Heading>
        <Flex ml="auto" gap={4}>
          <Button variant="ghost">Sign In</Button>
          <Button colorScheme="blue">Language</Button>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box textAlign="center" py={20} px={4}>
        <Heading mb={4} size="2xl">
          Your Neighborhood, Your Voice
        </Heading>
        <Text fontSize="xl" color="gray.600" mb={8}>
          Engage directly with local policies and decisions that matter to you
        </Text>
        <Button colorScheme="blue" size="lg" rightIcon={<FaVoteYea />}>
          View Current Issues
        </Button>
      </Box>

      {/* Features Grid */}
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6} p={8}>
        {features.map((feature, index) => (
          <Card key={index} bg={cardBg}>
            <CardBody textAlign="center">
              <Icon as={feature.icon} boxSize={8} mb={4} color="blue.500" />
              <Heading size="md" mb={2}>{feature.title}</Heading>
              <Text color="gray.600">{feature.desc}</Text>
            </CardBody>
          </Card>
        ))}
      </Grid>

      {/* Real-time Updates */}
      <Box p={8}>
        <Heading size="lg" mb={6} display="flex" alignItems="center" gap={2}>
          <FaClock /> Live Neighborhood Updates
        </Heading>
        <Grid gap={4}>
          {sampleIssues.map(issue => (
            <Card key={issue.id} bg={cardBg} cursor="pointer" _hover={{ shadow: 'md' }}>
              <CardBody>
                <Flex align="center" gap={4}>
                  <Text fontWeight="bold">{issue.title}</Text>
                  <Text ml="auto" color="gray.500">{issue.time}</Text>
                  <Button size="sm">Vote Now</Button>
                </Flex>
                <Progress value={(issue.votes / 2000) * 100} mt={2} />
                <Text fontSize="sm" color="gray.500" mt={1}>{issue.votes} community votes</Text>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box borderTop="1px solid" borderColor="gray.200" mt={16} py={8} textAlign="center">
        <Text color="gray.600">© 2023 CommunityVoice. Civic engagement for all.</Text>
      </Box>
    </Box>
  );
}