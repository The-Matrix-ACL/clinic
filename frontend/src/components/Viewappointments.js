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
    Username: '',
    
  });

  const getAuthors = async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("Username");
    await axios.post('http://localhost:8000/gethealthrecords',{Username:emailInput.value}).then(
      (res) => {
        const authors = res.data;
        window.alert(authors._id);
        setAuthors(authors);
        
      }
    );
  };

 

  

  const handleReject = async (e) => {
    e.preventDefault();
    const doctor = e.target.value;
    window.alert(doctor)
    //window.alert(mongoose.Types.ObjectId.isValid(doctor))
    //if (mongoose.Types.ObjectId.isValid(doctor)){
      try {
        const response = await fetch(`http://localhost:8000/removehealthrecords?userId=${doctor}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userId: doctor}),
        });
  
        // Handle the response as needed
        console.log(response);
        window.alert(response.status)
        
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    
    
  }

  return (
    <div className="UsersList">
      <Box sx={{ marginBottom: 2 }}>
        <Button variant="contained"
          onClick={getAuthors}
          margin="normal"
          padding="normal"
        >
          Load Slots
        </Button>
      </Box>

     
      <label for="Username">
          Username
          <input type="text" name="" id="Username" />
        </label>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
            <StyledTableCell align="center"></StyledTableCell>
            
              <StyledTableCell align="center">Avaliable Slot</StyledTableCell>
              
              
            </TableRow>
          </TableHead>
          <TableBody>
            {
              <TableRow
                hover
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%"
                  },
                }}
                
                key={authors._id}
              >

                <TableCell align="center"><Button value={authors._id} onClick={handleReject}>Reserve</Button></TableCell>
                <TableCell align="center">{authors.Avaliable[0]}</TableCell>
                
                
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DoctorsList;