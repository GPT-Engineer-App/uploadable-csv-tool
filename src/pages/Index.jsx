import React, { useState } from "react";
import { Container, VStack, Text, Button, Table, Thead, Tbody, Tr, Th, Td, Input, IconButton } from "@chakra-ui/react";
import { FaTrash, FaDownload, FaUpload, FaPlus } from "react-icons/fa";
import Papa from "papaparse";
import { CSVLink } from "react-csv";

const Index = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [fileName, setFileName] = useState("edited_data.csv");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setHeaders(Object.keys(results.data[0]));
          setData(results.data);
        },
      });
    }
  };

  const handleInputChange = (rowIndex, columnName, value) => {
    const updatedData = [...data];
    updatedData[rowIndex][columnName] = value;
    setData(updatedData);
  };

  const handleAddRow = () => {
    const newRow = headers.reduce((acc, header) => ({ ...acc, [header]: "" }), {});
    setData([...data, newRow]);
  };

  const handleRemoveRow = (rowIndex) => {
    const updatedData = data.filter((_, index) => index !== rowIndex);
    setData(updatedData);
  };

  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">CSV Editor</Text>
        <Button leftIcon={<FaUpload />} as="label">
          Upload CSV
          <input type="file" accept=".csv" hidden onChange={handleFileUpload} />
        </Button>
        {data.length > 0 && (
          <>
            <Table variant="simple">
              <Thead>
                <Tr>
                  {headers.map((header) => (
                    <Th key={header}>{header}</Th>
                  ))}
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((row, rowIndex) => (
                  <Tr key={rowIndex}>
                    {headers.map((header) => (
                      <Td key={header}>
                        <Input value={row[header]} onChange={(e) => handleInputChange(rowIndex, header, e.target.value)} />
                      </Td>
                    ))}
                    <Td>
                      <IconButton aria-label="Remove Row" icon={<FaTrash />} onClick={() => handleRemoveRow(rowIndex)} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Button leftIcon={<FaPlus />} onClick={handleAddRow}>
              Add Row
            </Button>
            <CSVLink data={data} headers={headers} filename={fileName}>
              <Button leftIcon={<FaDownload />}>Download CSV</Button>
            </CSVLink>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
