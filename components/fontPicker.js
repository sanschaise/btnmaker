import React, { useState } from 'react'

function fontPicker(props) {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.setFont(name);
        // alert(`Submitting Name ${name}`)
    }


    return <div className="fontPicker">
        <form onSubmit={handleSubmit}>
            <label>
                Font Name
        <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
}

export default fontPicker