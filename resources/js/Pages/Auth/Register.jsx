import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} className="space-y-6">
                <div>
                    <InputLabel
                        htmlFor="name"
                        value="Name"
                        className="text-gray-300"
                    />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary-orange"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        placeholder="Enter your name"
                    />

                    <InputError
                        message={errors.name}
                        className="mt-2 text-red-500"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="email"
                        value="Email"
                        className="text-gray-300"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary-orange"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        placeholder="Enter your email"
                    />

                    <InputError
                        message={errors.email}
                        className="mt-2 text-red-500"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password"
                        value="Password"
                        className="text-gray-300"
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary-orange"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        placeholder="Enter your password"
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
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary-orange"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                        placeholder="Confirm your password"
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2 text-red-500"
                    />
                </div>

                <div className="flex items-center justify-end space-x-4">
                    <Link
                        href={route('login')}
                        className="text-sm text-primary-orange underline hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton
                        className="px-4 py-2 bg-primary-orange text-white rounded-lg hover:bg-orange-600 transition"
                        disabled={processing}
                    >
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}