import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useContext} from "react"
import {CustomContext} from "../../../utils/context";

function SelectSize() {
    const {size, setSize, setProducts, products, setPage} = useContext(CustomContext)
    const {category } = useContext(CustomContext)
    const handleChange = (event) => {
        setSize(event.target.value);
        setProducts({...products, dataLength:products.data.filter((item)=>{

                return event.target.value? item.sizes.find((el)=>size  ? el.size == event.target.value :el).inStock : item

            }).length
        });
        setPage(1)
    };


    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Size</InputLabel>



                    {

                        category === 'shoes' ?
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={size}
                                label="size"
                                onChange={handleChange}
                            >
                                <MenuItem value={38}>38</MenuItem>
                                <MenuItem value={39}>39</MenuItem>
                                <MenuItem value={40}>40</MenuItem>
                                <MenuItem value={41}>41</MenuItem>
                                <MenuItem value={42}>42</MenuItem>
                                <MenuItem value=''>Reset</MenuItem>
                            </Select>
                             : category === 't-short' || category === 'sweatshirts'?
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={size}
                                label="size"
                                onChange={handleChange}
                            >
                                <MenuItem value='S'>S</MenuItem>
                                <MenuItem value='M'>M</MenuItem>
                                <MenuItem value='L'>L</MenuItem>
                                <MenuItem value='XL'>XL</MenuItem>
                                <MenuItem value='XXL'>XXL</MenuItem>
                                <MenuItem value=''>Reset</MenuItem>



                            </Select>: category === 'pants' ?
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={size}
                                    label="size"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={34}>34</MenuItem>
                                    <MenuItem value={36}>36</MenuItem>
                                    <MenuItem value={38}>38</MenuItem>
                                    <MenuItem value={40}>40</MenuItem>
                                    <MenuItem value={42}>42</MenuItem>
                                    <MenuItem value=''>Reset</MenuItem>


                                </Select> : ''
                    }


            </FormControl>
        </Box>
    );
}


export default SelectSize