import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                                <h1>Radio Gameli</h1>
                    </div>
                    <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <a>News</a>
                        <a>About</a>
                        <a>Info</a>
                        <a>Contact</a>
                    </div>
                </div>
                </div>
            </div>
        </nav>


        // <header class="flex flex-row justify-between space-x-4 bg-white py-6 px-6">
        //      <Link href='#'>
        //             <a>Radio Gameli</a>
        //     </Link>
        //     <nav class="flex flex-row space-x-6 font-semibold">
        //         <Link href='/news'>
        //             <a class="text-indigo-600 hover:underline">News</a>
        //         </Link>
        //         <Link href='/about'>
        //             <a class="text-indigo-600 hover:underline">About</a>
        //         </Link>
        //         <Link href='/contact'>
        //             <a class="text-indigo-600 hover:underline">Contact</a>
        //         </Link>
        //     </nav>
        // </header>
    )
}