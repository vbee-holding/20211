import { NotificationManager } from "react-notifications";

export function makeNotification(res){
    try{
        if(res.success){
            NotificationManager.success(res.message);
        }else{
            NotificationManager.error(res.message)
        }   
    }catch(err){
        NotificationManager.error(JSON.stringify({error: err}))
    }
    
}
