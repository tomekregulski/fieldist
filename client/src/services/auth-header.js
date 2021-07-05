export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  console.log(user.accessToken);
  console.log(user.roles);
  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken, 'roles': user.roles };
  } else {
    return {};
  }
}
