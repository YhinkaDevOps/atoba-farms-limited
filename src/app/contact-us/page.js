"use client";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import { sendContactForm } from "../../../lib/api";
import Link from "next/link";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues };

const Contact = () => {
  const toast = useToast();

  const [state, setState] = useState(initState);

  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="min-h-screen pt-[100px]">
      <div className="contact-bg text-white bg-[#f6f6f6] py-12 px-4 md:py-16 lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">CONTACT US</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Contact Us</span>
        </span>
      </div>
      {/* Contact Container */}
      <div className="mx-auto max-w-[1099px] my-10 px-4 md:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4">
        <div className="contact-form border shadow-lg shadow-[rgb(4,12,22)] container rounded-md p-7 order-last">
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              errorBorderColor="red.300"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.subject && !values.subject}
          >
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.message && !values.message}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              type="text"
              name="message"
              errorBorderColor="red.300"
              rows={4}
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <div className="text-center">
            {error && (
              <Text color="red.500" my={4} fontSize="lg">
                {error}
              </Text>
            )}
          </div>
          <div className="mx-auto text-center">
            <Button
              isDisabled={
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              px={10}
              colorScheme="red"
              isLoading={isLoading}
              onClick={onSubmit}
            >
              Send
            </Button>
          </div>
        </div>
        <div className="contact-form border shadow-lg shadow-[rgb(4,12,22)] flex flex-col gap-2 p-7">
          <h3 className="text-[#444444] text-2xl font-semibold">Visit Us</h3>
          <div>
            <p>Rena Agricultural Services Ltd</p>
            <p>Plot 12D Oyinbo Eleja Close</p>
            <p>Akingbile, Ibadan</p>
            <p>Oyo, Nigeria</p>
          </div>

          <h3 className="text-[#444444] text-2xl font-semibold">Phone Us</h3>
          <div>
            <p>Customer Service:</p>
            <p>08033520427</p>
          </div>

          <h3 className="text-[#444444] text-2xl font-semibold">Email Us</h3>
          <div>
            <p>renaagric@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
