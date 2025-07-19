import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import PromptHistoryDrawer from '@/components/Drawer';

export default function Navbar({ onHistoryClick }) {
  return (
    <Flex as="nav" p="4" bg="black" color="white" align="center">
      <Heading size="md">AI Web Page Builder</Heading>
      <Spacer />
      <PromptHistoryDrawer onHistoryClick={onHistoryClick} />
    </Flex>
  );
}
