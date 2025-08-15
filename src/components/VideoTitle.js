const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-64 px-20 absolute w-screen aspect-video bg-gradient-to-r from-black via-transparent to-transparent text-gray-50">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>

            <div>
                <button className="bg-orange-700 text-white p-4 px-12 text-xl bg-opacity-55 rounded-lg mx-2">
                    ▶️ Play
                </button>
                <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-55 rounded-lg mx-2">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
