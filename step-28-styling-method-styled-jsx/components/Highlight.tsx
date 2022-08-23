import { NextComponentType, NextPageContext } from "next";

const Highlight : NextComponentType<NextPageContext, void, { children : string}> = (props) => {
    return (
        <>
            <span className="highlight">{props.children}</span>
            <style jsx>{`
                .highlight {
                    background-color: yellow;
                    font-weight: bold;
                    letter-spacing: 1px;
                }
            `}</style>
        </>
    );
}

export default Highlight;