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

  const handlenotification = async (event) => {
    event.preventDefault();
    
    const doctor = event.target.value;
    window.alert("Reservation completed with "+ doctor)
    try {
      const response = await fetch('http://localhost:8000/createnotification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userid:userId,doctorid:doctor,subject:"Sceduling Appointment",content:"Appointment with has been successfully booked with "}),
      });

      // Handle the response as needed
      console.log(response);
      window.location.href=`/payment?docid=${userId}&docid2=${doctor}`
      //history.push('/filter');
      //window.location.href="http://localhost:8000/createAdminstrator"
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const getAuthors = async () => {
    await axios.get('http://localhost:8000/getDoctors').then(
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
      author.Speciality.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAuthors(filteredList);
  };

  const params = new URLSearchParams(window.location.search);
  const userId = params.get('docid');

  return (
    <div className="UsersList">
      <Box sx={{ marginBottom: 2 }}>
        <Button variant="contained"
          onClick={getAuthors}
          margin="normal"
          padding="normal"
        >
          Load Doctors
        </Button>
      </Box>
     
      <Input
        type="text"
        placeholder="Search by Speciality"
        value={searchQuery}
        onChange={handleSearch}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Speciality</StyledTableCell>
              <StyledTableCell align="center">Session Price</StyledTableCell>
              <StyledTableCell align="center">Avaliable</StyledTableCell>
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
                onClick={() => window.location.href=`/payment?docid=${userId}&docid2=${author._id}`}
              >
                <TableCell align="center">{author.Name}</TableCell>
                <TableCell align="center">{author.Email}</TableCell>
                <TableCell align="center">{author.Speciality}</TableCell>
                <TableCell align="center">{author.SessionPrice}</TableCell>
                <TableCell align="center">{author.Avaliable[0]}</TableCell>
                <TableCell align="center"><Button value={author._id} value2 ={author.Username} name='Username' type='submit' onClick={handlenotification} onSubmit={() => window.location.href=`/payment?docid=${userId}&docid2=${author._id}`}>Reserve</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DoctorsList;