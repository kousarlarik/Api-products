import { Box, CircularProgress, Grid, Typography, Button, Rating, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [ProductDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogImage, setDialogImage] = useState('');
  const param = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${param?.product_id}`);
        setProductDetails(response?.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [param?.product_id]);

  const handleImageClick = (image) => {
    setDialogImage(image);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      {isLoading ? (
        <Box className="text-center mt-5">
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <Box sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Grid container spacing={4} sx={{ width: '100%', maxWidth: '800px' }}>
            {/* Image Section */}
            <Grid item xs={12} sm={6} className="text-center">
              <img
                src={ProductDetails?.image}
                alt={ProductDetails?.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  cursor: 'pointer',
                  borderRadius: '8px',
                }}
                onClick={() => handleImageClick(ProductDetails?.image)}
              />
            </Grid>

            {/* Product Details Section */}
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2A9D8F' }}>
                Category: {ProductDetails?.category}
              </Typography>

              <Typography variant="h4" sx={{ fontWeight: '700', marginTop: '1rem' }}>
                {ProductDetails?.title}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                <Rating value={ProductDetails?.rating?.rate || 0} readOnly />
                <Typography variant="body2" color="textSecondary" sx={{ marginLeft: '0.5rem' }}>
                  {ProductDetails?.rating?.count} reviews
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: '700', marginTop: '1rem' }}>
                ${ProductDetails?.price}
              </Typography>

              <Typography variant="body1" sx={{ marginTop: '1rem', textAlign: 'justify' }}>
                {ProductDetails?.description}
              </Typography>

              <Box sx={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <Button variant="contained" color="primary" sx={{ padding: '0.8rem 2rem' }}>
                  Learn More
                </Button>
                <Button variant="outlined" color="secondary" sx={{ padding: '0.8rem 2rem' }}>
                  Contact Us
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Dialog for Enlarged Image */}
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Product Image</DialogTitle>
            <DialogContent>
              <img
                src={dialogImage}
                alt="Enlarged Product"
                style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain' }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      )}
    </>
  );
};

export default ProductDetails;
