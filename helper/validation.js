export default function validate(data, type) {
    let listError = {};

    if(type === "register" || type === "login"){
        if (data.username.length < 5 || data.username.length > 10) listError.username = { message: "username harus terdiri dari 5-10 karakter alfanumerik", isError: true };
        else listError.username = { message: "", isError: false };

        if (!/\d/.test(data.password) || !/[a-zA-Z]/.test(data.password)) listError.password = { message: "kata sandi harus mengandung kombinasi angka dan huruf", isError: true };
        else listError.password = { message: "", isError: false };

        if(type === "register") {
            if (data.phone.charAt(0) + data.phone.charAt(1) !== "08" || data.phone.length > 13) listError.phone = { message: "nomor telepon harus diawali dengan 08 dan maksimal 13 karakter", isError: true };
            else listError.phone = { message: "", isError: false };

            if (listError.username.isError || listError.phone.isError || listError.password.isError) return listError;
            else return false;
        } else if(type === "login") {
            if (listError.username.isError || listError.password.isError) return listError;
            else return false;
        }
    }
}