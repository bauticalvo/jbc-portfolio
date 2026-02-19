


export const Skeleton = () => {
    return (
        <div className="absolute top-0 h-full w-full   ">
            <section className="flex w-full h-full space-x-2 lg:space-x-3 px-6 2xl:px-32">
                <div className="border-x border-border-grey h-full w-1/4  "></div>
                <div className="border-x border-border-grey h-full w-1/4 "></div>
                <div className="border-x border-border-grey h-full w-1/4  "></div>
                <div className="border-x border-border-grey h-full w-1/4 "></div>
            </section>
            <section className="flex absolute top-0 w-full h-full space-y-2 lg:space-y-3 px-6 2xl:px-32">
                <div className="border-t border-dashed border-border-grey h-1/2 w-1/4 absolute top-25 right-20 "></div>
                <div className="border-b border-dashed border-border-grey h-1/2 w-1/4 absolute top-50 left-20 "></div>
            </section>
        </div>
    )
}