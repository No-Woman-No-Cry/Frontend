import React, { Fragment, useState } from 'react';
import Register from '@/Components/screens/auth/Registration';

const RegistrationPage = () => {
  //   useEffect(() => {
  //     saveLocal();
  //   });

  //   const saveLocal = () => {
  //     window.localStorage.setItem(
  //       'user',
  //       JSON.stringify({
  //         user: {
  //           data: 'admin',
  //         },
  //       })
  //     );
  //   };

  const [activeComponent, setActiveComponent] = useState('login');

  return (
    <Fragment>
      <Register />
    </Fragment>
  );
};

export default RegistrationPage;
