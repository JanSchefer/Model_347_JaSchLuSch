import { Box, Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import Acorn from './Acorn'
import { Alcohol } from '../../../types/models/Alcohol.model';

export default function AlcoholCard({ prop }: { prop: Alcohol }) {
    const INPUT_LENGTH: string = '250px'
    return (
        <Card sx={{ display: 'flex', maxWidth: '700px', minHeight: '300px', maxHeight: '300px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography variant="h5" component="h2" sx={{ mb: 2 }}>{prop.name}</Typography>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <Grid container direction={"row"}>
                                <Grid item xs={6}>
                                    <Typography sx={{ width: INPUT_LENGTH }}>Typ:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ width: INPUT_LENGTH }}>{prop.type}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction={"row"}>
                                <Grid item xs={6}>
                                    <Typography sx={{ width: INPUT_LENGTH }}>Menge:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ width: INPUT_LENGTH }}>{prop.count}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction={"row"}>
                                <Grid item xs={6}>
                                    <Typography sx={{ width: INPUT_LENGTH }}>Prozent:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ width: INPUT_LENGTH }}>{prop.percent}%</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction={"row"}>
                                <Grid item xs={6}>
                                    <Typography sx={{ width: INPUT_LENGTH }}>Land:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ width: INPUT_LENGTH }}>{prop.country}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction={"row"}>
                                <Grid item xs={6} sx={{ width: INPUT_LENGTH }}>
                                    <Typography>Beschreibung:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ wordBreak: "break-word", maxHeight: "100px" }}>{prop.description}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Rating
                        name="read-only"
                        value={prop.rating}
                        icon={<Acorn fontSize='inherit' color="primary" />}
                        emptyIcon={<></>}
                        defaultValue={0}
                        readOnly
                    />
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ maxWidth: 300 }}
                image={prop.image}
            />
        </Card>
    )
}
