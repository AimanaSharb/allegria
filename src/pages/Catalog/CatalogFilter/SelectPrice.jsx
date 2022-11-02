import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useContext} from "react"
import {CustomContext} from "../../../utils/context";

function SelectPrice() {
    const {price, setPrice} = useContext(CustomContext)
    const handleChange = (event) => {
        setPrice(event.target.value);
    };


    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Price</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    label="Price"
                    onChange={handleChange}
                >
                    <MenuItem value='asc'>по возрастанию</MenuItem>
                    <MenuItem value='desc'>по убыванию</MenuItem>
                    <MenuItem value=''>сбросить</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}


export default SelectPrice