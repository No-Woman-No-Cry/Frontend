import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { GetNotification } from '@/services/employer/notifications';
import { Fragment } from 'react';
import Notification from '@/Components/screens/notifications/notification';

export default function NotificationId() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { company_id } = router.query;

  useEffect(() => {
    if (company_id) {
      const getNotification = async () => {
        const Notification = await GetNotification(company_id);
        setData(Notification.data.data);
      };
      getNotification(company_id);
    }
  }, [company_id]);
  if (!company_id) {
    return;
  }
  if (data.length === 0) {
    return;
  }
  console.log(data);
  return (
    <Fragment>
      <Notification props={data} />
    </Fragment>
  );
}
