import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import JobSearch from '../../components/JobSearch/JobSearch'
import NavBar from '../../components/NavBar/NavBar'
import PostJob from '../../components/PostJob/PostJob'
import UserSidebar from '../../components/UserSidebar/UserSidebar'

function Jobs({section}) {
  return (
    <Grid container style={{ backgroundColor: 'rgba(0, 0, 0, 0.22)' }}>
      <NavBar />
      <Grid container >
        <Grid item md={3} sx={{ width: '100%' }}>
          <UserSidebar page={'jobs'} />
        </Grid>
        <Grid item md={7}>
          <Container sx={{ pt: '2.5rem', overflowY: 'scroll', height: '90.3vh' }}>
            {(section === 'search') && <JobSearch />}
            {(section === 'post') && <PostJob />}
            
          </Container>
        </Grid>
        <Grid item md={2}>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Jobs