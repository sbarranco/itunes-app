import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ErrorNotify() {
    toast("Error!! please try again later", {
        position: "top-center",
        type: "error"
    });
}

export function SuccessNotify() {
    toast("You have bookmarked the album", {
        position: "top-center",
        type: "success"
    });
}