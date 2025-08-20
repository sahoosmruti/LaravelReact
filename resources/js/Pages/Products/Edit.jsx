import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Edit({ product,categories }) {
    const { data, setData, put, processing, errors } = useForm({
        name: product.name,
        description: product.description,
        price: product.price,
        categoryname:product.categoryname
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('products.update', product.id));
    };

    return (
        <AuthenticatedLayout header={<h2>Edit Product</h2>}>
            <Head title="Edit Product" />

          <div className='p-6'>
                <form onSubmit={submit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
                <div>
                    <label>Name</label>
                    <input value={data.name} onChange={e => setData('name', e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200" />
                    <div>{errors.name}</div>
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Category</label>
                <select
                    value={data.categoryname}
                    onChange={e => setData('categoryname', e.target.value)}
                    className="w-full border  rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
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
                    <label>Description</label>
                    <textarea value={data.description} onChange={e => setData('description', e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"/>
                </div>

                <div>
                    <label>Price</label>
                    <input type="number" value={data.price} onChange={e => setData('price', e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200" />
                    <div>{errors.price}</div>
                </div>

                <button type="submit" className="inline-flex items-center px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 disabled:opacity-50" disabled={processing}>Update</button>
                {/* <Link href={route('products.index')}>Cancel</Link> */}
            </form>
          </div>
        </AuthenticatedLayout>
    );
}
