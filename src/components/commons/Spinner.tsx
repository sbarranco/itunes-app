import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
import LoadingOverlay from "react-loading-overlay";

export default function Spinner(props: { isLoading: boolean, children: any }): JSX.Element {

    return (
        <LoadingOverlay active={props.isLoading} spinner={<ScaleLoader color={"black"} margin={'3px'} />}
            styles={{
                overlay: (base: any) => ({
                    ...base,
                    background: 'rgba(255,255,255,0.5)',
                    position: 'fixed'
                }),
                wrapper: { margin: '0' }
            }}>
            {props.children}
        </LoadingOverlay>
    )
}
