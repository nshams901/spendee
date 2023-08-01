import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNseStocks = createAsyncThunk(
    'getIndices',
    async() => {
        try {
            let response: any = await fetch('https://www.nseindia.com/market-data/pre-open-market-cm-and-emerge-market',
                        {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
            
            );
            response = response.json();
            console.log(response, 'OOOOOOOOOOOOOOOOOO');
            
        }catch(err: unknown){
            throw new Error("Error fetching");
        }
        
    }
)