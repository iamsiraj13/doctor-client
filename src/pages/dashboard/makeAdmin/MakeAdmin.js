import { Typography,Button, TextField } from '@mui/material';
import React ,{useState} from 'react';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [ email, setEmail ] = useState("");
    const [ success, setSuccess]= useState(false);
    const [ error , setError] = useState("");
    const {token} = useAuth();

    const handleOnBlur=(e)=>{
        setEmail(e.target.value)
    }
    const handleAdmitSubmit=(e)=>{
        const user = { email }
        if( !email){
           setError("Field must not be empty")
        }
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=> {
            if( data.modifiedCount){
                setEmail("") 
                setSuccess(true); 
            }else if(data.matchedCount > 0 && data.modifiedCount < 1 ){
                setError("User Already  Exist")
            }
            else if(data.matchedCount < 1 && data.modifiedCount < 1 ){
                setError("User Does not  Exist")
            }
        })

        e.preventDefault();
    }
    return (
        <div>
            <Typography variant="h5">Make an admin</Typography>
            {
                success && <Alert severity="success">Admin Created Successfull</Alert>
            } 
            {
                error && <Alert severity="warning">{error}</Alert>
            } 

          
            <form onSubmit={handleAdmitSubmit}>
                <TextField
                onBlur={handleOnBlur}
                size="small"
                variant="outlined"
                type="email"
                label="User Email"
                style={{margin:'10px 0', width:'60%'}}
                />
                <br/>
                <Button type="submit" size="small" variant="contained">Make Admin</Button>
            </form>

             
        </div>
    );
};

export default MakeAdmin;