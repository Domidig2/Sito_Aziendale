import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TestMindset from '@/Components/Test/TestMindset';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    const [showTest, setShowTest] = useState(false);

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="flex min-h-screen bg-dark-gray text-white">
                {/* Menu laterale */}
                <aside className="w-64 bg-dark-gray text-white border-r border-gray-700">
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-primary-orange">Urban Lab</h1>
                        <p className="text-sm text-gray-400 mt-2">Benvenuto nella tua area riservata</p>
                    </div>
                    <nav className="p-4 space-y-4">
                        <a
                            href="#"
                            className="block px-4 py-2 rounded-lg bg-primary-orange hover:bg-orange-600"
                        >
                            Area User
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
                        >
                            Area Mind SET
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
                        >
                            Area Tick ET
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
                        >
                            Area Find UP
                        </a>
                    </nav>
                </aside>

                {/* Contenuto principale */}
                <main className="flex-1 p-6">
                    <button
                        onClick={() => setShowTest(!showTest)}
                        className="px-6 py-3 bg-primary-orange text-white font-bold rounded-lg hover:bg-orange-600 transition"
                    >
                        {showTest ? 'Nascondi il Test Mindset' : 'Compila il Test Mindset'}
                    </button>

                    {/* Test Mindset visibile solo se `showTest` è true */}
                    {showTest && (
                        <div className="mt-6">
                            <TestMindset />
                        </div>
                    )}
                </main>
            </div>
        </AuthenticatedLayout>
    );
}