
type ModalBodyProps = {
    children: React.ReactNode,
    width?: string,
}

export default function ModalBody({ children,width}:ModalBodyProps ): JSX.Element {

    return (
        <div className={`z-50 relative ${width?"w-[80%] max-w-2xl" : "w-[80vw]"} h-[95vh] p-4 md:h-auto top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4`}>
            <div className="relative z-50 bg-white rounded-lg shadow dark:bg-gray-700 h-full w-full">
                {children}
            </div>
        </div>
    )
}