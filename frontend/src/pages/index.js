import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Form from '@/components/Form';
import Preview from '@/components/Preview';

export default function Home() {
  const [previewHtml, setPreviewHtml] = useState("");

  const handleHistoryClick = (html) => {
    setPreviewHtml(html);
  };

  const handleFormSubmit = (html) => {
    setPreviewHtml(html);
    console.log(html);
  };

  return (
    <>
    <Navbar onHistoryClick={handleHistoryClick} />
    <Box maxW="6xl" mx="auto">
      
      <Box p={8}>
        <Form onSubmit={handleFormSubmit} />
        <Preview html={previewHtml} />
      </Box>
    </Box>
    </>
  );
}
