import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 29 29" {...props}>
            <path
                d="M26.89,11.95c.16,1.36.09,2.31,0,3.23-.03.17-.07.35-.1.52-.81,4.4-3.17,7.68-7.1,9.83-1.45.79-3.02,1.19-4.63,1.48-1.06.18-2.14.16-3.23,0-.12-.03-.23-.06-.35-.08-3.47-.54-6.33-2.16-8.57-4.87-1.57-1.9-2.34-3.88-2.79-6.28,0-.19-.12-.7-.12-1.08.3-.02.59-.04.89-.04,5.19,0,10.38,0,15.57,0,1.42,0,1.29.14,1.29-1.27,0-.91,0-.91-.93-.91-5.31,0-10.62,0-15.93,0-.3,0-.59-.03-.89-.04C0,12.15,0,11.87,0,11.59c0-.47.07-1.05.23-1.61C1.49,5.56,3.76,3.69,6.4,2.02,8.06.98,9.91.43,11.83.12c.79-.08,1.46-.23,3.23,0,.12.03.23.06.35.08,3.63.59,6.59,2.33,8.83,5.26,1.47,1.92,2.28,4.12,2.65,6.49Z"
                fill="#FFFFFF"
            />
        </Svg>
    );
};

export default Icon;
