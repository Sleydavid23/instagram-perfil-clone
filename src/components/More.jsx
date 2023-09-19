import React from 'react'
import '../scss/_More.scss';

const More = () => {
    return (
        <>
            <div className="iconMore">
                <svg aria-label="Icono &quot;más&quot;" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="44" role="img" viewBox="0 0 24 24" width="44"><title>Icono "más"</title><path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path></svg>
            </div>
            <span className='nueva'>Nueva</span>
        </>
    )
}

export default More