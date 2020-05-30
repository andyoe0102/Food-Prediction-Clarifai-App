import LoadingOverlay from 'react-loading-overlay';
// import BounceLoader from 'react-spinners/BounceLoader';
import {BounceLoader} from 'react-spinners';

export default function Loader({active,children}){
  return(
    <LoadingOverlay
      active={active}
      spinner= {<BounceLoader/>}
    >
      {children}
    </LoadingOverlay>
  )
}