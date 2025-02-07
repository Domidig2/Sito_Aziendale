import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-orange-600 text-white focus:border-orange-600'
                    : 'border-transparent text-gray-300 hover:border-orange-500 hover:text-orange-500 focus:border-orange-500 focus:text-orange-500') +
                ' ' +
                className
            }
        >
            {children}
        </Link>
    );
}
