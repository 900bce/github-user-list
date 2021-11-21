import React, { useEffect, useState } from 'react';
import { apiUrl } from '../configs/api';
import useFetch from '../hooks/useFetch';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Image,
  Table,
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react';

function UserDetail() {
  const [userData, setUserData] = useState({});

  const { userName } = useParams();

  const apiResponse = useFetch({ apiUrl: `${apiUrl}/users/${userName}` });

  useEffect(() => {
    setUserData(apiResponse);
  }, [apiResponse]);

  return (
    <Container py={10} centerContent>
      <Heading as="h1" size="md" mb={10}>
        Github User
      </Heading>

      <Table>
        <Tbody>
          <Tr>
            <Td>Avatar</Td>
            <Td>
              <a href={userData.avatar_url}>
                <Image
                  src={userData.avatar_url}
                  borderRadius="full"
                  boxSize="80px"
                />
              </a>
            </Td>
          </Tr>
          <Tr>
            <Td>Name</Td>
            <Td>{userData.name}</Td>
          </Tr>
          <Tr>
            <Td>Bio</Td>
            <Td>{userData.bio}</Td>
          </Tr>
          <Tr>
            <Td>Login</Td>
            <Td>{userData.login}</Td>
          </Tr>
          <Tr>
            <Td>Site admin</Td>
            <Td>{userData.site_admin ? 'true' : 'false'}</Td>
          </Tr>
          <Tr>
            <Td>Location</Td>
            <Td>{userData.location}</Td>
          </Tr>
          <Tr>
            <Td>Blog</Td>
            <Td>
              <a href={userData.blog}>{userData.blog}</a>
            </Td>
          </Tr>
        </Tbody>
      </Table>

      <Box mt={5} color="gray.600" mr="auto">
        <Link to="/">&#8592; Back to list</Link>
      </Box>
    </Container>
  );
}

export default UserDetail;
