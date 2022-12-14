


const DaynamicCard = ({ user, data }) => {

   
    const { customer, email, message, rating, serviceName, _id, service, img, time } = data;

    return (
        <>
            <br></br>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{time}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {serviceName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{email}</span>
                </td>
                <td>Rating : {rating}.2</td>

            </tr>

        </>
    );
};

export default DaynamicCard;