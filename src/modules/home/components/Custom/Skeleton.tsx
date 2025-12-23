


export const Skeleton = () => {
    return (
        <div className="absolute h-screen w-full space-x-4 flex">
            <section className="w-1/2 h-full flex">
                <div className="border-r border-border-grey h-full w-[14vw]"></div>
                <div className="border-r border-border-grey h-full w-[17vw] mr-2"></div>
                <div className="border-x border-border-grey h-full w-[17vw] ml-2"></div>
            </section>
            <section className="w-1/2 h-full flex">
                <div className="border-x border-border-grey h-full w-[17vw] mr-2"></div>
                <div className="border-l border-border-grey h-full w-[17vw] ml-2"></div>
                <div className="border-l border-border-grey h-full w-[14vw]"></div>
            </section>
        </div>
    )
}