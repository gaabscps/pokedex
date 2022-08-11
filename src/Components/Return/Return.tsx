import React from "react"
import { Link } from "react-router-dom"
import '../Return/return.css'

function Return () {


    return (
            <Link className='voltar' to="/"><p className="voltar__text">Back</p></Link>

    )
}

export default Return