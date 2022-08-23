import { NextComponentType, NextPageContext } from "next";

const FancyButton : NextComponentType<NextPageContext, void, { children : JSX.Element }> = (props) => {
    return (
        <>
            <button className="button">{props.children}</button>
            <style jsx>{`
                .button {
                    padding: 10px 40px;
                    background: linear-gradient(to bottom, dodgerblue, blue);
                    color: white;
                    border-radius: 5px;
                }
            `}</style>
        </>
    );
}

export default FancyButton;