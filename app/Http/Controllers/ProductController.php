<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{

    private $products = [
        ['id' => 1, 'name' => 'RX 6500 XT',
            'description' => 'AMD',
            'price' => 4790,
            'image' => 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/product10425_150.jpg',],
        ['id' => 2, 'name' => 'GTX 1650',
            'description' => 'NVIDIA',
            'price' => 4800,
            'image' => 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/products46189_800.jpg',],
        ['id' => 3, 'name' => 'RX 6500 XT',
            'description' => 'AMD',
            'price' => 4950,
            'image' => 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/product1629_800.jpg',],
        ['id' => 4, 'name' => 'RTX 3050',
            'description' => 'NVIDIA',
            'price' => 5990,
            'image' => 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/products47633_800.jpg',],
        ['id' => 5, 'name' => 'RX 6600',
            'description' => 'AMD',
            'price' => 7490,
            'image' => 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/product1854_800.jpg',],
        ['id' => 6, 'name' => 'RTX 4060',
            'description' => 'NVIDIA',
            'price' => 9990,
            'image' => 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/product26178_800.jpg',],
        ['id' => 7, 'name' => 'ARC B580STEEL LEGEND',
            'description' => 'NVIDIA',
            'price' => 9990,
            'image' => 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/products72229_800.jpg',],
        ['id' => 8, 'name' => 'RTX 4060 TI',
            'description' => 'NVIDIA',
            'price' => 13490,
            'image' => 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/products46261_800.jpg',],
        ['id' => 9, 'name' => 'RTX 4070 SUPER',
            'description' => 'NVIDIA',
            'price' => 23490,
            'image' => 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/product54087_800.jpg',],
        ['id' => 10, 'name' => 'RX 7900 XT',
            'description' => 'AMD',
            'price' => 29990,
            'image' => 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/products60424_800.jpg',],
    ];




    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Products/index', ['products' => $this->products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = collect($this->products)->firstWhere('id',$id);
        if (!$product) {
            abort(404, 'Product not found'); //ถ้ากดแล้ว idไม่มี จะขึ้น404
        }
        return Inertia::render('Products/Show', ['product' => $product]); //ถ้ามีจะไปที่show
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
