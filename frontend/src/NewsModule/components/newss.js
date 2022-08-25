import React from 'react'
import { Image } from "@chakra-ui/react"

import Card from 'react-bootstrap/Card';
import { Box, Badge, Text, Stack, 
    useColorMode, Button, Flex, Spacer } 
    from "@chakra-ui/react";
const Newss = ({ newss }) => {
    return (
        <div className='cardsProduct'>
            {newss.map((news) => (
                
                <Box w="300px" rounded="20px" 
                     overflow="hidden" mt={10}>
                  <Image src= {news.image}
                         alt="Card Image" boxSize="300px">
                  </Image>
                  <Box p={5}>
                    <Stack align="center">
                      <Badge variant="solid" colorScheme="green" 
                        rounded="full" px={2}>
                      {news.source}
                      </Badge>
                    </Stack>
                    <Stack align="center">
                      <Text as="h2" fontWeight="normal" my={2} >
                        {news.title}
                      </Text>
                      <Text fontWeight="light">
                        {news.description}
                      </Text>
                    </Stack>
                    <Flex>  
                      <Spacer />
                      <a href={news.url} target="_blank" rel="noreferrer">
                      <Button variant="solid"   
                      colorScheme="green" size="sm">
                        Learn More
                    </Button>
                    </a>
                    </Flex>
                  </Box>
                </Box>
           
            ))}
        </div>
    )
};

export default Newss