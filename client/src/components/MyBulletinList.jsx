import React, { useEffect } from 'react'
import { useLazyGetBulletinByUserQuery } from '../redux/bulletin';

const MyBulletinList = () => {

    const [trigger, { data, isLoading, isError }] = useLazyGetBulletinByUserQuery();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("auth"));

        console.log('user', user);
        if (user) {
            trigger(user?.user.id);
        }
    }, [trigger]);

  return (
    <div className="container mx-auto p-4">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading bulletins</p>}
      {data && (
        <ul className="list-disc pl-5">
          {data?.data?.map(bulletin => (
            <li className="mb-2" key={bulletin.id}>{bulletin.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MyBulletinList
