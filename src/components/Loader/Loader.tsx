import {RotatingLines} from "react-loader-spinner";

export const Loader = () => {
    return (
        <div
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 170,
                margin: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <RotatingLines
                strokeColor={'#C08F54'}
                strokeWidth={'2'}
                width={'50px'}
            />
        </div>
    )
}