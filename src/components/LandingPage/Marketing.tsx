

export const Marketing = () => {
    return (
        <div>
            <div className='max-w-[1400px] mx-auto my-auto py-14'>
                <div className='flex flex-col md:flex-row p-4'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-4xl font-semibold w-3/4'>Driving Results with Smart Marketing</h1>
                        <p className='font-light text-black/40'>Here’s what our users have achieved with ADELO</p>
                    </div>
                    <div className='flex-1 flex-col gap-5 space-y-6'>
                        <div className='py-4 flex items-center justify-between border-b-2 border-gray-200'>
                            <h1 className='text-4xl md:text-5xl font-bold'>150,000+</h1>
                            <p className='text-end text-black/40'>Campaing <br /> Created</p>
                        </div>
                        <div className='py-4 flex items-center justify-between border-b-2 border-gray-200'>
                            <h1 className='text-4xl md:text-5xl font-bold'>1.2 Millions+</h1>
                            <p className='text-end text-black/40'>Ai Propmts <br /> run</p>
                            <p className='text-4xl md:text-5xl font-bold'>92%</p>
                            <p className='text-end text-black/40'>User Satisfaction</p>
                        </div>
                        <div className='py-4 flex items-center justify-between border-b-2 border-gray-200'>
                            <h1 className='text-4xl md:text-5xl font-bold'>500,000+</h1>
                            <p className='text-end text-black/40'>Feedbacks <br /> Loops</p>
                            <p className='text-4xl md:text-5xl font-bold'>3x</p>
                            <p className='text-end text-black/40'>Average ROI <br /> BOOST</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center py-10'>
                    <h1 className='text-3xl'>Companies currently using AI for marketing</h1>
                </div>
            </div>
        </div>
    )
}
