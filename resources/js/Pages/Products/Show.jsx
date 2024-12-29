import { Link } from '@inertiajs/react';

export default function Show({ product }) {
    return (
        <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="max-w-lg w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                {/* ภาพสินค้า */}
                <div className="relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
                        <h1 className="text-2xl font-bold">{product.name}</h1>
                        <p className="text-gray-200">{product.description}</p> //รายละเอียด
                    </div>
                </div>

                {/* ข้อมูลสินค้า */}
                <div className="p-6">
                    <p className="text-gray-700 text-lg mb-4">
                        <span className="font-semibold">รายละเอียด: </span>
                        {product.description}
                    </p>
                    <p className="text-green-600 text-xl font-bold mb-6">
                        ราคา: {product.price.toLocaleString('th-TH')} ฿
                    </p>

                    {/* ปุ่ม */}
                    <div className="flex space-x-4">
                        <Link
                            href="/products"
                            className="flex-1 text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all"
                        >
                            ยกเลิก
                        </Link>
                        <button

                            className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all"
                        >
                            เพิ่มสินค้า
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

