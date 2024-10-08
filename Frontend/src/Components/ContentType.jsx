import React from 'react'

function ContentType({contentType, setContentType}) {
    return (
        <div className="input-group">
            <label>What do you want to generate?</label>
            <div className="radio-group">
                {['Video Ideas', 'Titles', 'Descriptions', 'Hashtags', 'CTAs'].map((type) => (
                    <div key={type} className="radioAndlabel">
                        <input
                            type="radio"
                            id={type}
                            name="contentType"
                            value={type}
                            checked={contentType === type}
                            onChange={(e) => setContentType(e.target.value)}
                        />
                        <label htmlFor={type}>{type}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContentType