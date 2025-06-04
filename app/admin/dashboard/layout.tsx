'use client';

import { useState, useEffect } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/theme';
import AdminTopbar from '@/app/components/adminTopbar';
import AdminSidebar from '@/app/components/adminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (!isMounted) {
    return null; // Or loading indicator
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AdminTopbar handleDrawerToggle={handleDrawerToggle} />
        <AdminSidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            pt: '80px',
            width: '100%',
            ml: { sm: '240px' },
            transition: 'all 0.3s ease',
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}