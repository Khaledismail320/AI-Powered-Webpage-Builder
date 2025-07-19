import React, { useState, useEffect } from 'react';

import { FaHistory } from 'react-icons/fa';

import{
Drawer,
DrawerBody,
DrawerHeader,
DrawerOverlay,
DrawerContent,
DrawerCloseButton,
Button,
useDisclosure,
VStack,
Box,
Text,
Spinner,
} from '@chakra-ui/react';
import axios from 'axios';

const PromptHistoryDrawer = ({ onHistoryClick }) => {
const { isOpen, onOpen, onClose } = useDisclosure();
const [history, setHistory] = useState([]);
const [loading, setLoading] = useState(false);
const fetchHistory = async () => {
  setLoading(true);
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/aibuilder/history`);
    const raw = response.data;
    console.log('Fetched history:', raw);
    
    if (response.status === 200) {
      const historyList = Array.isArray(raw) ? raw : raw.data || [];
        setHistory(historyList);
    } else {
      console.error('Failed to fetch history:', response.data.message);
      setHistory([]);
    }
  } catch (error) {
    console.error('Error fetching history:', error);
    setHistory([]);
  } finally {
    setLoading(false);
  }
};

const handleHistoryClick = (item) => {
    if (onHistoryClick) {
        onHistoryClick(item.generatedsections);
    }
    onClose(); // Close the drawer after clicking
};

const handleOpen = () => {
    onOpen();
    fetchHistory();
};

return (
    <>
        <Button leftIcon={<FaHistory />} variant="white" onClick={handleOpen}>
            History
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>History</DrawerHeader>
                <DrawerBody>
                    <VStack align="stretch" spacing={4}>
                        {loading ? (
                            <Box display="flex" justifyContent="center" p={4}>
                                <Spinner />
                            </Box>
                        ) : history.length === 0 ? (
                            <Text color="gray.500">No data yet.</Text>
                        ) : (
                            history.map((item, idx) => (
                                <Box
                                    key={item._id || idx}
                                    p={3}
                                    bg="gray.50"
                                    borderRadius="md"
                                    boxShadow="sm"
                                    _hover={{ bg: 'gray.100', cursor: 'pointer' }}
                                    onClick={() => handleHistoryClick(item)}
                                    transition="background-color 0.2s"
                                >
                                    <Text fontSize="sm" fontWeight="medium" mb={2}>
                                        {item.prompt}
                                    </Text>
                                    <Text fontSize="xs" color="gray.400">
                                        {new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString()}
                                    </Text>
                                </Box>
                            ))
                        )}
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
);
};

export default PromptHistoryDrawer;