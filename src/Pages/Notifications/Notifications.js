import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';

const Notifications = () => {


    const { user } = useContext(AuthContext)
    const email = user.email;

    const { data: notifications = [], isFetching, refetch } = useQuery({
        queryKey: ['notifications', email],
        queryFn: async () => {
            const res = await fetch(`https://video-stream-server.vercel.app/notifications/${email}`);
            const data = await res.json();
            return data;
        }
    });
    console.log(notifications)
    if (isFetching) {
        return <Loading></Loading>
    }
    return (
        <div className='max-w-7xl mx-auto my-8'>
            You have {notifications.length} notifications

            {notifications.map(n =>
                <div key={n._id} className='max-w-7xl mx-auto border-2 border-blue-200 px-4 py-2 my-2 rounded-lg bg-gradient-to-tr from-cyan-100 via-blue-100 to-purple-100 pb-3'>
                    <div>
                        <p className='text-lg font-semibold'>{n.message}</p>
                    </div>
                </div>)}
        </div>
    );
};

export default Notifications;