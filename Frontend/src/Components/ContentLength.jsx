import React from 'react'

function ContentLength({length , setLength}) {
    const lengths = [15,25,50,100,150];
    const labels = ['Shorter','Short', 'Medium', 'Long','Longer'];
    return (
        <div className="input-group">
        <label>Specify the Length:</label>
        <div className="radio-group">
            {labels.map((label,index) => (
                <div key={label} className="radioAndlabel">
                    <input
                        type="radio"
                        id={label}
                        name="Length"
                        value={lengths[index]}
                        checked={length === lengths[index]}
                        onChange={(e) => setLength(Number(e.target.value))}
                    />
                    <label htmlFor={label}>{label}</label>
                </div>
            ))}
        </div>
    </div>
    )
}

export default ContentLength