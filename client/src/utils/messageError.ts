import { toast } from "react-toastify";

const handleErrorMessage = (error: any) => {
    if (error) {
        toast.error(error.message)
    } else {
        toast.error("Unable to connect to server");
    }
};

export default handleErrorMessage;