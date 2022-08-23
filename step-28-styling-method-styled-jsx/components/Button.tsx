import { NextComponentType, NextPageContext } from "next";

const Button : NextComponentType<NextPageContext, void, { children : JSX.Element }> = (props) => {
    return (
        <>
            <button className="button">{props.children}</button>
            <style jsx>{`
                .button {
                    padding: 10px 30px;
                    background-color: tomato;
                    color: white;
                    border-radius: 5px;                    
                }
            `}</style>
        </>
    );
}

export default Button;