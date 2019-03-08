const SecurityApi = () => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NTIwMDY5OTcsImV4cCI6MTU4MzU0Mjk5NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInVzZXJOYW1lIjoibWF0dCJ9.L_gzR5r0bPr-RyXVGsXwcHjn6wxpByfjYUa0mLJT3fI';
  const authenticate = () => new Promise((resolve) => {
    resolve({ data: { token } });
  });

  return {
    authenticate,
  };
};

export default SecurityApi;
