'use client';

import 'react-toastify/dist/ReactToastify.css';
import { Flip, ToastContainer } from 'react-toastify/unstyled';

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ToastContainer
        toastClassName={'rounded-lg min-w-96 text-center'}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
    </>
  );
}