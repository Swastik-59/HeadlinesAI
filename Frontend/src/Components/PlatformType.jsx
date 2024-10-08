import React from 'react'

function PlatformType({platform, setPlatform}) {
    return (
        <div className="input-group">
            <label>Select platform:</label>
            <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
            >
                {["Youtube", "Twitter", "Instagram", "Medium", "Reddit", "Blog"].map((type) => (
                    <option value={type} key={type}>{type}</option>
                ))}
            </select>
        </div>
    )
}

export default PlatformType