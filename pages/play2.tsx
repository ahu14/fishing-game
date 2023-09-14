import Link from "next/link"

export default function Home(){
    return (
        <div className="w-100 h-screen flex 
        items-center justify-center flex-col bg-[#7bb5ff]">
            <h2 className="text-3xl mb-3">Under development...</h2>
            <Link href="/" className="text-[#356fb9] 
            font-bold text-2xl hover:underline">Go back</Link>
        </div>
    )
}