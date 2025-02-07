import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-bold text-primary-orange">
                    Update Password
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        htmlFor="current_password"
                        value="Current Password"
                        className="text-gray-300"
                    />
                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                        className="mt-1 block w-full bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary-orange"
                        autoComplete="current-password"
                        placeholder="Enter current password"
                    />
                    <InputError
                        message={errors.current_password}
                        className="mt-2 text-red-500"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password"
                        value="New Password"
                        className="text-gray-300"
                    />
                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="mt-1 block w-full bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary-orange"
                        autoComplete="new-password"
                        placeholder="Enter new password"
                    />
                    <InputError
                        message={errors.password}
                        className="mt-2 text-red-500"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                        className="text-gray-300"
                    />
                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type="password"
                        className="mt-1 block w-full bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary-orange"
                        autoComplete="new-password"
                        placeholder="Confirm new password"
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2 text-red-500"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton
                        disabled={processing}
                        className="px-4 py-2 bg-primary-orange text-white rounded-lg hover:bg-orange-600 transition"
                    >
                        Save
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-400">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}