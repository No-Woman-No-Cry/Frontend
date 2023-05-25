import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { GetNotification } from '@/services/jobSeeker/notifications';
import { Fragment } from 'react';
import Notification from '@/Components/screens/notifications/notification';

export default function NotificationId() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { profile_id } = router.query;

  useEffect(() => {
    if (profile_id) {
      const getNotification = async () => {
        const Notification = await GetNotification(profile_id);
        setData(Notification.data.data);
      };
      getNotification(profile_id);
    }
  }, [profile_id]);
  if (!profile_id) {
    return;
  }
  if (data.length == 0) {
    return;
  }
  console.log(data, '>>');
  return (
    <Fragment>
      <Notification props={data} />
    </Fragment>
  );
}
