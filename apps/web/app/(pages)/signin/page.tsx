import { Auth } from "@repo/ui/auth";
import { Quote } from "../../components/Quote";


export default function Signin(){
    
    return <div className="grid grid-cols-2">
        <div>
            <Auth type="signin"/>
        </div>
       <div className="hidden lg:block">
        <Quote/>
       </div>
      
    </div>
}