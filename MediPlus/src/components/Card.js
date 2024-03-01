// CardComponent.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

const color = blue[300];


const CardComponent = () => {
    return (

        <Card style={{ width: 300, height: 200, marginTop: 200, marginLeft: 50, backgroundColor: color }} >
            <CardContent>
                <Typography variant="h5" component="div" sx={{
                    fontFamily: 'bold',
                }}>
                    doctors page
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Some description or content for the card.
                </Typography>
            </CardContent>
        </Card >
    );
};

export default CardComponent;
