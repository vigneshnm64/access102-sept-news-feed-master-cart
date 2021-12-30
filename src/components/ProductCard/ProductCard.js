import react from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ProductCard(props) {
    const { product } = props;
    console.log("product from ProductCard",product )
  return (
    <Card sx={{ maxWidth: 335, margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}    
          </Typography>
          <p> PRICE {product.price}</p>
          <p>RATING {product.rating.rate} </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default ProductCard;