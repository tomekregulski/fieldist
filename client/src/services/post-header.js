export default function postHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    return { 
    'Content-type': 'application/json',
    'x-access-token': user.accessToken, 
    'roles': user.roles,
    'user_id': user.id,
    'brand_id': user.brand_id, 
   };
  } else {
    return {};
  }
}
