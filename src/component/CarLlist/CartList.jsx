import { Button, ButtonGroup, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { decreaseQuantity, increaseQuantity } from "../../slices/productSlice/ProductSlice";
const CartList = (props) => {
  const { open, toggleDrawer } = props;
  const {items} = useSelector((state)=> state.product);

  const dispatch = useDispatch()
 
  

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 450 }} role="presentation">
          <Typography variant="h5">Cart Items</Typography>
          {items?.map((item) => {
            return (
              <Box className="d-flex justify-content-between align-items-center">
                <div>
                  <img width="40px" src={item?.image} alt="" />
                  <span> {item?.title?.length >= 15
                    ? `${item?.title.slice(0, 15)}...`
                    : item?.title}</span>
                </div>
                <ButtonGroup className="" size="25" variant="text" aria-label="Basic button group">
//                   <Button ><RemoveIcon onClick={() => dispatch(decreaseQuantity(item))} /></Button>
//                   <Button>{item?.quantity}</Button>
//                   <Button><AddIcon onClick={() => dispatch(increaseQuantity(item))} /></Button>
//                 </ButtonGroup>
               <span>{item?.price}</span>

                
        </Box>
            );
          })};
          
        </Box>
      </Drawer>
    </div>
    
  );
};
export default CartList;

