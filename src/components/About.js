import React from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState(
    //     {
    //         color: 'black',
    //         backgroundColor: 'white'
    //     }
    // )
    let myStyle = {
        color:props.mode === 'dark'?'white':'black',
        backgroundColor:props.mode === 'dark'?'#343a40':'white'
    }

    return (
        <div className='container p-4' style={myStyle}>
            <h2 className='text-center mb-3'>Welcome To TextFun</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>Purpose Of TextFun</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextFun is mode to save your time.it suits to count characters in facbook,blogs,excel documents, pdf documents,essays...etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b>Browser Compatible</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextFun Works very smoothly for all the browsers such as Chrome,Firefox,Internet Exploror, Safari,Opera Mini.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>Free To Use</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextFun is absolutely free to use.It Provides every information about your text.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
