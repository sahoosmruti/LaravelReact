import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Head } from '@inertiajs/react';

export default function AuthenticatedLayout({ header, children }) {
    const { auth } = usePage().props;
    const user = auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex bg-gray-100">
           
            <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:inset-0`}>
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <Link href="/">
                        <ApplicationLogo className="h-8 w-auto" />
                    </Link>
                    <button
                        className="lg:hidden text-gray-500"
                        onClick={() => setSidebarOpen(false)}
                    >
                        ✕
                    </button>
                </div>
                <nav className="px-4 py-6 space-y-4">
                   {user.role === 'admin' && (
                            <div>
                                <div className='pb-3'>
                                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                        Dashboard
                                    </NavLink>
                                </div>
                                <div className='pb-3'>
                                    <NavLink href={route('category.index')} active={route().current('category.index')}>
                                        Category
                                    </NavLink>
                                </div>
                                <div className='pb-3'>
                                    <NavLink href={route('products.index')} active={route().current('products.index')}>
                                        Products
                                    </NavLink>
                                </div>
                                 <div className='pb-3'>
                                    <NavLink href={route('profile.edit')} active={route().current('profile.edit')}>
                                        Profile
                                    </NavLink>
                                </div>
                            </div>
                        )}
                        {user.role === 'user' && (
                            <div>
                                <div className='pb-3'>
                                    <NavLink href={route('userdashboard')} active={route().current('userdashboard')}>
                                        Dashboard
                                    </NavLink>
                                </div>
                               
                                 <div className='pb-3'>
                                    <NavLink href={route('profile.edit')} active={route().current('profile.edit')}>
                                        Profile
                                    </NavLink>
                                </div>
                            </div>
                        )}

                   
                  
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col w-full">
                {/* Header */}
                <div className="flex items-center justify-between bg-white px-6 py-4 border-b shadow-sm">
                    <button
                        className="lg:hidden text-gray-600"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        ☰
                    </button>
                    <div className="text-lg font-semibold text-gray-800">
                        {header}
                    </div>
                    {/* User Dropdown */}
                    <div className="relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border hover:text-gray-900 focus:outline-none">
                                    {user.name}
                                    <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>

                {/* Page Content */}
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
