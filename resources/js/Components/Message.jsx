import React, { useEffect } from 'react';

const AlertMessage = ({ message }) => {
    useEffect(() => {
        if (message) {
            alert(message);
        }
    }, [message]);

    return null; // Non renderizza nulla, dato che l'alert viene mostrato tramite il metodo `alert`
};

export default AlertMessage;







// import React from 'react';

// const AlertMessage = ({ message }) => {
//     if (!message) return null;

//     return (
//         <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative my-4">
//             <span className="block sm:inline">{message}</span>
//         </div>
//     );
// };

// export default AlertMessage;