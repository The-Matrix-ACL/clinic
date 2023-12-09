import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const { useState } = require("react");

const DoctorsList = () => {
  const [authors, setAuthors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAuthors, setFilteredAuthors] = useState([]);

  const [formData, setFormData] = useState({
    Username: ''
    
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const user = event.target.value
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const doctor = event.target.value;
    window.alert("Reservation completed with "+ doctor)
    try {
      const response = await fetch('http://localhost:8000/addavaliabletime', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response as needed
      console.log(response);
      //history.push('/filter');
      //window.location.href="http://localhost:8000/createAdminstrator"
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const getAuthors = async () => {
    await axios.get('http://localhost:8000/getappointments').then(
      (res) => {
        const authors = res.data;
        console.log(authors);
        setAuthors(authors);
      }
    );
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredList = authors.filter(author =>
      author.Name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAuthors(filteredList);
  };

  return (
    <div className="UsersList">
      <Box sx={{ marginBottom: 2 }}>
        <Button variant="contained"
          onClick={getAuthors}
          margin="normal"
          padding="normal"
        >
          Load Appointments
        </Button>
      </Box>
      
      <Input
        type="text"
        placeholder="Search by Name"
        value={searchQuery}
        onChange={handleSearch}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Username</StyledTableCell>
              <StyledTableCell align="center">Reserved</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(searchQuery ? filteredAuthors : authors).map((author) => (
              <TableRow
                hover
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                  },
                }}
                
                key={author._id}
              >
                <TableCell align="center">{author.Name}</TableCell>
                <TableCell align="center">{author.Email}</TableCell>
                <TableCell align="center">{author.Username}</TableCell>
                <TableCell align="center">{author.DateOfBirth}</TableCell>
                <TableCell align="center"><Button value={author.Username} name='Username' onClick={() => window.location.href=`https://us05web.zoom.us/j/8011145782?pwd=6qQZprzfr11od523tbsaZ8bL4IMdLg.1

`}>Chat</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DoctorsList;