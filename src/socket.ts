import { io } from 'socket.io-client';

export const getSocket = (token: string) => {
  if (token) {
    return io('http://localhost:4000', {
      auth: {
        token: token
      }
    });
  }
  return io('http://localhost:4000');
};
