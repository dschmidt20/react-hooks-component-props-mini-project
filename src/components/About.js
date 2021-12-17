import React from 'react'

export default function About({blogAbout, blogImage}) {
    return (
        <aside>
            <img src={blogImage} alt={'blog logo'}/>
            <p>{blogAbout}</p>
        </aside>
    )
}
