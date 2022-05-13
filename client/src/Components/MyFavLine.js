import {Button, Card, CardContent, Typography} from "@mui/material"
import {useDispatch} from "react-redux"
import {fetchLine} from "../redux/lineSlice"
import {useNavigate} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';


function MyFavLine({user, fav, onDelete}){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleDelete(event){
    onDelete(user.id, event.target.id)
    }

    function handleRedirect(event){
        const id = event.target.id
        dispatch(fetchLine(id))
        navigate("/details")
    }

    
    return(
            <Card elevation={10} sx={{ width: 300, marginBottom: 5}}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ mb: 1.5 }} color="text.secondary">
                     Bus:  {fav.route}
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ mb: 1.5 }} color="text.secondary">
                      Route: {fav.name}
                    </Typography>
                     <Button id = {fav.id} onClick={handleDelete}><CloseIcon/></Button>
                     <Button id = {fav.busId} onClick={handleRedirect}> Show Line</Button>
                </CardContent>
            </Card>
        
    )
}

export default MyFavLine