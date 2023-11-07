export const AuthCheck = ({router}) => {

 const timeoutId = setTimeout(() => {
   router.push('/');
  }, 1000); 

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

}
