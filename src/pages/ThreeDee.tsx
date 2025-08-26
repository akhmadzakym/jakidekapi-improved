const ThreeDee = () => {
    return (
        <div className="md:ml-10 md:mr-10
                        xs:ml-5 xs:mr-5
                        columns-1 gap-3
                        sm:columns-2 md:columns-3 lg:columns-3
                        [&>img:not(:first-child)]:mt-3">   
            <img className="rounded-2xl" src="/photos/3d/A-fuckin-donut.gif"></img>
            <img className="rounded-2xl" src="/photos/3d/agatetothe-heaven.gif"></img>
            <img className="rounded-2xl" src="/photos/3d/res.gif"></img>
        </div>

    );
}
export default ThreeDee