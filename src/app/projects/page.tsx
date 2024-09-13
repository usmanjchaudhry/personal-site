
import BigLinks from '@/components/BigLinks';

export default function Home() {
    return (
        <main>
            <div className="mb-8 text-3xl font-bold">
                check out my projects
            </div>



            <a href="/boxingApp" className='flex flex-col space-y-1 mb-4'>
                <div className='w-full flex flex-col'>
                    <p className='text-neutral-900 text-lg tracking-tight'>
                        Boxing Timer App
                    </p>
                    <p className='text-neutral-600 tracking-tight'>
                        November 2023
                    </p>
                </div>
            </a>


        </main>
    )
}
