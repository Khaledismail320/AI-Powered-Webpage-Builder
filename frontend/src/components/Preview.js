import React from 'react';
import { Box, Text, Divider } from '@chakra-ui/react';

const Preview = ({ html }) => {
    if (!html) return null;

    return (
        <Box mt={8}>
            <Divider mb={4} />
            <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
                Preview
            </Text>
            <Box 
                borderWidth={1} 
                borderRadius="md" 
                overflow="hidden"
                boxShadow="lg"
                bg="white"
            >
                <iframe
                    srcDoc={html}
                    style={{
                        width: '100%',
                        height: '600px',
                        border: 'none'
                    }}
                    title="Generated Page Preview"
                />
            </Box>
        </Box>
    );
};

export default Preview;
