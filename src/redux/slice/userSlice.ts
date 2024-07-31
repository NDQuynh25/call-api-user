import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { callFetchUsers } from '../../api/user.api';
import { User, BackendRes } from '../../types/backend.d';

export const fetchUsers = createAsyncThunk<BackendRes<User>, { query: string }>(
    'user/fetchUsers',
    async ({ query }, thunkAPI) => {
        try {
        const response = await callFetchUsers(query);
        console.log('response', response);
        return response  
        } catch (error) {
        return thunkAPI.rejectWithValue(null);
        }
    }
);

  
export interface UserState {
    data: BackendRes<User>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    statusCode: number | null;
    error: string | null;
}

// Initial state
const initialState: UserState = {
    data: {
        results: [],
        info: {
            seed: '',
            results: 0,
            page: 0,
            version: '',
        },
    },
    status: 'idle',
    statusCode: null,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;
            state.statusCode = 200;
            console.log('action.payload', action.payload);
            state.data = action.payload;
            console.log('state.data', state.data);
            
        });
        
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed';
            state.error = 'Failed to fetch users';

        });
    },
});

export default userSlice.reducer;
