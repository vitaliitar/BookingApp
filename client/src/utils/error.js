import { toast } from 'react-toastify';

export const handleErrorNotify = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
