import React, { Children } from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react';

function TableComponent({ tableHeader, children }) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {tableHeader.map((item, index) => (
            <Th
              key={index}
              isNumeric={item.isNumeric}
              textAlign={item.center ? 'center' : null}>
              {item.text}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>{children}</Tbody>
    </Table>
  );
}

export default TableComponent;
