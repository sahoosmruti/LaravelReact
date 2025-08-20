<?php

// app/Http/Controllers/ProductController.php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::latest()->get();
        return Inertia::render('Products/Index', ['products' => $products]);
    }

    public function create()
    {
        $categories = Category::latest()->get();
        return Inertia::render('Products/Create', ['categories' => $categories]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'categoryname' => 'required',
            'description' => 'nullable',
            'price' => 'required|numeric',
        ]);

        Product::create($data);

        return redirect()->route('products.index');
    }

    public function edit(Product $product)
    {
        $categories = Category::latest()->get();
        return Inertia::render('Products/Edit', ['product' => $product , 'categories'=>$categories]);
    }

    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            'price' => 'required|numeric',
            'categoryname' => 'required'
        ]);

        $product->update($data);

        return redirect()->route('products.index');
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('products.index');
    }
}
