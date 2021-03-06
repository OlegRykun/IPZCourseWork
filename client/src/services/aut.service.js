import callWebApi from './../helpers/webApi.helper';

export const login = async (request) => {
  const response = await callWebApi({
    endpoint: '/api/auth/login',
    type: 'POST',
    request,
  });
  return response.json();
}

export const getCurrentUser = async () => {
  try {
    const response = await callWebApi({
      endpoint: '/api/auth/user',
      type: 'GET'
    });
    return response.json();
  } catch(err) {
    return null;
  }
}