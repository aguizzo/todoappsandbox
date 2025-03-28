
import { RouterProvider } from 'react-router';
import { router } from 'Frontend/generated/routes.js';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';



const App = () => {
    const theme = createTheme({
      cssVariables: true,
      palette: {
         primary: {
              main: 'var(--lumo-primary-color)',
              light: "#63a4ff",
              dark: "#004ba0",
              contrastText: "#fff",
            },
        // Add more color mappings as needed
      },
      // Customize other theme aspects
    });

   return(
       <ThemeProvider theme={theme}>
            <RouterProvider router={router} />;
       </ThemeProvider>
   )
}

export default App;

