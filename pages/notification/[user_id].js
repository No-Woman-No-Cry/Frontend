import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { GetNotification } from '@/services/jobSeeker/notifications';
import { Fragment } from 'react';
import Notification from '@/Components/screens/notifications/notification';

export default function NotificationId() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { user_id } = router.query;

  useEffect(() => {
    if (user_id) {
      const getNotification = async () => {
        const Notification = await GetNotification(user_id);
        console.log(Notification);
        setData(Notification.data.data);
      };
      getNotification(user_id);
    }
  }, [user_id]);
  if (!user_id) {
    return;
  }
  if (data.length === 0) {
    return;
  }
  return (
    <Fragment>
      <Notification props={data} />
    </Fragment>
  );
}
