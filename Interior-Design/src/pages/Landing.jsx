import {Link} from "react-router-dom";

function Landing(){
    return (
        <div className="relative h-screen w-full">
            <div className="absolute inset-0 bg-coer bg-center" style={{backgoundImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D"}}></div>
            <div className="absolute inset-0 bg-black/50"></div> 

            <div className="relstive z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to LifeNice Interiors and Sanitary</h1>
                <p>Premium SPS flooring,marble sheets, vanities, sinks and modern bathroom solution crafted for elegance.</p>
            </div>

        </div>
    )
}