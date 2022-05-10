import jwtDecode from 'jwt-decode';

function parse(token) {
  if (!token) {
    return null;
  }

  try {
    return jwtDecode(token);
  } catch (err) {
    return null;
  }
}

export {
  parse,
};
