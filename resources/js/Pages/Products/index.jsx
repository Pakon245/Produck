import { useState } from 'react';
import { Link } from '@inertiajs/react';


export default function Index({ products }) {
    const [searchTerm, setSearchTerm] = useState(''); // จัดเก็บข้อความที่ค้นหา

    // ค้นหาสินค้าให้ตรงกับคำค้นหา
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            {/* หัวข้อ */}
            <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-20 py-4">
                <h1 className="text-3xl font-extrabold text-gray-800">
                    I HAVE PRODUCT
                </h1>

                {/* แถบค้นหา */}
                <div className="flex items-center space-x-6">
                    <div className="flex">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // อัปเดตค่าที่จะค้นหา
                            placeholder="ค้นหาสินค้า..."
                            className="w-full max-w-lg px-10 py-2 border border-gray-400 rounded-lg shadow-sm "
                        />
                    </div>
                </div>
            </header>

            {/* รายการสินค้า */}
            <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => {
                        // ใช้ Intl.NumberFormat ทำให้ในราคามี (.)ทศนิยม และ (,)ในหลักพัน
                        const formattedPrice = new Intl.NumberFormat('th-TH', {
                            style: 'decimal',
                            minimumFractionDigits: 2,
                        }).format(product.price);

                        return (
                            <div
                                key={product.id}
                                className="bg-white border border-gray-200  shadow-lg hover:shadow-2xl "
                            >
                                <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="max-w-full max-h-full object-contain "
                                    />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-gray-600 mb-2">
                                        {product.name}
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-4">
                                        {formattedPrice} ฿
                                    </p>
                                    <Link
                                        href={`/products/${product.id}`} //กดแล้วไปแต่ละ id สินค้า
                                        className="inline-block text-white bg-green-600 hover:bg-green-700 border-2 border-green-600 p-3 rounded-lg w-full text-center shadow-md hover:shadow-lg"
                                    >
                                        สั่งซื้อ
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-600 col-span-4">
                        ไม่พบสินค้าที่ตรงกับคำค้นหา
                    </p>
                )}
            </div>
        </div>
    );
}
