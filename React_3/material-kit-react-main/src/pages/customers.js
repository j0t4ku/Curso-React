import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { firebaseListar } from 'src/utils/FirebaseUtil';
import { useEffect, useState } from 'react';

const Customers = () => {
  
  const [clientes, setClientes]=useState([]);

  useEffect(()=>{
    listarClientes();
  }, []);
  const  listarClientes = async ()=>{
    let listado = await firebaseListar('clientes');
    setClientes(listado);
  }
  
  return (
  <>
    <Head>
      <title>
        Customers | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={clientes} />
        </Box>
      </Container>
    </Box>
  </>);
}

Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
