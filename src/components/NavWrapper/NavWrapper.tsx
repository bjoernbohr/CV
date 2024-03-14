import { ViewportProvider } from '../../Providers/ViewportProvider';
import { Nav } from '../Nav/Nav';

export const NavWrapper = (): JSX.Element => {

  return (
    <ViewportProvider>  
      <Nav />
    </ViewportProvider>  
  );
};
