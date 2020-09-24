import {toast} from "react-toastify";

export const handleErrorNotify = () => {
	toast.error('Please enter correct data', {
		position: toast.POSITION.TOP_RIGHT
	});
};