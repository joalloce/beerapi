import React, { useContext } from "react";
import { BeerContext } from "../context/BeerContext";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Container
} from "@material-ui/core";
import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  card: {
    maxWidth: 390,
    maxHeight: 390,
    width: "100%",
    height: "100%"
  },
  cardAction: {
    width: "100%",
    height: "100%"
  },
  fav: {
    float: "right"
  }
});
const BeerList = () => {
  const classes = useStyles();
  const { beerList, setBeerList } = useContext(BeerContext);
  
  const addDots = (variable) => {
    if(variable.length > 150) {
      return `...`
    }
  }

  const handleClickFav = (id) => {
    const newBeerList = beerList.map(beer => {
      if(beer.id === id) {
        if(!beer.fav) {
          beer.fav = true
        }else {
          beer.fav = false
        }
      }
      return beer
    })
    setBeerList(newBeerList)
  }
  return (
    <Container style={{ paddingTop: "30px" }}>

      <Grid container spacing={2}>
        {beerList.map(beer => (
          <Grid key={beer.id} item xs={12} lg={4} md={6}>
            <Card className={classes.card}>
              <CardActionArea className={classes.cardAction}>
                <CardContent>
                  <Grid container  alignItems="center">
                    <Grid item xs={4} style={{ paddingLeft: "20px" }}>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        style={{ maxWidth: "50%" }}
                        image={beer.image_url}
                        title="Contemplative Reptile"
                      />
                    </Grid>
                    <Grid item xs={8} >
                    {beer.fav ? (<Favorite className={classes.fav} onClick={()=>handleClickFav(beer.id)}/>) : (<FavoriteBorderOutlined className={classes.fav} onClick={()=>handleClickFav(beer.id)}/>)}
                      
                      <Typography gutterBottom variant="h5" component="h2">
                        {beer.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {beer.description.slice(0,150)}
                        {addDots(beer.description)}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BeerList;
