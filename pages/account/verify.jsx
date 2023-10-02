import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsChevronDown, BsFillInfoCircleFill } from 'react-icons/bs';
import axios from 'axios';
import { API_URL } from 'config/index';

const Verify = () => {
  const router = useRouter();
  const [vcode, setVcode] = useState('');
  const [scode, setScode] = useState('');
  const VerifyLogin = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('vcode', vcode);
      formData.append('scode', scode);

      const response = await axios.post(
        `${API_URL}/api/account/verify-login/`,
        formData,
        {
          withCredentials: true,
        },
      );

      const responseData = await response.data;

      // console.log(responseData);
      if (response.status === 200) {
        if (responseData.message == 'verified') {
          alert('verification successful!');
          // window.location.href = '/'; // Replace with the dashboard URL
          router.push('/');
        } else {
          alert(responseData.message); // Access the 'message' property from the JSON response
          // alert(response.message);
        }
      } else {
        setLoginStatus('failure');
        // alert('failed');
        // setErrorMessage(responseData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='w-screen h-screen bg-one flex justify-center items-center'>
        <form
          className='w-[500px] h-max rounded shadow-lg shadow-one bg-two p-5 flex flex-col gap-4'
          onSubmit={VerifyLogin}
        >
          <p className='text-sm txt-three'>
            A varification code was sent to your email.
          </p>
          <div>
            <label
              for='code-1'
              class='block text-sm font-medium leading-6 txt-one'
            >
              Verification Code
            </label>
            <div class='mt-2'>
              <input
                type='text'
                name='code-1'
                id='code-1'
                value={vcode}
                onChange={(e) => setVcode(e.target.value)}
                class='block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              for='code-1'
              class='block text-sm font-medium leading-6 txt-one'
            >
              Security Code
            </label>
            <div class='mt-2'>
              <input
                type='text'
                name='code-1'
                id='code-1'
                value={scode}
                onChange={(e) => setScode(e.target.value)}
                class='block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='w-full mt-2 flex justify-end'>
            <button className='text-white bg-indigo-500 px-5 py-2 rounded'>
              Verify
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Verify;
