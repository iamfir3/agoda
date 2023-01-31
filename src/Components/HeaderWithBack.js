import { useNavigate } from "react-router-dom";

const HeaderWithBack=({children,icon})=>{
    const navigate=useNavigate();

    return <div className="h-[60px] bg-white flex items-center absolute ">
        <div onClick={()=>{navigate(-1)}}>
            {icon}
        </div>
        <div>
            {children}
        </div>
    </div>
}

export default HeaderWithBack;