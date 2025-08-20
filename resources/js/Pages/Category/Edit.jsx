import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Edit({ category }) {
    const { data, setData, put, processing, errors } = useForm({
        name: category.name,
        description: category.description,
        
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('category.update', category.id));
    };

    return (
        <AuthenticatedLayout header={<h2>Edit Category</h2>}>
            <Head title="Edit Category" />

          <div className='p-6'>
                <form onSubmit={submit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
                <div>
                    <label>Name</label>
                    <input value={data.name} onChange={e => setData('name', e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200" />
                    <div>{errors.name}</div>
                </div>

                <div>
                    <label>Description</label>
                    <textarea value={data.description} onChange={e => setData('description', e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"/>
                </div>

               

                <button type="submit" className="inline-flex items-center px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 disabled:opacity-50" disabled={processing}>Update</button>
                {/* <Link href={route('products.index')}>Cancel</Link> */}
            </form>
          </div>
        </AuthenticatedLayout>
    );
}
