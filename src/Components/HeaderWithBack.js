import { useNavigate } from "react-router-dom";

const HeaderWithBack=({children,icon})=>{
    const navigate=useNavigate();

    return <div className="h-[60px] bg-white flex items-center absolute w-full">
        <div onClick={()=>{navigate(-1)}} className='absolute left-[15px]'>
            {icon}
        </div>
        <div className="w-full">
            {children}
        </div>
    </div>
}

export default HeaderWithBack;