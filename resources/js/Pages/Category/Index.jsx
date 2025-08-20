import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ categories }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure?')) {
            destroy(route('category.destroy', id));
        }
    };

    return (
       <AuthenticatedLayout header={<h2 className="text-2xl font-bold text-gray-800">Category</h2>}>
    <Head title="Products" />

    <div className="p-6">
        <div className="flex justify-end mb-4">
            <Link
                href={route('category.create')}
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
            >
                + Create Category
            </Link>
        </div>

        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <tr key={category.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{category.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{category.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    <div className="flex space-x-2">
                                        <Link
                                            href={route('category.edit', category.id)}
                                            className="text-indigo-600 hover:text-indigo-800"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(category.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                                No Category found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
</AuthenticatedLayout>

    );
}
