import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="bg-dark-gray flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/" className="hover:opacity-90 transition">
                    <ApplicationLogo className="h-20 w-20 fill-current text-primary-orange" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-gray-800 px-6 py-4 shadow-lg sm:max-w-md sm:rounded-lg border border-gray-700">
                {children}
            </div>
        </div>
    );
}