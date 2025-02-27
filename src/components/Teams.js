import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Container, Card, CardContent, Grid } from '@mui/material';

const Teams = () => {
  const [teamsData, setTeamsData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/teams');
        setTeamsData(response.data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamsData();
  }, []);

  if (teamsData.length === 0) return <div>Loading...</div>;

  return (
    <Container>
      <Grid container spacing={2}>
        {teamsData.map((teamData) => (
          <Grid item xs={12} md={3} key={teamData.id}>
            <img 
              src={URL.createObjectURL(new Blob([teamData.logo]))} 
              alt="Team Logo" 
              style={{ maxWidth: '100%', cursor: 'pointer' }}
              onClick={() => setSelectedTeam(teamData)}
            />
          </Grid>
        ))}
      </Grid>
      {selectedTeam && (
        <Box sx={{ 
          backgroundColor: '#041E42', 
          color: 'white',
          minHeight: '100vh',
          padding: '20px',
          marginTop: '20px'
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <img 
                 src={URL.createObjectURL(new Blob([selectedTeam.logo]))} 
                alt="Team Logo" 
                style={{ maxWidth: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography variant="h3" component="h1">
                {selectedTeam.fullName}
              </Typography>
              {selectedTeam.titleWon && (
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <Typography variant="h6">
                    {selectedTeam.titleWon}
                  </Typography>
                </Box>
              )}
              <Card sx={{ mt: 3, backgroundColor: '#0A2351' }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ color: '#FFD700' }}>Captain</Typography>
                      <Typography sx={{ color: 'white' }}>{selectedTeam.captain}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ color: '#FFD700' }}>Coach</Typography>
                      <Typography sx={{ color: 'white' }}>{selectedTeam.coach}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ color: '#FFD700' }}>Owner</Typography>
                      <Typography sx={{ color: 'white' }}>{selectedTeam.owner}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ color: '#FFD700' }}>Venue</Typography>
                      <Typography sx={{ color: 'white' }}>{selectedTeam.venue}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default Teams;