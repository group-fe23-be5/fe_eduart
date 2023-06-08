// Aksi untuk mengirim data pendaftaran ke server
export const registerUser = (userData) => {
    return (dispatch) => {
      // Panggil API untuk nyimpen data pengguna ke server (misalnya pake fetch)
      fetch('https://647f0d1ec246f166da900039.mockapi.io/users/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          // kalau data berhasil disimpan, dispatch aksi berhasil
          dispatch(registerSuccess(data));
        })
        .catch((error) => {
          // kalau terjadi kesalahan, dispatch aksi gagal
          dispatch(registerFailure(error));
        });
    };
  };
  
  // Aksi untuk menangani keberhasilan pendaftaran
  export const registerSuccess = (data) => ({
    type: 'REGISTER_SUCCESS',
    payload: data,
  });
  
  // Aksi untuk menangani kegagalan pendaftaran
  export const registerFailure = (error) => ({
    type: 'REGISTER_FAILURE',
    payload: error,
  });
  