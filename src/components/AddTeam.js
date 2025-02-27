import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const AddTeam = () => {
  const [teamData, setTeamData] = useState({
    fullName: '',
    shortName: '',
    coach: '',
    owner: '',
    venue: '',
    titleWon: '',
    captain: '',
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamData({ ...teamData, [name]: value });
  };

  const handleFileChange = (e) => {
    setTeamData({ ...teamData, logo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in teamData) {
      formData.append(key, teamData[key]);
    }

    try {
      await axios.post('http://localhost:8080/api/teams/add-team', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Team added successfully');
    } catch (error) {
      console.error('Error adding team:', error);
      alert('Failed to add team');
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Team
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="fullName"
            value={teamData.fullName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Short Name"
            name="shortName"
            value={teamData.shortName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Coach"
            name="coach"
            value={teamData.coach}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Owner"
            name="owner"
            value={teamData.owner}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Venue"
            name="venue"
            value={teamData.venue}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Titles Won"
            name="titleWon"
            value={teamData.titleWon}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Captain"
            name="captain"
            value={teamData.captain}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ marginTop: '16px', marginBottom: '16px' }}
          />
          <Button type="submit" variant="contained" color="primary">
            Add Team
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddTeam;