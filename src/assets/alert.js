import Swal from "sweetalert2";

export const alertSuccess = async (message) => {
  await Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    confirmButtonText: "OK",
  });
}

export const alertError = async (message) => {
  await Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
    confirmButtonText: "OK",
  });
}
