import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold text-primary-orange">
                    Edit Profile
                </h2>
            }
        >
            <Head title="Edit Profile" />

            <div className="py-12 bg-dark-gray">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    {/* Update Profile Information */}
                    <div className="bg-gray-800 p-6 shadow-lg rounded-lg">
                        <h3 className="text-xl font-bold text-primary-orange mb-4">
                            Update Profile Information
                        </h3>
                        <p className="text-sm text-gray-400 mb-6">
                            Manage your profile information and keep it up to date.
                        </p>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    {/* Update Password */}
                    <div className="bg-gray-800 p-6 shadow-lg rounded-lg">
                        <h3 className="text-xl font-bold text-primary-orange mb-4">
                            Update Password
                        </h3>
                        <p className="text-sm text-gray-400 mb-6">
                            Change your account password to keep it secure.
                        </p>
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    {/* Delete User Account */}
                    <div className="bg-gray-800 p-6 shadow-lg rounded-lg">
                        <h3 className="text-xl font-bold text-red-600 mb-4">
                            Delete Account
                        </h3>
                        <p className="text-sm text-gray-400 mb-6">
                            Once your account is deleted, all resources and data will be permanently removed. Please proceed with caution.
                        </p>
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}