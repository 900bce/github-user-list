import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { Container, Image, Heading, Tr, Td } from '@chakra-ui/react';
import Table from '../components/Table';

const tableHeader = [
  {
    text: '#',
  },
  {
    text: 'avatar',
    center: true,
  },
  {
    text: 'login',
  },
  {
    text: 'site_admin',
    center: true,
  },
];

const apiUrl = 'https://api.github.com/users?per_page=100';

function List() {
  const [list, setList] = useState([]);

  const apiResponse = useFetch({ apiUrl });

  useEffect(() => {
    setList(apiResponse);
  }, [apiResponse]);

  return (
    <Container py={10} centerContent>
      <Heading as="h1" size="md" mb={10}>
        Github User List
      </Heading>

      <Table tableHeader={tableHeader}>
        {apiResponse.length > 0 ? (
          apiResponse.map((user, index) => (
            <Tr key={user.id}>
              <Td>{index + 1}</Td>
              <Td>
                <a href={user.avatar_url}>
                  <Image
                    src={user.avatar_url}
                    borderRadius="full"
                    boxSize="40px"
                    mx="auto"
                  />
                </a>
              </Td>
              <Td>{user.login}</Td>
              <Td textAlign="center">{user.site_admin ? 'Y' : 'N'}</Td>
            </Tr>
          ))
        ) : (
          <Tr>
            <Td>無資料</Td>
          </Tr>
        )}
      </Table>
    </Container>
  );
}

export default List;
