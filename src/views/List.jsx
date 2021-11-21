import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { Container, Image, Heading, Tr, Td } from '@chakra-ui/react';
import Table from '../components/Table';
import { Link } from 'react-router-dom';
import { apiUrl } from '../configs/api';

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

function List() {
  const [list, setList] = useState([]);

  const apiResponse = useFetch({ apiUrl: `${apiUrl}/users?per_page=100` });

  useEffect(() => {
    setList(apiResponse);
  }, [apiResponse]);

  return (
    <Container py={10} centerContent>
      <Heading as="h1" size="md" mb={10}>
        Github User List
      </Heading>

      <Table tableHeader={tableHeader}>
        {list.length > 0 ? (
          list.map((user, index) => (
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
              <Td>
                <Link to={`detail/${user.login}`}>{user.login}</Link>
              </Td>
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
