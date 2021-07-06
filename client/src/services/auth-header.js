export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken, 'roles': user.roles,
    'user_id': user.id,
    'brand_id': user.brand_id, 
   };
  } else {
    return {};
  }
}
