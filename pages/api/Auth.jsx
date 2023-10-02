import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();

    const token = Cookies.get('token');
    // console.log('token:',token);
    if (!token) {
      if (typeof window !== 'undefined') {
        router.push('/');
      }
      return null;
    }

    return <WrappedComponent {...props} />;
  };
  return AuthComponent;
};
export default withAuth;

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useSession } from 'next-auth/client';

// const withAuth = (WrappedComponent) => {
//   const WrapperComponent = (props) => {
//     const [session, loading] = useSession();
//     const router = useRouter();

//     useEffect(() => {
//       if (!loading && !session) {
//         router.replace('/login');
//       }
//     }, [loading, session, router]);

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     return <WrappedComponent {...props} />;
//   };

//   return WrapperComponent;
// };

// export default withAuth;
