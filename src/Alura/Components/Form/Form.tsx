import React from "react";
import Buttonn from "../Botao/Botao";

function Form () {
    return (
        <form>
            <div>
                <label htmlFor="">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
                    <Buttonn />
            </div>  
        </form>
    )
}

export default Form