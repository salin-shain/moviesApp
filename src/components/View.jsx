import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const View = () => {
    
    const rows=[{mName: 'Movie1',mdesc: 'Movie1',mdirector: 'Maniratnam'},
        {mName: 'Movie2',mdesc: 'Movie2',mdirector: 'Robert'}  
    ]
  return (
    <>
    {rows.map((row)=>(
    <Card style={{marginTop: '5%',width: '30%',marginLeft: '35%'}} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {row.mName}
        </Typography>
        <Typography variant="h5" component="div">
          {row.mdesc}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {row.mdirector}
        </Typography>
        <Typography variant="body2">
          {row.mName}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
  )
}
</>
  )
}

export default View