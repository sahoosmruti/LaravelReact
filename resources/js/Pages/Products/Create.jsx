import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Create({categories}) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        price: '',
        categoryname:''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('products.store'));
    };

    return (
        <AuthenticatedLayout header={<h2 className="text-2xl font-bold text-gray-800">Create Product</h2>}>
    <Head title="Create Product" />

    <div className="p-6">
        <form onSubmit={submit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="Enter product name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
           <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Category</label>
                <select
                    value={data.categoryname}
                    onChange={e => setData('categoryname', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {errors.categoryname && <p className="mt-1 text-sm text-red-600">{errors.categoryname}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="Enter product description"
                    rows="4"
                ></textarea>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input
                    type="number"
                    value={data.price}
                    onChange={e => setData('price', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="Enter product price"
                />
                {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    disabled={processing}
                    className="inline-flex items-center px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 disabled:opacity-50"
                >
                    Save
                </button>

                <Link
                    href={route('products.index')}
                    className="inline-block text-sm text-gray-600 hover:text-indigo-600"
                >
                    Cancel
                </Link>
            </div>
        </form>
    </div>
</AuthenticatedLayout>

    );
}
