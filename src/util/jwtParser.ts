import jwtDecode from 'jwt-decode';

function parse<T>(token: string) {
  if (!token) {
    return null;
  }

  try {
    return jwtDecode<T>(token);
  } catch (err) {
    return null;
  }
}

export {
  parse,
};
