


export const Skeleton = () => {
    return (
        <div className="absolute top-0 h-full w-full space-x-2 lg:space-x-3 flex items-center justify-center px-6 2xl:px-32">
            <div className="border-x border-border-grey h-full w-1/4  "></div>
            <div className="border-x border-border-grey h-full w-1/4 "></div>
            <div className="border-x border-border-grey h-full w-1/4  "></div>
            <div className="border-x border-border-grey h-full w-1/4 "></div>
        </div>
    )
}