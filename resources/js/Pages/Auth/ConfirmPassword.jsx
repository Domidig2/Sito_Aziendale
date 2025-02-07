import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-400">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <form onSubmit={submit} className="mt-6 space-y-6">
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
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="Enter your password"
                    />
                    <InputError message={errors.password} className="mt-2 text-red-500" />
                </div>

                <div className="flex items-center justify-end">
                    <PrimaryButton
                        className="px-4 py-2 bg-primary-orange text-white rounded-lg hover:bg-orange-600 transition"
                        disabled={processing}
                    >
                        Confirm
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}