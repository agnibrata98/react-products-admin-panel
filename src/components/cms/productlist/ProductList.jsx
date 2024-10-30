import React, { useEffect, useState } from 'react';
import {
  Button, Card, CardContent, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box,
  Pagination
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// import axiosInstance, { product } from '../../../helper/Helper';
import SweetAlertComponent from '../../../ui/sweetalert/SweetAlert';
import { Link } from 'react-router-dom';
import { useTokenStore } from '../../../store/authStore';
import toast from 'react-hot-toast';
import useDarkMode from 'use-dark-mode';
import axiosInstance, { product } from '../../../axios/helper/Helper';
import { endPoints } from '../../../axios/endpoints/endpoints';

const ProductList = () => {
  const setTok = useTokenStore((state) => state.setToken);
  const token = useTokenStore((state) => state.token);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state
  const [showTable, setShowTable] = useState(false); // To toggle between card and table view
  const [id, setId] = useState();
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  let darkMode = useDarkMode();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.post(endPoints.cms.list);
        setProducts(res.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const toggleView = () => {
    setShowTable((prev) => !prev);
  };

  const onDeleteId = async () => {
    const formData = new FormData();
    formData.append("id", id);

    try {
      const deleteResponse = await axiosInstance.post(endPoints.cms.remove, formData);

      if (deleteResponse.status === 200) {
        setModal(false);
        toast.success(deleteResponse.data.message);
      } else {
        setModal(false);
      }

      const listResponse = await axiosInstance.post(endPoints.cms.list);
      setProducts(listResponse.data.data);
    } catch (error) {
      console.error(error);
      setModal(false);
      toast.error("Deletion failed. Please try again.");
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div style={{ marginBottom: '100px', marginTop: '50px', minHeight: '100vh' }}>
      <Button
        variant="contained"
        onClick={toggleView}
        style={{ marginBottom: '20px', marginTop: '20px' }}
      >
        {showTable ? 'Show Card View' : 'Show Table View'}
      </Button>

      {showTable ? (
        <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
          <Table sx={{
            minWidth: 650,
            backgroundColor: darkMode.value ? '#1c1c1c' : '#f9f9f9',
          }}>
            <TableHead sx={{ backgroundColor: darkMode.value ? '#333' : '#3f51b5' }}>
              <TableRow>
                <TableCell sx={{ color: darkMode.value ? '#e0e0e0' : 'white', fontWeight: 'bold', fontSize: '16px' }}>Title</TableCell>
                <TableCell sx={{ color: darkMode.value ? '#e0e0e0' : 'white', fontWeight: 'bold', fontSize: '16px' }}>Description</TableCell>
                <TableCell sx={{ color: darkMode.value ? '#e0e0e0' : 'white', fontWeight: 'bold', fontSize: '16px' }}>Image</TableCell>
                <TableCell sx={{ color: darkMode.value ? '#e0e0e0' : 'white', fontWeight: 'bold', fontSize: '16px' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                Array.from(new Array(5)).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell><Skeleton height={30} /></TableCell>
                    <TableCell><Skeleton height={30} /></TableCell>
                    <TableCell><Skeleton height={100} width={200} /></TableCell>
                    <TableCell><Skeleton height={40} width={100} /></TableCell>
                  </TableRow>
                ))
              ) : (
                Array.isArray(products) && products.length > 0 ? (
                  paginatedProducts.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{
                        '&:nth-of-type(odd)': { backgroundColor: darkMode.value ? '#2c2c2c' : '#f9f9f9' },
                        '&:nth-of-type(even)': { backgroundColor: darkMode.value ? '#2c2c2c' : '#f9f9f9' },
                        border: darkMode.value ? '1px solid #333' : '1px solid #ddd',
                        '&:hover': { backgroundColor: darkMode.value ? '#39444b' : '#e0e7ff' },
                        transition: 'background-color 0.3s ease',
                      }}
                    >
                      <TableCell sx={{ padding: '12px', fontSize: '15px', color: darkMode.value ? '#e0e0e0' : '#000' }}>{item.title}</TableCell>
                      <TableCell sx={{ padding: '12px', fontSize: '14px', color: darkMode.value ? '#b3b3b3' : '#757575' }}>{item.description}</TableCell>
                      <TableCell>
                        <LazyLoadImage
                          src={product(item.image)}
                          alt={item.title}
                          style={{ borderRadius: '8px', objectFit: 'cover' }}
                          width={200}
                          height={100}
                        />
                      </TableCell>
                      <TableCell sx={{ display: 'flex', gap: '10px', alignItems: 'center', border: 'none' }}>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => {
                            setId(item._id);
                            setModal(true);
                          }}
                          sx={{
                            textTransform: 'capitalize',
                            padding: '6px 12px',
                            borderRadius: '8px',
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          component={Link}
                          to={`/products/${item._id}`}
                          sx={{
                            textTransform: 'capitalize',
                            padding: '6px 12px',
                            borderRadius: '8px',
                          }}
                        >
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} sx={{ textAlign: 'center', padding: '20px', color: '#757575' }}>
                      No products available
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Grid container spacing={2}>
          {loading ? (
            Array.from(new Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                  <SkeletonTheme baseColor="#f0f0f0" highlightColor="#e0e0e0">
                    <CardContent>
                      <Skeleton height={30} width="80%" />
                      <Skeleton height={20} width="60%" />
                      <Skeleton height={200} style={{ marginTop: '10px' }} />
                      <Skeleton height={40} width="40%" style={{ marginTop: '20px' }} />
                    </CardContent>
                  </SkeletonTheme>
                </Card>
              </Grid>
            ))
          ) : (
            Array.isArray(products) && products.length > 0 ? (
              paginatedProducts.map((item, id) => (
                <Grid item xs={12} sm={6} md={4} key={id}>
                  <Card sx={{ boxShadow: 3, borderRadius: 2, backgroundColor: darkMode.value ? '#808080' : '#fff', color: darkMode.value ? '#e0e0e0' : '#000' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode.value ? '#b3e5fc' : '#3f51b5' }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: darkMode.value ? '#b3b3b3' : '#757575' }}>{item.description}</Typography>
                      <Box sx={{ my: 2 }}>
                        <LazyLoadImage
                          src={product(item.image)}
                          alt={item.title}
                          style={{ marginTop: '10px', borderRadius: '8px', objectFit: 'cover' }}
                          width={'100%'}
                          height={'200px'}
                          effect="blur"
                        />
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px', mt: 2 }}>
                        <Button variant="contained" color="error" onClick={() => { setId(item._id); setModal(true); }} sx={{ textTransform: 'capitalize' }}>
                          <DeleteIcon />
                        </Button>
                        <Button variant="contained" color="primary" component={Link} to={`/products/${item._id}`} sx={{ textTransform: 'capitalize' }}>
                          <EditIcon />
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography align="center" color="textSecondary">No products available</Typography>
              </Grid>
            )
          )}
        </Grid>
      )}

      <Pagination
        count={Math.ceil(products.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          marginTop: "2rem",
          "& .MuiPaginationItem-root": {
            color: darkMode.value ? '#e0e0e0' : '#3f51b5', // Default number color
          },
          "& .Mui-selected": {
            backgroundColor: darkMode.value ? '#424242' : '#e3f2fd', // Selected number background
            color: darkMode.value ? '#fff' : '#3f51b5', // Selected number color
          },
        }}
      />
       {modal && (
        <SweetAlertComponent
          confirm={onDeleteId}
          cancel={() => setModal(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
        />
      )}
    </div>
  );
};

export default ProductList;
