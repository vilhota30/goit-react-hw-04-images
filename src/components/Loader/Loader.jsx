import React from "react";
import { Rings } from "react-loader-spinner";

export default function Loader () {
    return (
        <div
           style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50% -50%)',
           }}
        >
            <Rings
               height="80"
               width="80"
               color="#4fa94d"
               radius="6"
               wrapperStyle={{}}
               wrapperClass="rings-wrapper"
               visible={true}
               ariaLabel="rings-loading"
            />
        </div>
    )
}