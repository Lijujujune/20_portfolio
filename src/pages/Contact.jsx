import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';

const Contact = () => {
  // State for form fields
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  // Validate email format
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: form.name === '',
      email: !isValidEmail(form.email),
      message: form.message === '',
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      // Handle form submission, e.g., send data to server or API
      console.log('Form submitted:', form);
      alert('Message sent!');
      // Reset the form
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <Container maxW="600px" mt="5rem">
      <Heading as="h1" size="2xl" mb="6" textAlign="center" color="blue.700">
        Contact Me
      </Heading>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <FormControl isInvalid={errors.name} mb="4">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter your name"
          />
          {errors.name && <FormErrorMessage>Name is required.</FormErrorMessage>}
        </FormControl>

        {/* Email Field */}
        <FormControl isInvalid={errors.email} mb="4">
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter your email"
          />
          {errors.email && <FormErrorMessage>Invalid email address.</FormErrorMessage>}
        </FormControl>

        {/* Message Field */}
        <FormControl isInvalid={errors.message} mb="4">
          <FormLabel>Message</FormLabel>
          <Textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Enter your message"
          />
          {errors.message && <FormErrorMessage>Message is required.</FormErrorMessage>}
        </FormControl>
          <Button
            type="submit"
            color="white"
            bgGradient="linear(to-r, blue.400, blue.600)"
            _hover={{ bgGradient: "linear(to-r, blue.500, blue.700)", boxShadow: "xl" }}
            borderRadius="full"
            boxShadow="lg"
            width="full"
            mt="4"
            py="6"
            fontSize="lg"
          >
            Send Message
          </Button>
      </form>
    </Container>
  );
};

export default Contact;