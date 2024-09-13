import React from 'react';

function BigLinks() {
    const channels = [
        { name: 'Github', subscribers: 'usmanjchaudhry', logo: '/github-mark.png', url: 'https://github.com/usmanjchaudhry' },
        { name: 'LinkedIn', subscribers: 'usmanjavidchaudhry', logo: '/linkedinRound.png', url: 'https://www.linkedin.com/in/usmanjavidchaudhry/' },
    ];
    return (
        <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
            {channels.map((channel, index) => (
                <a href={channel.url} key={index} className="w-full">
                    <div className="flex items-center space-x-3 bg-white shadow rounded-lg p-4 w-full with-transition-colors hover:bg-gray-100 transition-colors duration-3000">
                        <img src={channel.logo} alt={`${channel.name} logo`} className="h-12 w-12 rounded-full" />
                        <div className="flex-grow">
                            <div className="text-sm font-semibold">{channel.name}</div>
                            <div className="text-sm">{channel.subscribers}</div>
                        </div>
                        <div className="ml-auto">
                            <span className="stronger-shadow">➔</span>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default BigLinks;
