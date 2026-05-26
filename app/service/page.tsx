import ProductCard from "../../components/ProductCard";

const products = [
    {
        id: 1,
        title: "Wired Headset",
        description: "Same-day wired headset repairs and jack replacements — quality parts and a 90-day warranty.",
        price: "_blank",
        img: "/globe.svg",
    },
    {
        id: 2,
        title: "Wireless Headset",
        description: "Bluetooth, battery, and mic repairs with free diagnostics and fast turnaround — trusted technicians.",
        price: "_blank",
        img: "/globe.svg",
    },
    {
        id: 3,
        title: "TWS / Buds",
        description: "Precision earbud repairs, battery swaps, and case fixes with sound tuning and post-repair testing.",
        price: "_blank",
        img: "/globe.svg",
    },
    {
        id: 4,
        title: "Headphone",
        description: "Over-ear repairs: driver, cable, and cushion replacements — restored comfort and studio-quality sound.",
        price: "_blank",
        img: "/globe.svg",
    },
    {
        id: 5,
        title: "Mobile Service",
        description: "Comprehensive mobile repairs: screen, battery, charging, and water damage — free diagnostics and clear pricing.",
        price: "_blank",
        img: "/globe.svg",
    },
    {
        id: 6,
        title: "Laptop/Desktop Service",
        description: "Full PC service: safe diagnostics, hardware repairs, upgrades, and data-preserving fixes with testing and warranty.",
        price: "_blank",
        img: "/globe.svg",
    },
    {
        id: 7,
        title: "Website Design",
        description: "Custom responsive website design to showcase your brand.",
        price: "$1,200",
        imgSrc: "/globe.svg",
    },
    {
        id: 8,
        title: "SEO Optimization",
        description: "Improve search rankings and increase organic traffic.",
        price: "$800",
        imgSrc: "/globe.svg",
    },
    {
        id: 9,
        title: "Consulting",
        description: "Strategic consulting to grow your online business.",
        price: "$150/hr",
        imgSrc: "/globe.svg",
    },
];

export default function service() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-100 font-sans">
            <main className="rounded-lg flex flex-col flex-1 w-full max-w-6xl items-center justify-around text-center py-10 px-5 bg-white gap-evenly mt-20 mb-2">
                <h1 className="text-3xl font-bold text-center">Service Page</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 w-full max-w-6xl px-4">
                    {products.map((p) => (
                        <ProductCard
                            key={p.id}
                            title={p.title}
                            description={p.description}
                            price={p.price}
                            imgSrc={p.img}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
