import React, { useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, useToast, Spinner } from "@chakra-ui/react";
import axios from "axios";

const Form = ({ onSubmit }) => {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        setLoading(true);
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/aibuilder/generate`, {
                prompt
            });

            const result = response.data;

            toast({
                title: "Success",
                description: result.message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            
            // Call onSubmit with the generated HTML data
            if (onSubmit) {
                onSubmit(result.data);
            }
            
            setPrompt("");
        } catch (error) {
            console.error('Error generating page:', error);
            
            const errorMessage = error.response?.data?.message || "Failed to generate page. Please try again.";
            
            toast({
                title: "Error",
                description: errorMessage,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box maxW="md" mx="auto" p={4} borderWidth={1} borderRadius="md">
            <form onSubmit={handleSubmit}>
                <FormControl id="prompt" isRequired>
                    <FormLabel>How can I help you today?</FormLabel>
                    <Input
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Type your prompt here..."
                    />
                </FormControl>
                <Button 
                    mt={4} 
                    bg="black"
                    color="white"
                    _hover={{ bg: "gray.800" }}
                    type="submit" 
                    width="100%"
                    isLoading={loading}
                    loadingText="Generating..."
                    spinner={<Spinner size="sm" />}
                >
                    Generate Page
                </Button>
            </form>
        </Box>
    );
};

export default Form;